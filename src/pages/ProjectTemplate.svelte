<!-- PROJECT PAGE TEMPLATE -->
<script>
    import PHeader from "../components/PHeader.svelte";
    import { pPage, cPage, hColor, projectContent } from "../store.js";

    let pDescription;
    let pBlurbs;
    let links;
    let mImage;
    let cImages;
    let cParas;

    pPage.subscribe(() => {
        if ($cPage > 1) {
            pDescription = $projectContent[$pPage].pDescription;
            pBlurbs = $projectContent[$pPage].pBlurbs;
            links = $projectContent[$pPage].links;
            mImage = $projectContent[$pPage].mImage;
            cImages = $projectContent[$pPage].cImages;
            cParas = $projectContent[$pPage].cParas;
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
        <div class="flexContainer">
            <div class="flexItemLeft">
                {#each cImages as image}
                    <img
                        src={image}
                        alt="Project Screencap"
                        style="margin-bottom: 20px;"
                    />
                {/each}
            </div>
            <div class="flexItemRight">
                {#if sWidth <= 1000}
                    <br />
                {/if}
                <div>
                    <p class="pBolded">PROJECT OVERVIEW</p>
                    {#each cParas as para}
                        <p class="pOver">{para}</p>
                    {/each}
                    <br />
                    <a
                        style="font-size: 16px; --hColor: {$hColor};"
                        href={links[0]}
                        target="_blank"
                        class="pLink">IN DEPTH PROCESS<br />DOCUMENTATION</a
                    >
                </div>
            </div>
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
    p {
        margin: 0 0 20px 0;
    }

    .pContent {
        padding: 40px 40px 80px 40px;
    }

    .pBolded {
        font-size: 24px;
    }

    .pOver {
        font-size: 16px;
        font-family: "IBM Plex Mono";
        line-height: 1.45;
    }

    /* ORGANIZATION */
    .flexContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .flexItemLeft {
        flex: 50%;
    }

    .flexItemRight {
        flex: 50%;
    }

    .flexItemRight div {
        margin-left: 40px;
        max-width: 515px;
    }

    @media (max-width: 1000px) {
        .flexItemLeft,
        .flexItemRight {
            flex: 100%;
            text-align: left;
        }

        .flexItemRight div {
            max-width: 1000px;
            margin: 0;
        }
    }
</style>
