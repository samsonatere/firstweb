document.addEventListener("click", function () {
	document.querySelector("#ScrollUp").onclick = function () { 
		console.log("clicked");  
		window.scrollTo({ top: 0, right: 0, behavior: "smooth", });
	}
})
