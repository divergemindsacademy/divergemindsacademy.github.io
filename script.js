// ============================
// Scroll Appear
// ============================
function scrollAppear() {
	var elements = document.querySelectorAll('.side-text, .sideImage');
	elements.forEach(function(el) {
		var position = el.getBoundingClientRect().top;
		var screenPosition = window.innerHeight / 1.2;
		if (position < screenPosition) {
			if (el.classList.contains('side-text')) el.classList.add('side-text-appear');
			if (el.classList.contains('sideImage')) el.classList.add('sideImage-appear');
		}
	});
}
window.addEventListener('scroll', scrollAppear);

// ============================
// Side Menu
// ============================
function sideMenu(side) {
	var menu = document.getElementById('side-menu');
	if (!menu) return;
	if (side == 0) {
		menu.classList.add('open');
		document.body.classList.add('no-scroll');
	} else {
		menu.classList.remove('open');
		document.body.classList.remove('no-scroll');
	}
}

// Close side menu when any nav link inside it is clicked
document.querySelectorAll('.side-menu ul li a').forEach(function(link) {
	link.addEventListener('click', function() {
		var menu = document.getElementById('side-menu');
		if (menu) menu.classList.remove('open');
		document.body.classList.remove('no-scroll');
	});
});

// ============================
// Navigation switch (mobile legacy)
// ============================
var i = 2;
function switchTAB() {
	if (i % 2 == 0) {
		var ls = document.getElementById("list-switch");
		var ss = document.getElementById("search-switch");
		if (ls) ls.style = "display: grid; height: 50vh; margin-left: 5%;";
		if (ss) ss.style = "display: block; margin-left: 5%;";
	} else {
		var ls = document.getElementById("list-switch");
		var ss = document.getElementById("search-switch");
		if (ls) ls.style = "display: none;";
		if (ss) ss.style = "display: none;";
	}
	i++;
}

// ============================
// Search slide
// ============================
function slide() {
	var srch = document.querySelector('.search');
	if (srch) {
		srch.style.width = srch.style.width === '150px' ? '0' : '150px';
		srch.style.transition = 'width 0.4s ease';
	}
}

// ============================
// Login / Register
// ============================
function register() {
	var x = document.getElementById("login");
	var y = document.getElementById("register");
	var z = document.getElementById("btn");
	var a = document.getElementById("log");
	var b = document.getElementById("reg");
	var w = document.getElementById("other");
	if (x) x.style.left = "-400px";
	if (y) y.style.left = "50px";
	if (z) z.style.left = "110px";
	if (w) w.style.visibility = "hidden";
	if (b) b.style.color = "#fff";
	if (a) a.style.color = "#000";
}

function login() {
	var x = document.getElementById("login");
	var y = document.getElementById("register");
	var z = document.getElementById("btn");
	var a = document.getElementById("log");
	var b = document.getElementById("reg");
	var w = document.getElementById("other");
	if (x) x.style.left = "50px";
	if (y) y.style.left = "450px";
	if (z) z.style.left = "0px";
	if (w) w.style.visibility = "visible";
	if (a) a.style.color = "#fff";
	if (b) b.style.color = "#000";
}

// ============================
// Checkbox
// ============================
function goFurther() {
	var chk = document.getElementById("chkAgree");
	var btn = document.getElementById('btnSubmit');
	if (!chk || !btn) return;
	if (chk.checked) {
		btn.style.background = 'linear-gradient(to right, #FA4B37, #DF2771)';
	} else {
		btn.style.background = 'lightgray';
	}
}

// ============================
// Google auth
// ============================
function google() {
	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession");
}

// ============================
// Quiz page functions
// ============================
function quizt(frame) {
	var frames = ['f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11'];
	frames.forEach(function(id) {
		var el = document.getElementById(id);
		if (el) el.style.display = 'none';
	});
	var target = document.getElementById('f' + frame);
	if (target) target.style.display = 'block';
	else if (frame < 1 || frame > 11) alert('error');
}

function startquiz() {
	var title = document.getElementById('title');
	var panel = document.getElementById('panel');
	var left  = document.getElementById('left');
	var right = document.getElementById('right');
	if (title) title.style.display = 'none';
	if (panel) panel.style.display = 'inline-flex';
	if (left)  left.style.display  = 'block';
	if (right) right.style.display = 'block';
}

