// GALLERY SETTINGS

const INITIAL_IMAGES = 12;


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

const lightboxMaterials =
document.getElementById("lightbox-materials");

const etsyLink =
document.getElementById("etsy-link");

const closeButton =
document.querySelector(".close");



document.querySelectorAll(".gallery-item").forEach(item => {


  item.addEventListener("click", () => {


    lightboxImage.src =
      item.dataset.full;


    lightboxImage.alt =
      item.querySelector("img").alt;


    lightboxTitle.textContent =
      item.dataset.title;


    lightboxDescription.textContent =
      item.dataset.description;


    lightboxMaterials.textContent =
      item.dataset.materials;


    if (item.dataset.etsy) {

      etsyLink.href =
        item.dataset.etsy;

      etsyLink.style.display =
        "inline-block";

    } else {

      etsyLink.style.display =
        "none";

    }


    lightbox.style.display =
      "flex";


  });


});



// CLOSE BUTTON

closeButton.addEventListener("click", () => {

  lightbox.style.display = "none";

});



// CLICK OUTSIDE TO CLOSE

lightbox.addEventListener("click", (event) => {

  if (event.target === lightbox) {

    lightbox.style.display = "none";

  }

});



// ESC KEY TO CLOSE

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    lightbox.style.display = "none";

  }

});
