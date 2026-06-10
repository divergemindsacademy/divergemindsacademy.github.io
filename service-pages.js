document.addEventListener('DOMContentLoaded', function () {
	// Hint boxes for olympiad-style problems
	document.querySelectorAll('.hint-toggle').forEach(function (button) {
		button.addEventListener('click', function () {
			var id = button.getAttribute('data-hint');
			var box = document.getElementById(id);
			if (!box) return;
			var willOpen = !box.classList.contains('is-open');
			box.classList.toggle('is-open', willOpen);
			button.setAttribute('aria-expanded', String(willOpen));
			button.textContent = willOpen ? 'Hide hint' : 'View hint';
			if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([box]);
		});
	});

	document.querySelectorAll('.hint-hide').forEach(function (button) {
		button.addEventListener('click', function () {
			var box = button.closest('.hint-box');
			if (!box) return;
			box.classList.remove('is-open');
			var opener = document.querySelector('[data-hint="' + box.id + '"]');
			if (opener) {
				opener.setAttribute('aria-expanded', 'false');
				opener.textContent = 'View hint';
			}
		});
	});

	// Sticky enrollment lock after the learner has scrolled into the page.
	// Closing it removes the banner only for the current page load; it appears again after refresh.
	var banner = document.querySelector('.service-lock-banner');
	if (banner) {
		var dismissed = false;
		var threshold = Math.max(520, Math.floor(document.documentElement.scrollHeight * 0.28));

		function updateLockBanner() {
			if (!dismissed && window.scrollY > threshold) {
				banner.removeAttribute('aria-hidden');
				banner.classList.add('is-visible');
			}
		}

		function hideLockBanner() {
			dismissed = true;
			banner.classList.remove('is-visible');
			banner.classList.add('is-dismissed');
			banner.setAttribute('aria-hidden', 'true');
			window.removeEventListener('scroll', updateLockBanner);

			// Remove the element after the slide-down animation so no strip remains on mobile.
			window.setTimeout(function () {
				if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
			}, 500);
		}

		window.addEventListener('scroll', updateLockBanner);
		updateLockBanner();

		document.querySelectorAll('.lock-close').forEach(function (btn) {
			btn.addEventListener('click', hideLockBanner);
		});
	}
});
