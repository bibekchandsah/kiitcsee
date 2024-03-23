// Update homepage links whenever it contain class homePage
// var homePageLinks = document.querySelectorAll('.homePage');
// homePageLinks.forEach(function (homePageLink) {
//     homePageLink.href = '/index.html';
// });

// Update feedback links whenever it contain class FeedbackForm
// var feedbackLinks = document.querySelectorAll('.FeedbackForm');
// feedbackLinks.forEach(function (feedbackLink) {
//     feedbackLink.href = '/assets/Others/Feedback_form.html';
// });

// Update developer links whenever it contain class Developer
// var developerLinks = document.querySelectorAll('.Developer');
// developerLinks.forEach(function (developerLink) {
//     developerLink.href = '/assets/Others/Developer.html';
// });


// Update logo images by adding logoImage class in image tag
var logoImages = document.querySelectorAll('.logoImage');
logoImages.forEach(function (logoImage) {
    logoImage.src = 'assets/image/KIIT_CSE_blue_transparent.png';
});

// Update dropdown menu links to open the corresponding page when clicked
// https://bibek10550.github.io/kiitcse/
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FirstSemesterPYQs');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/PYQs/1st_Semester_PYQs.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FirstSemesterNotes');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Notes/1st_Semester_Notes.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FirstSemesterVideos');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Videos/1st_Semester_Videos.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .SecondSemesterPYQs');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/PYQs/2nd_Semester_PYQs.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .SecondSemesterNotes');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Notes/2nd_Semester_Notes.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .SecondSemesterVideos');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Videos/2nd_Semester_Videos.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .ThirdSemesterPYQs');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/PYQs/3rd_Semester_PYQs.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .ThirdSemesterNotes');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Notes/3rd_Semester_Notes.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .ThirdSemesterVideos');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Videos/3rd_Semester_Videos.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FourthSemesterPYQs');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/PYQs/4th_Semester_PYQs.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FourthSemesterNotes');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Notes/4th_Semester_Notes.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FourthSemesterVideos');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Videos/4th_Semester_Videos.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FifthSemesterPYQs');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/PYQs/5th_Semester_PYQs.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FifthSemesterNotes');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Notes/5th_Semester_Notes.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .FifthSemesterVideos');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Videos/5th_Semester_Videos.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .SixthSemesterPYQs');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/PYQs/5th_Semester_PYQs.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .SixthSemesterNotes');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Notes/6th_Semester_Notes.html';
// });
// var dropdownMenus = document.querySelectorAll('.dropdown-menu .SixthSemesterVideos');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Videos/6th_Semester_Videos.html';
// });


function setDropdownMenuHrefs(selector, href) {
    var dropdownMenus = document.querySelectorAll(selector);
    dropdownMenus.forEach(function (dropdownMenu) {
        dropdownMenu.href = href;
    });
}

setDropdownMenuHrefs('.dropdown-menu .FirstSemesterPYQs', '1st_Semester_PYQs.html');
setDropdownMenuHrefs('.dropdown-menu .FirstSemesterNotes', '1st_Semester_Notes.html');
setDropdownMenuHrefs('.dropdown-menu .FirstSemesterVideos', '1st_Semester_Videos.html');
setDropdownMenuHrefs('.dropdown-menu .SecondSemesterPYQs', '2nd_Semester_PYQs.html');
setDropdownMenuHrefs('.dropdown-menu .SecondSemesterNotes', '2nd_Semester_Notes.html');
setDropdownMenuHrefs('.dropdown-menu .SecondSemesterVideos', '2nd_Semester_Videos.html');
setDropdownMenuHrefs('.dropdown-menu .ThirdSemesterPYQs', '3rd_Semester_PYQs.html');
setDropdownMenuHrefs('.dropdown-menu .ThirdSemesterNotes', '3rd_Semester_Notes.html');
setDropdownMenuHrefs('.dropdown-menu .ThirdSemesterVideos', '3rd_Semester_Videos.html');
setDropdownMenuHrefs('.dropdown-menu .FourthSemesterPYQs', '4th_Semester_PYQs.html');
setDropdownMenuHrefs('.dropdown-menu .FourthSemesterNotes', '4th_Semester_Notes.html');
setDropdownMenuHrefs('.dropdown-menu .FourthSemesterVideos', '4th_Semester_Videos.html');
setDropdownMenuHrefs('.dropdown-menu .FifthSemesterPYQs', '5th_Semester_PYQs.html');
setDropdownMenuHrefs('.dropdown-menu .FifthSemesterNotes', '5th_Semester_Notes.html');
setDropdownMenuHrefs('.dropdown-menu .FifthSemesterVideos', '5th_Semester_Videos.html');
setDropdownMenuHrefs('.dropdown-menu .SixthSemesterPYQs', '5th_Semester_PYQs.html');
setDropdownMenuHrefs('.dropdown-menu .SixthSemesterNotes', '6th_Semester_Notes.html');
setDropdownMenuHrefs('.dropdown-menu .SixthSemesterVideos', '6th_Semester_Videos.html');
setDropdownMenuHrefs('.dropdown-menu .FeedbackForm', 'Feedback_Form.html');
setDropdownMenuHrefs('.SemesterBooks', 'Semester_Books.html');
setDropdownMenuHrefs('.Developer', 'Developer.html');
setDropdownMenuHrefs('.homePage', 'index.html');




