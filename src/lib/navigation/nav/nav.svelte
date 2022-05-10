<script lang="ts">
import Query from "$lib/mediaQuery/query.svelte"
import Desktop from "./desktop.svelte";
import Mobile from "./mobile/mobile.svelte";
import {logo, list, footerContent } from '../parse-nav';
import { yAxis } from "$lib/helpers/writable";

let navContent = {
    logo,
    list
}

let yPin: number;
	yAxis.subscribe((value) => {
		yPin = value;
	});
</script>

<Query query="(min-width: 960px)" let:matches>
	{#if matches}
		<Desktop {yPin} {...navContent}/>
	{/if}
</Query>

<Query query="(max-width: 960px)" let:matches>
	{#if matches}
		<Mobile {...navContent} hour={footerContent.hours}/>
	{/if}
</Query>