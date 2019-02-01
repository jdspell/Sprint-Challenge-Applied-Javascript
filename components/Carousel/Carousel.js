class Carousel {
    constructor(carousel){
        this.carousel = carousel;

        this.leftButton = this.carousel.querySelector(".left-button");
        this.rightButton = this.carousel.querySelector(".right-button");

        this.imgs = this.carousel.querySelectorAll(".carousel img");
        this.currentIndex = 0;
        this.imgs[this.currentIndex].classList.add("selected-img");
        this.imgs[this.currentIndex].style.display = "block";

        this.leftButton.addEventListener("click", () => this.selectLeftButton());
        this.rightButton.addEventListener("click", () => this.selectRightButton());
    }

    selectLeftButton(){
        if(this.currentIndex > 0){
            this.imgs[this.currentIndex].style.display = "none";
            this.currentIndex--;
            this.imgs.forEach(img => img.classList.remove("selected-img"));
            this.imgs[this.currentIndex].classList.add("selected-img");
            this.imgs[this.currentIndex].style.display = "block";
        } else {
            this.imgs[this.currentIndex].style.display = "none";
            this.currentIndex = 3;
            this.imgs.forEach(img => img.classList.remove("selected-img"));
            this.imgs[this.currentIndex].classList.add("selected-img");
            this.imgs[this.currentIndex].style.display = "block";
        }

    }

    selectRightButton(){
        if(this.currentIndex < 3){
            this.imgs[this.currentIndex].style.display = "none";
            this.currentIndex++;
            this.imgs.forEach(img => img.classList.remove("selected-img"));
            this.imgs[this.currentIndex].classList.add("selected-img");
            this.imgs[this.currentIndex].style.display = "block";
        } else {
            this.imgs[this.currentIndex].style.display = "none";
            this.currentIndex = 0;
            this.imgs.forEach(img => img.classList.remove("selected-img"));
            this.imgs[this.currentIndex].classList.add("selected-img");
            this.imgs[this.currentIndex].style.display = "block";
        }
    }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/