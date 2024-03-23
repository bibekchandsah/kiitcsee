// make nav element active dynamically according to its page name and class name
// Mapping between page names and corresponding classes
var pageClassMap = {
    "1st_Semester_PYQs.html": "FirstSemesterPYQs",
    "2nd_Semester_PYQs.html": "SecondSemesterPYQs",
    "3rd_Semester_PYQs.html": "ThirdSemesterPYQs",
    "4th_Semester_PYQs.html": "FourthSemesterPYQs",
    "5th_Semester_PYQs.html": "FifthSemesterPYQs",
    "6th_Semester_PYQs.html": "SixthSemesterPYQs",
    "1st_Semester_Notes.html": "FirstSemesterNotes",
    "2nd_Semester_Notes.html": "SecondSemesterNotes",
    "3rd_Semester_Notes.html": "ThirdSemesterNotes",
    "4th_Semester_Notes.html": "FourthSemesterNotes",
    "5th_Semester_Notes.html": "FifthSemesterNotes",
    "6th_Semester_Notes.html": "SixthSemesterNotes",
    "1st_Semester_Videos.html": "FirstSemesterVideos",
    "2nd_Semester_Videos.html": "SecondSemesterVideos",
    "3rd_Semester_Videos.html": "ThirdSemesterVideos",
    "4th_Semester_Videos.html": "FourthSemesterVideos",
    "5th_Semester_Videos.html": "FifthSemesterVideos",
    "6th_Semester_Videos.html": "SixthSemesterVideos",
};
// Get the current HTML page name
var currentPageName = window.location.pathname.split('/').pop();
// Check if the current page name exists in the mapping
if (pageClassMap.hasOwnProperty(currentPageName)) {
    // Get the corresponding class name from the mapping
    var className = pageClassMap[currentPageName];
    // Add "active" class to elements with the corresponding class name
    var menuElement = document.querySelector('.' + className);
    if (menuElement) {
        menuElement.classList.add('active');
        // Add "active" class to parent elements of ".dropdown-menu"
        var dropdownMenu = menuElement.closest('.dropdown-menu');
        if (dropdownMenu) {
            var dropdownToggle = dropdownMenu.closest('.dropdown').querySelector('.nav-link');
            if (dropdownToggle) {
                dropdownToggle.classList.add('active');
            }
        }
    }
}





// filter the data dynamically of table
document.querySelectorAll('.filter').forEach(function (select) {
    select.addEventListener('change', applyFilters);
});
var resetButton = document.getElementById('resetButton');
if (resetButton) {
    resetButton.addEventListener('click', function () {
        document.querySelectorAll('.filter').forEach(function (select) {
            select.value = '';
        });
        applyFilters();
    });
}
function applyFilters() {
    var subject = document.getElementById('subjectSelect').value;
    var year = document.getElementById('yearSelect').value;
    var exam = document.getElementById('examSelect').value;
    var paper = document.getElementById('paperSelect').value;

    var tableRows = document.querySelectorAll('#dataTable tbody tr');

    tableRows.forEach(function (row) {
        var rowSubject = row.getAttribute('data-subject');
        var rowYear = row.getAttribute('data-year');
        var rowExam = row.getAttribute('data-exam');
        var rowPaper = row.getAttribute('data-paper');

        if ((subject === '' || subject === rowSubject) &&
            (year === '' || year === rowYear) &&
            (exam === '' || exam === rowExam) &&
            (paper === '' || paper === rowPaper)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}






// arrange row in ascending order according to year
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the table body
//     var tbody = document.querySelector('tbody');

//     // Get all table rows
//     var rows = Array.from(tbody.querySelectorAll('tr'));

//     // Sort the rows based on the value of the "data-year" attribute
//     rows.sort(function (a, b) {
//         var yearA = parseInt(a.dataset.year);
//         var yearB = parseInt(b.dataset.year);
//         return yearA - yearB;
//     });

//     // Reattach the sorted rows to the table body
//     rows.forEach(function (row) {
//         tbody.appendChild(row);
//     });
// });


// arrange row in ascending order according to subject
document.addEventListener("DOMContentLoaded", function () {
    // Get the table body
    var tbody = document.querySelector('tbody');
    if (!tbody) {
        console.error('Error: tbody element not found.');
        return;
    }

    // Get all table rows
    var rows = Array.from(tbody.querySelectorAll('tr'));

    // Sort the rows based on the text content of the "Subject" column
    rows.sort(function (a, b) {
        var subjectA = a.querySelector('th').textContent.trim().toLowerCase();
        var subjectB = b.querySelector('th').textContent.trim().toLowerCase();
        return subjectA.localeCompare(subjectB);
    });

    // Reattach the sorted rows to the table body
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });
});





// to show and hide download option according to availability
document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class "solution_sections"
    var solutionSections = document.querySelectorAll('.solution_sections');

    // Iterate over each solution section
    solutionSections.forEach(function (section) {
        // Get the span element inside the solution section
        var spanElement = section.querySelector('span');

        // Get the text content of the span element
        var text = spanElement.textContent.trim();

        // Get the .btn-group element
        var btnGroup = section.querySelector('.btn-group');

        // If the text content is "Not Available", hide the .btn-group
        if (text == 'Not Available') {
            btnGroup.style.display = 'none';
        }
        // If the text content is "Available", hide the span element and keep the .btn-group
        else if (text == 'Available') {
            spanElement.style.display = 'none'; // Hide the span element
        }
    });
});






