<script>
    export let pName;
    import { cPage, hIcon, hColor } from "../store.js";
    import Hoverable from "./Hoverable.svelte";

    $hIcon = parseInt(Math.random(23));
    export function resetIcon() {
        $hIcon = parseInt(Math.random() * 23);
    }

    // cPage.subscribe(() => {
    //     resetIcon();
    // });

    function switchPage(n) {
        cPage.set(n);
    }
</script>

<main>
    <Hoverable let:hovering={active}>
        <div class="back" class:active on:click={() => switchPage(0)}>
            {#if active}
                <div class="backFill" style="background-color: {$hColor}" />
            {:else}
                <div class="backFill" style="background-color: black" />
            {/if}
            {#if $cPage == 0}
                <img src="./assets/navIcon/home.png" alt="Home" />
            {:else}
                <img src="./assets/navIcon/back.png" alt="Page" />
            {/if}
        </div>
    </Hoverable>
    <div>
        <p>{pName}</p>
    </div>
    <div class="trinket" on:click={() => resetIcon()} style="margin-top: 10px;">
        <img src="./assets/dispIcon/{$hIcon}.png" alt="Home" />
        <div class="overlay" />
    </div>
</main>

<style>
    main {
        position: fixed;
        height: 100%;
        width: 70px;

        margin: 0 0 0 250px;

        border-style: solid;
        border-width: 0.5px;
    }

    .back {
        margin: auto;
        margin-top: 5px;

        width: 70%;
        height: 50px;

        vertical-align: middle;
        position: relative;
    }

    .back img {
        position: absolute;

        width: 100%;
        display: block;
    }

    .backFill {
        position: absolute;

        bottom: 1px;
        top: 1px;

        width: 100%;
    }

    .trinket img {
        margin: auto;
        width: 80%;
        display: block;
    }

    p {
        writing-mode: vertical-rl;
        text-orientation: sideways;

        font-family: "IBM Plex Mono";
        font-weight: 100;
        font-size: 32px;

        margin: auto;
        padding-top: 20px;
    }

    .trinket {
        position: absolute;
    }

    .overlay {
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: 1px;
        right: 1px;

        height: 99.5%;
        width: 100%;

        opacity: 0;
        transition: 0.1s ease;
        background-color: rgba(255, 255, 255, 0.3);
    }

    .overlay:hover {
        opacity: 1;
    }
</style>
