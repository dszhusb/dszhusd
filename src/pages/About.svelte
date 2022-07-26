<!-- ABOUT PAGE -->
<script>
    import PHeader from "../components/PHeader.svelte";
    import { hColor } from "../store.js";
</script>

<main>
    <PHeader>
        <div slot="description">HI! I'M DANIEL ZHU.</div>
    </PHeader>
    <div class="row">
        <div class="column">
            <img src="./assets/about/narrowDan.png" alt="Daniel Zhu" />
        </div>
        <div class="column" id="txt">
            <div id="aboutP">
                I'm a fourth year designer and creative technologist studying
                <a
                    style="--hColor: {$hColor};"
                    href="https://design.cmu.edu/content/environments-1"
                    >Environments Design</a
                >
                and
                <a style="--hColor: {$hColor};" href="https://www.hcii.cmu.edu/"
                    >HCI</a
                > at Carnegie Mellon University. I enjoy blurring the line between
                digital and physical experiences through electronics and code.
            </div>
            <div class="links">
                <a
                    style="--hColor: {$hColor};"
                    href="./assets/danielZhu2022.pdf"
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
</main>

<style>
    main {
        height: 100vh;
        width: 100%;
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
        max-width: 320px;

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

    @media screen and (max-width: 1000px) {
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
