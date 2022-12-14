// mouseover image => active

const icons = document.querySelectorAll(".imgBox");
const avatars = document.querySelectorAll(".contentBox");

const toggleActive = (evt) => {
    icons.forEach((icon) => {
        icon.className = "imgBox";
    });
    avatars.forEach((avatar) => {
        avatar.className = "contentBox";
    });
    evt.currentTarget.classList.add("active");
    document
        .getElementById(evt.currentTarget.dataset.id)
        .classList.add("active");
};

icons.forEach((icon) => {
    icon.addEventListener("mouseenter", toggleActive);
});
