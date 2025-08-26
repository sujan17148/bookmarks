// Render all bookmarks by sections
const grid = document.getElementById("grid");

function renderBookmarks(sections = BOOKMARK_SECTIONS) {
  grid.innerHTML = '';
  
  sections.forEach(section => {
    // Create section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'w-full';
    sectionHeader.innerHTML = `
      <div class="flex items-center gap-3 mb-1">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white" style="background: ${section.color}">
          <i class="${section.icon}"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-100">${section.title}</h3>
      </div>
    `;
    grid.appendChild(sectionHeader);
    
    // Create section content container
    const sectionContent = document.createElement('div');
    sectionContent.className = 'w-full flex flex-wrap gap-4';
    
    // Add bookmarks for this section
    section.links.forEach(({ title, link, logo, color, description }) => {
      sectionContent.innerHTML += `
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
    
    grid.appendChild(sectionContent);
  });
}

// Initial render
renderBookmarks();

// Enhanced search functionality
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  
  if (!query.trim()) {
    renderBookmarks(); // Show all sections when search is empty
    return;
  }
  
  // Filter sections based on search query
  const filteredSections = BOOKMARK_SECTIONS.map(section => {
    // Check if section title matches
    const sectionMatches = section.title.toLowerCase().includes(query);
    
    // Filter links within the section
    const filteredLinks = section.links.filter(link => {
      const titleMatches = link.title.toLowerCase().includes(query);
      const descriptionMatches = link.description.toLowerCase().includes(query);
      return titleMatches || descriptionMatches;
    });
    
    // Return section only if it has matching links or section title matches
    if (filteredLinks.length > 0 || sectionMatches) {
      return {
        ...section,
        links: sectionMatches ? section.links : filteredLinks // Show all links if section matches
      };
    }
    return null;
  }).filter(Boolean); // Remove null sections
  
  renderBookmarks(filteredSections);
});
 