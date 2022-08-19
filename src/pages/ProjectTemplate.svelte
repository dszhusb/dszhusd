<!-- PROJECT PAGE TEMPLATE -->
<script>
    import PHeader from "../components/PHeader.svelte";
    import { pPage, cPage, hColor, projectContent } from "../store.js";

    let pDescription;
    let pBlurbs;
    let links;
    let mImage;
    let cContent;

    pPage.subscribe(() => {
        if ($cPage > 1) {
            pDescription = $projectContent[$pPage].pDescription;
            pBlurbs = $projectContent[$pPage].pBlurbs;
            links = $projectContent[$pPage].links;
            mImage = $projectContent[$pPage].mImage;
            cContent = $projectContent[$pPage].cContent;
        }
    });

    let sWidth;
</script>

<svelte:window bind:outerWidth={sWidth} />

<div class="project">
    <!-- HEADER -->
    <PHeader>
        <div slot="description">{pDescription}</div>
        <div slot="links">
            <div class="linksm1" style="--hColor: {$hColor}">
                <a href={links[0]} target="_blank" class="pLink"
                    >PROCESS DOCUMENTATION</a
                >
                {#if links.length > 1}
                    <a href={links[1]} target="_blank" class="pLink"
                        >LIVE SITE</a
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

    <!-- MAIN IMAGE -->
    <img
        src={mImage}
        alt="Prototype ScreenCap"
        style="border-top: solid 0.5px black; border-bottom: solid 0.5px black;"
    />

    <!-- CONTENT -->
    <div class="pContent">
        <div class="contCol">
            <p class="pBolded">PROJECT OVERVIEW</p>
            {#each cContent as cont}
                {#if cont[0] == 0}
                    <p class="contPara">
                        {cont[1]}
                    </p>
                {:else if cont[0] == 2}
                    <p class="contPara" style="font-weight: bold;">
                        {cont[1]}
                    </p>
                {:else}
                    <img
                        src={cont[1]}
                        alt="ProjectScreencap"
                        style="margin: 30px 0 30px 0; border: 1px black solid;"
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
        text-align: left;
    }

    .linksm1 a {
        text-align: right;
        display: block;
        color: var(--hColor);
    }

    .linksm1 a:hover {
        color: black;
    }

    .pLink {
        color: black;
    }

    .pLink:hover {
        color: var(--hColor);
    }

    /* CONTENT */

    .pContent {
        padding: 0px 40px 80px 40px;
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
        margin-left: 20px;
    }

    @media (max-width: 1000px) {
        .contCol {
            margin: auto;
            max-width: 600px;
        }
    }
</style>
