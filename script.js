const copy = {
  en: {
    tagline: "Corn, foul, tormos and more",
    eyebrow: "Fresh street boxes",
    heroText: "Choose your box, tap for details, and call to order. Built from the official menu artwork.",
    viewMenu: "View menu",
    menuEyebrow: "Digital menu",
    menuTitle: "Pick a category",
    searchLabel: "Search",
    searchPlaceholder: "Search menu",
    all: "All",
    pdfMenu: "PDF menu",
    backMenu: "Back to menu",
    noResults: "No matching items found.",
    langButton: "AR"
  },
  ar: {
    tagline: "Corn, foul, tormos and more",
    eyebrow: "Fresh street boxes",
    heroText: "Choose your box, tap for details, and call to order. Built from the official menu artwork.",
    viewMenu: "View menu",
    menuEyebrow: "Digital menu",
    menuTitle: "Pick a category",
    searchLabel: "Search",
    searchPlaceholder: "Search menu",
    all: "All",
    pdfMenu: "PDF menu",
    backMenu: "Back to menu",
    noResults: "No matching items found.",
    langButton: "EN"
  }
};

const categories = [
  { id: "boxes", en: "Boxes", ar: "Boxes" },
  { id: "cups", en: "Cups", ar: "Cups" },
  { id: "specials", en: "Specials", ar: "Specials" }
];

