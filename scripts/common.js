function showonly(id,btn){
    const allJobs = document.getElementById("all-jobs");
    const interviewedJobs = document.getElementById("interviewed-jobs");
    const rejectedJobs = document.getElementById("rejected-jobs");
    //all sections are hidden
    allJobs.classList.add("hidden");
    interviewedJobs.classList.add("hidden");
    rejectedJobs.classList.add("hidden");

    // show only the selected section
    const selected= document.getElementById(id);
    selected.classList.remove("hidden");


}