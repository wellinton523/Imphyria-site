const sidebar = document.querySelector(".sidebar");
const sidebartoggler = document.querySelector(".sidebar-toggler");
const devmenulist = document.querySelector(".dev-menu-list")
const devmenutoggler = document.querySelector(".dev-toggler")

sidebartoggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
})
devmenutoggler.addEventListener("click", () => {
    devmenulist.classList.toggle("collapsed")
})