// Update semester book links whenever it contain class SemesterBooks
// var dropdownMenus = document.querySelectorAll('.SemesterBooks');
// dropdownMenus.forEach(function (dropdownMenu) {
//     dropdownMenu.href = '/assets/Books/Semester_Books.html';
// });


// make nav element active dynamically
// Get the current HTML page name
// var currentPageName = window.location.pathname.split('/').pop();
// // Check if the current page name matches the expected value
// if (currentPageName === "4th_Semester_PYQs.html") {
//     // Add "active" class to elements with class "FirstSemesterPYQs"
//     var firstSemesterMenu = document.querySelector('.FourthSemesterPYQs');
//     if (firstSemesterMenu) {
//         firstSemesterMenu.classList.add('active');
//     }
// }



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






// filter the data dynamically
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





// Function to toggle theme without detecting the system theme
// function toggleTheme() {
//     document.body.classList.toggle('dark-mode'); // Toggle dark mode body class
//     document.querySelector('nav').classList.toggle('bg-dark'); // Toggle dark mode navbar class

//     var navElement = document.querySelector('nav');
//     if (navElement.dataset.bsTheme === 'dark') {
//         navElement.dataset.bsTheme = '';
//         localStorage.setItem('KIITtheme', 'light'); // Save theme preference to local storage
//     } else {
//         navElement.dataset.bsTheme = 'dark';
//         localStorage.setItem('KIITtheme', 'dark'); // Save theme preference to local storage
//     }

//     document.querySelector('#dataTable').classList.toggle('table-dark'); // Toggle dark mode table class

//     var button = document.querySelector('.theme');
//     if (button.textContent === 'Dark') {
//         button.textContent = 'Light';
//         button.classList.remove('btn-dark');
//         button.classList.add('btn-light');
//     } else {
//         button.textContent = 'Dark';
//         button.classList.remove('btn-light');
//         button.classList.add('btn-dark');
//     }
// }

// // Check if theme preference is saved in local storage
// var savedTheme = localStorage.getItem('KIITtheme');
// if (savedTheme === 'dark') {
//     toggleTheme(); // Apply dark mode if preference is saved as dark
// }

// // Event listener for theme toggle button
// document.querySelector('.theme').addEventListener('click', toggleTheme);





// Function to toggle theme by detecting the system theme
// function toggleTheme() {
//     document.body.classList.toggle('dark-mode'); // Toggle dark mode body class
//     document.querySelector('nav').classList.toggle('bg-dark'); // Toggle dark mode navbar class

//     var navElement = document.querySelector('nav');
//     if (navElement.dataset.bsTheme === 'dark') {
//         navElement.dataset.bsTheme = '';
//         localStorage.setItem('KIITtheme', 'light'); // Save theme preference to local storage
//     } else {
//         navElement.dataset.bsTheme = 'dark';
//         localStorage.setItem('KIITtheme', 'dark'); // Save theme preference to local storage
//     }

//     document.querySelector('#dataTable').classList.toggle('table-dark'); // Toggle dark mode table class

//     var button = document.querySelector('.theme');
//     if (button.textContent === 'Dark') {
//         button.textContent = 'Light';
//         button.classList.remove('btn-dark');
//         button.classList.add('btn-light');
//     } else {
//         button.textContent = 'Dark';
//         button.classList.remove('btn-light');
//         button.classList.add('btn-dark');
//     }
// }

// // Function to detect system theme preference
// function detectSystemTheme() {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         // If user prefers dark mode, apply dark mode theme
//         toggleTheme();
//     }
// }

