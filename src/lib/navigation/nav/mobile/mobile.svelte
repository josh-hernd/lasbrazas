<script lang="ts">
	import { page } from '$app/stores';
	import MenuSlot from './menuSlot.svelte';

	let open: boolean;
	let position = 'fixed';

    export let hour: any;
    const isToday = (node: any) => {
		let today = new Date().getDay();
		node.innerHTML = hour[today];
	};
</script>

<nav style="--is-fixed: {position};">
	<MenuSlot bind:open>
        <div class="logo">
            <a href={$$props.logo.url} on:click={() => (open = !open)}>
                <img src={$$props.logo.src} alt="" srcset="" />
            </a>
        </div>
		<ul>
			{#each $$props.list as item}
				<li class={open ? "stag": ""}>
					<a class:active={$page.url.pathname === item.url} sveltekit:prefetch href={item.url} on:click={() => (open = !open)}>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
        <div class="current_hour {open ? "stag": ""}">
        <span class="current_day" use:isToday />
    </div>
	</MenuSlot>
</nav>

<style lang="sass">
nav
    width: auto
    position: var(--is-fixed)
    bottom: 0
    right: 0
    background: rgba(19, 14, 20, .7)
    padding: 40px 15px 15px 40px
    border-color: rgba(201, 171, 129, 0.7)
    border-top: 1px solid 
    border-left: 1px solid
    border-top-left-radius: 100%
    z-index: 10
.logo
    width: 95px
    margin: auto
    padding-bottom: 20px
    img
        width: 100%
ul
    display: flex
    flex-direction: column
    margin: 0
    padding: 0
    li
        list-style-type: none
        a
            text-decoration: none
li.stag
    animation: stager .8s ease-in-out forwards

.current_hour
    width: max-content
    position: absolute
    bottom: 30px
    left: 0
    right: 0
    margin: auto
    padding: 10px 15px
    display: inline-flex
    align-items: center
    background-color: #130E14
    border: 1px solid #c9ab81
    &.stag
        animation: stager .8s ease-in-out forwards
    span
        font-family: 'Josefin Sans', sans-serif
        font-size: 12px

@for $i from 1 through 4
    .stag:nth-child(#{$i}n)
        animation-delay: #{$i * 0.1s}

@keyframes stager 
    0%
        transform: translateY(90px)
        opacity: 0
    100%
        transform: translateY(0px)
        opacity: 1
</style>
