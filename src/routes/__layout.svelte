<script lang="ts">
	import '../app.sass';
	import { yAxis } from '$lib/helpers/writable';
	import Footer from '$lib/navigation/footer.svelte';
	import Nav from '$lib/navigation/nav/nav.svelte';

	let yPin: number;
	yAxis.subscribe((value) => {
		yPin = value;
	});
</script>

{#if import.meta.env.DEV}
	<div class="pos">
		Scroll: {yPin / 6.9} <br />
	</div>
{/if}

<svelte:window bind:scrollY={$yAxis} />

<Nav />
<main>
	<slot />
</main>
<Footer />

<style lang="sass">
main
    position: relative

.pos
    position: fixed
    width: max-content
    margin: auto
    bottom: 5px
    right: 0%
    left: 0%
    z-index: 10
    color: #fff
    background: #333
    padding: 5px
</style>