// // Check if theme preference is saved in local storage
// var savedTheme = localStorage.getItem('KIITtheme');
// if (savedTheme === 'dark') {
//     toggleTheme(); // Apply dark mode if preference is saved as dark
// } else {
//     detectSystemTheme(); // Detect system theme preference if no preference is saved
// }

// // Event listener for theme toggle button
// document.querySelector('.theme').addEventListener('click', toggleTheme);




// Function to set the theme based on user selection
function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');

    if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        // change nav to light mode
        document.querySelector('nav').classList.remove('bg-dark');
        var navElement = document.querySelector('nav');
        navElement.dataset.bsTheme = ''
        // change table to light mode
        var dataTableElement = document.querySelector('#dataTable');
        if (dataTableElement) {
            dataTableElement.classList.remove('table-dark');
        }
    } else if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        // change nav to dark mode
        document.querySelector('nav').classList.add('bg-dark');
        var navElement = document.querySelector('nav');
        navElement.dataset.bsTheme = 'dark'
        // change table to dark mode
        var dataTableElement = document.querySelector('#dataTable');
        if (dataTableElement) {
            dataTableElement.classList.add('table-dark');
        }
    } else {
        // If system preference is selected, check if system prefers dark mode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            // change nav to dark mode
            document.querySelector('nav').classList.add('bg-dark');
            var navElement = document.querySelector('nav');
            navElement.dataset.bsTheme = 'dark'
            // change table to dark mode
            var dataTableElement = document.querySelector('#dataTable');
            if (dataTableElement) {
                dataTableElement.classList.add('table-dark');
            }
            localStorage.setItem('colorMode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            // change nav to light mode
            document.querySelector('nav').classList.remove('bg-dark');
            var navElement = document.querySelector('nav');
            navElement.dataset.bsTheme = ''
            // change table to light mode
            var dataTableElement = document.querySelector('#dataTable');
            if (dataTableElement) {
                dataTableElement.classList.remove('table-dark');
            }
            localStorage.setItem('colorMode', 'light');
        }
    }

    // Store the selected mode in local storage
    localStorage.setItem('colorMode', theme);

    // Set the selected option in the dropdown
    var selectElement = document.getElementById('colorModeSelect');
    selectElement.value = theme;
}

// Function to handle the change event of the color mode select
document.getElementById('colorModeSelect').addEventListener('change', function () {
    var selectedMode = this.value;
    setTheme(selectedMode);
});

// Retrieve the selected mode from local storage and set the theme
var storedMode = localStorage.getItem('colorMode');
if (storedMode) {
    setTheme(storedMode);
}









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






// show downloading status
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





// toast
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


// modal preview toast
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








// toast
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




// download status toast
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





// pdf preview
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".clickLink");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var linkKey = this.getAttribute('data-id');
            let link;
            if (fileUrls[linkKey]) {
                link = fileUrls[linkKey][0];
            } else if (fileUrls1stNote[linkKey]) {
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
            downloadButton.setAttribute("onclick", "downloadFiles(['" + linkKey + "'], this)");
        });
    });
});



// whatsapp share
// check either qr or link should be displayed
window.addEventListener("load", () => {
    setWhatsappLink();
    document.querySelector('#input-box').focus();
});

// Function to detect whether the user is on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Function to set the appropriate link based on the device
function setWhatsappLink() {
    const whatsappLink = document.getElementById('whatsappLink');
    const imagePreview = document.getElementById('imagePreview');
    const shareIcon = document.querySelector(".whatsappLink");

    if (isMobileDevice()) {
        console.log("mobile devices");
        whatsappLink.addEventListener('click', (event) => {
            imagePreview.innerHTML = '<img src="assets/image/qrcode.png" alt="QR Code">';
            event.stopPropagation(); // Prevent the click event from reaching the document
            // Toggle display of image preview
            imagePreview.style.display = imagePreview.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', () => {
            // Close the image preview when clicked outside
            imagePreview.style.animation = "disappear 0.3s ease-out";
            setTimeout(() => {
                imagePreview.style.display = 'none';
                imagePreview.style.animation = ""; // Reset animation property
            }, 300); // Adjust the timeout to match the animation duration
        });
    } else {
        console.log("pc devices");
        whatsappLink.href = 'whatsapp://send?text=Go%20to%20KIIT%20CSE-%20https://bibek10550.github.io/kiitcse/%20KIIT%20CSE%20is%20resource%20hub%20which%20simplifies%20your%20educational%20journey%20in%20Computer%20Science%20and%20Engineering%20(CSE).%20It%20offers:%20Previous%20Year%20Questions%20(PYQs),%20Concise%20Notes,%20Video%20Lectures.';

        // Hide image preview if it's visible
        imagePreview.style.display = 'none';
        // imagePreview.style.animation = "zoomOut 0.3s ease-in";
    }
}




