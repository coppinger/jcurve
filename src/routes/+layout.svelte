<script>
	import '../styles.pcss';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Charlie's Gumroad Job Application</title>
	<meta name="title" content="Charlie's Gumroad Job Application" />
	<meta
		name="description"
		content="Charlie Coppinger wanted the best chance possible of getting a job at Gumroad, so he made this website to showcase his skills."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://jcurve.nz" />
	<meta property="og:title" content="Charlie's Gumroad Job Application" />
	<meta
		property="og:description"
		content="Charlie Coppinger wanted the best chance possible of getting a job at Gumroad, so he made this website to showcase his skills."
	/>
	<meta property="og:image" content="/images/meta-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://jcurve.nz" />
	<meta property="twitter:title" content="Charlie's Gumroad Job Application" />
	<meta
		property="twitter:description"
		content="Charlie Coppinger wanted the best chance possible of getting a job at Gumroad, so he made this website to showcase his skills."
	/>
	<meta property="twitter:image" content="/images/meta-image.jpg" />
</svelte:head>

<div class="bg-white-smoke min-w-screen min-h-screen font-mabry px-6 pb-32"><slot /></div>
