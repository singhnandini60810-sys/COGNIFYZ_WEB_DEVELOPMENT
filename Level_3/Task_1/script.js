// ============================================
// THE WIZARDING ARCHIVE
// Cognifyz - Level 3 Task 1
// ============================================


// ============================================
// SLIDESHOW DATA
// ============================================

const slides = [

    {
        image: "./assets/archive-01.jpg",
        title: "Hogwarts Castle",
        description: "Somewhere beyond the ordinary world"
    },

    {
        image: "./assets/archive-02.jpg",
        title: "The Ancient Library",
        description: "The Restricted Section"
    },

    {
        image: "./assets/archive-03.jpg",
        title: "The Candlelit Hall",
        description: "Recorded shortly after curfew"
    },

    {
        image: "./assets/archive-04.jpg",
        title: "The Apothecary",
        description: "Contents classified by the Ministry"
    },

    {
        image: "./assets/archive-05.jpg",
        title: "The Forbidden Forest",
        description: "Entry strongly discouraged"
    },

    {
        image: "./assets/archive-06.jpg",
        title: "The Sorting Hat",
        description: "Magical Object № 47"
    }

];


// ============================================
// SLIDESHOW ELEMENTS
// ============================================

const slideImage =
    document.getElementById("slideImage");

const slideNumber =
    document.getElementById("slideNumber");

const slideTitle =
    document.getElementById("slideTitle");

const slideDescription =
    document.getElementById("slideDescription");

const photoFrame =
    document.getElementById("photoFrame");

const progressBar =
    document.getElementById("progressBar");


let currentSlide = 0;


// ============================================
// PROGRESS BAR
// ============================================

function startProgress() {

    progressBar.classList.remove("running");

    // Force browser to restart animation
    void progressBar.offsetWidth;

    progressBar.classList.add("running");
}


// ============================================
// DISPLAY SLIDE
// ============================================

function displaySlide(index) {

    const slide = slides[index];

    slideImage.src = slide.image;

    slideImage.alt = slide.title;

    slideTitle.textContent =
        slide.title;

    slideDescription.textContent =
        slide.description;

    slideNumber.textContent =
        `PHOTOGRAPH ${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
}


// ============================================
// NEXT SLIDE
// ============================================

function nextSlide() {

    photoFrame.classList.add("changing");

    setTimeout(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        displaySlide(currentSlide);

        photoFrame.classList.remove("changing");

        startProgress();

    }, 450);
}


// Start initial animation
displaySlide(currentSlide);
startProgress();


// Change photograph automatically
setInterval(nextSlide, 4000);


// ============================================
// CLICK-TO-ENLARGE GALLERY
// ============================================

const galleryCards =
    document.querySelectorAll(".gallery-card");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const closeModal =
    document.getElementById("closeModal");


galleryCards.forEach((card) => {

    card.addEventListener("click", () => {

        const image =
            card.dataset.image;

        const title =
            card.dataset.title;

        const description =
            card.dataset.description;


        modalImage.src =
            image;

        modalImage.alt =
            title;

        modalTitle.textContent =
            title;

        modalDescription.textContent =
            description;


        imageModal.classList.add("open");

        imageModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    });

});


// ============================================
// CLOSE MODAL
// ============================================

function closeImageModal() {

    imageModal.classList.remove("open");

    imageModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


// X button

closeModal.addEventListener(
    "click",
    closeImageModal
);


// Click dark background

imageModal.addEventListener(
    "click",
    (event) => {

        if (event.target === imageModal) {
            closeImageModal();
        }

    }
);


// ESC key

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            imageModal.classList.contains("open")
        ) {

            closeImageModal();

        }

    }
);