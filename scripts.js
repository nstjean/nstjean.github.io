$(document).ready(function() {

	// NAV BAR TOGGLE
	// opens and closes nav drop down from toggle button
	//
	document.getElementById('toggle').addEventListener('click', function() {
		document.getElementById('menu-left').classList.toggle('active');
		document.getElementById('menu-right').classList.toggle('active');
		document.getElementById('nav-bar').classList.toggle('active');
	});
})