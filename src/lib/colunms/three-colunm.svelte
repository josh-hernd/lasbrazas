<script lang="ts">
	import Button from '$lib/button.svelte';
	import lazy from '$lib/helpers/lazy';

	export let yPin: number;
	export let colunmContent: any;
</script>

<div class="three_col">
	{#each colunmContent as blurb}
		{#if blurb.notImg}
			<div class="col">
				<span>{blurb.subtitle}</span>
				<div class="til_decor">
					<img src="/images/landing/crossline.svg" alt="" srcset="" />
					<h2>{blurb.title}</h2>
					<img src="/images/landing/crossline.svg" alt="" srcset="" />
				</div>
				<p>{blurb.desc}</p>
				<Button btnTitle={blurb.button} btnLink={blurb.url} align={'auto'} />
			</div>
		{:else}
			<div class="col enlarge">
				<img
					src="/brazas-logo.svg"
					alt=""
					srcset=""
					use:lazy={{ src: blurb.src, cl: 'loaded', atl: 'Bar Image' }}
					class={yPin / 6.9 > 135 ? 'show' : 'lower'}
				/>
			</div>
		{/if}
	{/each}
</div>

<style lang="sass">
    @use "../../abstract/breakpoint" as *
    @use "../../abstract/animation" as animate
    
    $colPad: 30px

    .three_col
        width: 90%
        margin: auto
        padding: 40px 0px 70px
        display: flex
        flex-wrap: wrap
        justify-content: center
        align-items: center
        .col
            width: calc( 30% - $colPad )
            padding: 10px $colPad 
            text-align: center
            p
                text-align: justify
                text-align-last: center
            img
                width: 100%  
                transition: all .5s ease  
                animation-fill-mode: backwards
            img.show
                animation: show 2s ease-in-out forwards
            img.lower
                animation: hide 2s ease-in-out forwards
            :global(img.loaded)
                width: 100%
                animation: lazyload 1s ease-in-out forwards
        @include dynamicpoint($min: 200px, $max: 999px )
            flex-direction: column
            .col
                width: auto
                padding-bottom: calc( $colPad + 15px )
                p
                    text-align: center
    
        .til_decor
            display: flex
            text-align: center
            justify-content: center
            h2
                margin: auto 30px
            @include dynamicpoint(768px , 1270px )
                h2
                    font-size: 30px

            img
                width: 50px

</style>
