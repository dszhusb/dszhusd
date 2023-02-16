<!-- ABOUT PAGE -->
<script>
    import { hColor, f1Color, f2Color, f3Color } from "../store.js";
    import PHeader from "../components/PHeader.svelte"
    import AbtShell from "../components/AbtShell.svelte";

    let windowWidth;
</script>

<main style="border-left: 0.5px solid black">
    {#if windowWidth >= 1440}
        <div style="position: relative;">
            <AbtShell />
            <div id="circle" />
            <img
                style="position: absolute; height: 500px; top: -12px; left: 12px;"
                src="./assets/about/narrowDan.png"
                alt="Daniel Zhu"
            />
            <div class="textBox" id="infoRect">
                <div style="width: 400px; padding: 36px 50px 36px 36px;">
                    I'm a fourth year designer and creative technologist
                    studying
                    <a
                        style="--hColor: {$hColor};"
                        href="https://design.cmu.edu/content/environments-1"
                    >
                        Design</a
                    >,
                    <a
                        style="--hColor: {$hColor};"
                        href="https://www.hcii.cmu.edu/">HCI</a
                    >, and
                    <a
                        style="--hColor: {$hColor};"
                        href="https://ideate.cmu.edu/undergraduate-programs/physical-computing/"
                        >Physical Computing</a
                    > at Carnegie Mellon University.
                </div>
            </div>
            <div
                class="textBox"
                id="nameRect"
                style="font-family: Space Grotesk"
            >
                <div style="padding: 20px 30px 20px 30px">HI! I'M DANIEL.</div>
            </div>
            <div class="textBox" id="abtRect">
                <div style="width: 340px; padding: 36px 56px 0 70px;">
                    I enjoy blurring the line between digital and physical
                    experiences through electronics and code
                </div>
                <div style="padding: 0 0 36px 70px">...</div>
            </div>
            <div class="nav" id="linkCont">
                <div class="bContainer">
                    <a href="./assets/DanielZhuDesign.pdf" target="_blank">
                        <button
                            style="background-color:{'#373737'}; 
                            color:white">RESUME</button
                        >
                    </a>
                </div>
                <div class="bContainer">
                    <a
                        href="http://www.linkedin.com/in/danielszhu"
                        target="_blank"
                    >
                        <button style:background-color={$f1Color}
                            >LINKEDIN</button
                        >
                    </a>
                </div>
                <div class="bContainer">
                    <a href="https://github.com/dszhusb" target="_blank">
                        <button style:background-color={$f2Color}>GITHUB</button
                        >
                    </a>
                </div>
                <div class="bContainer">
                    <a href="mailto: dszhu@andrew.cmu.edu" target="_blank">
                        <button style:background-color={$f3Color}>EMAIL</button>
                    </a>
                </div>
            </div>
        </div>
    {:else}
    <PHeader>
        <div slot="description">HI! I'M DANIEL ZHU.</div>
    </PHeader>
    <div class="row">
        <div class="column">
            <img src="./assets/about/narrowDan1.png" alt="Daniel Zhu" />
        </div>
        <div class="column" id="txt">
            <div id="aboutP">
                I'm a fourth year designer and creative technologist studying
                <a
                    style="--hColor: {$hColor};"
                    href="https://design.cmu.edu/content/environments-1"
                    >Environments Design</a
                >,
                <a style="--hColor: {$hColor};" href="https://www.hcii.cmu.edu/"
                    >HCI</a
                >, and
                <a
                    style="--hColor: {$hColor};"
                    href="https://ideate.cmu.edu/undergraduate-programs/physical-computing/"
                    >Physical Computing</a
                >, at Carnegie Mellon University. I enjoy blurring the line
                between digital and physical experiences through electronics and
                code.
            </div>
            <div class="links">
                <a
                    style="--hColor: {$hColor};"
                    href="./assets/DanielZhuDesign.pdf"
                    target="_blank">RESUME</a
                >
                <a
                    style="--hColor: {$hColor};"
                    href="http://www.linkedin.com/in/danielszhu"
                    target="_blank">LINKEDIN</a
                >
                <a
                    style="--hColor: {$hColor};"
                    href="https://github.com/dszhusb"
                    target="_blank">GITHUB</a
                >
                <a
                    style="--hColor: {$hColor};"
                    href="mailto: dszhu@andrew.cmu.edu"
                    target="_blank">EMAIL</a
                >
            </div>
        </div>
    </div>
    {/if}
</main>

<svelte:window bind:outerWidth={windowWidth} />

<style>
    main {
        height: 100vh;
        width: 100%;
    }

    .textBox {
        border: black 1px solid;
        text-align: left;
        font-family: "Space Mono", monospace;
        background-color: white;
        font-size: 16px;
        color: black;
    }

    .textBox a {
        color: var(--hColor);
    }

    #nameRect {
        position: absolute;
        left: 350px;
        top: 50px;
        font-weight: bold;
        font-size: 32px;
        width: 400px;
        height: 80px;
    }

    #infoRect {
        position: absolute;
        left: 490px;
        top: 112px;
        width: 480px;
    }

    #abtRect {
        position: absolute;
        width: 450px;
        left: 260px;
        top: 510px;
    }

    #linkCont {
        position: absolute;
        top: 645px;
        left: 60px;
    }

    .nav {
        width: 250px;
        position: fixed;
        margin: 0 auto;
        border: 0.5px solid black;

        font-family: "Space Mono", monospace;
        font-weight: 400;
    }

    .nav button {
        width: 100%;
        height: 60px;
        margin: 0;

        border: solid 0.5px black;
        border-radius: 0;
    }

    .nav button:hover {
        text-decoration: underline;
    }

    #circle {
        position: absolute;
        width: 260px;
        height: 260px;
        top: 88px;
        left: 57px;

        border: 1px solid black;
        border-radius: 130px;
        background-color: white;
    }

    .row {
        display: flex;
        padding: 35px 0 0 40px;
        border-top: 0.5px solid black;
    }
    .column {
        height: 500px;
    }
    .column img {
        height: 100%;
        border: 1px solid black;
    }
    #txt {
        margin: 20px 30px 0 40px;
    }
    #aboutP {
        max-width: 410px;
        text-align: left;
        font-family: "IBM Plex Mono", monospace;
        line-height: 1.45;
        font-size: 16px;
        color: black;
    }
    .links {
        text-align: left;
        margin-top: 30px;
    }
    .links a {
        display: block;
        padding-bottom: 2px;
        text-decoration: none;
    }
    /* Links */
    .links a:link {
        color: black;
        text-decoration: none;
    }
    .links a:visited {
        color: black;
        text-decoration: none;
    }
    .links a:hover {
        color: var(--hColor);
        text-decoration: underline;
    }
    /* Paragraph */
    a:link {
        color: var(--hColor);
        text-decoration: underline;
    }
    a:visited {
        color: var(--hColor);
        text-decoration: underline;
    }
    a:hover {
        color: black;
    }

    @media screen and (max-width: 1120px) {
        .row {
            flex-direction: column;
            text-align: left;
        }
        #txt {
            margin: 40px 30px 0 0px;
        }

        main {
            height: 100%;
        }
    }
</style>
