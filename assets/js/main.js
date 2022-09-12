let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("menuIcon");
menuList.style.maxHeight = "0px";
function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