// greeting
function getGreeting(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greetingMessage;
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingMessage = 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
        greetingMessage = 'Good Evening';
    } else {
        greetingMessage = 'Good Night';
    }
    if (username) {
        greetingMessage += ' ' + username;
    }
    return greetingMessage;
}

// ask user name while loading page
function askForUsername() {
    const username = prompt('Enter your name:');
    if (username) {
        localStorage.setItem('username', username);
        setGreeting();
    }
}

// show greeting according to current time
function setGreeting() {
    const username = localStorage.getItem('username');
    const greetingElement = document.getElementById('greeting');
    const greeting = getGreeting(username);
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}
// check whether the user name is in local storage or not
document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    if (!username) {
        askForUsername();
    } else {
        setGreeting();
    }
});





// online status toast 
const toastElement = document.getElementById("OnlineToast");
const toastMessageElement = document.getElementById("toast-message");
const wifiIconElement = document.getElementById("wifi-icon");
const closeIconElement = document.getElementById("close-icon");
let isOffline = false; // To track offline status
let hideTimeout; // To store the timeout reference
function showToast(message, isConnected) {
    toastMessageElement.textContent = message;
    wifiIconElement.style.display = isConnected ? "inline-block" : "none";
    toastElement.classList.remove("hide-toast");
    toastElement.classList.add("show-toast");
    if (!isConnected) {
        isOffline = true;
        clearTimeout(hideTimeout); // Clear the timeout when offline
    }
    if (isConnected) {
        if (!isOffline) {
            hideTimeout = setTimeout(hideToast, 5000); // Hide after 5 seconds if online
        }
    }
}
function hideToast() {
    toastElement.classList.remove("show-toast");
    toastElement.classList.add("hide-toast");
}
function updateStatus() {
    const isConnected = navigator.onLine;
    if (isConnected) {
        showToast("You are currently online", true);
        toastElement.style.backgroundColor = "green";
        if (isOffline) {
            hideTimeout = setTimeout(hideToast, 5000); // Start the timer if back online
            isOffline = false; // Reset offline status
        }
    } else {
        showToast("You are currently offline", false);
        toastElement.style.backgroundColor = "red";
        isOffline = true;
    }
}
updateStatus();
// Listen for online and offline events
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
// Hide the toast when close icon is clicked
closeIconElement.addEventListener("click", hideToast);




//  clear local storage
document.getElementById('clearLocalStorageBtn').addEventListener('click', function () {
    // Change button color to green
    this.style.backgroundColor = '#2ecc71';
    // Ask the user for confirmation
    const userConfirmed = window.confirm("Are you sure you want to clear the local storage?");
    if (userConfirmed) {
        // Clear the local storage
        localStorage.clear();
        // Optionally, you can provide feedback to the user
        console.log('Local storage cleared!');
        // Revert button color after 5 seconds
        setTimeout(() => {
            this.style.backgroundColor = '#02ff24';
        }, 5000);
        location.reload();
    } else {
        // If the user cancels, revert button color immediately
        this.style.backgroundColor = '#02ff24';
    }
});





// circular menu
document.addEventListener('click', function (event) {
    var circularMenu = document.querySelector('.circular-menu.active');
    if (circularMenu && !circularMenu.contains(event.target)) {
        circularMenu.classList.remove('active');
    }
});



/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 160) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// // Event listener for clicking outside search
// document.addEventListener("click", function (e) {
//     var SearchResult = document.getElementById("ResultBox");
//     // Check if the click is outside the volume control
//     if (!inputBox.contains(e.target)) {
//         // Hide the volume bar with an animation
//         resultsBox.style.animation = "to-top 0.3s ease-in";
//         setTimeout(() => {
//             SearchResult.style.display = "none";
//             resultsBox.style.animation = ""; // Reset animation property
//         }, 300); // Adjust the timeout to match the animation duration
//     }
// });


// // when click on search dropdown apperar
// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");
// window.onload = function () {
//     var SearchResult = document.getElementById("ResultBox");
//     document.onclick = function (event) {
//         if (event.target.id == "input-box") {
//             SearchResult.style.display = "block";
//             resultsBox.style.animation = "to-bottom 0.3s ease-in"
//         }
//         if (event.target.id !== "input-box") {
//             // SearchResult.style.display = "none";
//             // Hide the result box with an animation
//             resultsBox.style.animation = "to-top 0.3s ease-in";
//             setTimeout(() => {
//                 SearchResult.style.display = "none";
//                 resultsBox.style.animation = ""; // Reset animation property
//             }, 300); // Adjust the timeout to match the animation duration
//         }
//     }
// };