const menuItems = [
  {
    id: "dora-box",
    category: "boxes",
    image: "assets/DORA BOX RER.png",
    prices: [
      { label: "Medium", value: "250LBP" },
      { label: "Large", value: "500LBP" }
    ],
    en: {
      name: "Dora",
      desc: "corn, lemon, carrot, shmandar"
    },
    ar: {
      name: "Dora",
      desc: "corn, lemon, carrot, shmandar"
    }
  },
  {
    id: "foul-box",
    category: "boxes",
    image: "assets/foul box.png",
    prices: [
      { label: "Medium", value: "200LBP" },
      { label: "Large", value: "400LBP" }
    ],
    en: {
      name: "Foul",
      desc: "beans, lemon, carrot, shmandar"
    },
    ar: {
      name: "Foul",
      desc: "beans, lemon, carrot, shmandar"
    }
  },
  {
    id: "tormos-box",
    category: "boxes",
    image: "assets/Tormos 44444box.png",
    prices: [
      { label: "Medium", value: "200LBP" },
      { label: "Large", value: "400LBP" }
    ],
    en: {
      name: "Tormos",
      desc: "lupin, lemon, carrot, shmandar"
    },
    ar: {
      name: "Tormos",
      desc: "lupin, lemon, carrot, shmandar"
    }
  },
  {
    id: "foul-mshwe-box",
    category: "boxes",
    image: "assets/foul mshwe boxxx22.png",
    prices: [
      { label: "Medium", value: "300LBP" },
      { label: "Large", value: "500LBP" }
    ],
    en: {
      name: "Foul mshwe",
      desc: "baked beans, lemon, carrot, shmandar"
    },
    ar: {
      name: "Foul mshwe",
      desc: "baked beans, lemon, carrot, shmandar"
    }
  },
  {
    id: "shmandar-box",
    category: "boxes",
    image: "assets/SHMNDRRRDD.png",
    prices: [
      { label: "Medium", value: "200LBP" },
      { label: "Large", value: "400LBP" }
    ],
    en: {
      name: "Shmandar",
      desc: "lemon, carrot, shmandar"
    },
    ar: {
      name: "Shmandar",
      desc: "lemon, carrot, shmandar"
    }
  },
  {
    id: "lemon-carrot-box",
    category: "boxes",
    image: "assets/3cdaaa415435428dbd662487a80f9c80.png",
    prices: [
      { label: "Medium", value: "200LBP" },
      { label: "Large", value: "400LBP" }
    ],
    en: {
      name: "Lemon & Carrot",
      desc: "lemon, carrot, shmandar"
    },
    ar: {
      name: "Lemon & Carrot",
      desc: "lemon, carrot, shmandar"
    }
  },
  {
    id: "special-mix",
    category: "specials",
    image: "assets/3cdaaa415435428dbd662487a80f9c80.png",
    prices: [
      { label: "Medium", value: "300LBP" },
      { label: "Large", value: "500LBP" }
    ],
    en: {
      name: "Special mix",
      desc: "corn, beans, lupin, lemon, carrot, shmandar"
    },
    ar: {
      name: "Special mix",
      desc: "corn, beans, lupin, lemon, carrot, shmandar"
    }
  },
  {
    id: "crazy-cheese-special",
    category: "specials",
    image: "assets/CRAZY+BOX+856877960.jpg",
    prices: [
      { label: "Medium", value: "350LBP" },
      { label: "Large", value: "600LBP" }
    ],
    en: {
      name: "Crazy cheese",
      desc: "corn with butter, nachos cheddar, BBQ, Jalapeno"
    },
    ar: {
      name: "Crazy cheese",
      desc: "corn with butter, nachos cheddar, BBQ, Jalapeno"
    }
  },
  {
    id: "loz-and-janerek",
    category: "specials",
    image: "assets/3cdaaa415435428dbd662487a80f9c80.png",
    prices: [
      { label: "Medium", value: "300LBP" },
      { label: "Large", value: "500LBP" }
    ],
    en: {
      name: "Loz and janerek",
      desc: "janarek, green almond, lemon, simmak, salt"
    },
    ar: {
      name: "Loz and janerek",
      desc: "janarek, green almond, lemon, simmak, salt"
    }
  },
  {
    id: "remmen",
    category: "specials",
    image: "assets/3cdaaa415435428dbd662487a80f9c80.png",
    prices: [
      { label: "Add", value: "50LBP" }
    ],
    en: {
      name: "Remmen",
      desc: "add remmen to your box"
    },
    ar: {
      name: "Remmen",
      desc: "add remmen to your box"
    }
  },
  {
    id: "dora-cup",
    category: "cups",
    image: "assets/DORA BOX RER.png",
    prices: [
      { label: "Medium", value: "200LBP" }
    ],
    en: {
      name: "Dora",
      desc: "corn, lemon, carrot, shmandar"
    },
    ar: {
      name: "Dora",
      desc: "corn, lemon, carrot, shmandar"
    }
  },
  {
    id: "dora-w-zbdeh-cup",
    category: "cups",
    image: "assets/DORA BOX RER.png",
    prices: [
      { label: "Medium", value: "250LBP" }
    ],
    en: {
      name: "Dora w zbdeh",
      desc: "corn, butter, salt"
    },
    ar: {
      name: "Dora w zbdeh",
      desc: "corn, butter, salt"
    }
  },
  {
    id: "crazy-cheese-cup",
    category: "cups",
    image: "assets/CRAZY+BOX+856877960.jpg",
    prices: [
      { label: "Medium", value: "300LBP" }
    ],
    en: {
      name: "Crazy cheese",
      desc: "corn with butter, nachos cheddar, BBQ sauce"
    },
    ar: {
      name: "Crazy cheese",
      desc: "corn with butter, nachos cheddar, BBQ sauce"
    }
  }
];

let currentLang = "en";
let activeCategory = "all";
let searchTerm = "";
let sectionObserver;

const categoryStrip = document.querySelector("#categoryStrip");
const menuGrid = document.querySelector("#menuGrid");
const searchInput = document.querySelector("#searchInput");
const languageToggle = document.querySelector("#languageToggle");
const dialog = document.querySelector("#itemDialog");
const closeDialog = document.querySelector("#closeDialog");
const dialogCloseText = document.querySelector("#dialogCloseText");
const dialogImage = document.querySelector("#dialogImage");
const dialogCategory = document.querySelector("#dialogCategory");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogDescription = document.querySelector("#dialogDescription");

function t(key) {
  return copy[currentLang][key];
}

function categoryName(id) {
  return categories.find((category) => category.id === id)?.[currentLang] || id;
}

function displayCurrency(value) {
  return value.replace("LBP", " LBP");
}

function formatPrices(prices) {
  return prices.map((price) => `${price.label} ${displayCurrency(price.value)}`).join(" · ");
}

function priceTags(prices) {
  return prices.map((price) => `<span class="price-pill"><b>${price.label}</b> ${displayCurrency(price.value)}</span>`).join("");
}

