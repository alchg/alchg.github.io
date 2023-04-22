var menu_close=false;
window.onload = function() {
	let menu_switch = document.getElementById("menu_switch");
	let side_menu =	document.getElementById("side_menu");
	if(window.innerWidth >= 1100){
		side_menu.setAttribute("open","open");
		menu_switch.textContent = "Close menu";
		meun_close = false;
	}else{
		menu_close = true;
	}
	menu_switch.addEventListener("click",() => {
		if(menu_close == true){
			menu_switch.textContent = "Close menu";
			menu_close = false;
		}else{
			menu_switch.textContent = "Open menu";
			menu_close = true;
		}
		console.log("menu="+menu_close);
	});
}

