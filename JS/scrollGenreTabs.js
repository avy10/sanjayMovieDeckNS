document.addEventListener("DOMContentLoaded", function () {
    const tabsContainer = document.querySelector(".tabs");
    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");

    scrollLeftButton.addEventListener("click", function () {
        tabsContainer.scrollBy({
            left: -500, 
            behavior: "smooth",
        });
    });

    scrollRightButton.addEventListener("click", function () {
        tabsContainer.scrollBy({
            left: 500,
            behavior: "smooth",
        });
    });
});
