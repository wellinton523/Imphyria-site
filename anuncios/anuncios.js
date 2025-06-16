const sidebar = document.querySelector(".sidebar");
const sidebartoggler = document.querySelector(".sidebar-toggler");
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
    midialist.classList.add("collapsed")
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

