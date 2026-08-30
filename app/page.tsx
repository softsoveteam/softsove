import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softsove",
  description:
    "Serious software with a weird desk. Design and development from Anand — Softsove ships work boards trust.",
};

const STACK_LOGOS = [
  "html",
  "css",
  "js",
  "typescript",
  "react",
  "nextjs",
  "vue",
  "angular",
  "node",
  "express",
  "python",
  "fastapi",
  "django",
  "php",
  "laravel",
  "java",
  "kotlin",
  "dotnet",
  "go",
  "flutter",
  "swift",
  "electron",
  "mysql",
  "postgresql",
  "mongodb",
  "redis",
  "sqlite",
  "prisma",
  "supabase",
  "graphql",
  "firebase",
  "docker",
  "kubernetes",
  "aws",
  "nginx",
  "git",
  "github",
  "gitlab",
  "vercel",
  "bun",
  "deno",
  "sass",
  "bootstrap",
  "tailwind",
  "jquery",
  "wordpress",
  "figma",
  "elasticsearch",
] as const;

const CLIENT_MEMES = [
  "/assets/img/terrains/civic.gif",
  "/assets/img/home/memes/deal.gif",
  "/assets/img/home/memes/nod.gif",
  "/assets/img/terrains/memes/dog.gif",
  "/assets/img/dares/memes/sponge.gif",
];

const SERVICE_MEMES = [
  "/assets/img/dares/memes/deal.gif",
  "/assets/img/dares/memes/cart.gif",
  "/assets/img/dares/memes/lock.gif",
  "/assets/img/dares/memes/sponge.gif",
  "/assets/img/home/memes/judge.gif",
];

const HOME_SERVICES = [
  { id: "software", title: "Software Development", note: "Custom software that does not nap in a boilerplate. If you can picture it, the desk starts arguing how.", kitchen: "dare-build" },
  { id: "website", title: "Website Development", note: "Pages that ship with a pulse. Not a template with a new logo glued on.", kitchen: "dare-build" },
  { id: "mobile", title: "Mobile Development", note: "Apps that live in a hand and still have manners. iOS, Android, both, neither — we occupy the tap.", kitchen: "dare-build" },
  { id: "ecom", title: "E-commerce Solutions", note: "Shops that sell instead of decorate. Checkout without the beige maze.", kitchen: "dare-build" },
  { id: "uiux", title: "UI/UX Design", note: "Flows a human would actually finish. Pretty is easy. Clear is the dare.", kitchen: "dare-look" },
  { id: "brand", title: "Branding & Creative Services", note: "Marks, decks, and mischief that do not look like the neighbor's startup.", kitchen: "dare-look" },
  { id: "ai", title: "AI Solutions", note: "Models that earn the room. Not a chatbot sticker slapped on a tired form.", kitchen: "dare-brain" },
  { id: "auto", title: "Business Process Automation", note: "Busywork gets a quiet burial. Humans keep the plot. Software keeps the grind.", kitchen: "dare-brain" },
  { id: "data", title: "Data Analytics & BI", note: "Dashboards that tell the truth. If the chart cannot dare a decision, we rebuild it.", kitchen: "dare-brain" },
  { id: "seo", title: "SEO & Digital Marketing", note: "Search, ads, content, and the mischief that makes a stranger become a brief.", kitchen: "dare-loud" },
  { id: "cloud", title: "Cloud & DevOps", note: "Deploys that do not pray. Pipelines, clouds, and quiet heat.", kitchen: "dare-spine" },
  { id: "cyber", title: "Cybersecurity", note: "Threats get weird. So do we. Security that holds without the scare pamphlet.", kitchen: "dare-spine" },
  { id: "support", title: "Maintenance & Support", note: "After launch is still the plot. Fixes, watch, and a human on the line.", kitchen: "dare-spine" },
  { id: "consult", title: "IT Consulting", note: "We sit with the mess first. Then we dare a stack. No slide deck that dies in a drawer.", kitchen: "dare-plot" },
] as const;

