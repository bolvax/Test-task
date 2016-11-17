var pageWidth = document.documentElement.clientWidth,
	pageHeight = document.body.clientHeight,
	screenHeight = document.documentElement.clientHeight,
	nav = document.getElementById("side-p"),
    tabFilter = document.getElementById("tab-filter"),
    mainContent = document.getElementById("main-content"),
    nav = document.getElementById("side-p"),
    toggleBar = document.getElementById("sidebar-toggle");

	nav.style.height = pageHeight+"px";
	popup.style.height = screenHeight+"px";

function openNav(){
    nav.style.width = "240px";
    mainContent.style.width = (pageWidth-240)+"px";
    mainContent.style.marginLeft = "240px";
    toggleBar.removeEventListener("click", openNav);
    toggleBar.addEventListener("click", closeNav);

}
function closeNav(){
    nav.style.width = "0px";
    mainContent.style.width = pageWidth+"px";
    mainContent.style.marginLeft = "0px";
    toggleBar.removeEventListener("click", closeNav);
    toggleBar.addEventListener("click", openNav);
}
function closePpp(){
    popup.style.display = "none";
};
function openPpp(){
    popup.style.display = "block";
};

toggleBar.addEventListener("click", openNav);
nav.addEventListener("click", closeNav);
tabFilter.addEventListener("click", openPpp);
cross.addEventListener("click", closePpp);
save.addEventListener("click", closePpp);