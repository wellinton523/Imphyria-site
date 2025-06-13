const sidebar = document.querySelector(".sidebar");
const sidebartoggler = document.querySelector(".sidebar-toggler");
const devmenulist = document.querySelector(".dev-menu-list")
const devmenutoggler = document.querySelector(".dev-toggler")
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

const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}