const INDUSTRY_MEMES = [
  "/assets/img/terrains/memes/wizard.gif",
  "/assets/img/terrains/memes/cat.gif",
  "/assets/img/terrains/memes/tyson.gif",
  "/assets/img/terrains/memes/math.gif",
  "/assets/img/terrains/memes/moss.gif",
  "/assets/img/home/memes/plot.gif",
];

const RESULT_MEMES = [
  "/assets/img/home/memes/desk.gif",
  "/assets/img/terrains/memes/office.gif",
  "/assets/img/terrains/memes/hired.gif",
  "/assets/img/home/memes/brain.gif",
  "/assets/img/terrains/memes/pages.gif",
];

const HOME_CLIENTS = [
  "Government of India",
  "Gujarat Police",
  "JigyaM",
  "Soor Mandir",
  "Toyomo",
  "Dr.Prime",
  "Mitesh Patel (MP Anand)",
  "Hotel H",
  "Glitter Events",
  "Vivaah Hall",
  "Lifegoal Finserve Limited",
  "Sattva Skin Clinic",
  "Vangi Foods",
  "The Sweet Spots",
  "PantryQuik",
  "Diamon Salon",
] as const;

/** Person names: reply with a name for each client and we drop them in. */
const HOME_TESTIMONIALS = [
  { client: "JigyaM", person: "", quote: "They argued the product until it made sense. Then they built it like they meant it." },
  { client: "Soor Mandir", person: "", quote: "Digital that still felt like music — warm, clear, and not a template with a logo glued on." },
  { client: "Toyomo", person: "", quote: "From Anand desk to our mess overseas. Fast, sharp, and somehow still funny on the calls." },
  { client: "Mitesh Patel (MP Anand)", person: "", quote: "Local plot, serious software. They get Anand — and they ship like boards are watching." },
  { client: "Hotel H", person: "", quote: "Guests book the vibe. Softsove built a site that actually sells the stay." },
  { client: "Glitter Events", person: "", quote: "Chaos is the job. They made the digital side behave without killing the sparkle." },
  { client: "Vivaah Hall", person: "", quote: "Weddings are loud. The site finally kept up — clean booking, zero beige maze." },
  { client: "Lifegoal Finserve Limited", person: "", quote: "Finance without the nap deck. Softsove made trust look modern and still feel safe." },
  { client: "Sattva Skin Clinic", person: "", quote: "Calm UI, clear paths, no clinic-site clichés. Patients find what they need." },
  { client: "Vangi Foods", person: "", quote: "They got the brand spice right — digital that tastes like us, not a stock grocery theme." },
  { client: "The Sweet Spots", person: "", quote: "Desserts need delight. Softsove made the online bit as fun as the counter." },
  { client: "Diamon Salon", person: "", quote: "Looks matter here. Softsove made the brand refuse beige and still book chairs." },
] as const;

const DESK_PLOT = [
  { title: "Steal the brief", note: "We sit with the mess first. No 90-page nap.", tag: "Listen", href: "/lets-get-weird" },
  { title: "Argue the stack", note: "Boards trust software. Beige never gets a seat.", tag: "Plot", href: "/what-we-dare" },
  { title: "Build with a pulse", note: "Design and engineering that still argues until it ships.", tag: "Craft", href: "/crafted-things" },
  { title: "Ship Monday-ready", note: "Deploys that do not pray. Quiet heat.", tag: "Launch", href: "/what-we-dare#dare-spine" },
  { title: "Stay after launch", note: "The desk that does not ghost. Fixes, watch, humans.", tag: "Spine", href: "/what-we-dare#dare-spine" },
  { title: "Keep it weird", note: "Anand 2018. Still not beige. Curiosity on the clock.", tag: "Culture", href: "/how-we-got-weird" },
] as const;

