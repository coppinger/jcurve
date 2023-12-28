<script>
	// Images
	import charlie from '$images/charlie.png';
	import shopify from '$images/shopify-logo.png';
	import research from '$images/research.png';
	import figma from '$images/figma-thumbnail.png';

	// Videos
	import rave from '$videos/rave.mp4';

	// Components
	import Jcurve from '$components/Jcurve.svelte';
	import Signature from '$components/Signature.svelte';
	import Twitter from '../lib/components/Twitter.svelte';
	import Twitch from '../lib/components/Twitch.svelte';
	import Instagram from '../lib/components/Instagram.svelte';
	import Globe from '../lib/components/Globe.svelte';
	import Bulb from '../lib/components/Bulb.svelte';
	import Intro from '../lib/components/Intro.svelte';
	import Prototype from '../lib/components/Prototype.svelte';
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
			<div class="gr-border p-4 bg-accent">
				<Bulb />
			</div>
			<p class="text-xl text-center max-w-md">
				To illustrate my skills and fit for this role, I conducted a deep dive on Gumroad to uncover
				some initiatives to work on, and then got to it
			</p>
		</div>
	</section>
	<section class="flex flex-col items-center">
		<div class="h-16 border-l border-dashed w-1"></div>
		<Intro num="0" title="Research" noDiv={true} />
		<div class="gr-border flex flex-col max-w-sm">
			<img
				src={research}
				alt="Screenshot of a FigJam file showing a vast amount of research and planning in a whiteboard-like format"
			/>
			<div class="flex border-y bg-accent"><p class="text-xl p-4">FigJam Braindump</p></div>
			<div class="flex w-full items-stretch bg-white">
				<div class="w-full p-4">
					<p>My design process</p>
				</div>
				<div class="h-auto shrink-0 flex items-center justify-center">
					<a
						class="flex items-center justify-center px-4 h-full bg-black text-white"
						href="#"
						target="_blank">View file -></a
					>
				</div>
			</div>
		</div>
		<Intro num="1" title="Planning" />
		<p class=" max-w-md bg-white gr-border p-8">
			I decided to work on reimagining the creator profile pages. With the basis of a block system
			in place, and the ability to add a custom domain, it felt like there was an obvious next step
			to flesh it out.
			<br />
			<br />
			My reasoning here is that an improved profile would directly increase GMV, by both increasing the
			conversion rate (thus, volume of transactions), as well as the AOV through greater exposure of
			bundles.
		</p>
		<Intro num="2" title="Wireframing" />
		<p class=" max-w-md bg-white gr-border p-8">
			I decided to work on reimagining the creator profile pages. With the basis of a block system
			in place, and the ability to add a custom domain, it felt like there was an obvious next step
			to flesh it out.
			<br />
			My reasoning here is that an improved profile would directly increase GMV, by both increasing the
			conversion rate (thus, volume of transactions), as well as the AOV through greater exposure of
			bundles.
		</p>
		<Intro num="3" title="Mockups" />

		<p class=" max-w-md bg-white gr-border p-8">
			I decided to work on reimagining the creator profile pages. With the basis of a block system
			in place, and the ability to add a custom domain, it felt like there was an obvious next step
			to flesh it out.
			<br />
			My reasoning here is that an improved profile would directly increase GMV, by both increasing the
			conversion rate (thus, volume of transactions), as well as the AOV through greater exposure of
			bundles.
		</p>
		<div class="sm-divider"></div>
		<div class="gr-border flex flex-col max-w-sm">
			<img
				src={figma}
				alt="Screenshot of a FigJam file showing a vast amount of research and planning in a whiteboard-like format"
			/>
			<div class="flex border-y bg-accent"><p class="text-xl p-4">Figma Working File</p></div>
			<div class="flex w-full items-stretch bg-white">
				<div class="w-full p-4">
					<p>Design system, mockups</p>
				</div>
				<div class="h-auto shrink-0 flex items-center justify-center">
					<a
						class="flex items-center justify-center px-4 h-full bg-black text-white"
						href="#"
						target="_blank">View file -></a
					>
				</div>
			</div>
		</div>
		<Intro num="4" title="Prototyping" />
		<p class=" max-w-md bg-white gr-border p-8">
			I created a series of prototypes to best illustrate the flow and function of my website
			builder concept.
		</p>
		<div class="sm-divider"></div>
		<div class="gr-border flex flex-col max-w-sm">
			<div class="flex border-b justify-between items-center bg-accent">
				<p class="text-xl p-4">Adding a section</p>
				<div class="h-16 w-16 flex items-center justify-center"><Prototype /></div>
			</div>
			<div class="">
				<video src={rave} autoplay loop playsinline muted>
					<source src={rave} type="video/mp4" />
					Your browser does not support the video tag. It's a fun gif of a guy flipping a table.
				</video>
			</div>
			<div class="flex w-full items-stretch border-t bg-white">
				<div class="w-full p-4">
					<p>Users can quickly add new sections to their profiles.</p>
				</div>
			</div>
		</div>
		<Intro num="5" title="Reflections" />
		<div class="gr-border flex flex-col md:grid md:grid-cols-3 bg-white">
			<div class="flex flex-col gap-3 p-8">
				<p class="text-4xl">1</p>
				<p>
					At first, I spent a good chunk of time trying to split my efforts between building out the
					new creator pages, as well as a new product creation flow
					<br />
					<br />
					In retrospect, I should have focused solely on the latter, which became clear to me once I
					heard ‘the website builder is our north star’ in the uncensored (🥵) board meeting video.
				</p>
			</div>
			<div class="flex flex-col gap-3 p-8">
				<p class="text-4xl">2</p>
				<p>
					Given the intensity of the work I tried to rapidly produce, I sacrificed a certain degree
					of organization within the file itself.
					<br />
					<br />
					Predictably, this correlated with an increased frequency of scrambling for components and styles,
					but given a less volatile schedule and pace, I am far more diligent with organization.
				</p>
			</div>
			<div class="flex flex-col gap-3 p-8">
				<p class="text-4xl">3</p>
				<p>
					Ultimately, I tried to cover a lot of ground, and in doing so there were elements and
					components that I had to press on with, despite not being completely satisfied with them.
					<br />
					<br />
					This is a natural part of the design process, given there are always time and resource constraints,
					but was somewhat of a reflection of the intensity of the sprint.
				</p>
			</div>
		</div>
	</section>
</div>
