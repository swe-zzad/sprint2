// Function to handle tab switching
function openResume(evt, resumeName) {
    var i, tabcontent, tablinks;

    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove active class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the clicked tab's content and add active class to the clicked tab
    document.getElementById(resumeName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Set default tab to show
document.getElementsByClassName("tablinks")[0].click();