function searchdisplay() {
	var sp = document.getElementById('searchpanel');
	if (sp) sp.style.display = "block";
}

function display(n) {
	var ids = ['img1','img2','img3','img4'];
	var sids = ['s1','s2','s3','s4'];
	ids.forEach(function(id) {
		var el = document.getElementById(id);
		if (el) el.style.display = 'none';
	});
	sids.forEach(function(id) {
		var el = document.getElementById(id);
		if (el) { el.style.background = '#DF2771'; el.style.color = '#FFF'; }
	});
	var img = document.getElementById('img' + n);
	var s   = document.getElementById('s'    + n);
	if (img) img.style.display = 'block';
	if (s)   { s.style.background = '#E5E8EF'; s.style.color = '#DF2771'; }
}

// ============================
// Scroll Progress
// ============================
window.addEventListener('scroll', function() {
	var scrollTop = window.scrollY;
	var docHeight = document.documentElement.scrollHeight - window.innerHeight;
	var pct = (scrollTop / docHeight) * 100;
	var bar = document.getElementById('scrollProgress');
	if (bar) bar.style.width = pct + '%';
});

// ============================
// Navbar scroll effect
// ============================
$(window).on('scroll', function(){
	if ($(window).scrollTop()) {
		$('nav').addClass('black');
	} else {
		$('nav').removeClass('black');
	}
});

// ============================
// Scroll Reveal
// ============================
function revealOnScroll() {
	var triggers = document.querySelectorAll(
		'.scroll-reveal, .scroll-reveal-up, .scroll-reveal-card, .scroll-reveal-left, .scroll-reveal-right'
	);
	triggers.forEach(function(el) {
		var rect = el.getBoundingClientRect();
		var delay = parseInt(el.dataset.delay || 0);
		if (rect.top < window.innerHeight * 0.88) {
			setTimeout(function() { el.classList.add('revealed'); }, delay);
		}
	});
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ============================
// Counter animation
// ============================
function animateCounter(el) {
	var target = parseInt(el.dataset.target);
	var current = 0;
	var step = Math.max(1, Math.floor(target / 60));
	var timer = setInterval(function() {
		current += step;
		if (current >= target) { current = target; clearInterval(timer); }
		el.textContent = current;
	}, 25);
}
var statObserver = new IntersectionObserver(function(entries) {
	entries.forEach(function(e) {
		if (e.isIntersecting) {
			e.target.querySelectorAll('.stat-num').forEach(animateCounter);
			statObserver.unobserve(e.target);
		}
	});
}, { threshold: 0.4 });
document.querySelectorAll('.stats-strip').forEach(function(el) {
	statObserver.observe(el);
});

// ============================
// Floating particles
// ============================
var container = document.getElementById('particles');
if (container) {
	for (var pi = 0; pi < 50; pi++) {
		var p = document.createElement('span');
		p.className = 'particle';
		p.style.cssText =
			'left:' + (Math.random()*100) + '%;' +
			'top:' + (Math.random()*100) + '%;' +
			'width:' + (4 + Math.random()*8) + 'px;' +
			'height:' + (4 + Math.random()*8) + 'px;' +
			'animation-delay:' + (Math.random()*6) + 's;' +
			'animation-duration:' + (5 + Math.random()*8) + 's;' +
			'opacity:' + (0.15 + Math.random()*0.3) + ';';
		container.appendChild(p);
	}
}

// ============================
// Newsletter
// ============================
var newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
	newsletterForm.addEventListener('submit', function(e) {
		e.preventDefault();
		var email = document.querySelector('.txtb').value;
		fetch('https://script.google.com/macros/s/AKfycbyeFHZmF9ziFzSkIuLvkIeL-SHc8MXsXezGRgH1OKVJbI7EMfkP5mtZhHPOeHbPnWbqQQ/exec', {
			method: 'POST',
			body: new URLSearchParams({ email: email }),
			mode: 'no-cors'
		})
		.then(function() {
			alert("Thank you! Your email has been submitted.");
			document.querySelector('.txtb').value = "";
		})
		.catch(function(err) {
			console.error(err);
			alert("Oops! Something went wrong.");
		});
	});
}

