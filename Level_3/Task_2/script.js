const applyButton =
    document.getElementById("applyButton");

const applyModal =
    document.getElementById("applyModal");

const closeModal =
    document.getElementById("closeModal");


applyButton.addEventListener("click", () => {
    applyModal.classList.add("open");
    document.body.style.overflow = "hidden";
});


closeModal.addEventListener("click", closeApplyModal);


applyModal.addEventListener("click", (event) => {

    if (event.target === applyModal) {
        closeApplyModal();
    }

});


document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        applyModal.classList.contains("open")
    ) {
        closeApplyModal();
    }

});


function closeApplyModal() {

    applyModal.classList.remove("open");

    document.body.style.overflow = "";

}