// filter
const search = () => {
    let filter = document.getElementById('input-box').value.toUpperCase();
    let ul = document.getElementById('ResultBox');
    let li = ul.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        let textValue = a.textContent || a.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}





document.addEventListener("DOMContentLoaded", function () {
    const resultsBox = document.getElementById("ResultBox");
    const ResultsBox = document.querySelector(".result-box");
    const inputBox = document.getElementById("input-box");
    var SearchResult = document.getElementById("ResultBox");

    // Handle click on document to close the results box if clicked outside
    document.addEventListener("click", function (event) {
        if (event.target.id == "input-box") {
            SearchResult.style.display = "block";
            ResultsBox.style.animation = "to-bottom 0.3s ease-in"
        }
        if (!resultsBox.contains(event.target) && event.target !== inputBox) {
            ResultsBox.style.animation = "to-top 0.3s ease-in";
            setTimeout(() => {
                SearchResult.style.display = "none";
                // resultsBox.style.display = "none";
                ResultsBox.style.animation = ""; // Reset animation property
            }, 300);
        }
    });
    // Handle click on user-typed word to search on Google
    resultsBox.addEventListener("click", function (event) {
        // console.log(event.target.href)
        if (event.target.tagName == "a") {
            if (event.target.href == "#") {
                const query = event.target.textContent.trim();
                if (query !== "") {
                    const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
                    window.open(searchUrl, "_blank");
                }
                // Select the text inside the input after the search button is pressed
                inputBox.select();
            }
        }
    });
    // Handle input changes to dynamically update the results box
    inputBox.addEventListener("input", function (e) {
        const filter = inputBox.value.trim().toLowerCase();
        // resultsBox.innerHTML = ""; // Clear the current list
        // console.log(e);
        if (filter !== "") {
            const newLi = document.createElement("li");
            const newA = document.createElement("a");
            newA.href = "#";
            newA.textContent = filter;
            newLi.appendChild(newA);
            resultsBox.appendChild(newLi);
            ResultsBox.style.display = "block";
            ResultsBox.style.animation = "to-bottom 0.3s ease-in";

            newA.addEventListener("click", () => {
                window.open("https://google.com/search?q=" + newA.textContent, "_blank");
            })
        } else {
            // ResultsBox.style.animation = "to-top 0.3s ease-in";
            // setTimeout(() => {
            //     ResultsBox.style.display = "none";
            //     ResultsBox.style.animation = ""; // Reset animation property
            // }, 300);
        }
    });
});







// short cut key for calendar "alt + c"
document.addEventListener('keydown', function (event) {
    // Check if Alt + C is pressed
    if (event.altKey && event.key.toLowerCase() === 'c') {
        event.preventDefault(); // Prevent default browser behavior

        // Handle different platforms and browsers
        const platform = navigator.platform.toLowerCase();
        const browser = navigator.userAgent.toLowerCase();

        if ((platform.includes('mac') || browser.includes('safari')) ||
            (platform.includes('mac') || browser.includes('firefox'))) {
            // For macOS Safari and Firefox
            handleCalendar();
        } else if (platform.includes('win') || browser.includes('edge')) {
            // For Windows Edge
            handleCalendar();
        } else if (platform.includes('linux')) {
            // For Linux
            handleCalendar();
        } else {
            // For other platforms and browsers
            console.log('Alt + C shortcut not supported on this platform/browser.');
        }
    }
});

function handleCalendar() {
    const calendarContainer = document.getElementById('theme-buttons-container-calendar');
    const calendarButton = document.querySelector('.switcher-btn[title="calendar"]');
    if (calendarButton && calendarContainer.style.display === 'none') {
        calendarButton.click(); // Simulate a click on the calendar button
        calendarContainer.style.display = 'flex';
    } else {
        calendarContainer.style.display = 'none';
    }
}




