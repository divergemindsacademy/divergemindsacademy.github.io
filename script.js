// ============================
// Scroll Appear (original, kept)
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
	if (side == 0) {
		menu.style.transform = 'translateX(0)';
		menu.style.position = 'fixed';
	} else {
		menu.style.transform = 'translateX(-100%)';
	}
}

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
// Search slide (original kept)
// ============================
function slide() {
	var srch = document.querySelector('.search');
	if (srch) {
		srch.style.width = srch.style.width === '150px' ? '0' : '150px';
		srch.style.transition = 'width 0.4s ease';
	}
}

// ============================
// Login / Register (original kept)
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
// Checkbox (original kept)
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
// Google auth (original kept)
// ============================
function google() {
	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession");
}

// ============================
// Quiz page functions (original kept)
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
// Google Apps Script backends (server-side, included for completeness)
// These functions run in Google Apps Script, not in the browser.
// ============================

/*
function doPost_newsletter(e) {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var email = e.parameter.email;
	sheet.appendRow([email]);
	return ContentService
		.createTextOutput(JSON.stringify({ result: "success" }))
		.setMimeType(ContentService.MimeType.JSON);
}

function doPost_contact(e) {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var data = [
		new Date(),
		e.parameter.fname,
		e.parameter.lname,
		e.parameter.mail,
		e.parameter.message,
		e.parameter.additional
	];
	sheet.appendRow(data);
	return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
*/
