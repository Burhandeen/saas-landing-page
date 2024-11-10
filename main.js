//FAQ ACCORDION
document.addEventListener("DOMContentLoaded", function () {
  const FaqContainer = document.querySelector(".faq-content");

  FaqContainer.addEventListener("click", function (e) {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    //Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    //Toggle visibility of body
    groupBody.classList.toggle("open");

    //Close other open FAQ bodies
    const otherGroups = FaqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

//Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const HamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  HamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
