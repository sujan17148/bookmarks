// Render all bookmarks
const grid = document.getElementById("grid");
LINKS.forEach(({ title, link, logo, color, description }) => {
  grid.innerHTML += `
    <a href="${link}" rel="noopener noreferrer" class="card w-[calc(25%-12px)] p-4 bg-gray-800/30 border border-gray-600 rounded-lg hover:bg-gray-800/50 hover:border-gray-500 hover:-translate-y-1 transition-all duration-200 flex items-center gap-3">
      <div class="icon w-11 h-11 rounded-lg flex items-center justify-center text-white text-lg" style="background: ${color}">
        <i class="${logo}"></i>
      </div>
      <div class="content flex-1 min-w-0">
        <p class="title text-sm font-semibold text-gray-100 mb-1 line-clamp-1">${title}</p>
        <p class="description text-xs text-gray-400 line-clamp-1">${description}</p>
      </div>
    </a>
  `;
});

// Simple search
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector(".title").textContent.toLowerCase();
    const description = card.querySelector(".description").textContent.toLowerCase();
    card.style.display = title.includes(query) || description.includes(query) ? "flex" : "none";
  });
});
 