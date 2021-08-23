
const click_search = document.querySelector(".click-patient");
const click_guide = document.querySelector(".click-Doctor");
const src_bar = document.querySelector(".pat-bar");
const gd_bar = document.querySelector(".doc-bar");

function myfunct() {
    if (
       
        gd_bar.classList.contains("hidden") &&
        !src_bar.classList.contains("hidden")
    ) {
       
        gd_bar.classList.remove("hidden");
        src_bar.classList.add("hidden");
    } else {
      
        gd_bar.classList.add("hidden");
        src_bar.classList.remove("hidden");
    }
}