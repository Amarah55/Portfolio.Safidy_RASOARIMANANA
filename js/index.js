/*script pour la navbar: Sticky au cour de scolling bar*/ 
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("sticky", window.scrollY > 0);
    }
});
/*scripe pour About*/ 
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    tablinks.forEach(tablink => tablink.classList.remove("active-link"));
    tabcontents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

