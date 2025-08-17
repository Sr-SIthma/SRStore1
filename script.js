// ------------------------------
// App Data
// ------------------------------
const featuredApps = [
  {
    name: "WhatsApp",
    image: "images/WhatsApp Profile.png",
    description: "Work This App",
    link: "app/whats app/index.html",
  },
  {
    name: "Visual Studio Code",
    image: "app/vs code/download.jfif",
    description: "Code editor for developers",
    link: "app/vs code/index.html",
  },
  {
    name: "WinRAR",
    image: "app/WINRAR/download (2).jfif",
    description: "File compression utility",
    link: "app/WINRAR/index.html",
  },
  {
    name: "Windows 10",
    image: "app/windows10/icon.png",
    description: "Operating system",
    link: "app/windows10/index.html",
  },
  {
    name: "MiniTool Video Converter",
    image: "app/mini tool video convert/download (3).jfif",
    description: "Convert videos easily",
    link: "app/mini tool video convert/index.html",
  },
  {
    name: "Facebook",
    image: "app/facebook/facebook.png",
    description: "Social media platform",
    link: "app/facebook/index.html",
  },
   {
    name: "Zoom Pc",
    image: "images/photo.png",
    description: "Work This App",
    link: "app/Zoom Pc/index.html",
  },
];

const topCharts = [
  {
    name: "Wondershare Filmora ",
    image: "app/Wondershare Filmora/app.jfif",
    description: "Vide Edits",
    link: "app/Wondershare Filmora/index.html",
  },

    {
    name: "Goole Play Game Beta",
    image: "tiktok.jpg",
    description: "Short video sharing app",
    link: "app/Goole paly game beta/index.html",
  },

  {
    name: "Ld Playe",
    image: "tiktok.jpg",
    description: "Short video sharing app",
    link: "app/Ld  Player/index.html",
  },
];

// ------------------------------
// App Card Generator
// ------------------------------

function generateAppCards(apps, listId) {
  const list = document.getElementById(listId);
  list.innerHTML = "";

  apps.forEach((app) => {
    const card = document.createElement("li");
    card.className = "app-card";
    card.innerHTML = `
      <a href="${app.link}" target="_blank">
        <img src="${app.image}" alt="${app.name}" />
        <h3>${app.name}</h3>
      </a>
      <p>${app.description}</p>
      <button class="see-details-btn">See Details</button>
    `;
    list.appendChild(card);

    // 🔗 Open in new tab instead of modal
    const detailsBtn = card.querySelector(".see-details-btn");
    detailsBtn.addEventListener("click", () => {
      window.open(app.link, "_blank");
    });
  });
}




// ------------------------------
// Modal Logic
// ------------------------------
function openModal(link) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <iframe src="${link}" frameborder="0" width="100%" height="500"></iframe>
      <button class="close-modal">Close</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Fade-in effect
  setTimeout(() => modal.classList.add("visible"), 10);

  modal.querySelector(".close-modal").addEventListener("click", () => {
    modal.classList.remove("visible");
    setTimeout(() => modal.remove(), 300);
  });
}

// ------------------------------
// Search Functionality
// ------------------------------
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", handleSearch);
searchInput.addEventListener("input", debounce(handleSearch, 300));

function handleSearch() {
  const query = searchInput.value.toLowerCase();
  const filteredFeatured = featuredApps.filter(app =>
    app.name.toLowerCase().includes(query)
  );
  const filteredCharts = topCharts.filter(app =>
    app.name.toLowerCase().includes(query)
  );
  generateAppCards(filteredFeatured, "featured-apps-list");
  generateAppCards(filteredCharts, "top-charts-list");
}

// Debounce utility
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

// ------------------------------
// Hero Background Rotation
// ------------------------------
const hero = document.querySelector(".hero");
const heroImages = [
  "images/Baner/make_a_gta_vi_game_name_gta.jpeg",
  "images/Baner/minecarft_name_minecarft_baner.jpeg",
  "images/Baner/whats_app_web_name_whats_app.jpeg",
  "images/Baner/pubg_game_name_baner_in_pubg.jpeg"
];
let currentIndex = 0;

setInterval(() => {
  hero.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('${heroImages[currentIndex]}')
  `;
  currentIndex = (currentIndex + 1) % heroImages.length;
}, 4000);

// ------------------------------
// Initial Load
// ------------------------------
generateAppCards(featuredApps, "featured-apps-list");
generateAppCards(topCharts, "top-charts-list");