// show downloading status in button when click on download
// Add event listeners after the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Get all download buttons
    const downloadButtons = document.querySelectorAll('.download-folder, .download-file');
    // Attach event listeners to each button
    downloadButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Check if it's a folder download or file download
            if (button.classList.contains('download-folder')) {
                // If it's a folder download, call downloadFolderAsZip function
                downloadFolderAsZip(button.dataset.folder, button);
            } else {
                // If it's a file download, call downloadFile function
                downloadFile([button.dataset.file], button);
            }
        });
    });
});






// download status toast when downloading file and folder
const downloadToastTriggers = document.querySelectorAll('.toast-trigger');
const downloadToast = document.getElementById('downloadToast');
downloadToastTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const toast = downloadToast.querySelector('.toast');
        toast.classList.add('show'); // Show the toast
        setTimeout(() => {
            toast.classList.remove('show'); // Hide the toast after 5 seconds
        }, 5000);
    });
});






// toast of modal pdf preview
// const toastTrigger = document.querySelectorAll('.toast-trigger');
// const toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger.length > 0) {
//     const toastBootstrap = new bootstrap.Toast(toastLiveExample);
//     toastTrigger.forEach((button) => {
//         button.addEventListener('click', () => {
//             toastBootstrap.show();
//             // Hide the toast after 5 seconds
//             setTimeout(() => {
//                 toastBootstrap.hide();
//             }, 50000);
//         });
//     });
// }


// toast of modal pdf preview
// const toastTrigger = document.querySelectorAll('.toast-trigger');
// const toastLiveExample = document.getElementById('liveToast');

// function addBootstrapScript() {
//     const script = document.createElement('script');
//     script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";
//     script.id = "bootstrapScript";
//     document.body.appendChild(script);
// }
// function removeBootstrapScript() {
//     const script = document.getElementById('bootstrapScript');
//     if (script) {
//         script.remove();
//     }
// }


// if (toastTrigger.length > 0) {
//     const toastBootstrap = new bootstrap.Toast(toastLiveExample);
//     toastTrigger.forEach((button) => {
//         button.addEventListener('click', () => {
//             toastBootstrap.show();
//             // addBootstrapScript();
//             // setTimeout(() => {
//             //     removeBootstrapScript();
//             // }, 10000); // 10 seconds

//         });
//     });
// }


// modal pdf preview toast
const modalToastTriggers = document.querySelectorAll('.modalToast-trigger');
const modalToast = document.getElementById('modalToast');
modalToastTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const toast = modalToast.querySelector('.toast');
        toast.classList.add('show'); // Show the toast
        setTimeout(() => {
            toast.classList.remove('show'); // Hide the toast after 5 seconds
        }, 5000);
    });
});





// pdf preview
// document.addEventListener("DOMContentLoaded", function () {
//     var buttons = document.querySelectorAll(".clickLink");

//     buttons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             var linkKey = this.getAttribute('data-id');
//             let link;
//             if (fileUrls[linkKey]) {
//                 link = fileUrls[linkKey][0];
//             } else if (fileUrls1stNote[linkKey]) {
//                 link = fileUrls1stNote[linkKey][0];
//             } else if (fileUrls1stPYQs[linkKey]) {
//                 link = fileUrls1stPYQs[linkKey][0];
//             } else if (fileUrls2ndNote[linkKey]) {
//                 link = fileUrls2ndNote[linkKey][0];
//             } else if (fileUrls2ndPYQs[linkKey]) {
//                 link = fileUrls2ndPYQs[linkKey][0];
//             } else if (fileUrls3rdNote[linkKey]) {
//                 link = fileUrls3rdNote[linkKey][0];
//             } else if (fileUrls3rdPYQs[linkKey]) {
//                 link = fileUrls3rdPYQs[linkKey][0];
//             } else if (fileUrls4thNote[linkKey]) {
//                 link = fileUrls4thNote[linkKey][0];
//             } else if (fileUrls4thPYQs[linkKey]) {
//                 link = fileUrls4thPYQs[linkKey][0];
//             } else if (fileUrls5thNote[linkKey]) {
//                 link = fileUrls5thNote[linkKey][0];
//             } else if (fileUrls5thPYQs[linkKey]) {
//                 link = fileUrls5thPYQs[linkKey][0];
//             } else if (fileUrls6thNote[linkKey]) {
//                 link = fileUrls6thNote[linkKey][0];
//             } else if (fileUrls6thPYQs[linkKey]) {
//                 link = fileUrls6thPYQs[linkKey][0];
//             } else {
//                 console.error("URL not found for key: " + linkKey);
//                 return;
//             }

