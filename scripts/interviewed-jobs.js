document.addEventListener("click", function (e) {
    // select all interview buttons

    if(e.target.classList.contains("interview-btn"))
    {

        // get the closest card element
        const card = e.target.closest(".card");

        // move the card to the interview section
        const interviewSection = document.getElementById("interviewed-jobs");
        interviewSection.appendChild(card);


        //update the not applied badge
        const badge = document.querySelector(".status-btn");
        badge.innerText = "INTERVIEWED";
        badge.classList.replace("text-blue-600", "text-green-600");
        badge.classList.replace("bg-gray-200", "bg-green-200");

        
    }


});