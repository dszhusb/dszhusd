<!-- PROJECT PAGE TEMPLATE -->
<script>
    import PHeader from "../components/PHeader.svelte";
    import {
        pageObj,
        cPage,
        hColor,
        f2Color,
        f3Color,
        projectContent,
    } from "../store.js";

    let pDescription;
    let pBlurbs;
    let links;
    let mImage;
    let cContent;

    pageObj.subscribe(() => {
        let assigned = false;
        for (let cont of projectContent) {
            if (cont.key === $cPage) {
                pDescription = cont.pDescription;
                pBlurbs = cont.pBlurbs;
                links = cont.links;
                mImage = cont.mImage;
                cContent = cont.cContent;
                assigned = true;
            }
        }
        if (!assigned) {
            pDescription = "";
            pBlurbs = [];
            links = [];
            mImage = "";
            cContent = [];
        }
    });

    let sWidth;
</script>

<svelte:window bind:outerWidth={sWidth} />

<div class="project">
    <!-- MAIN IMAGE -->
    <img
        src={mImage}
        alt="Prototype ScreenCap"
        style="border-top: solid 0.5px black; 
        border-bottom: solid 0.5px black;"
    />

    <!-- HEADER -->
    <PHeader>
        <div slot="description">{pDescription}</div>
        <div slot="links">
            <div class="linksm1">
                <button
                    href={links[0]}
                    target="_blank"
                    class="pLink"
                    style:background-color={$f2Color}
                    style:border-bottom="solid black 1px"
                    on:click={() => window.open(links[0])}
                    >PROCESS DOCUMENTATION</button
                >
                {#if links.length > 1}
                    <button
                        href={links[1]}
                        target="_blank"
                        style:background-color={$f3Color}
                        on:click={() => window.open(links[1])}
                        >LIVE SITE</button
                    >
                {/if}
            </div>
        </div>
        <div slot="pData">
            <p style="margin: 0;">
                <span style="font-weight: normal;">Role:</span>
                {pBlurbs[0]} <br /><span style="font-weight: normal;"
                    >Teammates:</span
                >
                {pBlurbs[1]} <br /><span style="font-weight: normal;"
                    >Timeline:</span
                >
                {pBlurbs[2]}
            </p>
        </div>
    </PHeader>

    <!-- CONTENT -->
    <div class="pContent">
        <div class="contCol">
            {#each cContent as cont}
                {#if cont[0] == 0}
                    <p
                        class="contPara"
                        style="max-width: 700px; 
                        margin-left: auto;
                        margin-right: auto;"
                    >
                        {cont[1]}
                    </p>
                {:else if cont[0] == 2}
                    <p
                        class="contPara"
                        style="font-weight: bold; 
                        font-size: 20px;"
                    >
                        {cont[1]}
                    </p>
                {:else if cont[0] == 3}
                    <p class="pBolded">{cont[1]}</p>
                {:else if cont[0] == 4}
                    <div
                        style="display: flex; 
                        flex-wrap: wrap; 
                        border: solid black 0.5px; 
                        margin: 40px 0 40px 0;"
                    >
                        <div style="flex: 50%;">
                            {#each cont[1] as iLink}
                                <img
                                    src={iLink}
                                    alt="ProjectScreencap"
                                    style="vertical-align: middle; 
                                    border: solid black 0.5px;"
                                />
                            {/each}
                        </div>
                        <div style="flex: 50%;">
                            {#each cont[2] as iLink}
                                <img
                                    src={iLink}
                                    alt="ProjectScreencap"
                                    style="vertical-align: middle; 
                                    border: solid black 0.5px;"
                                />
                            {/each}
                        </div>
                    </div>
                {:else}
                    <img
                        src={cont[1]}
                        alt="ProjectScreencap"
                        style="margin: 30px 0 30px 0; 
                        border: 1px black solid;"
                    />
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
    .project {
        margin: auto;
        font-family: "Space Mono";
        text-align: left;

        border: solid black 0.5px;
    }

    .project img {
        width: 100%;
        display: block;
    }

    /* LINKS */
    .linksm1 {
        text-align: center;
    }

    .linksm1 button {
        text-align: center;
        display: block;
        color: black;
        border: none;

        margin: 0;
        width: 300px;
        height: 50px;
        border-radius: 0;
    }

    .linksm1 button:hover {
        text-decoration: underline;
        color: black;
    }

    /* CONTENT */

    .pContent {
        padding: 48px 40px 80px 40px;
    }

    .pBolded {
        font-size: 24px;
    }

    .contPara {
        font-family: "Space Grotesk";
        line-height: 145%;
        font-size: 16px;
    }

    .contCol {
        max-width: 800px;
        margin: auto;
    }

    @media (max-width: 1000px) {
        .contCol {
            margin: auto;
            max-width: 600px;
        }
    }
</style>
