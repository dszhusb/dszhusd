<!-- VIDEOPLAYER -->

<script>
    export let url;
    export let pUrl;

    import { f3Color } from "../store";

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
            <img src="../assets/play.png" alt="Play Button" />
        </div>
    {/if}
</div>

<style>
    div {
        position: relative;
        margin: 80px 0 30px 0;
    }

    .video {
        border-top: 1px black solid;
        border-bottom: 1px black solid;
        width: 100%;
    }

    .controls {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: opacity 1s;
    }

    @media (max-width: 1000px) {
        img {
            width: 60px;
        }
    }

</style>
