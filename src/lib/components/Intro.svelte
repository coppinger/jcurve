<script>
	export let num;
	export let title;
	export let noDiv;
</script>

{#if !noDiv}
	<div class="lg-divider"></div>
{/if}
<div class="gr-border text-xl flex items-center justify-center h-12 w-12 bg-white">{num}</div>
<div class="sm-divider"></div>
<p class="gr-border bg-white text-center p-4">{title}</p>
<div class="sm-divider"></div>
