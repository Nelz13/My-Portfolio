var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
   
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

var sidemeu = document.getElementById("sidemenu");


function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
}



// Add this JavaScript code to your existing script.js file or create a new one
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const headerHeight = document.getElementById('header').offsetHeight;

    if (window.scrollY > headerHeight) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});
