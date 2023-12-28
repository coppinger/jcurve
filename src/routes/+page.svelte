<script>
	// Images
	import charlie from '$images/charlie.png';
	import shopify from '$images/shopify-logo.png';

	// Components
	import Jcurve from '$components/Jcurve.svelte';
	import Signature from '$components/Signature.svelte';
	import Twitter from '../lib/components/Twitter.svelte';
	import Twitch from '../lib/components/Twitch.svelte';
	import Instagram from '../lib/components/Instagram.svelte';
	import Globe from '../lib/components/Globe.svelte';
	import Bulb from '../lib/components/Bulb.svelte';
</script>

<div class="max-w-[1140px] flex flex-col gap-16 md:gap-32 mx-auto">
	<header class="flex justify-between p-8">
		<Signature />
		<Jcurve />
	</header>
	<section class="">
		<div class="flex flex-col gap-6 items-center justify-center">
			<img src={charlie} class="max-w-24" alt="The authors face, Charlie Coppinger" />
			<p class="text-xl max-w-md text-center">
				Hi, my name is Charlie and I’m a product designer, indie hacker and serial founder based in
				Wellington, New Zealand
			</p>
			<div class="flex gap-3">
				<a href="https://x.com/thecoppinger" target="_blank" class="gr-border p-4">
					<Twitter />
				</a>
				<a href="https://twitch.tv/thecoppinger" target="_blank" class="gr-border p-4">
					<Twitch />
				</a>
				<a href="https://instagram.com/thecoppinger" target="_blank" class="gr-border p-4">
					<Instagram />
				</a>
				<a href="https://aroreretini.dev" target="_blank" class="gr-border p-4">
					<Globe />
				</a>
			</div>
		</div>
	</section>
	<section
		class="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center md:items-start"
	>
		<p class="text-xl max-w-md">Here’s a quick snapshot about me</p>
		<div class="max-w-md w-full">
			<ul class="list-disc text-xl list-inside">
				<li>
					I’ve worked at companies small and large, from startups to <img
						class="inline-block max-w-20"
						src={shopify}
						alt="Shopify's logo"
					/>
				</li>
				<li>I’ve raised over $1m of venture capital (never again 🙃)</li>
				<li>
					I’m a broad-skilled generalist, with professional experience in marketing, sales,
					development and design
				</li>
				<li>I’m my nephew’s favorite uncle</li>
			</ul>
		</div>
	</section>
	<section>
		<div class="flex flex-col gap-6 items-center">
			<div class="gr-border p-4">
				<Bulb />
			</div>
			<p class="text-xl text-center max-w-md">
				To illustrate my skills and fit for this role, I conducted a deep dive on Gumroad to uncover
				some initiatives to work on, and then got to it
			</p>
		</div>
	</section>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
