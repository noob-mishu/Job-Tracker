document.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
        e.target.closest(".card").remove();
        alert("Job removed successfully!");
    }
});