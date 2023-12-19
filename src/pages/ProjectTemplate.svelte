<!-- PROJECT PAGE TEMPLATE -->
<script>
    import PHeader from "../components/PHeader.svelte";
    import VideoPlayer from "../components/VideoPlayer.svelte";
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

    let endBuff = false;

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

        if (assigned) {
            if (cContent[cContent.length - 1][0] != 1) {
                endBuff = true;
            }
        } else {
            endBuff = false;
        }
    });

    let sWidth;
</script>

<svelte:window bind:outerWidth={sWidth} />

<div class="project">
    <!-- MAIN IMAGE -->
    {#if mImage != ""}
        <img
            src={mImage}
            alt="Prototype ScreenCap"
            style="border-top: solid 0.5px black; border-bottom: solid 0.5px black;"
        />
    {/if}

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
                        on:click={() => window.open(links[1])}>LIVE SITE</button
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
        <div>
            {#each cContent as cont}
                <!-- Paragraph -->
                {#if cont[0] == 0}
                    <p class="contPara" style="margin-bottom: 23px">
                        {cont[1]}
                    </p>
                    <!-- Bolded Paragraph -->
                {:else if cont[0] == 2}
                    <p
                        class="contPara"
                        style="
                            font-weight: bold; 
                            font-size: 20px;
                            margin-bottom: 80px;"
                    >
                        {cont[1]}
                    </p>
                    <!-- Section Title -->
                {:else if cont[0] == 3}
                    <div class="contPara">
                        <p class="pBolded">{cont[1]}</p>
                    </div>
                    <!-- Images -->
                {:else if cont[0] == 5}
                    <svelte:component this={cont[2].comp} />
                    <p
                        class="caption"
                        style="text-align: center; margin-bottom:50px;"
                    >
                        {cont[1]}
                    </p>
                {:else if cont[0] == 4}
                    <div
                        style="display: flex; 
                        flex-wrap: wrap; 
                        border-top: solid black 0.5px; 
                        border-bottom: solid black 0.5px; 
                        margin: 80px 0 20px 0;"
                    >
                        <div style="flex: 50%;">
                            {#each cont[2] as iLink}
                                <img
                                    src={iLink}
                                    alt={cont[1]}
                                    style="vertical-align: middle; 
                                    border: solid black 0.5px;"
                                />
                            {/each}
                        </div>
                        <div style="flex: 50%;">
                            {#each cont[3] as iLink}
                                <img
                                    src={iLink}
                                    alt={cont[1]}
                                    style="vertical-align: middle; 
                                    border: solid black 0.5px;"
                                />
                            {/each}
                        </div>
                    </div>
                    <p class="caption">
                        {cont[1]}
                    </p>
                {:else if cont[0] == 6}
                    <VideoPlayer url={cont[1]} pUrl={cont[2]} />
                    <p class="caption">
                        {cont[3]}
                    </p>
                {:else}
                    <img
                        src={cont[2]}
                        alt={cont[1]}
                        style="margin: 80px 0 30px 0; 
                        border-top: 1px black solid;
                        border-bottom: 1px black solid;"
                    />
                    <p class="caption">
                        {cont[1]}
                    </p>
                {/if}
            {/each}
        </div>
        {#if endBuff == true}
            <div class="endBuffer" />
        {/if}
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
        padding-top: 60px;
    }

    .pBolded {
        font-size: 24px;
    }

    .contPara {
        font-family: "Space Grotesk";
        line-height: 160%;
        font-size: 16px;
        max-width: 700px;
        margin: auto;
    }

    .caption {
        font-family: "Space Grotesk";
        text-align: right;
        margin: 0 25px 30px 0;
        font-weight: light;
        font-size: 16px;
        color: #302f2f;
    }

    .endBuffer {
        height: 100px;
        width: 100%;
    }

    @media (max-width: 1000px) {
        .contPara {
            padding: 0 30px 0 30px;
        }
    }
</style>
