const sidebar = document.querySelector(".sidebar");
const sidebartoggler = document.querySelector(".sidebar-toggler");
const devmenulist = document.querySelector(".dev-menu-list")
const devmenutoggler = document.querySelector(".dev-toggler")
const sinfoheader = document.querySelector(".s-info-header")
const infoheader = document.querySelector(".info-background")
const midiab = document.querySelector(".midia_button")
const midialist = document.querySelector(".midia_div")

window.onload = function() {
    sidebar.classList.toggle("collapsed");
    midialist.classList.toggle("collapsed")
    document.querySelector(".sidebar-text").classList.toggle("collapsed")
    document.querySelector(".sidebar-text.collapsed").textContent = "Wayless"
};


sidebartoggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    sinfoheader.classList.toggle("collapsed")
    midialist.classList.add("collapsed")
    infoheader.classList.toggle("collapsed")
    if (document.querySelector(".sidebar-text").textContent == "Wayless"){
        setTimeout(() => {
            document.querySelector(".sidebar-text").textContent = "Wayless Studios"
        }, 170);
    }else{
        setTimeout(() => {
            document.querySelector(".sidebar-text.collapsed").textContent = "Wayless"
        }, 10);
    }
})

midiab.addEventListener("click", () => {
    midialist.classList.toggle("collapsed")
})
function toggleDetalhes(button_ler1) {
    const li = button_ler1.closest('.nav_game')
    const resumo = li.querySelector('.resumo')
    const detalhes = li.querySelector('.detalhes')
    if (detalhes.style.display === 'none') {
        resumo.style.display = 'none'
        detalhes.style.display = 'block'
        button_ler1.textContent = 'Ler menos'
    } 
    else {
        resumo.style.display = 'block'
        detalhes.style.display = 'none'
        button_ler1.textContent = 'Ler mais'
    }
}