// short cut key for search "alt + s"
document.addEventListener('keydown', function (event) {
    // Check if Alt + S is pressed
    if (event.altKey && event.key.toLowerCase() === 's') {
        event.preventDefault(); // Prevent default browser behavior

        // Handle different platforms and browsers
        const platform = navigator.platform.toLowerCase();
        const browser = navigator.userAgent.toLowerCase();

        if ((platform.includes('mac') || browser.includes('safari')) ||
            (platform.includes('mac') || browser.includes('firefox')) ||
            (platform.includes('win') || browser.includes('edge')) ||
            (platform.includes('linux'))) {
            // Call the function to handle the "Alt + S" shortcut
            handleResults();
        } else {
            console.log('Alt + S shortcut not supported on this platform/browser.');
        }
    }
});

function handleResults() {
    const ResultsBox = document.querySelector(".result-box");
    const resultBox = document.getElementById('ResultBox');
    const inputBox = document.getElementById('input-box');

    if (resultBox.style.display === 'none') {
        // Focus on the input box
        inputBox.click();
        inputBox.focus();
        // Show the result box
        resultBox.style.display = 'block';
    } else {
        // Hide the result box
        ResultsBox.style.animation = "to-top 0.3s ease-in";
        setTimeout(() => {
            resultBox.style.display = 'none';
            ResultsBox.style.animation = ""; // Reset animation property
        }, 300);
    }
}




// search box
function searchOnEnter(event) {
    if (event.keyCode === 13) {
        searchGoogle();
    }
}
// search on google
function searchGoogle() {
    const searchInput = document.querySelector(".search-input");
    const query = searchInput.value.trim();
    if (query !== "") {
        const searchUrl = "https://www.bing.com/search?q=" + encodeURIComponent(query);
        window.open(searchUrl, "_blank");
        // Select the text inside the input after the search button is pressed
        searchInput.select();
    }
}




// form validation
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})






// modal
const exampleModal = document.getElementById('myModal')
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
    })
}




// update modal
// new update notification
document.addEventListener('DOMContentLoaded', function () {
    // Function to check if the popup should be displayed
    function shouldDisplayPopup() {
        var popupStatus = localStorage.getItem('popupStatus');
        var lastPopupTime = localStorage.getItem('lastPopupTime');

        if (!popupStatus || popupStatus === 'not visited' || isPopupStale(lastPopupTime)) {
            return true;
        }
        return false;
    }

    // Function to set the popup status as visited
    function setPopupVisited() {
        localStorage.setItem('popupStatus', 'visited');
    }

    // Function to set the last popup time
    function setLastPopupTime() {
        var currentTime = new Date().getTime();
        localStorage.setItem('lastPopupTime', currentTime);
    }

    // Function to clear the stored popup status and time
    function clearPopupStatus() {
        localStorage.removeItem('popupStatus');
        localStorage.removeItem('lastPopupTime');
    }

    // Function to check if the stored popup status is stale (older than 7 days)
    function isPopupStale(lastPopupTime) {
        if (!lastPopupTime) {
            return true;
        }
        var currentTime = new Date().getTime();
        var sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
        return currentTime - lastPopupTime > sevenDaysInMillis;
    }

    // Function to show the popup
    function showPopup() {
        document.querySelector('.UpdateModalTrigger').click();
    }

    // Function to hide the popup
    function hidePopup() {
        document.querySelectorAll('.closeUpdateModal').forEach(function (btn) {
            btn.click();
        });
    }

    // Check if the popup should be displayed
    if (shouldDisplayPopup()) {
        // Display the popup after a delay
        setTimeout(function () {
            showPopup();
        }, 1000);
    }

    // Close popup when clicking the close button
    document.querySelectorAll('.closeUpdateModal').forEach(function (btn) {
        btn.addEventListener('click', function () {
            hidePopup();
            // Set popup status as visited and update last popup time when the popup is closed
            setPopupVisited();
            setLastPopupTime();
        });
    });

    // Close popup when clicking the esc keyboard button
    document.addEventListener('keyup', function (event) {
        if (event.which === 27) {
            hidePopup();
            // Set popup status as visited and update last popup time when the popup is closed
            setPopupVisited();
            setLastPopupTime();
        }
    });

    // Close popup when clicking outside the modal content
    // document.addEventListener('click', function (event) {
    //     var modalContent = document.querySelector('.modal.updateModals .modal-content');
    //     if (modalContent && !modalContent.contains(event.target)) {
    //         hidePopup();
    //         // Set popup status as visited and update last popup time when the popup is closed
    //         setPopupVisited();
    //         setLastPopupTime();
    //     }
    // });

    // Clear stored status and time
    // clearPopupStatus();
});





// Check if the page is a 404 error
// if (window.location.href.indexOf("404") > -1) {
//     // Redirect to the custom 404 error page
//     window.location.href = "404.html";
// }

