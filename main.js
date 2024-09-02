const burgerImage = document.querySelectorAll('.burger img');
const toggleImage = document.querySelectorAll('.burger-toggle img');
let currentIndex = 0;

toggleImage[currentIndex].classList.add('active');
burgerImage.forEach((img, index) => {
    img.addEventListener('click', () => {
        toggleImage.forEach(toggleImg => toggleImg.classList.remove('active')); 
        toggleImage[currentIndex].classList.add('active');
        toggleImage[currentIndex].src = burgerImage[index].src;
        currentIndex = (currentIndex + 1) % toggleImages.length;

    });

});

