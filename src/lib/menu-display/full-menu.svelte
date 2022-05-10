<script lang="ts">
	import SimpleParallax from '$lib/parallax/simple-parallax.svelte';

	export let menuCategories: any;
</script>

{#each menuCategories as cat, i}
	<div id={cat.category} class="category_container {cat.style}">
		{#if cat.is_sub_cat}
			<div class="til_decor">
				<img src="/images/landing/crossline.svg" alt="" srcset="" />
				<h3>{@html cat.category}</h3>
				<img src="/images/landing/crossline.svg" alt="" srcset="" />
			</div>
			<div class="item_col">
				{#each cat.sub_cat as sub}
					<div class="item_display">
						<div class="item">
							<h4 class="child_cag">{sub.name}</h4>
						</div>
						{#each sub.items as item}
							<div class="item">
								<h4>{@html item.name}</h4>
                                {#if item.price}
                                    <span>{item.price}</span>
                                {/if}
								
								{#if item.desc}
									<p>{@html item.desc}</p>
								{/if}
							</div>
						{/each}
					</div>
				{/each}
			</div>
			{#if cat.img}
				<SimpleParallax simpleData={menuCategories[i]} divHeight={40} />
			{/if}
		{:else}
			<div class="til_decor">
				<img src="/images/landing/crossline.svg" alt="" srcset="" />
				<h3>{@html cat.category}</h3>
				<img src="/images/landing/crossline.svg" alt="" srcset="" />
			</div>
			<div class="item_col">
				{#each cat.items as item}
					<div class="item_display">
						<div class="item">
							<h4>{@html item.name}</h4>
                            {#if item.price}
                                <span>{item.price}</span>
                            {/if}
							
							{#if item.desc}
								<p>{@html item.desc}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
			{#if cat.img}
				<SimpleParallax simpleData={menuCategories[i]} divHeight={40} />
			{/if}
		{/if}
	</div>
{/each}

<style lang="sass">
    @use "../../abstract/breakpoint" as *
    
    h4
        font-size: 16px

    h4.child_cag
        font-size: 20px
        
    span
        font-size: 19px
        margin-left: auto
    p
        width: 100%
        font-size: 17px
        line-height: 0
    
    .category_container
        width: auto
        padding: 80px 40px
        &.black
            background-color: none
            h3, h4, span, p
                line-height: 1.5rem
                color: rgb(208, 209, 209)
        &.white
            background-color: rgb(208, 209, 209)
            h3, h4, span, p
                line-height: 1.5rem
                color: rgb(19, 14, 20)

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
        padding: 50px 0
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
        margin: 10px auto
        display: inline-flex
        flex-wrap: wrap
        justify-content: space-between
        align-items: center
</style>
