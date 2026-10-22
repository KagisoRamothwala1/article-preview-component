const shareButton = document.querySelector(".sharebutton");
const shareContainer = document.querySelector(".socialLinkCtn");

shareButton.addEventListener("click", function () {
    shareContainer.classList.toggle("active");
});

