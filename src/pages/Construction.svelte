<!-- PROJECT PAGE TEMPLATE -->
<script>
    import PHeader from "../components/PHeader.svelte";
    import ContFill from "../components/ContFill.svelte";
    let pDescription = "Under Construction! Send me an email to learn more";

    let pHeight = 100;
    let nList = new Array(3);
</script>

<div class="project">
    <!-- HEADER -->
    <div id="fillContainer">
        <ContFill />
    </div>
    <div id="center">
        {#each nList as n, index}
            <div
                style="opacity: {-1 *
                    Math.abs((index / (nList.length - 1) - 0.5) * 2) +
                    1.1}; border: 0.5px solid black;"
            >
                <PHeader>
                    <div slot="description">{pDescription}</div>
                </PHeader>
            </div>
        {/each}
    </div>
</div>

<style>
    .project {
        height: 100vh;
        margin: auto;
    }

    #fillContainer {
        width: 100%;
        height: 100%;
    }

    #center {
        position: absolute;
        width: 100%;
        top: 0;
    }
</style>
