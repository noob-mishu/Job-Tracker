function showonly(id,btn){
    const allJobs = document.getElementById("all-jobs");
    const interviewedJobs = document.getElementById("interviewed-jobs");

    //all sections are hidden
    allJobs.classList.add("hidden");
    interviewedJobs.classList.add("hidden");

    // show only the selected section
    const selected= document.getElementById(id);
    selected.classList.remove("hidden");


}