type HomeStripItem =
  | {
      kind: "names";
      href: string;
      title: string;
      cursor: string;
      names: string[];
      memes: string[];
    }
  | {
      kind: "stack";
      href: string;
      title: string;
      cursor: string;
    }
  | {
      kind: "cta";
      href: string;
      title: string;
      cursor: string;
    };

const HOME_STRIP: HomeStripItem[] = [
  {
    kind: "names",
    href: "/who-we-build-for#terrain-civic",
    title: "Our Clients",
    cursor: "Meet<br>Them",
    memes: CLIENT_MEMES,
    names: [...HOME_CLIENTS],
  },
  {
    kind: "names",
    href: "/what-we-dare",
    title: "Our Services",
    cursor: "What We<br>Dare",
    memes: SERVICE_MEMES,
    names: HOME_SERVICES.map((service) => service.title),
  },
  {
    kind: "stack",
    href: "/what-we-dare#dare-build",
    title: "Technologies",
    cursor: "The<br>Stack",
  },
  {
    kind: "names",
    href: "/who-we-build-for",
    title: "Industries",
    cursor: "Who We<br>Build For",
    memes: INDUSTRY_MEMES,
    names: ["Mobility", "Healthcare", "Industrial", "Hi-Tech", "Technology", "The Public Plot"],
  },
  {
    kind: "names",
    href: "/crafted-things",
    title: "Results",
    cursor: "See the<br>Work",
    memes: RESULT_MEMES,
    names: ["40+ countries", "Anand 2018", "Gov + Police plots", "Zero beige briefs", "Shipped with a pulse"],
  },
  {
    kind: "cta",
    href: "/crafted-things",
    title: "Crafted Things",
    cursor: "View<br>Work",
  },
];

