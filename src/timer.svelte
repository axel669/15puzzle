<script context="module">
    const format = (time) => {
        const seconds = Math.floor(time / 1000)
        const ms = (time % 1000).toString().padStart(3, "0")
        return `${seconds}.${ms}`
    }
</script>

<script>
    let epoch = null
    let current = 0

    const tick = () => {
        if (epoch === null) {
            return
        }
        current = Date.now() - epoch
        requestAnimationFrame(tick)
    }

    export const start = () => {
        epoch = Date.now()
        tick()
    }
    export const stop = () => {
        current = Date.now() - epoch
        epoch = null
    }
</script>

<style>
    div {
        text-align: center;
        font-size: 24px;
    }
</style>

<div>
    {#if current > 0}
        {format(current)}
    {/if}
</div>
