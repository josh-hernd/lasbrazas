<script lang="ts">
	import { spring } from 'svelte/motion';

	let clientCoords = spring({ x: 0, y: 0 }, { stiffness: 0.1 });

	type event = { clientX: number; clientY: number };
	function mouseEvent(e: event) {
		clientCoords.set({
			x: e.clientX,
			y: e.clientY
		});
	}

export let simpleData: any;
export let divHeight: number;
</script>
<div class="end_paralax" on:mousemove={mouseEvent} style="height: {divHeight}vh;">
    {#if simpleData.text}
    <div class="slant">
        {#each simpleData.text as t}
            <span>{t}</span>
        {/each}
	</div>
    {/if}
	<img
		src="{simpleData.img}"
		alt=""
		srcset=""
        style="transform: translate(calc(0px - {$clientCoords.x / 40}px), calc(0px - {$clientCoords.y / 40}px));"
	/>
</div>

<style lang="sass">
    @use "../../abstract/breakpoint" as *

.end_paralax
    width: 100%
    height: 70vh
    position: relative
    background: #000
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    img
        width: 110%
        height: 110%
        object-fit: cover
        position: absolute
        bottom: -5%
        left: -5%
        opacity: 0.7
        pointer-events: none
        z-index: 0

.slant span
    position: relative
    font-family: mrs saint
    font-size: 120px
    font-weight: 300
    line-height: 110px
    display: block
    transform: rotate(-15deg) 
    z-index: 2
    &:first-child
        margin-left: -25px 
    &:last-child
        margin-left: 25px 
    @include breakpoint(mobileonly)
        font-size: 100px
</style>
