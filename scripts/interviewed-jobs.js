document.addEventListener("click", function (e) {
    // select all interview buttons

    if(e.target.classList.contains("interview-btn"))
    {

        // get the closest card element
        const card = e.target.closest(".card");

        //update the not applied badge
        const badge = document.querySelector(".status-btn");

        badge.innerText = "INTERVIEWED";
        badge.classList.replace("text-blue-600", "text-green-600");
        badge.classList.replace("bg-gray-200", "bg-green-200");

        // move the card to the interview section
        const interviewSection = document.getElementById("interviewed-jobs");
        interviewSection.appendChild(card);

        // update the total job number
        const totalJobElement = document.getElementById("total-job");
        const currentTotalJob = parseInt(totalJobElement.innerText)-1;
        totalJobElement.innerText = currentTotalJob;


        // update the total interviewed job number
        const totalInterviewedJobElement = document.getElementById("interviewed-job");
        const currentInterviewedJob = parseInt(totalInterviewedJobElement.innerText)+1;
        totalInterviewedJobElement.innerText = currentInterviewedJob;

        // update the "8 jobs available" text as well
        const totalJobsAvailableElement = document.getElementById("total-jobs");
        if (totalJobsAvailableElement) {
            totalJobsAvailableElement.innerText = currentTotalJob;
        }

        // disable the interview button
        e.target.remove();







        

        

        
    }


});