//             // Check if the URL is from GitHub and contains "blob"
//             if (link.includes("github.com") && link.includes("blob")) {
//                 // Replace "blob" with "raw"
//                 link = link.replace("blob", "raw");
//             }

//             var googleDocsURL = "https://docs.google.com/gview?url=" + encodeURIComponent(link) + "&embedded=true";
//             document.getElementById("myframe").src = googleDocsURL;

//             // Set modal title
//             var modalTitle = this.getAttribute('data-id');
//             document.getElementById("modalTitle").innerText = modalTitle;
//             // Update download button text
//             var downloadButton = document.getElementById("modalDownload");
//             downloadButton.setAttribute("onclick", "downloadFiles(['" + linkKey + "'], this)");
//         });
//     });
// });




document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".clickLink");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var linkKey = this.getAttribute('data-id');
            let link;
            // if (fileUrls[linkKey]) {
            //     link = fileUrls[linkKey][0];}
            if (fileUrls1stNote[linkKey]) {
                link = fileUrls1stNote[linkKey][0];
            } else if (fileUrls1stPYQs[linkKey]) {
                link = fileUrls1stPYQs[linkKey][0];
            } else if (fileUrls2ndNote[linkKey]) {
                link = fileUrls2ndNote[linkKey][0];
            } else if (fileUrls2ndPYQs[linkKey]) {
                link = fileUrls2ndPYQs[linkKey][0];
            } else if (fileUrls3rdNote[linkKey]) {
                link = fileUrls3rdNote[linkKey][0];
            } else if (fileUrls3rdPYQs[linkKey]) {
                link = fileUrls3rdPYQs[linkKey][0];
            } else if (fileUrls4thNote[linkKey]) {
                link = fileUrls4thNote[linkKey][0];
            } else if (fileUrls4thPYQs[linkKey]) {
                link = fileUrls4thPYQs[linkKey][0];
            } else if (fileUrls5thNote[linkKey]) {
                link = fileUrls5thNote[linkKey][0];
            } else if (fileUrls5thPYQs[linkKey]) {
                link = fileUrls5thPYQs[linkKey][0];
            } else if (fileUrls6thNote[linkKey]) {
                link = fileUrls6thNote[linkKey][0];
            } else if (fileUrls6thPYQs[linkKey]) {
                link = fileUrls6thPYQs[linkKey][0];
            } else {
                console.error("URL not found for key: " + linkKey);
                return;
            }

            // Check if the URL is from GitHub and contains "blob"
            if (link.includes("github.com") && link.includes("blob")) {
                // Replace "blob" with "raw"
                link = link.replace("blob", "raw");
            }

            var googleDocsURL = "https://docs.google.com/gview?url=" + encodeURIComponent(link) + "&embedded=true";
            document.getElementById("myframe").src = googleDocsURL;

            // Set modal title
            var modalTitle = this.getAttribute('data-id');
            document.getElementById("modalTitle").innerText = modalTitle;

            // Update download button text
            var downloadButton = document.getElementById("modalDownload");
            downloadButton.textContent = "Download";
            downloadButton.setAttribute("onclick", "downloadFiles(['" + linkKey + "'], this)");
        });
    });
});





// filter data in note pages
document.addEventListener('DOMContentLoaded', function () {
    var filterInputs = document.querySelectorAll('.noteFilter');
    filterInputs.forEach(function (input) {
        input.addEventListener('change', filterTable);
    });

    var topicInput = document.getElementById('noteTopicInput');
    topicInput.addEventListener('input', filterTable);

    var resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetFilters);

    function filterTable() {
        var subject = document.getElementById('NoteSubjectSelect').value.toLowerCase();
        var topic = document.getElementById('noteTopicInput').value.toLowerCase();
        var tableRows = document.querySelectorAll('#dataTable tbody tr');

        tableRows.forEach(function (row) {
            var currentSubject = row.getAttribute('data-subject').toLowerCase();
            var topicCell = row.getElementsByTagName('td')[1];
            var currentTopic = topicCell ? topicCell.textContent.trim().toLowerCase() : '';

            console.log("Current Subject:", currentSubject);
            console.log("Current Topic:", currentTopic);

            var subjectMatch = subject === '' || currentSubject === subject;
            var topicMatch = currentTopic.includes(topic);

            console.log("Subject Match:", subjectMatch);
            console.log("Topic Match:", topicMatch);

            if (subjectMatch && topicMatch) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    }




    function resetFilters() {
        var filterInputs = document.querySelectorAll('.noteFilter');
        filterInputs.forEach(function (input) {
            input.value = '';
        });

        var tableRows = document.querySelectorAll('#dataTable tbody tr');
        tableRows.forEach(function (row) {
            row.style.display = 'table-row';
        });
    }
});

