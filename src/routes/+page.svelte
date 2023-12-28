<script>
	// Images
	import charlie from '$images/charlie.png';
	import shopify from '$images/shopify-logo.png';
	import research from '$images/research.png';
	import wireframing from '$images/wireframing.png';
	import figma from '$images/figma-thumbnail.png';

	// Videos
	import reversed from '$videos/reversed.mp4';

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
			<ul class="flex flex-col gap-2 list-disc text-xl list-outside px-4 md:px-0">
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
		<p class=" max-w-md bg-white gr-border p-8">
			I started my process by combing through all of Gumroad’s public board meetings to get a good
			sense of where the company has come from, and where it's going.
			<br />
			<br />
			Things that stood out to me are the intention of developing more core eCommerce features (abandoned
			carts etc.), as well as ConverKit-like features and website building functionality.
		</p>
		<div class="sm-divider"></div>
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
						href="https://www.figma.com/file/XxsPa6Y3cQ4MwhE0y3EVY7/Op.-Gummybear?type=whiteboard&node-id=398%3A1101&t=s7jfkQjcG13AdQTB-1"
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
			conversion rate (thus volume of transactions), as well as the AOV, due to a greater exposure to
			the range of products each creator offers.
		</p>
		<Intro num="2" title="Wireframing" />
		<p class=" max-w-md bg-white gr-border p-8">
			I studied a handful of flows from the likes of Squarespace and Shopify, and then created a set
			of wireframes to explore different possible layouts and components.
		</p>
		<div class="sm-divider"></div>
		<div class="gr-border flex flex-col max-w-sm">
			<img src={wireframing} alt="Screenshot of a FigJam file showing web design wireframes" />
			<div class="flex border-y bg-accent"><p class="text-xl p-4">Lo-fi Wireframes</p></div>
			<div class="flex w-full items-stretch bg-white">
				<div class="w-full p-4">
					<p>Sketching everything out</p>
				</div>
				<div class="h-auto shrink-0 flex items-center justify-center">
					<a
						class="flex items-center justify-center px-4 h-full bg-black text-white"
						href="https://www.figma.com/file/XxsPa6Y3cQ4MwhE0y3EVY7/Op.-Gummybear?type=whiteboard&node-id=398%3A1102&t=s7jfkQjcG13AdQTB-1"
						target="_blank">View file -></a
					>
				</div>
			</div>
		</div>
		<Intro num="3" title="Mockups" />

		<p class=" max-w-md bg-white gr-border p-8">
			I kicked off this stage by recreating Gumroad's design system in Figma, followed by a set of
			mockups, component by component, until I had everything laid out in high fidelity.
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
						href="https://www.figma.com/file/RRMwyaj5LMSAZrYB0UB1KU/Op.-Gummybear?type=design&node-id=316%3A10299&mode=design&t=K2uzAjWKyjCcEvZ8-1"
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
		<div class="gr-border flex flex-col">
			<div class="flex border-b justify-between items-center bg-accent">
				<p class="text-xl p-4">Website Builder Concept</p>
				<div class="h-16 w-16 flex items-center justify-center"><Prototype /></div>
			</div>
			<div class="flex w-full items-stretch border-b bg-white">
				<div class="w-full p-4">
					<p>
						Prototype flow of a user adding sections to their profile page by using the website
						builder concept.
					</p>
				</div>
			</div>
			<div class="w-screen-sm">
				<video src={reversed} autoplay loop playsinline muted>
					<source src={reversed} type="video/mp4" />
					Your browser does not support the video tag. It's a fun gif of a guy flipping a table.
				</video>
			</div>
		</div>
		<Intro num="5" title="Reflections" />
		<div class="gr-border flex flex-col md:grid md:grid-cols-3 bg-white">
			<div class="flex flex-col gap-3 p-8">
				<p class="text-4xl">1</p>
				<p>
					At first, I spent a good chunk of time trying to split my efforts between building out the
					new creator pages, as well as a new product creation flow.
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
					Predictably, this correlated with an increased frequency of scrambling for components and styles
					towards the end, but given a less volatile schedule and pace, I am usually far more diligent
					with my organization.
				</p>
			</div>
			<div class="flex flex-col gap-3 p-8">
				<p class="text-4xl">3</p>
				<p>
					Ultimately, I tried to cover a lot of ground, and in doing so there were elements and
					components that I had to press on with, despite not being completely satisfied with where
					they were at.
					<br />
					<br />
					This is a natural part of the design process, given there are always time and resource constraints,
					but it was somewhat a reflection of the intensity of the sprint.
				</p>
			</div>
		</div>
	</section>
	<section>
		<div class="flex flex-col gap-6 md:gap-12 items-center">
			<div class="gr-border p-4 bg-accent">
				<Bulb />
			</div>
			<p class="text-xl text-center max-w-md">In summary, I completed the following:</p>
			<div class="flex flex-col gap-8 md:grid md:grid-cols-4">
				<div class="flex gap-4 flex-col">
					<svg
						width="32"
						height="33"
						viewBox="0 0 32 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.6667 3.33887L2.66669 11.3389L7.68492 16.3571L9.57033 14.4691L6.43752 11.3389L10.6667 7.1097L13.7995 10.2425L15.6849 8.3571L10.6667 3.33887ZM24.5521 3.33887C24.2109 3.33887 23.8694 3.46883 23.6094 3.72949L21.3334 6.00553L26.6667 11.3389L28.9427 9.06283C29.4641 8.54149 29.4641 7.69741 28.9427 7.17741L25.4948 3.72949C25.2341 3.46883 24.8933 3.33887 24.5521 3.33887ZM19.3334 8.00553L4.00002 23.3389V28.6722H9.33335L24.6667 13.3389L19.3334 8.00553ZM24.3151 16.9873L22.4297 18.8727L25.5625 22.0055L21.3334 26.2347L18.2031 23.1019L16.3151 24.9873L21.3334 30.0055L29.3334 22.0055L24.3151 16.9873Z"
							fill="black"
						/>
					</svg>

					<p class="text-xl">I recreated Gumroad’s design system from scratch in Figma.</p>
				</div>
				<div class="flex gap-4 flex-col">
					<svg
						width="32"
						height="33"
						viewBox="0 0 32 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M26.172 4.76825L19.9587 7.25358L11.9587 4.58691L4.83867 7.43491C4.332 7.63758 4 8.12691 4 8.67225V27.3389C4 28.2816 4.952 28.9269 5.828 28.5762L12.0413 26.0909L20.0413 28.7576L27.1613 25.9096C27.668 25.7069 28 25.2176 28 24.6722V6.00558C28 5.06291 27.048 4.41758 26.172 4.76825ZM8 19.3389C7.264 19.3389 6.66667 18.7416 6.66667 18.0056C6.66667 17.2696 7.264 16.6722 8 16.6722C8.736 16.6722 9.33333 17.2696 9.33333 18.0056C9.33333 18.7416 8.736 19.3389 8 19.3389ZM8 15.3389C7.264 15.3389 6.66667 14.7416 6.66667 14.0056C6.66667 13.2696 7.264 12.6722 8 12.6722C8.736 12.6722 9.33333 13.2696 9.33333 14.0056C9.33333 14.7416 8.736 15.3389 8 15.3389ZM12 23.3389C11.264 23.3389 10.6667 22.7416 10.6667 22.0056C10.6667 21.2696 11.264 20.6722 12 20.6722C12.736 20.6722 13.3333 21.2696 13.3333 22.0056C13.3333 22.7416 12.736 23.3389 12 23.3389ZM16 19.3389C15.264 19.3389 14.6667 18.7416 14.6667 18.0056C14.6667 17.2696 15.264 16.6722 16 16.6722C16.736 16.6722 17.3333 17.2696 17.3333 18.0056C17.3333 18.7416 16.736 19.3389 16 19.3389ZM16 15.3389C15.264 15.3389 14.6667 14.7416 14.6667 14.0056C14.6667 13.2696 15.264 12.6722 16 12.6722C16.736 12.6722 17.3333 13.2696 17.3333 14.0056C17.3333 14.7416 16.736 15.3389 16 15.3389ZM20 12.6722C19.264 12.6722 18.6667 12.0749 18.6667 11.3389C18.6667 10.6029 19.264 10.0056 20 10.0056C20.736 10.0056 21.3333 10.6029 21.3333 11.3389C21.3333 12.0749 20.736 12.6722 20 12.6722ZM24 19.3389C23.264 19.3389 22.6667 18.7416 22.6667 18.0056C22.6667 17.2696 23.264 16.6722 24 16.6722C24.736 16.6722 25.3333 17.2696 25.3333 18.0056C25.3333 18.7416 24.736 19.3389 24 19.3389ZM24 15.3389C23.264 15.3389 22.6667 14.7416 22.6667 14.0056C22.6667 13.2696 23.264 12.6722 24 12.6722C24.736 12.6722 25.3333 13.2696 25.3333 14.0056C25.3333 14.7416 24.736 15.3389 24 15.3389Z"
							fill="black"
						/>
					</svg>

					<p class="text-xl">
						I researched and planned out how to best impact creators (and by extension, GMV).
					</p>
				</div>
				<div class="flex gap-4 flex-col">
					<svg
						width="32"
						height="33"
						viewBox="0 0 32 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.66667 4.67236C5.19333 4.67236 4 5.8657 4 7.33903V12.6724V26.0057C4 27.4631 5.20925 28.6724 6.66667 28.6724H25.3333C26.7908 28.6724 28 27.4631 28 26.0057V11.339V7.33903C28 5.8657 26.8067 4.67236 25.3333 4.67236H6.66667ZM8 7.33903C8.736 7.33903 9.33333 7.93636 9.33333 8.67236C9.33333 9.40836 8.736 10.0057 8 10.0057C7.264 10.0057 6.66667 9.40836 6.66667 8.67236C6.66667 7.93636 7.264 7.33903 8 7.33903ZM12 7.33903C12.736 7.33903 13.3333 7.93636 13.3333 8.67236C13.3333 9.40836 12.736 10.0057 12 10.0057C11.264 10.0057 10.6667 9.40836 10.6667 8.67236C10.6667 7.93636 11.264 7.33903 12 7.33903ZM16 7.33903H25.3333V10.0057H16V7.33903ZM6.66667 12.6724H25.3333V26.0057H6.66667V12.6724ZM9.33333 15.339V18.0057H16V15.339H9.33333ZM18.6667 15.339V23.339H22.6667V15.339H18.6667ZM9.33333 20.6724V23.339H16V20.6724H9.33333Z"
							fill="black"
						/>
					</svg>

					<p class="text-xl">I created a comprehensive set of wireframes and mockups.</p>
				</div>
				<div class="flex gap-4 flex-col">
					<svg
						width="32"
						height="33"
						viewBox="0 0 32 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_285_6647)">
							<path
								d="M6.66667 4.67236C5.19333 4.67236 4 5.8657 4 7.33903V26.0057C4 27.479 5.19333 28.6724 6.66667 28.6724H17.3333V26.0057H6.66667V11.339H25.3333V18.4067L28 19.9198V7.33903C28 5.8657 26.8067 4.67236 25.3333 4.67236H6.66667ZM9.33333 15.339V18.0057H12V15.339H9.33333ZM14.6667 15.339V18.0057H22.6667V15.339H14.6667ZM21.3021 19.4067C20.6158 19.4297 20 20.0038 20 20.7948V31.3521C20 32.4067 21.0962 33.0736 21.9922 32.5656L31.3047 27.2869C32.234 26.7589 32.234 25.3839 31.3047 24.8573L21.9922 19.5786C21.7682 19.4516 21.5308 19.3991 21.3021 19.4067ZM9.33333 20.6724V23.339H12V20.6724H9.33333ZM14.6667 20.6724V23.339H17.3333V20.6724H14.6667Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_285_6647">
								<rect width="32" height="32" fill="white" transform="translate(0 0.672363)" />
							</clipPath>
						</defs>
					</svg>

					<p class="text-xl">I setup a range of prototypes to communicate my concepts.</p>
				</div>
			</div>
		</div>
	</section>
	<div class="flex flex-col gap-16 items-center justify-center">
		<div class="lg-divider border-dashed"></div>
		<p class="text-xl max-w-md text-center">
			Sahil, working at Gumroad would be nothing short of a dream come true for me. I believe I have
			the skills, drive and initiative to excel in this role, and I’d love to work with you and the
			team on steering Gumroad into the future.
		</p>
		<div class="flex flex-col gap-8 items-center justify-center">
			<p class="text-xl">Best,</p>
			<p class="text-xl">Coppinger</p>
			<p class="text-xl">charlie@jcurve.nz</p>
		</div>
	</div>
	<footer class="flex justify-between p-8">
		<Signature />
		<Jcurve />
	</footer>
</div>
