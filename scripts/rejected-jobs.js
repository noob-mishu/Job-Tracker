document.addEventListener("click", function (e) {
    // select all reject buttons

    if(e.target.classList.contains("reject-btn"))
    {

        // get the closest card element
        const card = e.target.closest(".card");

        //update the not applied badge
        const badge = document.querySelector(".status-btn");

        badge.innerText = "REJECTED";
        badge.classList.replace("text-red-500", "text-red-600");
        badge.classList.replace("bg-gray-200", "bg-red-200");

        // move the card to the rejected section
        const rejectedSection = document.getElementById("rejected-jobs");
        rejectedSection.appendChild(card);

        // update the total job number
        const totalJobElement = document.getElementById("total-job");
        const currentTotalJob = parseInt(totalJobElement.innerText)-1;
        totalJobElement.innerText = currentTotalJob;


        // update the total rejected job number
        const totalRejectedJobElement = document.getElementById("rejected-job");
        const currentRejectedJob = parseInt(totalRejectedJobElement.innerText)+1;
        totalRejectedJobElement.innerText = currentRejectedJob;

        // update the "8 jobs available" text as well
        const totalJobsAvailableElement = document.getElementById("total-jobs");
        if (totalJobsAvailableElement) {
            totalJobsAvailableElement.innerText = currentTotalJob;
        }

        // disable the interview button
        e.target.remove();







        

        

        
    }


});