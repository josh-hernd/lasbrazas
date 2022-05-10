<script lang="ts">
	export let open: boolean;
</script>

<div
    class:open
	class="container"
	style="background: {$$props.backgroundColor}; color: {$$props.menuColor}; width: {$$props.width}; right: {open
		? '0px'
		: '-' + $$props.width}; transition: all {$$props.duration}s ease-in-out"
>
	<div id="menu" style="padding: {$$props.padding}; padding-top: {$$props.paddingTop};">
		<slot />
	</div>
</div>

<style lang="sass">
    .container 
        position: fixed
        height: 100vh
        bottom: -100%
        display: flex
        align-items: center
        justify-content: center
        overflow-y: auto
        overflow-x: hidden
        border-top-left-radius: 100%

    .open
        bottom: 0%
        border-top-left-radius: 0%

    #menu 
        padding: 30px 0
        text-align: center
    
</style>
