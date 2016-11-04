	var pageWidth = document.documentElement.clientWidth;
	var pageHeight = document.body.clientHeight;

	nav = document.getElementById('side-panel');
	nav.style.height = pageHeight-100+'px';

    var mainContent = document.getElementById('main'),
    	nav = document.getElementById('side-panel');
    	toggleBar = document.getElementById('sidebar-toggle');
function openNav(){
    nav.style.width = '240px';
    mainContent.style.width = (pageWidth-240)+'px';
    mainContent.style.marginLeft = "240px";
	toggleBar.onclick = closeNav;

}
function closeNav(){
    nav.style.width = '0px';
    mainContent.style.width = pageWidth+'px';
    mainContent.style.marginLeft = "0px";
    toggleBar.onclick = openNav;
}
  