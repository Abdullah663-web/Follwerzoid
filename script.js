// nav search bar  dropdown
const searchInput = document.getElementById("searchInput");
const searchMenu = document.getElementById("searchMenu");

// Show menu when search bar is clicked
searchInput.addEventListener("click", (event) => {
    searchMenu.style.display = "block";
    event.stopPropagation(); 
});

document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !searchMenu.contains(event.target)) {
        searchMenu.style.display = "none";
    }
});

searchMenu.addEventListener("click", (event) => {
    event.stopPropagation();
});

// counting 0 to onward

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
        let startValue = 0;
        let endValue = parseInt(counter.getAttribute("data-target"));
        let duration = 3000; 
        let increment = endValue / (duration / 16); 

        let updateCounter = () => {
            startValue += increment;
            if (startValue < endValue) {
                counter.innerText = Math.floor(startValue);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = endValue;
            }
        };
        updateCounter();
    });
});





// hover text change 
// setInterval(changeText, 2000); 

// function changeText(button, newText) {
//     button.setAttribute("data-prev-text", button.innerText); 
//     button.innerText = newText;
// }
// function resetText(button) {
//     button.innerText = button.getAttribute("data-prev-text"); 
// }

// animate text on insta pg

const textContainer = document.querySelector('.animate-text');
const paragraphs = textContainer.querySelectorAll('.animate-para-text');
let currentIndex = 0;
function animateText() {
    paragraphs.forEach(p => p.classList.remove('active'));
    paragraphs[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % paragraphs.length;
}
setInterval(animateText, 2000);
animateText();

const buttons = document.querySelectorAll(".package-option");
document.getElementById("all-packages").addEventListener("click", function() {
    document.getElementById("other-option").classList.add("show-option"); 
    this.classList.add("hide-package"); 
});

// pricing


const priceText = document.querySelector(".price");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        let price = this.getAttribute("data-price");
        priceText.innerHTML = `$${price}`;
    });
});

// FAQS section

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let icon = this.querySelector(".icon");
            let isCollapsed = this.classList.contains("collapsed");

            icon.textContent = isCollapsed ? "+" : "-";

            buttons.forEach(btn => {
                if (btn !== this) {
                    btn.querySelector(".icon").textContent = "+";
                }
            });
        });
    });
});