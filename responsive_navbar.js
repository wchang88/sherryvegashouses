function open() {
	var nav = document.getElementById("nav");
	nav.style.height = "100vh";
	
	var navbar = document.getElementById("navbar");
	navbar.style.display = "block";
	
	var open_btn = document.getElementById("open_nav");
	open_btn.style.display = "none";
	
	var nav_top = document.getElementById("nav_top");
	nav_top.style.gridTemplateColumns = "auto 50px";
	
	var close_btn = document.getElementById("close_btn");
	close_btn.style.display = "inline-block";
}

function close() {
	var nav = document.getElementById("nav");
	nav.style.height = "55px";
	
	var navbar = document.getElementById("navbar");
	navbar.style.display = "none";
	
	var open_btn = document.getElementById("open_nav");
	open_btn.style.display = "inline-block";
	
	var nav_top = document.getElementById("nav_top");
	nav_top.style.gridTemplateColumns = "50px auto";
	
	var close_btn = document.getElementById("close_btn");
	close_btn.style.display = "none";
}

var window_width = window.innerWidth;
if (window_width <= 600) {
	document.addEventListener('DOMContentLoaded', function () {
		document.getElementById("open_nav").onclick = open;
		document.getElementById("close_btn").onclick = close;
		var nav_links = document.getElementsByClassName("nav_elem");
		for (var i = 0; i < nav_links.length; i++) {
			nav_links[i].onclick = close;
		}
	});
}