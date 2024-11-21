document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtn = document.getElementById("show-more-btn");
    const moreInfo = document.getElementById("more-info");

    showMoreBtn.addEventListener("click", () => {
        if (moreInfo.classList.contains("hidden")) {
            moreInfo.classList.remove("hidden");
            showMoreBtn.textContent = "Mostrar Menos";
        } else {
            moreInfo.classList.add("hidden");
            showMoreBtn.textContent = "Saiba Mais";
        }
    });
});
