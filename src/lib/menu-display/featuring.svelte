<script lang="ts">
	import Button from '$lib/button.svelte';

	export let featured_items: any;
</script>

<div class="featured_container">
	<div class="til_decor">
		<img src="/images/landing/crossline.svg" alt="" srcset="" />
		<h3>{featured_items.category}</h3>
		<img src="/images/landing/crossline.svg" alt="" srcset="" />
	</div>
	<div class="item_col">
		{#each featured_items.children as child}
			<div class="item_display">
				<div class="item">
					<h4 class="child_cag">{child.name}</h4>
				</div>
				{#each child.items as item}
					<div class="item">
						<h4>{item.name}</h4>
						<span>{item.price}</span>
						{#if item.desc}
							<p>{item.desc}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<Button btnTitle={featured_items.button} btnLink={featured_items.url} align={'auto'} />
</div>

<style lang="sass">
@use "../../abstract/breakpoint" as *

h3, h4, span
    color: rgb(19, 14, 20)

h4
    font-size: 16px

h4.child_cag
    font-size: 20px
    
span
    font-size: 19px

p
    width: 100%
    font-size: 14px
    line-height: 0
    color: rgba(0, 0, 0, 0.972)

.featured_container
    width: auto
    padding: 50px 40px
    background: rgb(208, 209, 209)

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

.item_col
    width: 90%
    margin: auto
    padding-bottom: 50px
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    @include breakpoint(mobileonly)
        flex-direction: column
        justify-content: center
    
.item_display
    width: 40%
    padding: 10px 0
    display: flex
    flex-direction: column
    @include breakpoint(mobileonly)
        width: 100%
.item
    width: 100%
    display: inline-flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
</style>
