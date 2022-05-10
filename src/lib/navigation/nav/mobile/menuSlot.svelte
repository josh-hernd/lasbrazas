<script lang="ts">
	import Burger from './burger.svelte';
	import SideMenu from './sideMenu.svelte';

	export let open: boolean;

	export let duration = 0.4;
	export let burgerColor = 'rgb(208, 209, 209)';
	export let menuColor = 'rgba(201, 171, 129, 1)';

	export let width = '100%';
	export let padding = '25px';
	export let paddingTop = '50px';
	export let backgroundColor =
		'linear-gradient(rgba(0, 0, 0, 0.978), rgba(0, 0, 0, 0.978)), url(/images/landing/background-body.jpeg)';

	let burgerProps = {
		duration: duration,
		burgerColor: burgerColor,
		menuColor: menuColor
	};
	let menuProps = {
		duration: duration,
		width: width,
		padding: padding,
		paddingTop: paddingTop,
		backgroundColor: backgroundColor,
		menuColor: menuColor
	};
</script>

<Burger {...burgerProps} bind:open />

<SideMenu {...menuProps} bind:open>
	<slot />
</SideMenu>
