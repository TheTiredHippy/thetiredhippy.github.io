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

        item.style.display =
          expanded ? "none" : "block";

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

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightbox-image");

const lightboxTitle =
  document.getElementById("lightbox-title");

const lightboxDescription =
  document.getElementById("lightbox-description");

const statusButton =
  document.getElementById("status-button");

const previousImage =
  document.getElementById("previous-image");

const nextImage =
  document.getElementById("next-image");

const closeButton =
  document.querySelector(".close");


// Current item's images

let currentImages = [];

let currentImageIndex = 0;


// ==========================
// SHOW LIGHTBOX IMAGE
// ==========================

function showLightboxImage() {

  lightboxImage.src =
    currentImages[currentImageIndex];

}


// ==========================
// GALLERY ITEM CLICK
// ==========================

document.querySelectorAll(".gallery-item").forEach(item => {

  item.addEventListener("click", () => {

    // MAIN IMAGE

    const mainImage =
      item.dataset.fullResLocation;


    // ADDITIONAL IMAGES

    const additionalImages =
      item.dataset.additionalImages
        ? item.dataset.additionalImages
            .split(",")
            .map(image => image.trim())
            .filter(image => image !== "")
        : [];


    // CREATE IMAGE LIST

    currentImages = [
      mainImage,
      ...additionalImages
    ];


    currentImageIndex = 0;


    // IMAGE ALT TEXT

    lightboxImage.alt =
      item.querySelector("img").alt;


    // TITLE

    lightboxTitle.textContent =
      item.dataset.itemTitle;


    // DESCRIPTION

    lightboxDescription.textContent =
      item.dataset.itemDescription;


    // SHOW FIRST IMAGE

    showLightboxImage();


    // SHOW / HIDE ARROWS

    if (currentImages.length > 1) {

      previousImage.style.display =
        "block";

      nextImage.style.display =
        "block";

    } else {

      previousImage.style.display =
        "none";

      nextImage.style.display =
        "none";

    }


    // BUTTON

    const buttonType =
      item.dataset.buttonType;

    const buttonLocation =
      item.dataset.buttonLocation;


    if (buttonType === "etsy") {

      statusButton.textContent =
        "Buy on Etsy";

      statusButton.href =
        buttonLocation;

      statusButton.style.display =
        "inline-block";

    }


    else if (buttonType === "contact") {

      statusButton.textContent =
        "Contact Me";

      statusButton.href =
        buttonLocation;

      statusButton.style.display =
        "inline-block";

    }


    else if (buttonType === "sold") {

      statusButton.textContent =
        "Sold";

      statusButton.removeAttribute("href");

      statusButton.style.display =
        "inline-block";

    }


    else if (buttonType === "not-for-sale") {

      statusButton.textContent =
        "Not For Sale";

      statusButton.removeAttribute("href");

      statusButton.style.display =
        "inline-block";

    }


    else {

      statusButton.style.display =
        "none";

    }


    // OPEN LIGHTBOX

    lightbox.style.display =
      "flex";

  });

});



// ==========================
// PREVIOUS IMAGE
// ==========================

previousImage.addEventListener("click", (event) => {

  event.stopPropagation();

  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex =
      currentImages.length - 1;
  }

  showLightboxImage();

});



// ==========================
// NEXT IMAGE
// ==========================

nextImage.addEventListener("click", (event) => {

  event.stopPropagation();

  currentImageIndex++;

  if (currentImageIndex >= currentImages.length) {
    currentImageIndex = 0;
  }

  showLightboxImage();

});



// ==========================
// CLOSE BUTTON
// ==========================

closeButton.addEventListener("click", () => {

  lightbox.style.display =
    "none";

});



// ==========================
// CLICK OUTSIDE TO CLOSE
// ==========================

lightbox.addEventListener("click", (event) => {

  if (event.target === lightbox) {

    lightbox.style.display =
      "none";

  }

});



// ==========================
// ESC KEY TO CLOSE
// ==========================

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    lightbox.style.display =
      "none";

  }

});
