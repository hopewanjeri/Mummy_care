document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    
    setInterval(function() {
        carouselItems.forEach(item => {
            item.classList.toggle("animation");
        });
    }, 2000);
});