export default function HomePage() {
  return (
    <>
      <div id="page-header" className="ph-full ph-full-m ph-full-m ph-cap-xlg ph-image-parallax ph-caption-parallax">

					
					
					

					
					
					

					
      					<div className="ph-image-trail ph-itr-full">
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-1-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-2-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-3-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-4-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-5-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-6-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-7-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-8-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-9-600.png" alt="Image" />
      						<img className="ph-itr-img" src="/assets/img/img-trail/img-trail-10-600.png" alt="Image" />
      					</div>
					
						
					
      					<div className="page-header-inner">

      						<div className="ph-caption">
      							<div className="ph-caption-inner">
      								<h2 className="ph-caption-subtitle">( No boring stacks )</h2>

								
      								<h1 className="ph-caption-title ph-caption-title-breaks">
      									We ship what boards trust
      									<span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-1">
      										<img src="/assets/img/home/memes/deal.gif" alt="" />
      									</span>
      									<br />
      									without looking like
      									<span className="tt-text-image tt-timg-fixed tt-timg-boxed tt-timg-tilted-2">
      										<img src="/assets/img/home/memes/judge.gif" alt="" />
      									</span>
      									{" "}a brochure
      								</h1>

      								<div className="ph-caption-description max-width-700">
      									Serious software. Weird desks.<br />
      									Design and engineering from Anand — curiosity on the clock, mischief after hours.
      								</div>
      							</div> 
      						</div>  

      					</div>
					

					
      					<div className="ph-social">

						
      						<div className="tt-social-buttons">
      							<ul>
      								<li><a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-facebook-f"></i></a></li>
      								<li><a href="https://x.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-x-twitter"></i></a></li>
      								<li><a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-dribbble"></i></a></li>
      								<li><a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-behance"></i></a></li>
      							</ul>
      						</div>
						

      					</div>
					

					
      					<div className="tt-scroll-down">
						
      						<a href="#tt-page-content" className="tt-sd-inner tt-magnetic-item" data-offset="0">
      							<div className="tt-sd-arrow">
      								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      									<path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
      								</svg>
      							</div>
      						</a>
      					</div>
					

      				</div>
				


				
      				<div id="tt-page-content">


					
      					<div className="tt-section">
      						<div className="tt-section-inner">
      							<div
      								className="tt-portfolio-scrolling tt-pscr-alter-hover tt-pscr-boxed tt-pscr-tilted tt-home-pscr"
      								data-scroll-speed="300"
      								data-scroll-speed-m="42"
      							>
      								{HOME_STRIP.map((item) => (
      									<a
      										key={item.title}
      										href={item.href}
      										className={[
      											"tt-pscr-item",
      											"tt-anim-fadeinup",
      											item.kind === "cta" ? "tt-pscri-all-projects tt-pscri-reverse-color" : undefined,
      											item.kind === "stack" ? "tt-home-pscr-stack" : undefined,
      											item.kind === "cta" ? "no-image" : undefined,
      										]
      											.filter(Boolean)
      											.join(" ")}
      										data-cursor={item.cursor}
      									>
      										<div className="tt-pscr-item-inner">
      											<div className="tt-pscr-item-content">
      												<h2 className="tt-pscr-item-title">{item.title}</h2>
      												{item.kind === "names"
      													? item.names.map((name, index) => (
      															<span key={`${name}-${index}`} className="tt-home-pscr-pair">
      																<span className="tt-home-pscr-star" aria-hidden="true">
      																	*
      																</span>
      																<span className="tt-pscr-item-title tt-home-pscr-name">{name}</span>
      																<span className="tt-pscr-item-image">
      																	<img
      																		src={item.memes[index % item.memes.length]}
      																		loading="lazy"
      																		alt=""
      																	/>
      																</span>
      															</span>
      														))
      													: null}
      												{item.kind === "stack"
      													? STACK_LOGOS.map((logo, index) => (
      															<span key={logo} className="tt-home-pscr-pair">
      																{index > 0 ? (
      																	<span className="tt-home-pscr-star" aria-hidden="true">
      																		*
      																	</span>
      																) : null}
      																<span className="tt-pscr-item-image tt-stack-logo">
      																	<img src={`/assets/img/stack/${logo}.svg`} loading="lazy" alt="" />
      																</span>
      															</span>
      														))
      													: null}
      											</div>
      										</div>
      									</a>
      								))}
      							</div>
      						</div>
      					</div>
					


					
      					<div className="tt-section">
      						<div className="tt-section-inner tt-wrap">

      							<div className="tt-row">
      								<div className="tt-col-lg-7 tt-align-self-center">

									
      									<div className="tt-heading tt-heading-lg">
      										<h3 className="tt-heading-subtitle tt-anim-lines">( No boring partners )</h3>
      										<h2 className="tt-heading-title tt-anim-lines">We ship serious software with a weird desk — boards trust the stack, beige never gets a seat.</h2> 
      									</div>
									

      								</div> 

      								<div className="tt-col-lg-1">
      								</div> 

      								<div className="tt-col-lg-4 tt-align-self-center">
      									<p className="tt-anim-lines">Anand plot. Government briefs to startup mischief. Design and engineering that still argues until it ships.</p>

      									<div className="tt-anim-fadeinup">
      										<a href="/lets-get-weird" className="tt-btn tt-btn-secondary tt-magnetic-item">
      											<span data-hover="Contact">Contact</span>
      										</a>
      										<a href="/crafted-things" className="tt-btn tt-btn-outline tt-magnetic-item">
      											<span data-hover="Our Work">Our Work</span>
      										</a>
      									</div>
      								</div> 
      							</div>

      						</div> 
      					</div>
					


					
      					<div className="tt-section no-padding">
      						<div className="tt-section-inner">

							
      							<div className="tt-clipper">
      								<a href="/assets/vids/video-showreel/video-showreel.mp4" className="tt-clipper-inner" data-cursor="Play<br>Reel" data-fancybox="" data-caption="Serious software. Weird desk. AI in the mix.">

									
									

									
      									<div className="tt-clipper-bg">
      										<video loop muted autoPlay playsInline preload="metadata" poster="/assets/vids/video-showreel/video-showreel.jpg">
      											<source src="/assets/vids/placeholder.mp4" data-src="/assets/vids/video-showreel/video-showreel.mp4" type="video/mp4" />
      											<source src="/assets/vids/placeholder.webm" data-src="/assets/vids/video-showreel/video-showreel.webm" type="video/webm" />
      										</video>
      									</div>

      									<div className="tt-clipper-content">

										
      										<div className="tt-clipper-btn">
      											<i className="fa-solid fa-play"></i>
      										</div>

      									</div> 
      								</a> 
      							</div>
							

      						</div> 
      					</div>
					


					
      					<div className="tt-section no-padding-bottom">
      						<div className="tt-section-inner tt-wrap">

							
      							<div className="tt-heading tt-heading-xxxlg tt-heading-center">
      								<h3 className="tt-heading-subtitle tt-anim-lines">( No boring retainers )</h3>
      								<h2 className="tt-heading-title tt-anim-characters">What We Dare</h2> 
      								<p className="max-width-600 tt-anim-lines">Fourteen plots. Six kitchens. Zero beige menus. Pick a dare — the desk starts arguing how.</p>
      							</div>
							

      						</div> 
      					</div>
					


					
      					<div className="tt-section">
      						<div className="tt-section-inner">

							
      							<div className="tt-accordion tt-acc-xlg tt-acc-counter tt-acc-boxed tt-acc-tilted">

								{HOME_SERVICES.map((service) => (
      								<div key={service.id} className="tt-accordion-item tt-anim-fadeinup">
      									<div className="tt-accordion-heading">
      										<div className="tt-acc-head cursor-alter">
      											<div className="tt-acc-head-inner">
      												<h3 className="tt-acc-head-title">{service.title}</h3>
      											</div>
      										</div>
      										<div className="tt-accordion-caret">
      											<div className="tt-accordion-caret-inner tt-magnetic-item">
      												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      													<path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
      												</svg>
      											</div> 
      										</div> 
      									</div> 

									
      									<div className="tt-accordion-content max-width-1600">

      										<div className="tt-row">
      											<div className="tt-col-lg-8">

      												<p>{service.note}</p>

      											</div> 

      											<div className="tt-col-lg-1">
      											</div> 

      											<div className="tt-col-lg-3">

      												<a href={`/what-we-dare#${service.kitchen}`} className="tt-btn tt-btn-secondary tt-btn-round tt-magnetic-item">
      													<span data-hover="More">More</span>
      												</a>

      											</div> 
      										</div> 

      									</div> 
      								</div>
								))}

      							</div>
							

      						</div> 
      					</div>
					


					
      					<div className="tt-section">
      						<div className="tt-section-inner tt-wrap max-width-1400">

							
      							<div className="tt-sticker">

      								<div className="tt-row tt-lg-row-reverse"> 
      									<div className="tt-col-lg-4 margin-bottom-40">

										
      										<div className="tt-sticker-sticky tt-sticky-element">

											
      											<div className="tt-heading tt-heading-xlg">
      												<h3 className="tt-heading-subtitle tt-anim-lines">( No boring praise )</h3>
      												<h2 className="tt-heading-title tt-anim-characters">What<br /> They<br /> Say</h2> 
      											</div>
											

      											<p className="tt-anim-lines">Words from the desks we actually shipped for — gov briefs to salon chairs.</p>

      											<a href="/lets-get-weird" className="tt-btn tt-btn-secondary tt-magnetic-item margin-top-20 tt-anim-fadeinup">
      												<span data-hover="Join the Plot">Join the Plot</span>
      											</a>

      										</div>
										

      									</div> 

      									<div className="tt-col-lg-1">
      									</div> 

      									<div className="tt-col-lg-7">

										
      										<div className="tt-sticker-scroller">

											
      											<div className="tt-testimonials-list tt-tli-boxed tt-tli-tilted tt-tli-lg">

												{HOME_TESTIMONIALS.map((item) => (
      												<div key={item.client} className="tt-testimonials-list-item">
      													<div className="tt-tli-inner">
      														<blockquote className="open-quote">
      															<cite>{item.quote}</cite>
      															<footer>
																	<span className="tt-link">
																		{item.person ? `${item.person} — ${item.client}` : item.client}
																	</span>
																</footer>
      														</blockquote>
      													</div> 
      												</div>
												))}

      											</div>
											

      										</div>
										

      									</div> 
      								</div> 

      							</div>
							

      						</div> 
      					</div>
					


					
      					<div className="tt-section">
      						<div className="tt-section-inner">

							
      							<div className="tt-scrolling-text scrt-dyn-separator tt-scrt-boxed tt-scrt-tilted-2" data-scroll-speed="10" data-change-direction="true">
      								<div className="tt-scrt-inner">
      									<div className="tt-scrt-content">

      										<div className="tt-scrt-text">
      											College desk. Global mess.
											
      										</div> 

      									</div> 
      								</div> 
      							</div> 

							
      							<div className="tt-scrolling-text scrt-dyn-separator tt-scrt-boxed tt-scrt-tilted-1 scrt-color-reverse" data-opposite-direction="true" data-scroll-speed="10" data-change-direction="true">
      								<div className="tt-scrt-inner">
      									<div className="tt-scrt-content">

      										<div className="tt-scrt-text">
      											Since 2018. Still not beige.
											
      										</div> 

      									</div> 
      								</div> 
      							</div> 

      						</div> 
      					</div>
					


					
      					<div className="tt-section">
						<div className="tt-section-inner tt-wrap">

							<div className="tt-row margin-bottom-40">
								<div className="tt-col-lg-7 tt-align-self-center">
									<div className="tt-heading tt-heading-lg">
										<h3 className="tt-heading-subtitle tt-anim-lines">( No boring trophies )</h3>
										<h2 className="tt-heading-title tt-anim-lines">How the Desk Works</h2>
									</div>
								</div>

								<div className="tt-col-lg-1">
								</div>

								<div className="tt-col-lg-4 tt-align-self-center">
									<p className="tt-anim-lines">Six moves. Zero award shelves. This is how a Softsove brief becomes something boards trust.</p>
								</div>
							</div>

							<div className="tt-avards-list tt-avlist-boxed tt-avlist-tilted">
								{DESK_PLOT.map((step) => (
									<a key={step.title} href={step.href} className="tt-avlist-item cursor-alter tt-anim-fadeinup">
										<div className="tt-avlist-item-inner">
											<div className="tt-avlist-col tt-avlist-col-count">
												<div className="tt-avlist-count"></div>
											</div>
											<div className="tt-avlist-col tt-avlist-col-title">
												<h3 className="tt-avlist-title">{step.title}</h3>
											</div>
											<div className="tt-avlist-col tt-avlist-col-description">
												<div className="tt-avlist-description">
													{step.note}
												</div>
											</div>
											<div className="tt-avlist-col tt-avlist-col-info">
												<div className="tt-avlist-info">
													{step.tag}
												</div>
											</div>
										</div>
									</a>
								))}
							</div>

						</div>
					</div>



					
					<div className="tt-section padding-bottom-xlg-120">
      						<div className="tt-section-inner tt-wrap">

							
      								<div className="tt-heading tt-heading-xlg tt-heading-center">
      								<h3 className="tt-heading-subtitle tt-anim-lines">( No boring hellos )</h3>
      								<h2 className="tt-heading-title">
      									<a href="/lets-get-weird" className="tt-anim-characters" data-cursor="Let's<br>Get Weird">Let&apos;s Get Weird — Bring the Brief</a>
      								</h2> 
      								<p className="tt-anim-lines">Serious software. Weird desk. Boards trust the stack.</p>
      							</div>
							

      						</div> 
      					</div>
					


      				</div>
    </>
  );
}
