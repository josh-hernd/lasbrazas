<script lang="ts">
    import { yAxis } from '$lib/helpers/writable';
    import { MenuContent } from '../content/forward';
    import Head from '$lib/head/head.svelte';    
	import SimpleParallax from '$lib/parallax/simple-parallax.svelte';
    import FullMenu from '$lib/menu-display/full-menu.svelte'

    let yPin: number;
	yAxis.subscribe((value) => {
		yPin = value;
	});
</script>
<Head>
    <title>{MenuContent.head.title}</title>
	<meta name="description" content={MenuContent.head.desc} />
	<meta name="keywords" content={MenuContent.head.keywords} />
	<meta property="og:image" content={MenuContent.head.og_image} />
</Head>

<SimpleParallax simpleData={MenuContent.placeholder} divHeight={75}/>

<FullMenu menuCategories={MenuContent.full_menu}/>

<SimpleParallax simpleData={MenuContent.end} divHeight={50}/>