<script lang="ts">
	import { LandingPage } from '../content/forward';
	import { yAxis } from '$lib/helpers/writable';

	import Head from '$lib/head/head.svelte';
	import ParallaxHeader from '$lib/parallax/parallax-header.svelte';
	import ThreeColunm from '$lib/colunms/three-colunm.svelte';
	import TwoColunm from '$lib/colunms/two-colunm.svelte';
	import Featuring from '$lib/menu-display/featuring.svelte';
	import SimpleParallax from '$lib/parallax/simple-parallax.svelte';

	let yPin: number;
	yAxis.subscribe((value) => {
		yPin = value;
	});
</script>

<Head>
	<title>{LandingPage.head.title}</title>
	<meta name="description" content={LandingPage.head.desc} />
	<meta name="keywords" content={LandingPage.head.keywords} />
	<meta property="og:type" content={LandingPage.head.title} />
	<meta property="og:title" content={LandingPage.head.title} />
	<meta property="og:description" content={LandingPage.head.desc} />
	<meta property="og:url" content="" />
	<meta property="og:image" content={LandingPage.head.og_image} />
	<meta name="twitter:description" content={LandingPage.head.desc} />
</Head>

<ParallaxHeader
	{yPin}
	paraLogo={LandingPage.parallax.logo}
	backDrop={LandingPage.parallax.backdrop}
	foreGround={LandingPage.parallax.foreground}
/>

<div class="text_el">
	<span>{LandingPage.welcome.subtitle}</span>
	<h1>{LandingPage.welcome.intro}</h1>
	<p>{LandingPage.welcome.paragraph}</p>
</div>

<ThreeColunm {yPin} colunmContent={LandingPage.three_col} />
<TwoColunm {yPin} colunmContent={LandingPage.two_col} />

<Featuring featured_items={LandingPage.feature_menu} />

<SimpleParallax 
    simpleData={LandingPage.placeholder} 
    divHeight={55}/>

<style lang="sass">
    @use "../abstract/breakpoint" as *

    .text_el
        width: 50%
        margin: auto
        padding: 40px 30px
        text-align: center   
        @include breakpoint(lglaptop)
            width: 40%
            padding: 100px 30px
        @include breakpoint(smlaptop)
            width: 50%
        @include breakpoint(mobileonly)
            width: auto
            padding-top: 0px
</style>
