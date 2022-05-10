<script lang="ts">
	import { spring } from 'svelte/motion';
    import lazy from "$lib/helpers/lazy";

	let clientCoords = spring({ x: 0, y: 0 }, { stiffness: 0.1 });

	export let yPin: number;
	type event = { clientX: number; clientY: number };
	function mouseEvent(e: event) {
		clientCoords.set({
			x: e.clientX,
			y: e.clientY
		});
	}

    export let paraLogo: string;
    export let backDrop: string;
    export let foreGround: string;
</script>

<div class="motion_wrap" on:mousemove={mouseEvent}>
	<div class="para_logo">
		<img class="logo" src={paraLogo} alt="" srcset="" />
	</div>
	<div
		class="backdrop"
		style="transform: translate(calc(0px + {$clientCoords.x / 45}px), calc(0px + {-Math.min(
			100,
			yPin / 6.9
		) || $clientCoords.y / 45}px));"
	>
		<img use:lazy={{ src: backDrop, cl: 'loaded', atl: "Backdrop Image" }} alt="" srcset="" />
	</div>
	<div class="foreg_wrap">
		<div
			class="foreground"
			style="transform: translate(calc(-5% - {$clientCoords.x / 30}px), calc(0px - {Math.min(
				100,
				yPin / 6.9
			) || $clientCoords.y / 30}px));"
		>
			<img use:lazy={{ src: foreGround, cl: 'loaded', atl: "Foreground Image" }} alt="" srcset="" />
		</div>
	</div>
</div>

<style lang="sass">
@use "../../abstract/breakpoint" as *
@use "../../abstract/animation" as animate

img
    user-select: none
    pointer-events: none

img, :global(img.loaded)
    width: 100%
    height: 100%
    object-fit: cover
    object-position: top
    animation: lazyload 1s ease-in-out forwards
    animation-fill-mode: backwards

.motion_wrap
    position: relative
    width: 100%
    height: 100vh
    padding-bottom: 5%
    color: #fff
    overflow: hidden
    
.para_logo
    width: 350px
    height: 350px
    position: absolute
    top: 20%
    left: 0
    right: 0
    margin: auto
    z-index: 2
    img
        width: 100%
        height: 100%
        opacity: 0.8
        object-fit: unset
        animation-delay: 1.1s
        @include breakpoint(mobileonly)
            height: 100%
            max-height: 150px

.backdrop
    position: absolute
    width: 110%
    height: 100vh
    left: -10%
    top: -10%
    transition: 0.2s ease
    transform-origin: center
    transform-style: preserve-3d

.backdrop::before, .backdrop::after
    content: ""
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0

.backdrop::before
    background: #00000069
    z-index: 1

.backdrop::after
    background: url(/images/landing/bar-image.jpeg)
    background-size: cover
    background-repeat: no-repeat
    filter: blur(10px)
    z-index: -1

.foreg_wrap
    position: absolute
    width: 100%
    height: 100%
    left: 0
    bottom: 0

.foreground
    position: absolute
    width: 110%
    bottom: -10%
    transition: 0.2s ease
    transform-origin: 100% 100%
    z-index: 1
    @include dynamicpoint($min: 768px, $max: 1900px)
        bottom: -6%
    @include breakpoint(mobileonly)
        bottom: 2%
        height: 50%
    &::before
        content: ""
        width: 100%
        height: 50vh
        position: absolute
        bottom: 0
        background: url(/images/landing/flames-lowres.png)
        background-size: cover
        background-position: center bottom
        background-repeat: no-repeat
        filter: blur(10px)
        z-index: -1
</style>
