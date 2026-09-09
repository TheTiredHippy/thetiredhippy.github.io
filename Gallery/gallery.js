// GALLERY SETTINGS

const INITIAL_IMAGES =
  window.innerWidth <= 768 ? 4 : 8;


// ==========================
// EXPAND / COLLAPSE CATEGORIES
// ==========================

document.querySelectorAll(".gallery-category").forEach(category => {

  const items = category.querySelectorAll(".gallery-item");
  const button = category.querySelector(".see-more");

  if (items.length <= INITIAL_IMAGES) {
    button.style.display = "none";
    return;
  }


  items.forEach((item, index) => {

    if (index >= INITIAL_IMAGES) {
      item.style.display = "none";
    }

  });


  button.addEventListener("click", () => {

    const expanded = button.dataset.expanded === "true";


    items.forEach((item, index) => {

      if (index >= INITIAL_IMAGES) {

        item.style.display = expanded ? "none" : "block";

      }

    });


    button.dataset.expanded = !expanded;


    if (expanded) {

      button.textContent =
        "See All " + category.querySelector("h2").textContent;

    } else {

      button.textContent = "Show Less";

    }

  });

});



// ==========================
// LIGHTBOX
// ==========================


const lightbox = document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const lightboxTitle =
document.getElementById("lightbox-title");

const lightboxDescription =
document.getElementById("lightbox-description");

const statusButton =
document.getElementById("status-button");

const closeButton =
document.querySelector(".close");



document.querySelectorAll(".gallery-item").forEach(item => {


  item.addEventListener("click", () => {


    // IMAGE

    lightboxImage.src =
      item.dataset.fullResLocation;


    lightboxImage.alt =
      item.querySelector("img").alt;


    // TITLE

    lightboxTitle.textContent =
      item.dataset.itemTitle;


    // DESCRIPTION

    lightboxDescription.textContent =
      item.dataset.itemDescription;


    // BUTTON

    const buttonType =
      item.dataset.buttonType;

    const buttonLocation =
      item.dataset.buttonLocation;


    if (buttonType === "etsy") {

      statusButton.textContent = "Buy on Etsy";
      statusButton.href = buttonLocation;
      statusButton.style.display = "inline-block";

    }


    else if (buttonType === "contact") {

      statusButton.textContent = "Contact Me";
      statusButton.href = buttonLocation;
      statusButton.style.display = "inline-block";

    }


    else if (buttonType === "sold") {

      statusButton.textContent = "Sold";
      statusButton.removeAttribute("href");
      statusButton.style.display = "inline-block";

    }


    else if (buttonType === "not-for-sale") {

      statusButton.textContent = "Not For Sale";
      statusButton.removeAttribute("href");
      statusButton.style.display = "inline-block";

    }


    else {

      statusButton.style.display = "none";

    }


    // OPEN LIGHTBOX

    lightbox.style.display =
      "flex";


  });


});



// ==========================
// CLOSE BUTTON
// ==========================

closeButton.addEventListener("click", () => {

  lightbox.style.display = "none";

});



// ==========================
// CLICK OUTSIDE TO CLOSE
// ==========================

lightbox.addEventListener("click", (event) => {

  if (event.target === lightbox) {

    lightbox.style.display = "none";

  }

});



// ==========================
// ESC KEY TO CLOSE
// ==========================

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    lightbox.style.display = "none";

  }

});
