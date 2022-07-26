<!-- SVELTE APP -->
<script>
	import { cPage, projects } from "./store.js";
	// IMPORT COMPONENTS
	import SideNav from "./components/SideNav.svelte";
	import SideDisp from "./components/SideDisp.svelte";
	import TopNav from "./components/TopNav.svelte";

	let contentComponent = null;

	cPage.subscribe(() => {
		updateContentComponent();
	});

	export function updateContentComponent() {
		contentComponent = projects[$cPage].comp;
	}
	updateContentComponent();

	let sWidth;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;400&family=Space+Grotesk:wght@300;700&family=Space+Mono:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window bind:outerWidth={sWidth} />

<main>
	{#if sWidth >= 1000}
		<SideNav />
		<SideDisp pName={projects[$cPage].name} />
	{:else}
		<TopNav />
	{/if}
	<div class="content" style:margin={sWidth > 1000 ? "0 0 0 320px" : "0"}>
		<svelte:component this={contentComponent} />
	</div>
</main>

<style>
	main {
		text-align: center;
		background-color: white;
		font-family: 'Space Mono', monospace;
		border: 1px solid black;
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
