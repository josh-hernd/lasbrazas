<script lang="ts">
	import Button from '$lib/button.svelte';
    import lazy from '$lib/helpers/lazy';

	export let yPin: number;
	export let colunmContent: any;
</script>

{#each colunmContent as col}
	<div class="two_col {col.style}">
		<div class="desc">
			{#if col.active}
				<span>{col.subtitle}</span>
				<div class="til_decor">
					<img src="/images/landing/crossline.svg" alt="" srcset="" />
					<h3>{col.title}</h3>
					<img src="/images/landing/crossline.svg" alt="" srcset="" />
				</div>
				<p>{col.desc}</p>
				<Button btnTitle={col.button} btnLink={col.url} align={'inherit'} />
			{:else}
                <p>{col.desc}</p>
            {/if}
		</div>
		<div class="img_container {col.style}">
			<img 
            class="{col.style} {yPin / 6.9 > 330 ? 'show' : 'lower'}"
            src="/images/landing/drinks-bar.jpeg"
            alt=""
            srcset=""
            use:lazy={{ src: col.imgSrc, cl: 'loaded', atl: 'Bar Image' }}
            />
		</div>
	</div>
{/each}

<style lang="sass">
@use "../../abstract/breakpoint" as *
@use "../../abstract/animation" as animate

.two_col
    display: flex
    &.black
        padding: 40px 0
    @include breakpoint(mobileonly)
        display: block
        &.black
            padding: 50px 0
    
.til_decor
    display: flex
    text-align: center
    justify-content: center
    h3
        margin: auto 30px
    @include dynamicpoint(768px , 1270px )
        h3
            font-size: 30px
    img
        width: 50px

.desc
    width: calc( 50% - 140px )
    text-align: center
    padding: 40px 70px
    display: inline-flex
    flex-direction: column
    justify-content: center
    align-items: center
    @include breakpoint(mobileonly)
        width: calc( 100% - 100px )
        padding: 40px 50px

.img_container
    width: 50%
    overflow: hidden
    &.black
        width: calc( 50% - 160px )
        padding: 50px 80px
    @include breakpoint(mobileonly)
        width: 100%
        &.black
            width: calc( 100% - 100px )
            padding: 50px

img.white, img.black
    width: 100%
    height: 100%
    object-fit: cover


.white
    background: rgb(208, 209, 209)    
    p
        color: rgba(0, 0, 0, 0.972)

.black
    flex-direction: row-reverse
    p
        color: rgb(208, 209, 209)
span
    font-size: 19px

img.black.show
            animation: show 2s ease-in-out forwards

img.black.lower
    animation: hide 2s ease-in-out forwards
</style>
