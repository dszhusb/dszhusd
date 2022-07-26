<!-- WORK NAVIGATION PAGE-->
<script>
    import {
        cPage,
        filters,
        projects,
        hColor,
        f1Color,
        f2Color,
        f3Color,
    } from "../store.js";
    import Hoverable from "../components/Hoverable.svelte";

    let dispOdd = false;
    let dispN = [];
    let cList = [$f1Color, $f2Color, $f3Color];

    function calcDisplayed() {
        dispOdd = false;

        for (let p in projects) {
            for (let i = 0; i < 3; i++) {
                if ($filters[i]) {
                    dispOdd = !dispOdd;
                }
            }
        }

        if (dispOdd) {
            dispN = [0];
        } else {
            dispN = [];
        }
    }

    f1Color.subscribe((value) => {
        cList[0] = value;
    });

    f2Color.subscribe((value) => {
        cList[1] = value;
    });

    f3Color.subscribe((value) => {
        cList[2] = value;
    });

    filters.subscribe(() => {
        calcDisplayed();
    });

    function switchPage(n) {
        cPage.set(n);
    }
</script>

<main>
    <div class="board">
        {#each projects as p}
            {#if $filters[p.cat]}
                <Hoverable let:hovering={active}>
                    <div class="imgContainer" class:active>
                        <div on:click={() => switchPage(p.link)}>
                            <img
                                src="./assets/thumbnails/{p.img}"
                                alt={p.name}
                            />
                            <div class="overlay">
                                {#if active}
                                    <div
                                        class="text"
                                        style="color: {$hColor}; text-decoration: underline;"
                                    >
                                        {p.name}
                                    </div>
                                {:else}
                                    <div class="text">
                                        {p.name}
                                    </div>
                                {/if}
                                <div class="fInd" style="--fColor: {cList[p.cat]}">

                                </div>
                            </div>
                        </div>
                    </div>
                </Hoverable>
            {/if}
        {/each}
        {#each dispN as d}
            <div class="imgContainer">
                <img src="./assets/thumbnails/blankNail.png" alt="blank" />
            </div>
        {/each}
    </div>
</main>

<style>
    .board {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        font-family: "Space Mono";
    }

    .imgContainer {
        width: 100%;
        vertical-align: middle;
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
        background-color: rgba(255, 255, 255, 0);
    }

    .fInd {
        position: absolute;
        top: 16px;
        left: 16px;

        width: 10px;
        height: 10px;
        border-radius: 10px;

        background-color: var(--fColor);
        border: solid 1px black;
    }

    .text {
        color: black;
        background-color: rgba(255, 255, 255, 0.75);

        font-size: 16px;
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 0 5px 0 25px;
        text-align: left;
    }

    .imgContainer img {
        width: 100%;
        border: solid 1px black;
        display: block;
    }

    @media screen and (max-width: 800px) {
        .board {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            font-family: "Space Mono";
        }
    }
</style>
