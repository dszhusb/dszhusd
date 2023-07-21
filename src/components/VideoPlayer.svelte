<!-- VIDEOPLAYER -->

<script>
    export let url;
    export let pUrl;

    import { f3Color } from "../store"

    let paused = true;
    let lastMouseDown;

    function handleMousedown(e) {
        lastMouseDown = new Date();
    }

    function handleMouseup(e) {
        if (new Date() - lastMouseDown < 300) {
            if (paused) e.target.play();
            else e.target.pause();
        }
    }
</script>

<div>
    <video
        poster={pUrl}
        src={url}
        on:mousedown={handleMousedown}
        on:mouseup={handleMouseup}
        bind:paused
        class="video"
    >
        <track kind="captions" />
    </video>

    {#if paused}
    <div class="controls">
        <div class="info">
            <span style:color={$f3Color}>Click to Play</span>
        </div>
    </div>
    {/if}
</div>

<style>
    div {
        position: relative;
    }

    .video {
        border-top: 1px black solid;
        border-bottom: 1px black solid;
        width: 100%;
    }

    .controls {
		position: absolute;
		top: 0;
		width: 100%;
		transition: opacity 1s;
	}

    .info {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	span {
		padding: 2em 2em;
		font-size: 1em;
	}
</style>
