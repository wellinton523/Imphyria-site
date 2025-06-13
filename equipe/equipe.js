// Sidebar functionality
const sidebar = document.querySelector(".sidebar");
const sidebartoggler = document.querySelector(".sidebar-toggler");
const devmenulist = document.querySelector(".dev-menu-list");
const devmenutoggler = document.querySelector(".dev-toggler");
const midiab = document.querySelector(".midia_button");
const midialist = document.querySelector(".midia_div");

window.onload = function() {
    sidebar.classList.toggle("collapsed");
    midialist.classList.toggle("collapsed");
    document.querySelector(".sidebar-text").classList.toggle("collapsed");
    document.querySelector(".sidebar-text.collapsed").textContent = "Wayless";
};

sidebartoggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    midialist.classList.add("collapsed");
    if (document.querySelector(".sidebar-text").textContent == "Wayless") {
        setTimeout(() => {
            document.querySelector(".sidebar-text").textContent = "Wayless Studios";
        }, 170);
    } else {
        setTimeout(() => {
            document.querySelector(".sidebar-text.collapsed").textContent = "Wayless";
        }, 10);
    }
});

midiab.addEventListener("click", () => {
    midialist.classList.toggle("collapsed");
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.indicators');
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Largura do card + gap
    let visibleCards = Math.min(3, cards.length); // Mostrar até 3 cards
    
    // Criar indicadores
    const totalGroups = Math.ceil(cards.length / visibleCards);
    for (let i = 0; i < totalGroups; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            goToGroup(i);
        });
        indicatorsContainer.appendChild(indicator);
    }
    
    const indicators = document.querySelectorAll('.indicator');
    
    // Botão próximo
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalGroups - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Botão anterior
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Atualizar carousel
    function updateCarousel() {
        const scrollAmount = currentIndex * cardWidth * visibleCards;
        container.style.transform = `translateX(-${scrollAmount}px)`;
        updateIndicators();
    }
    
    // Atualizar indicadores
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Ir para grupo específico
    function goToGroup(groupIndex) {
        currentIndex = groupIndex;
        updateCarousel();
    }
    
    // Ajustar na redimensionamento
    function handleResize() {
        const newVisibleCards = window.innerWidth < 768 ? 1 : 
                             window.innerWidth < 1024 ? 2 : 3;
        if (newVisibleCards !== visibleCards) {
            visibleCards = newVisibleCards;
            currentIndex = 0;
            updateCarousel();
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Inicializar
    updateCarousel();

});