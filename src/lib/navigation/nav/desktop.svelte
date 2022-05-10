<script lang="ts">
	import { page } from '$app/stores';

	export let yPin: number;
	let navHeight: number;
</script>

<nav style="height: {navHeight}px;">
	<div class="navwrap {yPin > 180 ? 'fixed' : ''}" bind:offsetHeight={navHeight}>
		<div class="flex_nav">
			<div class="logo">
				<a href={$$props.logo.url}>
					<img src={$$props.logo.src} alt="" srcset="" />
				</a>
			</div>
			<ul id="nav" >
				{#each $$props.list as item}
					<li>
						<a class:active={$page.url.pathname === item.url} sveltekit:prefetch href={item.url}>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style lang="sass">
@use "../../../abstract/animation.sass" as fixedNav
nav
    width: 100%
    position: absolute
    top: 0
    z-index: 10
    background: rgba(0, 0, 0, 0.2)

.navwrap
    position: relative
    width: 100%
    &::before
        content: ""
        position: absolute
        width: 100%
        height: 100%
        top: 0
        border-bottom: .5px solid rgba(201, 171, 129, 0.7)
        pointer-events: none

.fixed
    position: fixed
    animation: fixedNav 0.5s ease-in-out forwards
    animation-direction: alternate
    background: linear-gradient(rgba(0, 0, 0, 0.978), rgba(0, 0, 0, 0.978)), url(/images/landing/background-body.jpeg)
    background-size: cover
    &::before
        animation: expand 0.5s ease-in-out .5s forwards
        transition: .5s ease
        animation-fill-mode: backwards

.flex_nav      
    width: 80%
    margin: auto
    padding: 30px 40px 35px
    display: flex
    align-items: center
    justify-content: space-between

.logo
    width: 110px
    a
        display: block
    img
        width: 100%
        pointer-events: none
ul
    display: flex
    margin: 0
    padding: 0
    li
        list-style-type: none
        a
            text-decoration: none
        &:first-child
            padding: 0 27px

</style>
