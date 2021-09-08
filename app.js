// modal 

let detailsBtn = document.querySelector(".contact-form");
let modal = document.querySelector(".modal");


function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

detailsBtn.addEventListener("click", function (e) {     
    modal.classList.add("show");
    modal.classList.remove("hide");    
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

