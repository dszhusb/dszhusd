<script>
    export let pName;
    import { cPage, hIcon, hColor, f3Color } from "../store.js";
    import Hoverable from "./Hoverable.svelte";
    import { fade, blur } from "svelte/transition";

    let clickVisible = false;
    let beenClicked = false;

    $hIcon = Math.floor(Math.random() * 23);
    export function resetIcon() {
        $hIcon = Math.floor(Math.random() * 23);
        clickVisible = false;
        beenClicked = true;
    }

    function switchPage(n) {
        cPage.set(n);
    }

    cPage.subscribe(() => {
        if (Math.random() >= 0.5 && beenClicked == false) {
            clickVisible = true;
        }
    });
</script>

<main>
    <Hoverable let:hovering={active}>
        <div class="back" class:active on:click={() => switchPage("WRK")}>
            {#if active}
                <div class="backFill" style="background-color: {$hColor}" />
            {:else}
                <div class="backFill" style="background-color: black" />
            {/if}
            {#if $cPage == "WRK"}
                <img src="./assets/navIcon/home.webp" alt="Home" />
            {:else}
                <img src="./assets/navIcon/back.webp" alt="Page" />
            {/if}
        </div>
    </Hoverable>
    <div>
        <p id="sideways">{pName}</p>
    </div>
    <div class="trinket" on:click={() => resetIcon()} style="margin-top: 10px;">
        <img src="./image/{$hIcon}.webp" alt="Home" />
        <div class="overlay" />
    </div>
    {#if clickVisible == true}
        <div class="clickMe" transition:fade="{{duration:500}}" style:background-color={$f3Color}>
            <p style="margin-top: 8px;">
                Click me!!! ↑
            </p>
        </div>
    {/if}
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

    .clickMe {
        position: absolute;
        margin-top: 75px;
        left: -67px;
        width: 125px;
        height: 40px;

        border: 1px solid black;
        font-family: 'Space Grotesk';
    }

    #sideways {
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
