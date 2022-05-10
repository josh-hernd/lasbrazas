<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { logo, list, footerContent } from './parse-nav';

	let collapse: boolean;

	const isToday = (node: any) => {
		let today = new Date().getDay();
		node.innerHTML = footerContent.hours[today];
	};
</script>

<footer>
	<div class="container">
		<div class="logo">
			<a href={logo.url}>
				<img src={logo.src} alt="" srcset="" />
			</a>
		</div>
		<div class="textbody">
			<div class="text_item">
				<span>{footerContent.title}</span>
			</div>
			<div class="text_item">
				<span>{footerContent.address}</span>
			</div>
		</div>
		<div class="hours">
			<!-- Append todays day to Span element -->
            <button  on:click={() => (collapse = !collapse)}>
			<span class="current_day" use:isToday />
                <svg class="dropper" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class:collapse>
                    <path d="M33.9174 10.3784L33.1096 9.57324L18.1727 24.8165L2.88988 9.91819L2.08264 10.7233L18.1728 26.4269L33.9174 10.3784Z"/>
                    <path d="M30.6715 6.34546L30.0301 5.71924L18.1684 17.5751L6.03203 5.98753L5.39099 6.61375L18.1685 18.8277L30.6715 6.34546Z"/>
                    </svg>                    
                </button>
			{#if collapse}
				<ul class="collapsed">
					{#each footerContent.hours as hour, i}
						<li in:fly={{ delay: 100 + i * 10, duration: 900, y: 40, easing: quintInOut }}
                        out:fly={{ duration: 100, y: 40, easing: quintInOut }}>
							<span>{hour}</span>
						</li>
					{/each}
				</ul>
			{:else}
                <!-- Just take some space would ya -->
				<div
					style="height: 10px;"
					in:fly={{ delay: 100, duration: 1000, y: 50, easing: quintInOut }}
					out:fly={{ duration: 1000, y: 50, easing: quintInOut }}
				/>
			{/if}
		</div>
		<ul class="footer_link">
			{#each list as item}
				<li>
					<a sveltekit:prefetch href={item.url}>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
        <div class="copyright"><span>www.brazasrestaurant.com &nbsp; ©{new Date().getFullYear()}</span></div>
	</div>
</footer>

<style lang="sass">
@use "../../abstract/breakpoint" as *

footer
    width: 100%
    background: #000
    padding: 60px 0
    text-align: center

.logo
    width: 200px
    margin: 0 auto 15px
    @include breakpoint(mobileonly)
        width: 150px
        margin-bottom: 30px
    img
        width: 100%

.hours
    padding: 30px 0

.collapsed

    flex-direction: column
    li
        padding-bottom: 10px

ul
    width: 70%
    margin: auto
    padding: 15px 0
    display: flex
    align-items: center
    justify-content: center
    li
        list-style: none
        text-align: justify

.footer_link li
    &:not(:first-child):not(:last-child)
        padding: 0 27px

a
    text-decoration: none
    
span.current_day
    font-size: 25px
    color: rgb(201, 171, 129)

button 
    position: relative
    margin: 5px
    padding: 10px 15px
    display: inline-flex
    align-items: center
    background-color: #130E14
    border: 1px solid #c9ab81
    cursor: pointer
    overflow: hidden
    outline: none

svg.dropper
    width: 20px
    margin-left: 10px
    fill: rgb(201, 171, 129)
    vertical-align: top
    transition: all 0.4s ease

svg.collapse
    transform: rotate(180deg)
</style>
