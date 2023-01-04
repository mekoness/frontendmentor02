document.addEventListener("click", e => {
    if (e.target.id === "submit") {
        e.preventDefault();
        handleSubmitClick();
    };
});

function handleSubmitClick() {
    const ratingElements = document.querySelectorAll(".rating");
    
    document.querySelector("#modal-rating").classList.add("hidden");
    document.querySelector("#modal-thankyou").classList.remove("hidden");

    ratingElements.forEach(element => {
        if (element.checked) {
            document.querySelector("#rating-display").textContent = `${element.value}`;
        };
    });
};