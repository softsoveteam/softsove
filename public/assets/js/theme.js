/* =================================================================
* Template JS
* 
* Template:    Hektor - Creative Agency and Portfolio HTML Website Template
* Author:      Themetorium
* URL:         https://themetorium.net/
*
==================================================================== */


// Table of Content
// =================
//
// Detect touch device
// Page transitions
// Scroll smoother (GSAP ScrollSmoother)
// Header
// Main menu
// Page header
// tt-Grid 
// Portfolio grid
// Portfolio list
// Portfolio slider (full screen)
// Portfolio scrolling
// Fancybox (lightbox plugin)
// GSAP ScrollTrigger plugin
// Contact form
// Scroll between anchors smoothly
// Scroll to top button
// Defer videos
// Magic cursor 
// Miscellaneous




(function ($) {
	'use strict';



	// ==============================================
	// Detect touch device (do not remove!!!)
	// Info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile_device_detection
	// ==============================================

	var tt_isMobile = false;
	if ("maxTouchPoints" in navigator) {
		tt_isMobile = navigator.maxTouchPoints > 0;
	} else if ("msMaxTouchPoints" in navigator) {
		tt_isMobile = navigator.msMaxTouchPoints > 0;
	} else {
		const mQ = matchMedia?.("(pointer:coarse)");
		if (mQ?.media === "(pointer:coarse)") {
			tt_isMobile = !!mQ.matches;
		} else if ("orientation" in window) {
			tt_isMobile = true; // deprecated, but good fallback
		} else {
			// Only as a last resort, fall back to user agent sniffing
			tt_isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini|Tablet|Mobile/i.test(navigator.userAgent);
	  }
	}

	// Add class "is-mobile" to </body>
	if (tt_isMobile) {
		$("body").addClass("is-mobile");
	}



	// =========================================
	// Page transitions
	// =========================================

	if ($("body").hasClass("tt-transition")) {

		let $tt_pageTransition = $("#tt-page-transition");
		let $tt_marpLoader = $(".tt-marp-loader");
		let $tt_marpCols = $(".tt-marp-col");
		let $tt_marpPct = $(".tt-marp-pct");

		let $tt_ptrDuration = 0.7; // Animation duration


		function ttMarpSetPct(value) {
			if ($tt_marpPct.length) {
				$tt_marpPct.text(String(Math.max(0, Math.min(100, Math.round(value)))).padStart(2, "0"));
			}
		}

		// Page transitions In 
		// ====================
		function ttAnimateTransitionIn() {
			let tl_transitIn = gsap.timeline({ defaults: { duration: $tt_ptrDuration, ease: "expo.inOut" }});
			if ($tt_pageTransition.length) {
				tl_transitIn.set($tt_pageTransition, { autoAlpha: 1, visibility: "visible" });
				tl_transitIn.set($tt_marpLoader, { autoAlpha: 1 });
				ttMarpSetPct(0);
				tl_transitIn.fromTo($tt_marpCols, { yPercent: 110 }, {
					yPercent: 0,
					duration: 0.7,
					stagger: { each: 0.04, from: "center" },
					ease: "expo.out"
				}, 0);
			}
		}


		// Page transitions Out
		// =====================
		function ttAnimateTransitionOut() {
			let tl_transitOut = gsap.timeline({ defaults: { duration: $tt_ptrDuration, ease: "expo.inOut" }});
			if ($tt_pageTransition.length) {
				const pct = { n: 0 };
				tl_transitOut.set($tt_pageTransition, { autoAlpha: 1, visibility: "visible" });
				tl_transitOut.set($tt_marpLoader, { autoAlpha: 1 });
				tl_transitOut.set($tt_marpCols, { yPercent: 0 });
				tl_transitOut.to(pct, {
					n: 100,
					duration: 1.05,
					ease: "power2.inOut",
					onUpdate: function () { ttMarpSetPct(pct.n); }
				}, 0);
				tl_transitOut.to($tt_marpCols, {
					yPercent: function (i) { return i % 2 === 0 ? -110 : 110; },
					duration: 0.85,
					stagger: 0.045,
					ease: "expo.inOut"
				}, 0.95);
				tl_transitOut.to($tt_marpLoader, { autoAlpha: 0, duration: 0.2 }, 1.55);
				tl_transitOut.set($tt_pageTransition, { autoAlpha: 0, visibility: "hidden" });
			}

				
			// Animate text characters
			// ------------------------
			document.fonts.ready.then(() => {
				const tt_phCharsSelector = $(".ph-caption-title, .tt-posl-item-title a, .tt-404-error-title, .ph-anim-characters");

				tt_phCharsSelector.each(function() {
					const $this = $(this);

					// Temporarily disable clicks if it's a link
					if ($this.is("a")) { $this.css("pointer-events", "none"); }

					// Get all .tt-text-image elements (if used) as a native array for GSAP
					const $images = $this.find('.tt-text-image');
					const imageElements = $images.toArray();

					// splitText
					const split = new SplitText($this, {
						type: "chars, words",
						wordsClass: "tt-word",
						charsClass: "tt-char",
						autoSplit: true
					});

					// Merge text characters and image elements for GSAP
					const allElements = [...split.chars, ...imageElements];

					// Animations
					gsap.set(allElements, { willChange: "opacity, transform" });
					gsap.from(allElements, {
						duration: 0.5,
						scale: 0.5,
						y: "random([50, -50])",
						rotation: "random([10, -10])",
						autoAlpha: 0,
						delay: 1.3,
						overwrite: "auto",
						ease: "power2.out",
						stagger: {
							amount: 0.4,
							from: "random"
						},
						onComplete: () => {
							// Remove splitText wraps and restore the element's original markup (except ".tt-text-image").
							const $wrappers = $this.find('.tt-word, .tt-char');
							$wrappers.each(function() {
								const $wrap = $(this);
								$wrap.replaceWith($wrap.text());
							});
							$this[0].normalize();

							// Restore clicks after animation
							if ($this.is("a")) $this.css("pointer-events", "auto");
						}
					});
				});
			});


			// Animate text lines
			// Info: It also adapts if the text uses <br> tags.
			// -------------------
			document.fonts.ready.then(() => {
				const tt_phLineSelector = $(".ph-caption-subtitle, .ph-caption-description, .tt-404-error-subtitle, .tt-404-error-description, .ph-anim-lines");

				tt_phLineSelector.each(function() {
					const $this = $(this);

					// Remove <br> (if exists) on small screens
					if ($this.find("br").length > 0) {
						const originalHTML = $this.html(); // Save original HTML with <br>
						function handleBR() {
							if ($(window).width() <= 768) { 
								$this.find("br").remove(); // Remove <br>
							} else {
								$this.html(originalHTML); // Restore original HTML with <br>
							}
						}
						handleBR();
						$(window).on("resize", handleBR);
					}

					// Temporarily disable clicks if it's a link
					if ($this.is("a")) { $this.css("pointer-events", "none"); }

					// splitText
					SplitText.create($this, {
						type: "lines", 
						mask: "lines",
						linesClass: "tt-line",
						autoSplit: true,
						onSplit(self) {
							// Prepare characters for animation
							gsap.set(self.lines, { willChange: "opacity, transform" });

							// Animations
							gsap.from(self.lines, {
								duration: 0.5, 
								yPercent: 100, 
								stagger: 0.1, 
								delay: 2,
								overwrite: "auto",
								ease: "power2.out",
								onComplete: () => {
									// Remove splitText wraps and restore the element's original markup.
									self.revert();

									// Restore clicks after animation
									if ($this.is("a")) $this.css("pointer-events", "auto");
								}
							});
						}
					});

				});
			});


			// Animate other elements
			// -----------------------

			// Header
			if ($("#tt-header").length) {
				gsap.from(".tt-header-inner", { duration: 1, y: -20, autoAlpha: 0, delay: 1.5, ease: "power2.out", clearProps:"all" });
			}

			// Page header caption categories
			if ($(".ph-caption-categories").length) {
				gsap.from(".ph-caption-categories", { duration: 0.5, y: 20, autoAlpha: 0, delay: 1.9, ease: "power2.out", clearProps:"all" });
			}

			// Page header caption meta
			if ($(".ph-caption-meta").length) {
				gsap.from(".ph-caption-meta", { duration: 1.2, y: 20, autoAlpha: 0, delay: 2.1, ease: "power2.out", clearProps:"all" });
			}

			// Page header project info list
			if ($(".ph-caption").find(".tt-project-info-list").length) {
				gsap.from($(".tt-project-info-list > ul > li"), { duration: 0.5, y: 20, autoAlpha: 0, stagger: 0.1, delay: 2, ease: "power2.out", clearProps:"all" });
			}

			// Page header buttons
			if ($(".ph-caption").find(".tt-btn").length) {
				gsap.from(".ph-caption .tt-btn", { duration: 1.2, y: 20, autoAlpha: 0, delay: 2.5, ease: "power2.out", clearProps:"all" });
			}

			// Page header image/video
			if ($(".ph-image, .ph-video").length) {
				gsap.from(".ph-image img, .ph-video video", { duration: 1.2, scale: 1.2, delay: 0.7, ease: "power2.out", clearProps:"all" });
			}

			// Page header share buttons
			if ($(".ph-share").length) {
				gsap.from($(".ph-share-inner"), { duration: 0.5, y: 20, autoAlpha: 0, stagger: 0.1, delay: 1.7, ease: "power2.out", clearProps:"all" });
			}

			// Social buttons
			if ($(".ph-social, .tt-portfolio-slider .tt-social-buttons").length) {
				gsap.from($(".ph-social .tt-social-buttons > ul > li, .tt-portfolio-slider .tt-social-buttons > ul > li"), { duration: 0.5, y: 20, autoAlpha: 0, stagger: 0.1, delay: 1.7, ease: "power2.out", clearProps:"all" });
			}

			// Scroll down button, portfolio slider navigation/pagination
			if ($(".tt-scroll-down, .tt-posl-nav-prev, .tt-posl-nav-next, .tt-posl-pagination").length) {
				gsap.from($(".tt-sd-inner, .tt-posl-nav-prev, .tt-posl-nav-next, .tt-posl-pagination"), { duration: 0.5, y: 80, autoAlpha: 0, delay: 1.7, ease: "power2.out", clearProps:"all" });
			}

			// Portfolio slider image/video
			if ($(".tt-posl-image-wrap").length) {
				gsap.from(".swiper-slide-active .tt-posl-image-wrap img, .swiper-slide-active .tt-posl-image-wrap video", { duration: 1.2, scale: 1.2, delay: 0.7, ease: "power2.out", clearProps:"all" });
			}

			// Portfolio slider item categories
			if ($(".tt-posl-item-categories-wrap").length) {
				gsap.from(".swiper-slide-active .tt-posl-item-categories-wrap", { duration: 1.5, y: 20, autoAlpha: 0, delay: 0.7, ease: "power2.out", clearProps:"all" });
			}

			// Portfolio slider button
			if ($(".tt-posl-item-caption").find(".tt-btn").length) {
				gsap.from(".swiper-slide-active .tt-posl-item-caption .tt-btn", { duration: 1.5, y: 20, autoAlpha: 0, delay: 2.5, ease: "power2.out", clearProps:"all" });
			}

			// 404 page buttons
			if ($(".tt-404-error").find(".tt-btn").length) {
				gsap.from(".tt-404-error .tt-btn", { duration: 1.2, y: 20, autoAlpha: 0, delay: 2.5, ease: "power2.out", clearProps:"all" });
			}

			// Animate the portfolio carousel when it is in the viewport (only for full-height carousel!)
			const $pciFull = $(".tt-portfolio-carousel.tt-pci-full");
			$pciFull.each(function () {
				const el = this;
				const rect = el.getBoundingClientRect();
				const elementHeight = rect.height;
				const visibleTop = Math.max(rect.top, 0);
				const visibleBottom = Math.min(rect.bottom, window.innerHeight);
				const visibleHeight = Math.max(0, visibleBottom - visibleTop);
				const visibilityRatio = visibleHeight / elementHeight;

				// Run animation only if at least 50% of the element is visible
				if (visibilityRatio >= 0.5) {
					gsap.from(el, {
						duration: 1.5,
						y: 60,
						autoAlpha: 0,
						delay: 1,
						ease: "power2.out",
						clearProps: "all"
					});
				}
			});

		}

		// Force the page to reload on the browser by clicking the "Back" button
		window.onpageshow = function (event) {
			if (event.persisted) {
				window.location.reload();
			}
		}

	   // Optimize event handling (on link click)
		$("a")
			.not('.no-transition') // omit from selection.
			.not('[target="_blank"]') // omit from selection.
			.not('[href^="#"]') // omit from selection.
			.not('[href^="mailto"]') // omit from selection.
			.not('[href^="tel"]') // omit from selection.
			.not('[data-fancybox]') // omit from selection
			.not('.tt-btn-disabled') // omit from selection
			.not('.tt-submenu-trigger > a[href=""]') // omit from selection
			.not('.ttgr-cat-classic-item a') // omit from selection
			.not('.ttgr-cat-item a') // omit from selection
			.on('click', function(e) {
				e.preventDefault();
				setTimeout((url) => {
					window.location = url;
				}, $tt_ptrDuration * 2000, this.href);
			
			ttAnimateTransitionIn();
		});

		// Animations on page load
		setTimeout(function() {
			ttAnimateTransitionOut();
		}, 100);
	}



	// ============================================================
	// Scroll smoother (GSAP ScrollSmoother)
	// More info: https://gsap.com/docs/v3/Plugins/ScrollSmoother/
	// ============================================================

	if ($("body").hasClass("tt-smooth-scroll")) {
		if(!tt_isMobile) { // No effect on mobile devices!
			var tt_Smoother = ScrollSmoother.create({ 
				content: "#tt-content-wrap", // the element containing all of your HTML content.
				smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position.
				effects: true, // looks for data-smoother-speed and data-smoother-lag attributes on elements.
				effectsPrefix: "smoother-", // DO NOT REMOVE! Custom prefix for effects data attributes like "data-smoother-speed" and "data-smoother-lag" (https://gsap.com/docs/v3/Plugins/ScrollSmoother/#effectsPrefix).
			});
		}
	}



	// ===================================================
	// Header
	// ===================================================

	// Move "tt-header" out of "tt-content-wrap"
	// Expl: Since GSAP ScrollSmoother doesn't support element fixed position inside "tt-content-wrap" move the "tt-header" out of it.
	// ==========================================
	if ($("#tt-header").is(".tt-header-fixed, .tt-header-scroll")) {
		$("#tt-header").prependTo( $("#body-inner"));
	}

	// Add class to <body>
	if ($("#tt-header").hasClass("tt-header-fixed")) {
		$("body").addClass("tt-header-fixed-on");
	}

	if ($("#tt-header").hasClass("tt-header-scroll")) {
		$("body").addClass("tt-header-scroll-on");
	}
	
	// Sticky header: stay pinned and animate the filled bar in after the hero.
	// ========================================================================
	let tt_Header = $("#tt-header");
	const ttHeaderStickyAt = 72;

	function ttGetScrollTop() {
		if (typeof ScrollSmoother !== "undefined") {
			const smoother = ScrollSmoother.get();
			if (smoother) return smoother.scrollTop();
		}
		return window.scrollY || $(window).scrollTop() || 0;
	}

	function ttUpdateStickyHeader() {
		if (!tt_Header.hasClass("tt-header-filled")) return;
		if (!(tt_Header.hasClass("tt-header-scroll") || tt_Header.hasClass("tt-header-fixed"))) return;

		const st = ttGetScrollTop();
		if (st > ttHeaderStickyAt) {
			if (!tt_Header.hasClass("tt-filled")) {
				tt_Header.addClass("tt-filled tt-header-sticky-in");
			}
		} else {
			tt_Header.removeClass("tt-filled tt-header-sticky-in");
		}
	}

	$(window).on("scroll", ttUpdateStickyHeader);
	if (typeof ScrollTrigger !== "undefined") {
		ScrollTrigger.create({
			start: 0,
			end: "max",
			onUpdate: ttUpdateStickyHeader
		});
	}
	ttUpdateStickyHeader();


	// Style switch
	// =============
	// Note. Add the class "tt-dark-mode-default" to the <body> tag of your HTML page to enable dark mode by default (you must clear your browser's cookies and cache to see the changes!).

	if (!$("#tt-mode-blast").length) {
		$("body").append('<div id="tt-mode-blast" aria-hidden="true"><div class="tt-mode-blast-fill"></div></div>');
	}

	const $modeBlast = $("#tt-mode-blast");
	const $modeFill = $modeBlast.find(".tt-mode-blast-fill");
	let ttModeBlasting = false;

	// Style switch button
	$(".tt-style-switch").on("click", function() {
		$(this).toggleClass("active");
	});

	// Check for saved 'tt-dark-mode-on' in localStorage
	let darktMode = localStorage.getItem('tt-dark-mode-on'); 

	// Define enable and disable functions for dark mode
	function enableDarkMode() {
		$('body').addClass('tt-dark-mode-on');
		localStorage.setItem('tt-dark-mode-on', 'enabled');
	}

	function disableDarkMode() {
		$('body').removeClass('tt-dark-mode-on');
		localStorage.setItem('tt-dark-mode-on', 'disabled');  // Save disabled state
	}

	function ttModeBlastEndRadius(x, y) {
		const w = window.innerWidth;
		const h = window.innerHeight;
		return Math.hypot(Math.max(x, w - x), Math.max(y, h - y));
	}

	function ttApplyMode(goingDark) {
		if (goingDark) {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	}

	function ttModeOrigin(event) {
		const switchEl = document.querySelector(".tt-style-switch-inner") ||
			document.querySelector(".tt-style-switch") ||
			(event.currentTarget && event.currentTarget.getBoundingClientRect ? event.currentTarget : null);
		const rect = switchEl.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top + rect.height / 2;
		return {
			x: x,
			y: y,
			startR: Math.max(rect.width, rect.height) / 2,
			endR: ttModeBlastEndRadius(x, y) + 24
		};
	}

	function ttFinishModeBlast() {
		$modeBlast.removeClass("is-on");
		$("html").removeClass("tt-mode-vt");
		$("body").removeClass("tt-mode-blasting");
		ttModeBlasting = false;
	}

	function ttRunModeBlast(event, goingDark) {
		const origin = ttModeOrigin(event);
		const fromClip = "circle(" + origin.startR + "px at " + origin.x + "px " + origin.y + "px)";
		const toClip = "circle(" + origin.endR + "px at " + origin.x + "px " + origin.y + "px)";

		$("body").addClass("tt-mode-blasting");

		if (typeof document.startViewTransition === "function") {
			$("html").addClass("tt-mode-vt");
			const transition = document.startViewTransition(function () {
				ttApplyMode(goingDark);
			});
			transition.ready.then(function () {
				document.documentElement.animate(
					{ clipPath: [fromClip, toClip] },
					{
						duration: 520,
						easing: "cubic-bezier(0.22, 1, 0.36, 1)",
						pseudoElement: "::view-transition-new(root)"
					}
				);
			}).catch(function () {
				ttApplyMode(goingDark);
				ttFinishModeBlast();
			});
			transition.finished.finally(function () {
				ttFinishModeBlast();
			});
			return;
		}

		const dest = goingDark ? "#16171a" : "#e9e6de";
		const fill = $modeFill[0];
		$modeBlast.addClass("is-on");
		ttApplyMode(goingDark);
		gsap.killTweensOf(fill);
		gsap.set(fill, {
			clearProps: "transform,scale,x,y,xPercent,yPercent,width,height,left,top,boxShadow",
			backgroundColor: dest,
			opacity: 0.28,
			clipPath: fromClip
		});
		gsap.to(fill, {
			clipPath: toClip,
			opacity: 0,
			duration: 0.45,
			ease: "power3.out",
			onComplete: ttFinishModeBlast
		});
	}

	// Check if dark mode should be enabled by default
	if ($('body').hasClass('tt-dark-mode-default') && darktMode !== 'enabled') {
		enableDarkMode();
	}

	// Apply saved dark mode state if it was enabled previously
	if (darktMode === 'enabled') {
		enableDarkMode();
	} else if (darktMode === 'disabled') {
		disableDarkMode();
	}

	// Toggle dark mode on button click
	$('.tt-style-switch').on('click', function(event) {
		if (ttModeBlasting) return;
		darktMode = localStorage.getItem('tt-dark-mode-on');
		const goingDark = darktMode !== 'enabled';

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			if (goingDark) {
				enableDarkMode();
			} else {
				disableDarkMode();
			}
			return;
		}

		ttModeBlasting = true;
		ttRunModeBlast(event, goingDark);
	});



	// ==================================================
	// Main menu (classic)
	// ==================================================

	// Add class to <body> if mobile menu is active.
	function ttMobileMenuIsActive() {
		$("body").toggleClass("tt-m-menu-on", window.matchMedia("(max-width: 1024px)").matches);
	}
	ttMobileMenuIsActive();
	$(window).on("resize", ttMobileMenuIsActive);


	// Sub menus
	// ==========

	// Open submenu on hover
	$(".tt-submenu-wrap").on("mouseenter", function() {
		$(this).addClass("tt-submenu-open");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-submenu-open");
	});

	// Prevent submenu trigger click if href is emty or contains # or #0
	$(".tt-submenu-trigger > a").on("click", function(e) {
		let href = $(this).attr("href");
		if (!href || href === "#" || href === "#0") {
			e.preventDefault();
		}
	});

	// Only for desktop menu
	if (!$("body").hasClass("tt-m-menu-on")) {

		// Keeping sub-menus inside screen (useful if multi level sub-menus are used). No effect on mobile menu!
		let $window = $(window);
		let $submenuTrigger = $(".tt-submenu-trigger").parent();
		$submenuTrigger.on("mouseenter", function() {
			let $ttSubMenu = $(this).children(".tt-submenu");
			let ttSubMenuPos = $ttSubMenu.offset();

			if (ttSubMenuPos.left + $ttSubMenu.outerWidth() > $window.width()) {
				let ttSubMenuNewPos = -$ttSubMenu.outerWidth();
				$ttSubMenu.css({ left: ttSubMenuNewPos });
			}
		});

		// Disable first click on touch devices (no effect on mobile menu!)
		if (tt_isMobile) {
			const ttSubmenuTriggers = $(".tt-submenu-trigger > a");

			ttSubmenuTriggers.each(function() {
				const href = $(this).attr("href");
				if (href && href !== "#" && href !== "#0") {
					$(this).closest(".tt-submenu-trigger").addClass("tt-no-first-click");
				}
			});

			$(document).on("click", function(e) {
				const tt_mmTarget = $(e.target);
				const ttNoFirstClick = tt_mmTarget.closest(".tt-no-first-click");
				const ttSubmenuOpen = tt_mmTarget.closest(".tt-submenu-open");

				if (ttNoFirstClick.length) {
					ttNoFirstClick.removeClass("tt-no-first-click");
					e.preventDefault();
				} else if (!ttSubmenuOpen.length) {
					ttSubmenuTriggers.closest(".tt-submenu-trigger").addClass("tt-no-first-click");
				}
			});
		}

	}


	// Mobile menu (for classic menu)
	// ===============================

	// Open/close mobile menu on toggle button click
	$("#tt-m-menu-toggle-btn-wrap").on("click", function() {
		$("html").toggleClass("tt-no-scroll");
		$("body").toggleClass("tt-m-menu-open").addClass("tt-m-menu-active");
		if ($("body").hasClass("tt-m-menu-open")) {

			// Disable toggle button click until the animations last.
			$("body").addClass("tt-m-menu-toggle-no-click");

			// Menu animationIn
			let tl_mMenuIn = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("tt-m-menu-toggle-no-click"); 
				}
			});

				tl_mMenuIn.to(".tt-main-menu", { duration: 0.4, autoAlpha: 1 });
				tl_mMenuIn.from(".tt-main-menu-content > ul > li", { duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05, ease: "power2.out", clearProps:"all" });

			// Mobile submenu accordion
			$('.tt-submenu-trigger > a[href="#"], .tt-submenu-trigger > a[href="#0"], .tt-submenu-trigger > a[href=""]').parent(".tt-submenu-trigger").append('<span class="tt-submenu-trigger-m"></span>'); // if href contains #
			$(".tt-submenu-trigger").append('<span class="tt-m-caret"></span>');

			$(".tt-submenu-trigger-m, .tt-m-caret").on("click", function() {
				let $this = $(this).parent();
				if ($this.hasClass("tt-m-submenu-open")) {
					$this.removeClass("tt-m-submenu-open");
					$this.next().slideUp(350);
				} else {
					$this.parent().parent().find(".tt-submenu").prev().removeClass("tt-m-submenu-open");
					$this.parent().parent().find(".tt-submenu").slideUp(350);
					$this.toggleClass("tt-m-submenu-open");
					$this.next().slideToggle(350);
				}
			});

			// On menu link click
			$(".tt-main-menu a, .tt-logo a")
			.not('[target="_blank"]') // omit links that open in a new tab
			.not('[href="#"]') // omit dummy links
			.not('[href^="mailto"]') // omit mailto links
			.not('[href^="tel"]') // omit tel links
			.on('click', function() {
				let tl_mMenuClick = gsap.timeline({
					onComplete: function() { 
						$("body").removeClass("tt-m-menu-open tt-m-menu-active");
						$("html").removeClass("tt-no-scroll");

				       // Close submenus if they are open
						if ($(".tt-submenu-trigger").hasClass("tt-m-submenu-open")) {
							$(".tt-submenu").slideUp(350);
							$(".tt-submenu-trigger").removeClass("tt-m-submenu-open");
						}
					}
				});
				tl_mMenuClick.to(".tt-main-menu-content > ul > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: "power2.in" });
				tl_mMenuClick.to(".tt-main-menu", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "+=0.2");
				tl_mMenuClick.set(".tt-main-menu-content > ul > li", { clearProps:"all" });
			});

			// Close mobile menu if orientation change
			function ttCloseMobileMenu() {
				$("html").removeClass("tt-no-scroll");
				$("body").removeClass("tt-m-menu-open");
				$(".tt-submenu").slideUp(0);
				$(".tt-submenu-trigger").removeClass("tt-m-submenu-open");
				$(".tt-submenu-wrap").removeClass("tt-submenu-open");
				gsap.set(".tt-main-menu, .tt-main-menu-content > ul > li", { clearProps: "all" });
			}
			$(window).on("orientationchange", ttCloseMobileMenu); // Close mobile menu on orientation change (for mobile view)
			
			$(window).on("resize", function() { // Close mobile menu on resize (for desktop view)
				if (window.matchMedia("(min-width: 1025px)").matches) {
					ttCloseMobileMenu();
				}
			});

		} else {	

			// Disable toggle button click until the animations last.
			$("body").addClass("tt-m-menu-toggle-no-click");

			// Menu animationOut
			let tl_mMenuOut = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("tt-m-menu-toggle-no-click tt-m-menu-active");

					// Close submenus if open
					if ($(".tt-submenu-trigger").hasClass("tt-m-submenu-open")) {
						$(".tt-submenu").slideUp(350);
						$(".tt-submenu-trigger").removeClass("tt-m-submenu-open");
					}
				}
			});
			tl_mMenuOut.to(".tt-main-menu-content > ul > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: "power2.in" });
			tl_mMenuOut.to(".tt-main-menu", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "+=0.2");
			tl_mMenuOut.set(".tt-main-menu-content > ul > li", { clearProps:"all" });
		}

		return false;
	});



	// ================================================================
	// Page header
	// ================================================================

	const $ttPageHeader = $("#page-header");

	if ($ttPageHeader.length) {

		// Add classes to <body>
		$("body").addClass("page-header-on");

		if ($ttPageHeader.hasClass("ph-full")) {
			$("body").addClass("ph-full-on");
		}

		if ($ttPageHeader.hasClass("ph-full-m")) {
			$("body").addClass("ph-full-m-on");
		}

		if ($ttPageHeader.hasClass("ph-center")) {
			$("body").addClass("ph-center-on");
		}

		if ($(".ph-image").length) {
			$("body").addClass("ph-image-on");
		}

		if ($(".ph-video").length) {
			$("body").addClass("ph-video-on");
		}

		if ($ttPageHeader.hasClass("ph-bg-is-light")) {
			if ($(".ph-image").length || $(".ph-video").length) { 
				$("body").addClass("ph-bg-is-light-on");
			}
		}


		// If page header is visible on viewport 
		// ======================================
		ScrollTrigger.create({
			trigger: $ttPageHeader,
			start: "top bottom",
			end: "bottom top",
			scrub: true,
			// markers: true,
			onLeave: () => toggleBodyClass(false),
			onEnter: () => toggleBodyClass(true),
			onLeaveBack: () => toggleBodyClass(false),
			onEnterBack: () => toggleBodyClass(true),
		});

		function toggleBodyClass(isVisible) {
			$("body").toggleClass("tt-ph-visible", isVisible);
		}


		// Page header image/video parallax
		// =================================
		const $phBgMedia = $(".ph-image, .ph-video");
		if ($phBgMedia.length && $ttPageHeader.hasClass("ph-image-parallax")) {
			gsap.to(".ph-image-inner, .ph-video-inner", { 
				yPercent: 30,
				ease: "none",
				scrollTrigger: {
					trigger: $ttPageHeader, 
					start: 'top top', 
					end: 'bottom top', 
					scrub: true,
					// markers: true
				}
			});
		}

		// Page header caption parallax
		// =============================
		const $phCaption = $(".ph-caption");
		if ($phCaption.length && $ttPageHeader.hasClass("ph-caption-parallax")) {
			gsap.to(".ph-caption-inner", { 
				// yPercent: 20,
				scale: 0.85,
				ease: "none",
				scrollTrigger: {
					trigger: $ttPageHeader, 
					start: 'top top', 
					end: 'bottom top', 
					scrub: true,
					// markers: true
				}
			});
		}

		// Page header scroll down, social, and share buttons parallax
		// ============================================================
		const $phScrItem = $(".tt-scroll-down, .ph-social, .ph-share");

		if ($phScrItem.length) {
			const $phScrWindow = $(window);
			const phScrTriggerHeight = $ttPageHeader.height();
			const phScrWindowHeight = $phScrWindow.height();

			// Function for fixd position and move elements outside of "#tt-content-wrap" (required by GSAP ScrollSmoother).
			function phScrItemFixed() {
				$phScrItem.css("position", "fixed");

				if ($("body").hasClass("tt-smooth-scroll")) {
					$phScrItem.appendTo("#body-inner");
				}
			}

			// Function for absolute position and move elements back to "#page-header".
			function phScrItemAbsolute() {
				$phScrItem.css("position", "absolute");

				if ($("body").hasClass("tt-smooth-scroll")) {
					$phScrItem.appendTo("#page-header");
				}

				phScrItemShowHide();
			}

			// Function for show and hide elements on scroll.
			function phScrItemShowHide() {
				ScrollTrigger.getById("phScrHide")?.kill(); // Prevent duplicate triggers

				gsap.to($phScrItem, { 
					scale: 0.8,
					autoAlpha: 0,
					ease: "none",
					scrollTrigger: {
						id: "phScrHide",
						trigger: $ttPageHeader,
						start: "75% top+=100",
						end: "85% top+=100",
						scrub: true,
						// markers: true
					}
				});
			}

			// The main logic for if the "#page-header" height is more than the window height.
			if (phScrTriggerHeight > phScrWindowHeight) {

				$("body").addClass("ph-oversized-on");
				$phScrItem.css("position", "fixed");

				gsap.to($phScrItem, { 
					ease: "none",
					scrollTrigger: {
						trigger: $ttPageHeader,
						start: "top bottom",
						end: "bottom bottom",
						// markers: true,
						onEnter: () => phScrItemFixed(),
						onLeave: () => phScrItemAbsolute(),
						onEnterBack: () => phScrItemFixed(),
						onLeaveBack: () => phScrItemAbsolute(),
					}
				});

			} else {
				phScrItemShowHide();
			}

		}


		// Page header image trail effect (on cursor move)
		// ===============================================

		if ($(".ph-image-trail").length) {
			if (!tt_isMobile) {

				const $body = $(document.body);

				if ($(".ph-image-trail").hasClass("ph-itr-full")) {
					var $tt_imtrTarget = $('#page-header'); // Mouse move element
				} else {
					var $tt_imtrTarget = $('.ph-caption'); // Mouse move element
				}

				// helper functions
				const MathUtils = {
					// linear interpolation
					lerp: (a, b, n) => (1 - n) * a + n * b,
					// distance between two points
					distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
				}

			    // get the mouse position
				const getMousePos = (ev) => {
					const pos = { x: 0, y: 0 };
					const e = ev.originalEvent || ev; // use originalEvent for jQuery event
					if (e.pageX || e.pageY) {
						pos.x = e.pageX;
						pos.y = e.pageY;
					} else if (e.clientX || e.clientY) {
						const docEl = document.documentElement;
						pos.x = e.clientX + $body.scrollLeft() + docEl.scrollLeft;
						pos.y = e.clientY + $body.scrollTop() + docEl.scrollTop;
					}
					return pos;
				}

				// mousePos: current mouse position
				// cacheMousePos: previous mouse position
				// lastMousePos: last recorded mouse position (at the time the last image was shown)
				let mousePos = { x: 0, y: 0 };
				let cacheMousePos = { x: 0, y: 0 };
				let lastMousePos = { x: 0, y: 0 };

				// update the mouse position
				$tt_imtrTarget.on('mousemove', (ev) => mousePos = getMousePos(ev));

				// gets the distance from the current mouse position to the last recorded mouse position
				const getMouseDistance = () => MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

				class Image {
					constructor(el) {
						this.$el = $(el);
						// image default styles
						this.defaultStyle = {
							scale: 1,
							x: 0,
							y: 0,
							opacity: 0
						};
						// get sizes/position
						this.getRect();
						// init/bind events
						this.initEvents();
					}
					initEvents() {
						// on resize get updated sizes/position
						$(window).on('resize', () => this.resize());
					}
					resize() {
						// reset styles
						gsap.set(this.$el, this.defaultStyle);
						// get sizes/position
						this.getRect();
					}
					getRect() {
						this.rect = this.$el[0].getBoundingClientRect();
					}
					isActive() {
						// check if image is animating or if it's visible
						return gsap.isTweening(this.$el[0]) || this.$el.css('opacity') != 0;
					}
				}

				class ImageTrail {
					constructor() {
						// images container
						this.$content = $('.ph-image-trail');
						// array of Image objs, one per image element
						this.images = [];
						this.$content.find('img').each((i, img) => this.images.push(new Image(img)));
						// total number of images
						this.imagesTotal = this.images.length;
						// upcoming image index
						this.imgPosition = 0;
						// zIndex value to apply to the upcoming image
						this.zIndexVal = 1;
						// mouse distance required to show the next image
						this.threshold = 180;
						// render the images
						requestAnimationFrame(() => this.render());
					}
					render() {
						// get distance between the current mouse position and the position of the previous image
						const distance = getMouseDistance();
						// cache previous mouse position
						cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
						cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

						// if the mouse moved more than [this.threshold] then show the next image
						if (distance > this.threshold) {
							this.showNextImage();
							this.zIndexVal++;
							this.imgPosition = (this.imgPosition < this.imagesTotal - 1) ? this.imgPosition + 1 : 0;
							lastMousePos = mousePos;
						}

						// check when mousemove stops and all images are inactive (not visible and not animating)
						let isIdle = this.images.every(img => !img.isActive());
			            // reset z-index initial value
						if (isIdle && this.zIndexVal !== 1) {
							this.zIndexVal = 1;
						}

						// loop..
						requestAnimationFrame(() => this.render());
					}
					showNextImage() {
						// show image at position [this.imgPosition]
						const img = this.images[this.imgPosition];
						// kill any tween on the image
						gsap.killTweensOf(img.$el[0]);

						gsap.timeline()
						// show the image
						.set(img.$el, {
							startAt: { opacity: 0, scale: 1 },
							opacity: 1,
							scale: 1,
							zIndex: this.zIndexVal,
							x: cacheMousePos.x - img.rect.width / 2,
							y: cacheMousePos.y - img.rect.height / 2
						})
						// animate position
						.to(img.$el, { duration: 0.9, ease: "expo.out", x: mousePos.x - img.rect.width / 2, y: mousePos.y - img.rect.height / 2 })
						// then make it disappear
						.to(img.$el, { duration: 1, ease: "power1.out", opacity: 0 }, 0.4)
						// scale down the image
						.to(img.$el, { duration: 1, ease: "quint.out", scale: 0.1 }, 0.4);
					}
				}

				// Preload images
				const preloadImages = () => {
					const $imgs = $('.ph-itr-img');
					let loadedCount = 0;

					return new Promise((resolve) => {
						if ($imgs.length === 0) {
							resolve(); // no images to load
							return;
						}

						$imgs.each(function () {
							const img = this;

							if (img.complete && img.naturalWidth !== 0) {
								loadedCount++;
								if (loadedCount === $imgs.length) resolve();
							} else {
								$(img).on('load error', () => {
									loadedCount++;
									if (loadedCount === $imgs.length) resolve();
								});
							}
						});
					});
				};

				// And then..
				preloadImages().then(() => {
					new ImageTrail();
				});

			}
		}

	}



	// ================================================================
	// tt-Grid 
	// ================================================================

	if ($(".tt-grid").length) {
		$(".tt-grid").each(function () {
			const ttGrid = $(this);
			const ttGridFilter = ttGrid.find(".tt-grid-filter");
			const ttGridFilterBtn = ttGridFilter.find(".tt-btn");
			const ttGridItem = gsap.utils.toArray(ttGrid.find(".tt-grid-item"));
			const ttGridList = ttGrid.find(".tt-grid-list")[0];

			let ttGridDuration = 0.4;

			// Get max columns from class
			// ===========================
			let ttGridMaxCols = 2;
			if (ttGrid.hasClass("tt-grid-col-3")) ttGridMaxCols = 3;
			else if (ttGrid.hasClass("tt-grid-col-4")) ttGridMaxCols = 4;
			else if (ttGrid.hasClass("tt-grid-col-5")) ttGridMaxCols = 5;
			else if (ttGrid.hasClass("tt-grid-col-6")) ttGridMaxCols = 6;

			// Force to two columns on small screens (use class "tt-grid-col-2-m" if needed)
			const ttGridMobileMinCols = ttGrid.hasClass("tt-grid-col-2-m") ? 2 : 1;

			// Masonry calculation function
			// =============================
			function tt_gridApplyMasonry() {
				const ttGridColWidth = ttGridList.getBoundingClientRect().width;
				let cols = Math.floor(ttGridColWidth / 340);
				cols = Math.max(ttGridMobileMinCols, Math.min(ttGridMaxCols, cols));
				const columnHeights = new Array(cols).fill(0);
				const colWidth = 100 / cols;

				const visibleItems = ttGridItem.filter(item => item.style.display !== "none");

				visibleItems.forEach(item => {
					const minHeight = Math.min(...columnHeights);
					const columnIndex = columnHeights.indexOf(minHeight);

					item.style.position = "absolute";
					item.style.top = `${minHeight}px`;
					item.style.left = `${columnIndex * colWidth}%`;
					item.style.width = `${colWidth}%`;

					columnHeights[columnIndex] += item.getBoundingClientRect().height;
				});

				ttGridList.style.position = "relative";
				ttGridList.style.height = `${Math.max(...columnHeights)}px`;
			}

			// Scroll appear function
			// =======================
			function tt_setupAppear(items) {
				if (!ttGrid.hasClass("tt-grid-appear")) return;

				const ttGridColWidth = ttGridList.getBoundingClientRect().width;

				items.forEach(item => {
					if (item.style.display === "none") return;

					const inner = $(item).find(".tt-grid-item-inner")[0];
					if (!inner) return;

					// Skip if GSAP is currently animating this element — prevents
					// overwriting opacity mid-tween (e.g. during filter onEnter stagger)
					if (gsap.isTweening(inner)) return;

					// Kill any existing ScrollTrigger on this inner element
					ScrollTrigger.getAll()
						.filter(st => st.trigger === inner)
						.forEach(st => st.kill());

					const rect = inner.getBoundingClientRect();
					const alreadyVisible = rect.top < window.innerHeight;

					if (alreadyVisible) {
						// Already in viewport — make sure it's visible
						gsap.set(inner, { opacity: 1, y: 0 });
					} else {
						// Below viewport — hide and wait for scroll
						gsap.set(inner, { opacity: 0, y: 60 });
						ScrollTrigger.create({
							trigger: inner,
							start: "top 100%",
							once: true,
							onEnter: () => {
								const posX = item.offsetLeft;
								const rowDelay = (posX / ttGridColWidth) * ttGridDuration;
								gsap.to(inner, {
									opacity: 1,
									y: 0,
									duration: ttGridDuration,
									delay: rowDelay,
									ease: "power2.out",
									overwrite: "auto"
								});
							}
						});
					}
				});
			}

			// Reset inner elements before filter animation to prevent snap/conflict with appear
			// ==================================================================================
			function tt_resetAppear() {
				if (!ttGrid.hasClass("tt-grid-appear")) return;

				ttGridItem.forEach(item => {
					const inner = $(item).find(".tt-grid-item-inner")[0];
					if (!inner) return;
					ScrollTrigger.getAll()
						.filter(st => st.trigger === inner)
						.forEach(st => st.kill());
					gsap.set(inner, { clearProps: "opacity,y" });
				});
			}

			// Filter scroll to top function
			// ==============================
			// Handles smart scrolling to the grid filter. Triggers a smooth scroll only if the user is further than 150px from the target position to avoid unnecessary movement.
			function tt_gridFilterScroll() {
				const ttGridTopY = ttGridFilter.offset().top - 70; // Set the offset.
				const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
				if (Math.abs(currentScroll - ttGridTopY) > 150) { // Set the buffer.
					$("html,body").stop().animate({ scrollTop: ttGridTopY }, 600); 
				}
			}

			// Check if Load More wrapper exists
			// ==================================
			const loadMoreWrap = ttGrid.find(".tt-grid-load-more");
			const hasLoadMore = loadMoreWrap.length > 0;

			// If Load More is not present, just show all items and initialize basic behavior
			// =============================
			if (!hasLoadMore) {
				ttGridItem.forEach(item => { item.style.display = "inline-grid"; });
				tt_gridApplyMasonry();
				tt_setupAppear(ttGridItem);

				if (ttGridFilterBtn.length) {
					ttGridFilterBtn.on("click", function (e) {
						e.preventDefault();

						const startHeight = gsap.getProperty(ttGridList, "height");

						ttGridFilterBtn.removeClass("tt-btn-secondary").addClass("tt-btn-accent");
						$(this).addClass("tt-btn-secondary").removeClass("tt-btn-accent");

						const filterValue = $(this).data("filter");
						const matchedItems = filterValue ? ttGrid.find(filterValue).toArray() : ttGridItem;

						const state = Flip.getState(ttGridItem, { props: "opacity, transform", simple: true });

						ttGridItem.forEach(item => {
							item.style.display = matchedItems.includes(item) ? "inline-grid" : "none";
						});

						tt_gridApplyMasonry();
						const endHeight = ttGridList.scrollHeight;

						const filterDuration = ttGridDuration;
						const filterStagger = 0.04;

						const flip = Flip.from(state, {
							duration: filterDuration,
							scale: true,
							ease: "power2.inOut",
							stagger: filterStagger,
							absolute: true,
							onEnter: elements => {
								gsap.set(elements, { opacity: 0, scale: 0.3, willChange: "opacity, transform" });
								return gsap.to(elements, {
									opacity: 1,
									scale: 1,
									duration: filterDuration,
									stagger: filterStagger,
									delay: filterDuration,
									onComplete: () => gsap.set(elements, { clearProps: "willChange" })
								});
							},
							onLeave: elements => {
								gsap.set(elements, { willChange: "opacity, transform" });
								return gsap.to(elements, { opacity: 0, scale: 0.3, duration: filterDuration });
							},
							onComplete: () => {
								ScrollTrigger.refresh();
								tt_setupAppear(ttGridItem);
							}
						});

						// Smoothly animate the container height in sync with the Flip
						gsap.set(ttGridList, { willChange: "height" });
						flip.fromTo(ttGridList, { height: startHeight }, {
							height: endHeight,
							duration: filterDuration,
							ease: "power2.inOut",
							onComplete: () => gsap.set(ttGridList, { clearProps: "willChange" })
						}, 0);

						// Reset scroll appear elements
						tt_resetAppear();

						// Scroll the page to the top
						tt_gridFilterScroll();
					});
				}

				window.addEventListener("resize", tt_gridApplyMasonry);
				return;
			}

			// Load more enabled
			// ==================
			const loadMoreBtn = loadMoreWrap.find(".tt-grlm-btn-wrap");
			const noMoreMsg = loadMoreWrap.find(".tt-grid-no-more-msg");
			const hasNoMoreMsg = noMoreMsg.length > 0;

			const DEFAULT_SHOW = 6;
			const DEFAULT_LOAD_MORE = 3;

			let showItems = parseInt(loadMoreWrap.attr('data-show-items'));
			let loadMoreItems = parseInt(loadMoreWrap.attr('data-load-more-items'));

			if (isNaN(showItems) || showItems <= 0) showItems = DEFAULT_SHOW;
			if (isNaN(loadMoreItems) || loadMoreItems <= 0) loadMoreItems = DEFAULT_LOAD_MORE;

			let currentFilter = null;
			let totalFilteredItems = 0;

			const filterVisibleCounts = {};
			const globallyLoadedItems = new Set();

			function getCurrentFilterKey() {
				return currentFilter || '*';
			}

			// Update visibility function
			// ===========================
			function updateVisibility() {
				const matchedItems = currentFilter
				? ttGrid.find(currentFilter).toArray()
				: ttGridItem;

				totalFilteredItems = matchedItems.length;
				const filterKey = getCurrentFilterKey();

				if (filterVisibleCounts[filterKey] === undefined) {
					filterVisibleCounts[filterKey] = Math.min(showItems, totalFilteredItems);
				} else {
					filterVisibleCounts[filterKey] = Math.min(filterVisibleCounts[filterKey], totalFilteredItems);
				}
				const visibleCount = filterVisibleCounts[filterKey];

				ttGridItem.forEach(item => {
					const isMatched = matchedItems.includes(item);
					if (!isMatched) {
						item.style.display = "none";
						return;
					}
					const index = matchedItems.indexOf(item);
					const shouldShow = index < visibleCount || globallyLoadedItems.has(item);
					item.style.display = shouldShow ? "inline-grid" : "none";
				});

				tt_gridApplyMasonry();
				updateLoadMoreButton();
			}

			// Update Load More button function
			// =================================
			function updateLoadMoreButton() {
				if (ttGridItem.length <= showItems) {
					loadMoreWrap.hide();
					return;
				}

				const filterKey = getCurrentFilterKey();
				const visibleCount = filterVisibleCounts[filterKey] || 0;
				const matchedItems = currentFilter
				? ttGrid.find(currentFilter).toArray()
				: ttGridItem;
				const notYetLoaded = matchedItems.filter((item, idx) => idx >= visibleCount && !globallyLoadedItems.has(item));
				const hasMore = notYetLoaded.length > 0;

				if (hasMore) {
					loadMoreWrap.show();
					loadMoreBtn.show();
					if (hasNoMoreMsg) noMoreMsg.hide();
				} else {
					if (hasNoMoreMsg) {
						loadMoreWrap.show();
						loadMoreBtn.hide();
						noMoreMsg.show();
					} else {
						loadMoreWrap.hide();
					}
				}
			}

			// Load More click handler
			// ========================
			loadMoreBtn.on('click', function (e) {
				e.preventDefault();

				const filterKey = getCurrentFilterKey();
				const visibleCount = filterVisibleCounts[filterKey] || 0;

				const matchedItems = currentFilter
				? ttGrid.find(currentFilter).toArray()
				: ttGridItem;

				const notYetLoaded = matchedItems.filter((item, idx) => idx >= visibleCount && !globallyLoadedItems.has(item));
				if (notYetLoaded.length === 0) return;

				const itemsToLoad = Math.min(loadMoreItems, notYetLoaded.length);
				const newItems = notYetLoaded.slice(0, itemsToLoad);

				// Capture state of only CURRENTLY VISIBLE items
				const visibleItems = ttGridItem.filter(item => item.style.display !== "none");
				const state = Flip.getState(visibleItems, { props: "opacity, transform", simple: true });

				// Make new items visible but transparent
				newItems.forEach(item => {
					item.style.display = "inline-grid";
					item.style.opacity = "0";
				});

				// Recalculate masonry
				tt_gridApplyMasonry();

				// Update counts and global set
				const lastNewItemIndex = matchedItems.indexOf(newItems[newItems.length - 1]);
				const newVisibleCount = Math.max(visibleCount, lastNewItemIndex + 1);
				filterVisibleCounts[filterKey] = newVisibleCount;
				newItems.forEach(item => globallyLoadedItems.add(item));

				// Animate existing items repositioning
				Flip.from(state, {
					duration: ttGridDuration,
					ease: "power2.inOut",
					scale: true,
					absolute: true,
					onComplete: () => {
						ScrollTrigger.refresh();
					}
				});

				// Animate new items in
				gsap.fromTo(newItems,
					{ opacity: 0, scale: 0.3, willChange: "opacity, transform" },
					{
						opacity: 1,
						scale: 1,
						duration: ttGridDuration,
						stagger: 0.04,
						ease: "power2.out",
						onComplete: () => {
							newItems.forEach(item => {
								item.style.opacity = '';
								item.style.willChange = '';
							});
							tt_setupAppear(newItems);
						}
					}
				);

				updateLoadMoreButton();
			});

			// Initialize
			// ===========
			(function initialize() {
				currentFilter = null;
				const initialVisible = Math.min(showItems, ttGridItem.length);
				filterVisibleCounts['*'] = initialVisible;
				updateVisibility();
				tt_setupAppear(ttGridItem);
			})();

			// Filter button click event
			// ==========================
			ttGridFilterBtn.on("click", function (e) {
				e.preventDefault();

				const startHeight = gsap.getProperty(ttGridList, "height");

				ttGridFilterBtn.removeClass("tt-btn-secondary").addClass("tt-btn-accent");
				$(this).addClass("tt-btn-secondary").removeClass("tt-btn-accent");

				const filterValue = $(this).data("filter");
				currentFilter = filterValue || null;
				const filterKey = getCurrentFilterKey();

				const matchedItems = currentFilter
				? ttGrid.find(currentFilter).toArray()
				: ttGridItem;
				totalFilteredItems = matchedItems.length;

				if (filterVisibleCounts[filterKey] === undefined) {
					filterVisibleCounts[filterKey] = Math.min(showItems, totalFilteredItems);
				} else {
					filterVisibleCounts[filterKey] = Math.min(filterVisibleCounts[filterKey], totalFilteredItems);
				}
				const visibleCount = filterVisibleCounts[filterKey];

				const state = Flip.getState(ttGridItem, {
					props: "opacity, transform",
					simple: true
				});

				ttGridItem.forEach(item => {
					const isMatched = matchedItems.includes(item);
					if (!isMatched) {
						item.style.display = "none";
						return;
					}
					const index = matchedItems.indexOf(item);
					const shouldShow = index < visibleCount || globallyLoadedItems.has(item);
					item.style.display = shouldShow ? "inline-grid" : "none";
				});

				tt_gridApplyMasonry();
				const endHeight = ttGridList.scrollHeight;

				const filterDuration = ttGridDuration;
				const filterStagger = 0.04;

				const flip = Flip.from(state, {
					duration: filterDuration,
					scale: true,
					ease: "power2.inOut",
					stagger: filterStagger,
					absolute: true,
					onEnter: elements => {
						gsap.set(elements, { opacity: 0, scale: 0.3, willChange: "opacity, transform" });
						return gsap.to(elements, {
							opacity: 1,
							scale: 1,
							duration: filterDuration,
							stagger: filterStagger,
							delay: filterDuration,
							onComplete: () => gsap.set(elements, { clearProps: "willChange" })
						});
					},
					onLeave: elements => {
						gsap.set(elements, { willChange: "opacity, transform" });
						return gsap.to(elements, { opacity: 0, scale: 0.3, duration: filterDuration });
					},
					onComplete: () => {
						ScrollTrigger.refresh();
						tt_setupAppear(ttGridItem);
					}
				});

				// Smoothly animate the container height in sync with the Flip
				gsap.set(ttGridList, { willChange: "height" });
				flip.fromTo(ttGridList, { height: startHeight }, {
					height: endHeight,
					duration: filterDuration,
					ease: "power2.inOut",
					onComplete: () => gsap.set(ttGridList, { clearProps: "willChange" })
				}, 0);

				updateLoadMoreButton();

				// Reset scroll appear elements
				tt_resetAppear();

				// Scroll the page to the top 
				tt_gridFilterScroll();
			});

			window.addEventListener("resize", tt_gridApplyMasonry);

		});
	}



	// ================================================================
	// Portfolio grid
	// ================================================================

	// Play video on hover (does not work on mobile devices!)
	if (!tt_isMobile) {
		$(".tt-pgi-video").on("mouseenter touchstart", function() {
			$(this).find("video").each(function() {
				$(this).get(0).play();
			}); 
		}).on("mouseleave touchend", function() {
			$(this).find("video").each(function() {
				$(this).get(0).pause();
			});
		});
	}



	// =================================================================
	// Portfolio list
	// =================================================================

	if ($(".tt-portfolio-list").hasClass("tt-pl-inline")) {

		let $ttPlStickyTriggers = [];
		let resizeObservers = [];

		function $ttPlStickyFunction() {
			if ($(window).outerWidth() > 768) {

				// Kill all previous triggers and observers first
				$ttPlStickyTriggers.forEach(trigger => trigger.kill());
				$ttPlStickyTriggers = [];

				resizeObservers.forEach(observer => observer.disconnect());
				resizeObservers = [];

				$(".tt-pli-info").each(function () {
					const $ttPinElement = $(this);
					const $ttPinSection = $ttPinElement.closest(".tt-pl-item");
					const $ttPinScroller = $ttPinSection.find(".tt-pli-image, .tt-pli-video").first();

					let $ttPinElementOffset;
					if ($("#tt-header").is(".tt-header-fixed, .tt-header-scroll")) {
						$ttPinElementOffset = $(".tt-header-inner").innerHeight() + 60;
					} else {
						$ttPinElementOffset = 60;
					}

					// Create ScrollTrigger
					const trigger = ScrollTrigger.create({
						trigger: $ttPinElement[0],
						start: "top " + $ttPinElementOffset,
						end: () => "+=" + ($ttPinScroller.outerHeight() - $ttPinElement.outerHeight()),
						pin: $ttPinElement[0],
						// markers: true,
					});

					$ttPlStickyTriggers.push(trigger);

					// Use shared ResizeObserver that refreshes all PlSticky triggers when any scroller resizes
					const observer = new ResizeObserver(() => {
						$ttPlStickyTriggers.forEach(trigger => trigger.refresh());
					});

					observer.observe($ttPinScroller[0]);
					resizeObservers.push(observer);
				});

			} else {

				// Clean up on small screens
				$ttPlStickyTriggers.forEach(trigger => trigger.kill());
				$ttPlStickyTriggers = [];

				resizeObservers.forEach(observer => observer.disconnect());
				resizeObservers = [];
			}
		}

		// Run on page load
		$ttPlStickyFunction();

		// Re-init on window resize/orientation
		$(window).on("resize orientationchange", function () {
			clearTimeout(window._ttResizeTimeout);
			window._ttResizeTimeout = setTimeout(() => {
				$ttPlStickyFunction();
			}, 300);
		});
	}


	// Tilted scroll
	// ==============
	if ($(".tt-portfolio-list").hasClass("tt-pl-tilted-scroll")) {
		$(".tt-pl-item").each(function(index) {
			const $item = $(this);
			const $inner = $item.find(".tt-pli-inner").first(); // assume one inner per item

			if (!$inner.length) return; // safety check

			// Determine rotation based on visual position:
			// index 0,2,4... (visually odd child) → start +5°, end -5°
			// index 1,3,5... (visually even child) → start -5°, end +5°
			const dgr = 5;

			const isOdd = index % 2 === 0; // 0‑based: index 0 = 1st child → odd
			const startRotate = isOdd ? dgr : -dgr;
			const endRotate   = isOdd ? -dgr : dgr;

			gsap.set($inner, { willChange: "transform" });

			gsap.fromTo($inner,
				{ rotate: startRotate },
				{
				scrollTrigger: {
					trigger: $inner[0],
					start: "top bottom",
					end: "bottom top",
					scrub: true,
					// markers: true,
				},
					duration: 1,
					rotate: endRotate,
					ease: "none",
				}
			);
		});
	}


	// Play video on hover (does not work on mobile devices!)
	// ====================
	if (!tt_isMobile) {
		$(".tt-pli-video").on("mouseenter touchstart", function() {
			$(this).find("video").each(function() {
				$(this).get(0).play();
			}); 
		}).on("mouseleave touchend", function() {
			$(this).find("video").each(function() {
				$(this).get(0).pause();
			});
		});
	}



	// =======================================================================================
	// Portfolio slider (full screen)
	// Source: https://swiperjs.com/
	// =======================================================================================

	var $ttPortfolioSlider = $(".tt-portfolio-slider");

	if ($ttPortfolioSlider.length) { 
		$("body").addClass("tt-portfolio-slider-on");

		// Add class to the <body> if vertical direction is enabled
		if ($ttPortfolioSlider.is('.cursor-drag-mouse-down[data-direction="vertical"]')) {
			$("body").addClass("tt-posl-vertical-on");
		}

		// Data attributes
		// ================
		var $dataEffect = $ttPortfolioSlider.data("effect");
		var $data_ttPoslMousewheel = $ttPortfolioSlider.data("mousewheel");
		var $data_ttPoslKeyboard = $ttPortfolioSlider.data("keyboard");
		var $data_ttPoslSimulateTouch = $ttPortfolioSlider.data("simulate-touch");
		var $data_ttPoslParallax = $ttPortfolioSlider.data("parallax");
		var $data_ttPoslLoop = $ttPortfolioSlider.data("loop");
		var $data_ttPoslAutoplay = $ttPortfolioSlider.data("autoplay") ? { delay: $ttPortfolioSlider.data("autoplay"), disableOnInteraction: true, } : $ttPortfolioSlider.data("autoplay");

		if ($ttPortfolioSlider.is("[data-speed]")) {
			var $data_ttPoslSpeed = $ttPortfolioSlider.data("speed");
		} else {
			var $data_ttPoslSpeed = 900; // by default
		}

		if ($ttPortfolioSlider.is("[data-direction]")) {
			var $data_ttPoslDirection = $ttPortfolioSlider.data("direction");
		} else {
			var $data_ttPoslDirection = "vertical"; // by default
		}

		// Init Swiper
		// ============
		var $ttPortfolioSliderSwiper = new Swiper($ttPortfolioSlider.find(".swiper")[0], {

			// Parameters
			effect: $dataEffect, // Do not forget to remove data-swiper-parallax="50%" from HTML markup "tt-portfolio-slider-item" to use effects (disabled by default)!
			direction: $data_ttPoslDirection,
			slidesPerView: "auto",
			centeredSlides: true,
			disableOnInteraction: true,
			grabCursor: true,
			resistanceRatio: 0,
			longSwipesRatio: 0.1,
			speed: $data_ttPoslSpeed,
			autoplay: $data_ttPoslAutoplay,
			loop: $data_ttPoslLoop,
			parallax: $data_ttPoslParallax,
			mousewheel: $data_ttPoslMousewheel,
			keyboard: $data_ttPoslKeyboard,
			simulateTouch: $data_ttPoslSimulateTouch,

			// Navigation (arrows)
			navigation: {
				nextEl: ".tt-posl-nav-next",
				prevEl: ".tt-posl-nav-prev",
				disabledClass: "tt-posl-nav-arrow-disabled",
			},

			// Pagination
			pagination: {
				el: ".tt-posl-pagination",
				type: "fraction",
				modifierClass: "tt-posl-pagination-",
				verticalClass: "tt-posl-pagination-vertical",
				dynamicBullets: false,
				dynamicMainBullets: 1,
				clickable: true,
			},

			// Events
			on: {
				init: function() {
					const $this = this;
					const $slideActive = $($this.slides[$this.activeIndex]);

					// Play video on page load if first slide contains video
					$slideActive.find("video").each(function() {
						const ttPoslVideo = $(this).get(0);
						ttPoslVideo.addEventListener("loadeddata", function () {
							ttPoslVideo.play();
						}, { once: true });
					});
				},

				transitionStart: function() {
					const $this = this;
					const $slideActive = $($this.slides[$this.activeIndex]);

					// Ensure video plays only after it's loaded
					$slideActive.find("video").each(function() {
						const ttPoslVideo = $(this).get(0);
						if (ttPoslVideo.readyState >= 3) { // Video is already loaded
							ttPoslVideo.play();
						} else {
							ttPoslVideo.addEventListener("loadeddata", function () {
								ttPoslVideo.play();
							}, { once: true });
						}
					});

					// If slider image is light
					setTimeout(function() {
						if ($slideActive.hasClass("tt-posl-bg-is-light")) {
							$("body").addClass("tt-posl-light-bg-on");
						} else {
							$("body").removeClass("tt-posl-light-bg-on");
						}
					}, 200);
				},

				transitionEnd: function() {
					const $this = this;
					const $slideActive = $($this.slides[$this.activeIndex]);

					// Pause videos only in previous and next slides
					$slideActive.prevAll().find("video").each(function() {
						this.pause();
					});
					$slideActive.nextAll().find("video").each(function() {
						this.pause();
					});
				},
			}

		});
	}



	// ================================================================
	// Portfolio scrolling
	// ================================================================

	$(".tt-portfolio-scrolling").each(function () {
		let $this = $(this);
		let contentSelector = ".tt-pscr-item-content";

		$this.find(".tt-pscr-item").each(function () {
			let $item = $(this);

			// Clone item content if not already directly inside
			let clonedItems = [];
			function pscrClone() {
				let minWidth = 769; // window minimum width

				if (window.innerWidth >= minWidth && clonedItems.length === 0) {
					// Only clone if there are no clones already
					let pscrCloned = $item.find(contentSelector);
					for (let i = 0; i < 5; i++) {
						let cloned = pscrCloned.clone().insertAfter(pscrCloned).addClass("tt-pscr-cloned");
						clonedItems.push(cloned);  // Store reference
					}
				} else if (window.innerWidth < minWidth) {
					// Remove all cloned items when window width is less than minWidth
					clonedItems.forEach(function(cloned) {
						cloned.remove();
					});
					clonedItems = [];
				}
			}
			pscrClone();
			$(window).on('resize orientationchange', function() {
				setTimeout(function(){ 
					pscrClone();
				}, 300);
			});

			// If image not exist
			if (!$item.find(".tt-pscr-item-image").length) {
				$item.addClass("no-image");
			}
		});


		// Scrolling speed (hover scrolling is disabled on mobile devices!)
		if (!tt_isMobile) { 
			function pscrScrollingSpeed(container) {
				const speedAttr = container.getAttribute("data-scroll-speed");
				const baseSpeed = parseFloat(speedAttr) || 300; // Default speed

				const contents = container.querySelectorAll(contentSelector);
				contents.forEach(content => {
					const contentWidth = content.offsetWidth;
					const duration = contentWidth / baseSpeed;
					content.style.animationDuration = `${duration}s`;
				});
			}

			pscrScrollingSpeed(this);
			window.addEventListener("resize", () => pscrScrollingSpeed(this));
		} 
	});



	// ================================================================
	// Fancybox (lightbox plugin)
	// https://fancyapps.com/
	// ================================================================

	$('[data-fancybox]').fancybox({
		animationEffect: "fade",
		loop: true,
		wheel: false,
		hash: false,
		backFocus: false,
		// protect: true,
		buttons: [
			"close",
		],
	});



	// ================================================================
	// GSAP ScrollTrigger plugin (do something while scrolling)
	// More info: https://greensock.com/docs/v3/Plugins/ScrollTrigger/
	// ================================================================ 

	// IMPORTANT! Refresh ScrollTrigger when images with loading="lazy" are loaded.
	// =================================
	document.querySelectorAll('img[loading="lazy"]').forEach(img => {
		if (img.complete) return;

		img.addEventListener('load', () => {
			ScrollTrigger.refresh();
		});
	});


	// Image parallax on scroll
	// =========================
	$(".tt-image-parallax").each(function () {
		const $animImageParallax = $(this);

		// Add wrap <div>
		$animImageParallax.wrap('<div class="tt-image-parallax-wrap"><div class="tt-image-parallax-inner"></div></div>');

		const $aipWrap = $animImageParallax.parents(".tt-image-parallax-wrap");
		const $aipInner = $aipWrap.find(".tt-image-parallax-inner");

		// Set CSS styles
		$aipWrap.css({ overflow: "hidden" });
		$aipInner.css({ "transform": "scale(1.2)", "transform-origin": "50% 100%", "will-change": "transform" });

		// Initialize animation
		function tt_animImageParallax() {
			gsap.to($aipInner[0], {
				yPercent: 25,
				ease: "none",
				scrollTrigger: {
					trigger: $aipWrap[0],
					start: "top bottom",
					end: "bottom top",
					scrub: true,
					// markers: true,
				}
			});
		}

		// Wait for the element to be ready (image loaded or video metadata loaded)
		if ($animImageParallax.is('img')) {
			const img = $animImageParallax[0];
			if (img.complete) {
				tt_animImageParallax();
			} else {
				img.addEventListener('load', tt_animImageParallax, { once: true });
			}
		} else if ($animImageParallax.is('video')) {
			// VIDEO: wait until metadata (width, height, duration) is loaded
			const video = $animImageParallax[0];
			if (video.readyState >= 1) { // HAVE_METADATA
				tt_animImageParallax();
			} else {
				video.addEventListener('loadedmetadata', tt_animImageParallax, { once: true });
			}
		} else {
			// Other elements (e.g., div, canvas) – run immediately
			tt_animImageParallax();
		}

	});


	// Image zoom-in on scroll (for images only!)
	// ========================
	$(".tt-anim-zoomin").each(function() {
		const $this = $(this);

		$this.wrap('<div class="tt-anim-zoomin-wrap"></div>');
		$this.parents(".tt-anim-zoomin-wrap").css({ overflow: "hidden" });

		const $aziWrap = $this.parents(".tt-anim-zoomin-wrap");

		gsap.set($this, { willChange: "opacity, transform" });

		gsap.from($this, {
			scrollTrigger: {
				trigger: $aziWrap[0],
				start: "top bottom",
				// markers: true,
			},
			duration: 1.5,
			autoAlpha: 0,
			scale: 1.3,
			ease: "power2.out",
			clearProps: "all",
		});
	});


	// Element reveal on scroll (fade in-up)
	// ======================================
	$(".tt-anim-fadeinup").each(function() {
		const $this = $(this);

		gsap.set($this, { willChange: "opacity, transform" });

		gsap.from($this, {
			scrollTrigger: {
				trigger: $this[0],
				start: "top 90%",
				// markers: true,
			},
			duration: 1.5,
			autoAlpha: 0,
			y: 50,
			ease: "expo.out",
			clearProps: "all",
		});
	});


	// Animate text characters on scroll (also works with "tt-text-image" elements)
	// Note: Use it with short text only. Just a few words (the longer the text, the more expensive it is).
	// ==================================
	document.fonts.ready.then(() => {
		$(".tt-anim-characters").each(function() {
			const $this = $(this);

			// If the element contains an image element
			if ($this.find('.tt-text-image').length) {
				$this.addClass('tt-text-image-included');
				$this.css("text-wrap", "unset");
			}

			// Get all .tt-text-image elements (if used) as a native array for GSAP
			const $images = $this.find('.tt-text-image');
			const imageElements = $images.toArray();

			// splitText
			const split = new SplitText($this, {
				type: "chars, words",
				wordsClass: "tt-word",
				charsClass: "tt-char",
				autoSplit: true
			});

			// Merge text characters and image elements for GSAP
			const allElements = [...split.chars, ...imageElements];

			// Prepare elements for animation
			gsap.set(allElements, { willChange: "opacity, transform" });

			// Animation with ScrollTrigger
			gsap.from(allElements, {
				duration: 0.5,
				scale: 0.5,
				y: "random([50, -50])",
				rotation: "random([10, -10])",
				autoAlpha: 0,
				overwrite: "auto",
				ease: "power2.out",
				stagger: {
					amount: 0.4,
					from: "random"
				},
				scrollTrigger: {
					trigger: $this,
					start: "top 90%",
					// markers: true,
				},
				onComplete: () => {
					// Remove splitText wraps and restore the element's original markup (except ".tt-text-image")
					const $wrappers = $this.find('.tt-word, .tt-char');
					$wrappers.each(function() {
						const $wrap = $(this);
						$wrap.replaceWith($wrap.text());
					});
					$this[0].normalize();
				}
			});
		});
	});


	// Animate text lines on scroll (also works with "tt-text-image" elements)
	// Info: It also adapts if the text uses <br> tags.
	// Note: Use it with short text only (the longer the text, the more expensive it is).
	// ==================================
	document.fonts.ready.then(() => {
		$(".tt-anim-lines").each(function() {
			const $this = $(this);

			// If the element contains an image element
			if ($this.find('.tt-text-image').length) {
				$this.addClass('tt-text-image-included');
				$this.css("text-wrap", "unset");
			}

			// Remove <br> (if exists) on small screens
			if ($this.find("br").length > 0) {
				const originalHTML = $this.html(); // Save original HTML with <br>
				function handleBR() {
					if ($(window).width() <= 991) { 
						$this.find("br").remove(); // Remove <br>
					} else {
						$this.html(originalHTML); // Restore original HTML with <br>
					}
				}
				handleBR();
				$(window).on("resize", handleBR);
			}

			// splitText
			SplitText.create($this, {
				type: "lines", 
				mask: "lines",
				linesClass: "tt-line",
				autoSplit: true,
				onSplit(self) {
					// Prepare characters for animation
					gsap.set(self.lines, { willChange: "opacity, transform" });

					// Animations
					gsap.from(self.lines, {
						duration: 0.8,
						yPercent: 100, 
						stagger: 0.1, 
						ease: "power2.out",
						scrollTrigger: {
							trigger: $this,
							start: "top 90%",
							// markers: true,
						},
						onComplete: () => {
							// Remove splitText wraps and restore the element's original markup.
							self.revert();

							// Restore clicks after animation
							if ($this.is("a")) $this.css("pointer-events", "auto");
						}
					});
				}
			});

		});
	});



	// Slide a shorter column down into leftover space (contact form + Strange Terrains GIFs)
	// =====================================================================================
	function ttBindScrollSlideCol(slideSelector, anchorSelector) {
		$(slideSelector).each(function () {
			const slideCol = this;
			const $row = $(slideCol).closest(".tt-row");
			const anchorCol = $row.find(anchorSelector)[0];
			if (!anchorCol || !$row.length) return;

			const getShift = () => {
				if (window.innerWidth < 1025) return 0;
				return Math.max(0, anchorCol.offsetHeight - slideCol.offsetHeight);
			};

			gsap.fromTo(slideCol, {
				y: 0
			}, {
				y: getShift,
				ease: "none",
				immediateRender: false,
				scrollTrigger: {
					trigger: $row[0],
					start: "top 120px",
					end: () => "+=" + getShift(),
					scrub: true,
					invalidateOnRefresh: true,
				}
			});
		});
	}

	ttBindScrollSlideCol(".tt-contact-form-col", ".tt-contact-info-col");
	ttBindScrollSlideCol(".tt-scroll-slide-col", ".tt-scroll-slide-anchor");

	setTimeout(function () {
		if (typeof ScrollTrigger !== "undefined") {
			ScrollTrigger.refresh();
		}
	}, 500);



	// ================================================================
	// Contact form
	// ================================================================

	let $ttContactForm = $("#tt-contact-form");

	$ttContactForm.submit(function(e) {
		e.preventDefault(); // Prevent default form submission.

		let $cfmContainer = $("#tt-contact-form-messages");
		let $cfmContainerInner = $(".tt-cfm-inner");

		// Clear previous messages and show loading indicator.
		$cfmContainerInner.empty().html('<span class="tt-cfm-sending">Sending your message...</span>');

		// Send email
		const formData = $(this).serialize();
		$.ajax({
			type: "POST",
			url: (window.SOFTSOVE_API_URL || "http://127.0.0.1:8000") + "/contact",
			data: formData,
			dataType: "json",

		}).done(function(response) {

			// Clear previous messages.
			$cfmContainerInner.empty();

			if (response.success) {
				$ttContactForm.addClass("cfm-submitted");

				// Display success message.
				$cfmContainerInner.html('<span class="tt-cfm-success">' + response.message + '</span>'); // Look at the "mail.php" file to change this response message text.

				$ttContactForm.trigger("reset"); // Reset the form.
				$(".tt-form-group").removeClass("tt-fg-typing"); // Remove class from "tt-form-group" (for "tt-form-creative").
			} else {
				$ttContactForm.addClass("cfm-submitted");

				// Display error message.
				$cfmContainerInner.html('<span class="tt-cfm-error">' + response.message + '</span>'); // Look at the "mail.php" file to change this response message text.
			}

			scrollToContactFormTop(); // Scroll to the form top.

		}).fail(function() {
			$ttContactForm.addClass("cfm-submitted");

			// Clear previous messages and display AJAX error message.
			$cfmContainerInner.empty().html('<span class="tt-cfm-error">An error occurred. Please try again later.</span>');

			scrollToContactFormTop(); // Scroll to the form top.
		});

		// Scroll to the form top function.
		function scrollToContactFormTop() {
			if(!tt_isMobile) { // Not for mobile devices!
				if ($("body").hasClass("tt-smooth-scroll")) {
					$("html, body").animate({ scrollTop: $ttContactForm.offset().top - 240 }, 600);
				}
			}
		}

		// Message close button click.
		$(document).on("click", ".tt-cfm-close", function() {
			if ($cfmContainerInner.find("span").length) {
				$cfmContainerInner.find("span").remove();
				$ttContactForm.removeClass("cfm-submitted");
			}
		});
	});



	// ================================================================
	// Scroll between anchors smoothly
	// ================================================================

	// Scroll function
	function tt_scrollToTarget(target, $trigger, updateHash) {

		const $tt_target = $(target);
		if (!$tt_target.length) return;

		const $tt_header = $("#site-header");
		let offset = 0;

		// Fixed header offset
		if ($tt_header.length && $tt_header.hasClass("tt-header-fixed")) {
			offset = $tt_header.outerHeight();
		}

		// Data offset override
		if ($trigger && $trigger.data("offset") !== undefined) {
			offset = parseInt($trigger.data("offset"), 10) || 0;
		}

		// Animate
		if (typeof ScrollSmoother !== "undefined" && ScrollSmoother.get()) {
			tt_Smoother.scrollTo($tt_target[0], true, "top " + offset);

			if (updateHash) {
				history.pushState(null, null, target);
			}

		} else {

			$("html, body").stop().animate({
				scrollTop: $tt_target.offset().top - offset
			}, 600, function() {
				if (updateHash) {
					window.location.hash = target;
				}
			});
		}
	}

	// Click handler
	$(document).on("click", 'a[href^="#"], .tt-anchor-link', function(e) {

		// Exclusions. Use class "tt-no-smooth-scroll" if needed.
		if ($(this).is('[href="#"], [href="#0"], .tt-no-smooth-scroll')) return;

		// If someone else has already addressed it → don't interfere.
		if (e.isDefaultPrevented()) return;

		const target = this.getAttribute("href");
		const $tt_target = $(target);

		if (!$tt_target.length) return;

		e.preventDefault();
		e.stopImmediatePropagation();

		// If the link has any of the specified classes → the hash does not change. Use class "tt-no-hash" if needed.
		const updateHash = !$(this).is('.tt-sd-inner, .tt-no-hash');

		tt_scrollToTarget(target, $(this), updateHash);
	});

	// Page load + hash 
	$(window).on("load", function() {

		const hash = window.location.hash;
		if (!hash) return;

		const $tt_target = $(hash);
		if (!$tt_target.length) return;

		setTimeout(function() {
			tt_scrollToTarget(hash, null, false);
		}, 100);
	});



	// ================================================================
	// Scroll to top button
	// ================================================================

	if ($(".tt-scroll-to-top").length) {
		const $tt_ScrollToTop = $(".tt-scroll-to-top");

		const getOffset = (dataAttr, defaultValue) => {
			const val = parseInt($tt_ScrollToTop.data(dataAttr), 10);
			return isNaN(val) ? defaultValue : val;
		};
		
		const $tt_TopOffset = getOffset("top-offset", 250);
		const $tt_BottomOffset = getOffset("bottom-offset", -1);

		$(window).on("scroll", function () {
			const scrollTop = $(window).scrollTop();
			const windowHeight = $(window).height();
			const docHeight = $(document).height();
			const fromBottom = docHeight - (scrollTop + windowHeight);

			if (scrollTop > $tt_TopOffset && fromBottom > $tt_BottomOffset) {
				$tt_ScrollToTop.addClass("tt-stt-active");
			} else {
				$tt_ScrollToTop.removeClass("tt-stt-active");
			}
		});

		// Scroll to top on click
		$tt_ScrollToTop.on("click", function(e) {
			e.preventDefault();
			$("html,body").animate({ scrollTop: 0 }, 600);
		});
	}



	// =======================================================================================
	// Defer videos
	// Note: Videos causes your page to load slower. Deffering will allow your page to load more quickly.
	// =======================================================================================

	// HTML video lazy loading 
	$(function() {
		if ($("video source").attr("data-src")) {
			var lazyVideos = $("video").toArray();

			if ("IntersectionObserver" in window) {
				var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(entry) {
						if (entry.isIntersecting) {
							$(entry.target).find("source").each(function() {
								$(this).attr("src", $(this).data("src")).removeAttr("data-src");
							});

							entry.target.load();
							lazyVideoObserver.unobserve(entry.target);
						}
					});
				});

				lazyVideos.forEach(function(video) {
					lazyVideoObserver.observe(video);
				});
			}
		}
	});



	// =======================================================================================
	// Magic cursor (no effect on small screens!)
	// https://codepen.io/Sahil89/pen/MQbdNR
	// https://greensock.com/forums/topic/17490-follow-button-effect/?tab=comments#comment-81107
	// =======================================================================================

	if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
		if ($(window).width() > 1024) {
			$(".tt-magnetic-item").wrap('<div class="magnetic-wrap"></div>');

			let $ballMouse = { x: 0, y: 0 }; // Cursor position
			let $ballPos = { x: 0, y: 0 }; // Cursor position
			let $ballRatio = 0.15; // delay follow cursor
			let $ballActive = false;
			let $ball = $("#ball");

			let $ballWidth = 34; // Ball default width
			let $ballHeight = 34; // Ball default height
			let $ballOpacity = 1; // Ball default opacity
			let $ballBorderWidth = 2; // Ball default border width

			let $ballMagneticWidth = 80; // Ball magnetic width
			let $ballMagneticHeight = 80; // Ball magnetic height

			let $ballAlterWidth = 100; // Cursor alter width
			let $ballAlterHeight = 100; // Cursor alter height

			let $ballViewWidth = 130; // Ball view width
			let $ballViewHeight = 130; // Ball view height

			let $ballDragWidth = 100; // Ball drag width
			let $ballDragHeight = 100; // Ball drag height

			let $ballDragMouseDownWidth = 50; // Ball drag width
			let $ballDragMouseDownHeight = 50; // Ball drag height

			let $ballArrowWidth = 100; // Ball arrow width
			let $ballArrowHeight = 100; // Ball arrow height

			let $ballCloseWidth = 100; // Ball close width
			let $ballCloseHeight = 100; // Ball close height

			gsap.set($ball, {  // scale from middle and style ball
				xPercent: -50, 
				yPercent: -50, 
				width: $ballWidth,
				height: $ballHeight,
				borderWidth: $ballBorderWidth, 
				opacity: $ballOpacity,
			});

			document.addEventListener("mousemove", mouseMove);

			function mouseMove(e) {
				$ballMouse.x = e.clientX;
				$ballMouse.y = e.clientY;
			}

			gsap.ticker.add(updatePosition);

			function updatePosition() {
				if (!$ballActive) {
					$ballPos.x += ($ballMouse.x - $ballPos.x) * $ballRatio;
					$ballPos.y += ($ballMouse.y - $ballPos.y) * $ballRatio;

					gsap.set($ball, { x: $ballPos.x, y: $ballPos.y });
				}
			}

			$(".magnetic-wrap").mousemove(function(e) {
				parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
				callParallax(e, this);
			});

			function callParallax(e, parent) {
				parallaxIt(e, parent, parent.querySelector(".tt-magnetic-item"), 25); // magnetic area = higher number is more attractive
			}

			function parallaxIt(e, parent, target, movement) {
				let boundingRect = parent.getBoundingClientRect();
				let relX = e.clientX - boundingRect.left;
				let relY = e.clientY - boundingRect.top;

				gsap.to(target, {
					duration: 0.3, 
					x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
					y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
					ease: "power2.out"
				});
			}

			function parallaxCursor(e, parent, movement) {
				let rect = parent.getBoundingClientRect();
				let relX = e.clientX - rect.left;
				let relY = e.clientY - rect.top;
				
				$ballPos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
				$ballPos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
				gsap.to($ball, {duration: 0.3, x: $ballPos.x, y: $ballPos.y });
			}


			// Magic cursor behavior
			// ======================

			// Magnetic item hover.
			$(".magnetic-wrap").on("mouseenter", function(e) {
				$ball.addClass("magnetic-active");
				gsap.to($ball, { duration: 0.3, width: $ballMagneticWidth, height: $ballMagneticHeight, opacity: 1 });
				$ballActive = true;
			}).on("mouseleave", function(e) {
				$ball.removeClass("magnetic-active");
				gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
				gsap.to(this.querySelector(".tt-magnetic-item"), { duration: 0.3, x: 0, y: 0, clearProps:"all" });
				$ballActive = false;
			});

			// Alternative cursor style on hover.
			$(".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a")
			.not(".tt-magnetic-item") // omit from selection.
			.on("mouseover", function() {
				gsap.to($ball, {
					duration: 0.3, 
					borderWidth: 0, 
					opacity: 0.2, 
					backgroundColor: "#999", 
					width: $ballAlterWidth, 
					height: $ballAlterHeight, 
				});
			}).on("mouseleave", function() {
				gsap.to($ball, {
					duration: 0.3, 
					borderWidth: $ballBorderWidth, 
					opacity: $ballOpacity, 
					backgroundColor: "transparent", 
					width: $ballWidth, 
					height: $ballHeight, 
					clearProps:"backgroundColor" 
				});
			});

			// Cursor view on hover (data attribute data-cursor="...").
			$("[data-cursor]").each(function() {
				$(this).on("mouseenter", function() {
					$ball.addClass("ball-view").append('<div class="ball-view-inner"></div>');
					$(".ball-view-inner").append($(this).attr("data-cursor"));
					gsap.to($ball, { duration: 0.3, yPercent: -70, width: $ballViewWidth, height: $ballViewHeight, opacity: 1, borderWidth: 0 });
					gsap.to(".ball-view-inner", { duration: 0.3, scale: 1, autoAlpha: 1 });
				}).on("mouseleave", function() {
					gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity, borderWidth: $ballBorderWidth });
					$ball.removeClass("ball-view").find(".ball-view-inner").remove();
				});
				$(this).addClass("not-hide-cursor");
			});

			// Cursor drag on hover (class "cursor-drag"). For Swiper.
			$(".swiper").each(function() {
				if ($(this).parent().attr("data-simulate-touch") == "true") {
					if ($(this).parent().hasClass("cursor-drag")) {
						$(this).find(".swiper-wrapper").on("mouseenter", function() {
							$ball.addClass("ball-drag").append('<div class="ball-drag-inner"></div>');
							gsap.to($ball, { duration: 0.3, yPercent: -75, width: $ballDragWidth, height: $ballDragHeight, opacity: 1 });
						}).on("mouseleave", function() {
							$ball.removeClass("ball-drag").find(".ball-drag-inner").remove();
							gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
						});
						$(this).addClass("not-hide-cursor");
					}
				}
			});

			// Cursor drag on mouse down / click and hold effect (class "cursor-drag-mouse-down"). For Swiper.
			$(".swiper").each(function() {
				if ($(this).parent().attr("data-simulate-touch") == "true") {
					if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
						$(this).on("mousedown pointerdown", function(e) {
							if (e.which === 1) { // Affects the left mouse button only!
								gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballDragMouseDownWidth, height: $ballDragMouseDownHeight, opacity: 1 });
								$ball.addClass("ball-drag-mouse-down").append('<div class="ball-drag-mouse-down-inner"></div>');
							}
						}).on("mouseup pointerup", function() {
							$ball.removeClass("ball-drag-mouse-down").find(".ball-drag-mouse-down-inner").remove();
							if ($(this).find("[data-cursor]:hover").length) {
							} else {
								gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
							}
						}).on("mouseleave", function() {
							$ball.removeClass("ball-drag-mouse-down").find(".ball-drag-mouse-down-inner").remove();
							gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
						});

						// Ignore "data-cursor" on mousedown.
						$(this).find("[data-cursor]").on("mousedown pointerdown", function() {
							return false;
						});

						// Ignore "data-cursor" on hover.
						$(this).find("[data-cursor]").on("mouseover", function() {
							$ball.removeClass("ball-drag-mouse-down").find(".ball-drag-mouse-down-inner").remove();
							return false;
						});
					}
				}
			});

			// Cursor arrow left on hover (class "cursor-arrow-left"). For Swiper.
			$(".cursor-arrow-left").on("mouseenter", function() {
				$ball.addClass("ball-arrow").append('<div class="ball-arrow-left"></div>');
				gsap.to($ball, { duration: 0.3, yPercent: -70, width: $ballArrowWidth, height: $ballArrowHeight, opacity: 1 });
			}).on("mouseleave", function() {
				$ball.removeClass("ball-arrow").find(".ball-arrow-left").remove();
				gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
			});

			// Cursor arrow right on hover (class "cursor-arrow-right"). For Swiper.
			$(".cursor-arrow-right").on("mouseenter", function() {
				$ball.addClass("ball-arrow").append('<div class="ball-arrow-right"></div>');
				gsap.to($ball, { duration: 0.3, yPercent: -70, width: $ballArrowWidth, height: $ballArrowHeight, opacity: 1 });
			}).on("mouseleave", function() {
				$ball.removeClass("ball-arrow").find(".ball-arrow-right").remove();
				gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
			});

			// Magnetic buttons
			if ($(".tt-btn").hasClass("tt-magnetic-item")) {
				$(".tt-btn").parents(".magnetic-wrap").addClass("tt-magnetic-btn");
			}


			// Show/hide magic cursor
			// =======================

			// Hide on hover.
			$("a, button, .tt-magnetic-btn, .tt-form-control, .tt-form-radio, .tt-form-check label, .tt-video, iframe, .tt-cfm-close, abbr, [data-ppl-tooltip], .tt-hide-cursor") // class "tt-hide-cursor" is for global use.
			.not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
			.not(".cursor-alter") // omit from selection
			.not(".ph-social > ul > li a") // omit from selection
			.not(".ph-share-buttons > ul > li a") // omit from selection
			.not(".tt-social-buttons > ul > li a") // omit from selection
			.not(".tt-main-menu-list > li > a") // omit from selection
			.not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
			.on("mouseenter", function() {
				gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
			}).on("mouseleave", function() {
				gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
			});

			// Hide on click.
			$("a")
				.not('[target="_blank"]') // omit from selection.
				.not('[href^="#"]') // omit from selection.
				.not('[href^="mailto"]') // omit from selection.
				.not('[href^="tel"]') // omit from selection.
				.not(".tt-btn-disabled") // omit from selection.
				.not('[data-fancybox]') // omit from selection
				.on('click', function() {
					gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
			});

			// Show/hide on document leave/enter.
			$(document).on("mouseleave", function() {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
			}).on("mouseenter", function() {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
			});

			// Show as the mouse moves.
			$(document).mousemove(function() {
				gsap.to("#magic-cursor", {duration: 0.3, autoAlpha: 1 });
			});

		}
	}



	// ================================================================
	// Miscellaneous
	// ================================================================

	// Add class to "tt-section" if "tt-section-background" exists
	// ==========================
	$(".tt-section-background").each(function() {
		const $this = $(this);
		const $thisParent = $this.parents(".tt-section");

		$thisParent.addClass("tt-sbg-on");

		if ($this.hasClass("tt-sbg-is-light")) {
			$thisParent.addClass("tt-sbg-is-light-on");
		}
	});


	// Wrap the entire content of <figcaption>
	// ========================================
	$("figcaption").each(function() {
		$(this).contents().wrapAll('<div class="figcaption-inner"></div>');
	});
	
	
	// Force page scroll position to top on refresh  (do not remove!)
	// =========================
	$(window).on("pagehide", function(){
		$(window).scrollTop(0);
	});


	// Set the footer copyright year to update automatically.
	// =========================
	$(".tt-copyright-year").html(new Date().getFullYear());


	// Hover fix for iOS
	// ==================
	$("*").on("touchstart",function() {
		$(this).trigger("hover");
	}).on("touchend",function() {
		$(this).trigger("hover");
	});



})(jQuery); 
