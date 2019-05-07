
var maxDots = 30;
var dots = []
addEventListener("keydown", function(event) {
	if (event.keyCode ==86)
		document.body.style.background ="violet";
});

addEventListener("keyup", function(event) {
	if (event.keyCode ==86)
		document.body.style.background ="";
});

addEventListener("mousemove", function(event) {
	if (dots.length > maxDots) {
		var head = dots.shift();
		document.body.removeChild(head);
	}
	var dot = document.createElement("div");
	dot.className = "dot";
	dot.style.left = (event.pageX -4) +"px";
	dot.style.top = (event.pageY -4) +"px";
	document.body.appendChild(dot);
	dots.push(dot);
});