// ============================
// Contact Form
// ============================
var contactForm = document.getElementById("contact-form");
if (contactForm) {
	contactForm.addEventListener("submit", function(e) {
		e.preventDefault();
		var form = this;
		var btn = document.getElementById('csubmit');
		btn.textContent = 'Sending...';

		var params = new URLSearchParams();
		params.append("fname",      form.fname.value);
		params.append("lname",      form.lname.value);
		params.append("mail",       form.mail.value);
		params.append("message",    form.message.value);
		params.append("additional", form.additional.value);

		fetch("https://script.google.com/macros/s/AKfycbyTk8Px4w_4TZddMPzdoEITvdIVr-wE22gDFzoH84YhLav2u0Lxn2D3oD3OkiNaytcW7g/exec", {
			method: "POST",
			body: params,
			mode: "no-cors"
		})
		.then(function() {
			alert("Thank you! Your message has been sent.");
			form.reset();
			btn.innerHTML = 'Send Message <span class="btn-arrow">→</span>';
		})
		.catch(function(err) {
			console.error(err);
			alert("Oops! Something went wrong.");
			btn.innerHTML = 'Send Message <span class="btn-arrow">→</span>';
		});
	});
}

// ============================
// Mentor Bio Popup
// ============================
document.addEventListener('DOMContentLoaded', function() {
	var bioButtons = document.querySelectorAll('.bio-toggle');
	var closeButtons = document.querySelectorAll('.bio-close');

	// Move the bio popups outside the mentor cards so they cannot be hidden
	// behind the next card on mobile or by transformed card containers.
	bioButtons.forEach(function(button, index) {
		var card = button.closest('.card');
		if (!card) return;
		var bio = card.querySelector('.card-bio');
		if (!bio) return;

		var themeClasses = ['bio-theme-blue', 'bio-theme-green', 'bio-theme-violet'];
		var themeClass = themeClasses[index % themeClasses.length];
		card.classList.add(themeClass);
		button.classList.add(themeClass);
		bio.classList.add(themeClass);

		button._bioPopup = bio;
		bio._bioButton = button;
		document.body.appendChild(bio);
	});

	function closeAllBios() {
		document.querySelectorAll('.card-bio.is-open').forEach(function(bio) {
			bio.classList.remove('is-open');
		});
		document.body.classList.remove('bio-popup-open');
		document.querySelectorAll('.bio-toggle[aria-expanded="true"]').forEach(function(btn) {
			btn.setAttribute('aria-expanded', 'false');
		});
	}

	bioButtons.forEach(function(button) {
		button.addEventListener('click', function(event) {
			event.stopPropagation();
			var bio = button._bioPopup;
			if (!bio) return;

			var shouldOpen = !bio.classList.contains('is-open');
			closeAllBios();
			if (shouldOpen) {
				bio.classList.add('is-open');
				document.body.classList.add('bio-popup-open');
				button.setAttribute('aria-expanded', 'true');
			}
		});
	});

	document.querySelectorAll('.bio-close').forEach(function(button) {
		button.addEventListener('click', function(event) {
			event.stopPropagation();
			closeAllBios();
		});
	});

	document.querySelectorAll('.card-bio').forEach(function(bio) {
		bio.addEventListener('click', function(event) {
			event.stopPropagation();
		});
	});

	// If a bio popup is open, the first outside click should only close
	// the popup. It should not also activate links/buttons underneath it.
	document.addEventListener('click', function(event) {
		var openBio = document.querySelector('.card-bio.is-open');
		if (!openBio) return;

		var clickedInsideBio = openBio.contains(event.target);
		var clickedBioButton = event.target.closest && event.target.closest('.bio-toggle');
		if (clickedInsideBio || clickedBioButton) return;

		event.preventDefault();
		event.stopImmediatePropagation();
		closeAllBios();
	}, true);

	document.addEventListener('click', closeAllBios);
	document.addEventListener('keydown', function(event) {
		if (event.key === 'Escape') closeAllBios();
	});
});