function applyCopy() {
  document.documentElement.lang = currentLang;
  document.body.classList.toggle("is-ar", currentLang === "ar");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  searchInput.placeholder = t("searchPlaceholder");
  if (languageToggle) {
    languageToggle.textContent = t("langButton");
  }
}

function renderCategories() {
  const options = searchTerm ? [{ id: "all", en: copy.en.all, ar: copy.ar.all }] : [{ id: "all", en: copy.en.all, ar: copy.ar.all }, ...categories];
  categoryStrip.innerHTML = options
    .map((category) => {
      const label = category[currentLang];
      const activeClass = category.id === activeCategory ? " is-active" : "";
      return `<button class="category-button${activeClass}" type="button" data-category="${category.id}">${label}</button>`;
    })
    .join("");
}

function getFilteredItems() {
  return menuItems.filter((item) => {
    const haystack = `${item.en.name} ${item.en.desc} ${item.ar.name} ${item.ar.desc} ${categoryName(item.category)} ${formatPrices(item.prices)}`.toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });
}

function renderMenu() {
  const items = getFilteredItems();

  if (!items.length) {
    menuGrid.innerHTML = `<p class="no-results">${t("noResults")}</p>`;
    return;
  }

  const visibleCategories = categories.filter((category) => items.some((item) => item.category === category.id));
  menuGrid.innerHTML = visibleCategories
    .map((category) => {
      const categoryItems = items.filter((item) => item.category === category.id);
      if (!categoryItems.length) return "";

      return `
        <section class="menu-section" id="section-${category.id}" data-section="${category.id}">
          <h3 class="section-title">${category[currentLang]}</h3>
          ${categoryItems
            .map((item) => {
              const content = item[currentLang];
              return `
                <article class="menu-card">
                  <button type="button" data-item="${item.id}" aria-label="${content.name}">
                    <div class="card-image">
                      <img src="${item.image}" alt="${content.name}" loading="lazy">
                    </div>
                    <div class="card-copy">
                      <div>
                        <p class="item-category">${category[currentLang]}</p>
                        <h3>${content.name}</h3>
                        <p>${content.desc}</p>
                      </div>
                      <div class="item-meta">
                        <span class="prices">${priceTags(item.prices)}</span>
                      </div>
                    </div>
                  </button>
                </article>
              `;
            })
            .join("")}
        </section>
      `;
    })
    .join("");

  observeSections();
}

function setActiveCategory(categoryId) {
  activeCategory = categoryId;
  categoryStrip.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === activeCategory);
  });
}

function scrollToCategory(categoryId) {
  if (categoryId === "all") {
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveCategory("all");
    return;
  }

  document.querySelector(`#section-${categoryId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  setActiveCategory(categoryId);
}

function observeSections() {
  if (sectionObserver) sectionObserver.disconnect();
  if (searchTerm) return;

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.dataset.section) {
        setActiveCategory(visible.target.dataset.section);
      }
    },
    { rootMargin: "-42% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] }
  );

  document.querySelectorAll("[data-section]").forEach((section) => sectionObserver.observe(section));
}

function openItem(itemId) {
  const item = menuItems.find((entry) => entry.id === itemId);
  if (!item) return;

  const content = item[currentLang];
  dialogImage.src = item.image;
  dialogImage.alt = content.name;
  dialogCategory.textContent = categoryName(item.category);
  dialogTitle.textContent = content.name;
  dialogDescription.innerHTML = `${content.desc}<br><strong class="dialog-price">${formatPrices(item.prices)}</strong>`;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeItemDialog() {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function refresh() {
  applyCopy();
  renderCategories();
  renderMenu();
}

categoryStrip.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  scrollToCategory(button.dataset.category);
});

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-item]");
  if (!button) return;
  openItem(button.dataset.item);
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  activeCategory = searchTerm ? "all" : activeCategory;
  renderCategories();
  renderMenu();
});

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    refresh();
  });
}

closeDialog.addEventListener("click", closeItemDialog);
dialogCloseText.addEventListener("click", closeItemDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeItemDialog();
});

refresh();

window.addEventListener("load", () => {
  document.body.classList.add("splash-hidden");
  const splash = document.querySelector(".splash-overlay");
  if (splash) {
    splash.addEventListener("transitionend", () => splash.remove(), { once: true });
  }
});
