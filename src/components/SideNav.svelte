<!-- SIDEBAR NAVIGATION -->
<script>
    //IMPORT DEPENDECIES
    import NavIcon from "./NavIcon.svelte";
    import { slide, scale, fade } from "svelte/transition";
    import {
        cPage,
        filters,
        fNotAll,
        f1Color,
        f2Color,
        f3Color,
        hColor,
    } from "../store.js";

    //FILTERS
    let fList = [
        { name: "PROJECTS", color: "#8CAAC0", index: 0 }, //"#FF0000"
        { name: "EXPLORATION", color: "#A0B1CD", index: 1 }, //#970000
        { name: "SKETCHES", color: "#EDCDFE", index: 2 }, //#550000
    ];

    //UPDATE FILTER COLORS
    f1Color.subscribe(() => {
        fList[0].color = $f1Color;
    });

    f2Color.subscribe(() => {
        fList[1].color = $f2Color;
    });

    f3Color.subscribe(() => {
        fList[2].color = $f3Color;
    });

    //TOGGLING FILTERS
    function toggleFilters(n) {
        if ($cPage === "WRK") {
            for (let i = 0; i < 3; i++) {
                //BUTTON FILTERS
                if (i == n) {
                    $filters[i] = true;
                } else {
                    $filters[i] = false;
                }
            }
            // if ($cPage === 0) {
            //     $filters[n] = !$filters[n];
            // }
        }
    }

    function AllProjects() {
        switchPage("WRK");
        for (let i = 0; i < 3; i++) {
            $filters[i] = true;
        }
    }

    //UPDATE PAGE
    function switchPage(n) {
        cPage.set(n);
    }

    let unique = {};

	function transitionContent() {
		unique = {};
	}
</script>

<div class="sidenav">
    <!-- TOP SECTION -->
    <div style="border-bottom: solid 0.5px black;">
        <div
            on:click={() => AllProjects()}
            class="nTag"
            style="--hColor: {$hColor}"
        >
            <p>DANIEL ZHU</p>
        </div>
        <div class="cage">
            <NavIcon />
        </div>
    </div>
    <!-- FILTERS -->
    <div class="navBar">
        {#if $fNotAll}
            <button
                on:click={AllProjects}
                style:background-color={$cPage != "ABT" ? "#373737" : "#d9d9d9"}
                style:color={$cPage != "ABT" ? "white" : "black"}
                class="section">ALL WORK</button
            >
        {:else}
            <button
                on:click={AllProjects}
                style:background-color={$cPage != "ABT" ? "#373737" : "#d9d9d9"}
                style:color={$cPage != "ABT" ? "white" : "black"}
                class="section">WORK</button
            >
        {/if}
        {#key unique}
            <div class="filter" transition:fade>
                {#each fList as fil}
                    {#if $cPage == "WRK"}
                        <div class="bContainer">
                            <button on:click={() => toggleFilters(fil.index)}
                                >{fil.name}</button
                            >
                            <div
                                class="fIndicator"
                                style:background-color={$filters[fil.index]
                                    ? fil.color
                                    : "white"}
                            />
                            {#if $cPage != "WRK"}
                                <div class="bShield" />
                            {/if}
                        </div>
                    {:else}
                        <div
                            class="fCollapse"
                            style:background-color={fil.color}
                        />
                    {/if}
                {/each}
            </div>
        {/key}
        <button
            on:click={() => switchPage("ABT")}
            style:background-color={$cPage === "ABT" ? "#373737" : "#d9d9d9"}
            style:color={$cPage === "ABT" ? "white" : "black"}
            class="section">ABOUT</button
        >
    </div>
    <div style="border-top: solid 0.5px black;" />
</div>

<style>
    .sidenav {
        height: 100%;
        width: 250px;
        position: fixed;
        margin: 0 auto;
        border: 0.5px solid black;

        font-family: "Space Mono", monospace;
        font-weight: 400;
    }

    .sidenav p {
        margin: 0;
    }

    .navBar button {
        width: 100%;
        margin: 0;

        border: solid 1px black;
        border-radius: 0;
    }

    .navBar button:hover {
        text-decoration: underline;
    }

    .nTag {
        padding-top: 30px;
        padding-bottom: 20px;
    }

    .nTag p:hover {
        color: var(--hColor);
        text-decoration: underline;
    }

    .section {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #d9d9d9;
    }

    .filter button {
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .fIndicator {
        position: absolute;
        left: 1px;
        top: 1px;
        bottom: 1px;
        width: 20px;

        border-right: solid black 1px;
    }

    .fCollapse {
        height: 20px;
        border: solid black 0.5px;
    }

    .bContainer {
        position: relative;
    }

    .bShield {
        position: absolute;
        top: 1px;
        right: 2px;
        left: 1px;
        bottom: 2px;

        height: 100%;
        width: 100%;
        opacity: 0.2;
        background-color: rgba(255, 255, 255, 0.7);
    }
</style>
