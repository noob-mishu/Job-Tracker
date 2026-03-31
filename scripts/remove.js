document.addEventListener("click", function (e) {

    // 1. check if the clicked element has the class "remove-btn"
    if (e.target.classList.contains("remove-btn"))
    // 2. if yes, remove the closest parent element with the class "card"

    {
        e.target.closest(".card").remove();
        alert("Job removed successfully!");

        // 3. get the total job element
        const totalJobElement = document.getElementById("total-job");

        // 4. get the current total job number
        const currentTotalJob = parseInt(totalJobElement.innerText);

        // 5. decrease the total job number by 1
        const newTotalJob = currentTotalJob - 1;

        // 6. update the total job element with the new total job number
        totalJobElement.innerText = newTotalJob;

        // 7. Update the "8 jobs available" text as well
        const totalJobsAvailableElement = document.getElementById("total-jobs");
        if (totalJobsAvailableElement) {
            totalJobsAvailableElement.innerText = newTotalJob;
        }
    }






        // Othoba Eivabeo Kora Jete Pare

    });