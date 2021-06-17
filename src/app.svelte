<script>
    import {onMount} from "svelte"
    import AppStyle from "svelte-doric/core/app-style"
    import baseline from "svelte-doric/core/baseline"
    import theme from "svelte-doric/core/theme/tron"

    import Button from "svelte-doric/core/button"

    import Timer from "./timer.svelte"

    let size = null
    let measure = null

    const debounce = (func, limit) => {
        let id = null
        return () => {
            clearTimeout(id)
            id = setTimeout(func, limit)
        }
    }
    const recalc = () => {
        const rect = document.body.getBoundingClientRect()
        size = Math.min(
            rect.width / 4,
            (rect.height - 68) / 4,
            160
        )
    }
    onMount(recalc)

    const solvedList = Array.from(
        {length: 16},
        (_, i) => [
            (i + 1) % 16,
            {
                x: i % 4,
                y: Math.floor(i / 4),
            }
        ]
    )
    const solvedKeys = solvedList.map(item => item[0]).slice(0, -1)
    const solvedPos = solvedList.map(item => item[1])
    const solved = Object.fromEntries(solvedList)
    const values = Object.keys(solved)

    let timer = null
    let playing = false
    let pieces = solved
    $: pieceArray = Object.entries(pieces)

    const rand = (n) => Math.floor(
        Math.random() * n
    )
    const scramble = () => {
        const positions = Object.values(solved)
        playing = true

        const next = Object.fromEntries(
            values.map(
                value => [
                    value,
                    ...positions.splice(
                        rand(positions.length),
                        1
                    )
                ]
            )
        )

        timer.start()

        if (parity(next) === 1) {
            pieces = {
                ...next,
                "14": next["15"],
                "15": next["14"],
            }
            return
        }

        pieces = next
    }

    const mdist = (a, b) => (
        Math.abs(a.x - b.x)
        + Math.abs(a.y - b.y)
    )
    const countLess = (nums, target) =>
        nums.reduce(
            (t, n) => {
                if (n !== 0 && n < target) {
                    return t + 1
                }
                return t
            },
            0
        )
    const parity = (board) => {
        const inversionPositions = Object.entries(board)
            .reduce(
                (pos, info) => {
                    const index = info[1].y * 4 + info[1].x
                    pos[index] = parseInt(info[0])
                    return pos
                },
                Array.from({length: 16}, () => 0)
            )
        return (
            (board["0"].y + 1)
            + inversionPositions.reduce(
                (parity, n, index) => (
                    parity
                    + countLess(
                        inversionPositions.slice(index),
                        n
                    )
                ),
                0
            )
        ) % 2
    }
    const move = (value) => {
        if (playing === false) {
            return
        }
        const pos = pieces[value]
        const pos0 = pieces["0"]

        const dist = mdist(pos, pos0)

        if (dist !== 1) {
            return
        }

        pieces = {
            ...pieces,
            [value]: pos0,
            "0": pos,
        }
    }

    const isSolved = (board) => {
        for (const value of values) {
            if (board[value] !== solved[value]) {
                return false
            }
        }
        return true
    }

    $: if (playing === true && isSolved(pieces) === true) {
        playing = false
        timer.stop()
    }
</script>

<style>
    app-layout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 32px calc(var(--size) * 4) 32px;
        gap: 2px;
        width: calc(var(--size) * 4);
        margin: auto;
        transition: width 100ms linear;
    }

    game-board {
        position: relative;
        display: block;
        height: calc(var(--size) * 4);
    }
    game-piece {
        position: absolute;
        display: grid;
        padding: 2px;
        width: var(--size);
        height: var(--size);
        top: 0px;
        left: 0px;
        transform: translate(
            calc(var(--x) * var(--size)),
            calc(var(--y) * var(--size))
        );
        transition: transform 100ms linear;
    }
    game-piece::after {
        content: var(--value);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        border-radius: 4px;
        border: 3px solid var(--primary);
    }
</style>

<svelte:window on:resize={debounce(recalc, 250)} />

<AppStyle {baseline} {theme} />

<app-layout style="--size: {size}px;">
    <Button on:tap={scramble} variant="fill" color="secondary">
        Scramble Board
    </Button>

    <game-board>
        {#each pieceArray as [value, {x, y,}] (value)}
            {#if value !== "0"}
                <game-piece
                    style="--x: {x}; --y: {y}; --value: '{value}';"
                    on:pointer-start={() => move(value)}
                />
            {/if}
        {/each}
    </game-board>

    <Timer bind:this={timer} />
</app-layout>
