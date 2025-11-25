document.addEventListener('DOMContentLoaded', () => {
    
    function initializeSlider(card) {
        // Find the new wrapper element we added in the HTML
        const imageWrapper = card.querySelector('.slider-wrapper');
        const images = card.querySelectorAll('img');

        if (!imageWrapper || images.length < 2) {
            return;
        }

        let currentIndex = 0;
        const intervalTime = 3000; 

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            
            // Calculate the horizontal offset in percentage
            const offset = currentIndex * -100; 
            
            // Apply the horizontal slide using the translateX CSS property
            imageWrapper.style.transform = `translateX(${offset}%)`;
        }

        setInterval(nextImage, intervalTime);
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(initializeSlider);
});