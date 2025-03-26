const sidebar = document.querySelector(".sidebar");
const sidebartoggler = document.querySelector(".sidebar-toggler");
const devmenulist = document.querySelector(".dev-menu-list")
const devmenutoggler = document.querySelector(".dev-toggler")
const sinfoheader = document.querySelector(".s-info-header")
const infoheader = document.querySelector(".info-background")

window.onload = function() {
    sidebar.classList.toggle("collapsed");
    devmenulist.classList.toggle("collapsed")
  };

sidebartoggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    sinfoheader.classList.toggle("collapsed")
    infoheader.classList.toggle("collapsed")
})
devmenutoggler.addEventListener("click", () => {
    devmenulist.classList.toggle("collapsed")
})