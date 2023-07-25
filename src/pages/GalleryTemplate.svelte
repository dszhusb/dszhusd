<!-- PROJECT PAGE TEMPLATE -->
<script>
    import PHeader from "../components/PHeader.svelte";
    import { pageObj, cPage, hColor, projectContent } from "../store.js";

    let pDescription;
    let cImages;
    let selected = 0;
    let sWidth;

    pageObj.subscribe(() => {
        if ($cPage !== "WRK" && $cPage !== "ABT") {
            for (let cont of projectContent) {
                if ($cPage === cont.key) {
                    pDescription = cont.pDescription;
                    cImages = cont.cImages;
                }
            }
        }
    });

    function switchImage(n) {
        selected = n;
    }
</script>

<div class="project">
    <!-- HEADER -->
    {#if sWidth > 1200}
        <div class="dispContainer">
            <div class="dispImgContainer">
                <img src={cImages[selected]} alt="Project Screencap" />
            </div>
        </div>
        <div class="scrollBar">
            {#each cImages as img, index}
                <section on:click={() => switchImage(index)}>
                    <img class="sbImg" src={img} alt="selection" />
                    <div class="overlay" />
                </section>
            {/each}
        </div>
    {:else}
        <div class="sBox">
            {#each cImages as img}
                <div class="sContainer">
                    <div>
                        <img src={img} alt="selection" />
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<svelte:window bind:outerWidth={sWidth} />

<style>
    .project {
        display: flex;
        flex-flow: column;
        height: 100vh;
    }

    .dispContainer {
        width: 100%;
        flex-grow: 1;
        text-align: center;
        position: relative;

        background-color: #000000;
        border: 0.5px black solid;
    }

    .dispContainer img {
        max-height: 100%;
        max-width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        border-left: 1px solid black;
        border-right: 1px solid black;
    }

    .sbImg {
        max-height: 80%;
        max-width: 80%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        border: 1px black solid;
    }

    .scrollBar {
        height: 100px;
        margin: 0;
        padding: 0;

        border: 0.5px solid rgb(0, 0, 0);
        background-color: #000000;

        scroll-snap-type: x mandatory;
        display: flex;
        -webkit-overflow-scrolling: touch;
        overflow-x: scroll;
    }

    section {
        margin: 0;
        min-width: 15vw;
        height: 100%;
        scroll-snap-align: start;
        position: relative;
    }

    .overlay {
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: 1px;
        right: 1px;

        height: 99.5%;
        width: 100%;

        opacity: 1;
        transition: 0.1s ease;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .overlay:hover {
        opacity: 0;
    }

    .sBox {
        margin-top: 50px;
        width: 100%;
        display: inline-grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .sContainer {
        width: 100%;
        height: 550px;
        position: relative;
    }

    .sContainer img {
        height: 500px;
        border: solid 1px black;
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        .project {
            height: 100%;
        }
    }
</style>
