<script>
	// IMPORT VARIABLES
	import { cPage, projects, pageObj, hIcon } from "./store.js";
	// IMPORT COMPONENTS
	import SideNav from "./components/SideNav.svelte";
	import SideDisp from "./components/SideDisp.svelte";
	import TopNav from "./components/TopNav.svelte";
	import { blur, slide } from "svelte/transition";

	//ROUTING
	// import router from "page";

	let contentComponent = null;
	let unique = {};

	function transitionContent() {
		unique = {};
	}

	cPage.subscribe(() => {
		updateContentComponent();
		transitionContent();
	});

	export function updateContentComponent() {
		for (let p of projects) {
			if (p.key === $cPage) {
				contentComponent = p.comp;
			}
		}
	}
	updateContentComponent();

	let sWidth;
	// router.start();
</script>

<!-- SVELTE APP -->

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link rel="icon" type="image/png" href="/image/{$hIcon}.png" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;400&family=Space+Grotesk:wght@300;700&family=Space+Mono:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window bind:outerWidth={sWidth} />

<main>
	{#if sWidth >= 1000}
		<SideNav />
		<SideDisp pName={$pageObj.name} />
	{:else}
		<TopNav />
	{/if}
	<div class="content" style:margin={sWidth > 1000 ? "0 0 0 320px" : "0"}>
		{#key unique}
			<div transition:blur>
				<svelte:component
					this={contentComponent}
					style="max-width:{sWidth - 320}"
				/>
			</div>
		{/key}
	</div>
</main>

<style>
	main {
		text-align: center;
		background-color: white;
		font-family: "Space Mono", monospace;
	}

	.content {
		border-left: solid 0.5px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
