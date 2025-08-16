(function () {
  "use strict";

  /** @typedef {{title:string, link:string}} Link */

  function render(links) {
    const grid = document.getElementById("grid");
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    for (const { title, link } of links) {
      const card = document.createElement("a");
      card.className = "card";
      card.href = link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";

      const icon = document.createElement("div");
      icon.className = "icon";

      const img = document.createElement("img");
      img.className = "logo";
      img.alt = `${title} logo`;
      img.referrerPolicy = "no-referrer";
      img.src = getIconUrl(link);
      img.onerror = () => {
        // Fallback to initial if icon unavailable
        img.remove();
        icon.textContent = getInitial(title);
      };

      icon.appendChild(img);

      const titleEl = document.createElement("div");
      titleEl.className = "title";
      titleEl.textContent = title;

      const metaEl = document.createElement("div");
      metaEl.className = "meta";
      metaEl.textContent = extractHostname(link);

      card.appendChild(icon);
      card.appendChild(titleEl);
      card.appendChild(metaEl);

      fragment.appendChild(card);
    }

    grid.replaceChildren(fragment);
  }

  function getInitial(title) {
    const trimmed = (title || "").trim();
    const match = trimmed.match(/\p{L}/u);
    return match ? match[0].toUpperCase() : "★";
  }

  function extractHostname(url) {
    try {
      const { hostname } = new URL(url);
      return hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  }

  function getIconUrl(url) {
    const host = (() => {
      try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; }
    })();

    const slug = getSimpleIconSlugForHost(host);
    if (slug) {
      // White icon for dark background
      return `https://cdn.simpleicons.org/${slug}/ffffff`;
    }
    // Fallback to DuckDuckGo favicon service
    return `https://icons.duckduckgo.com/ip3/${host || "example.com"}.ico`;
  }

  function getSimpleIconSlugForHost(hostname) {
    if (!hostname) return null;
    const h = hostname.toLowerCase();
    // Map known hosts to Simple Icons slugs. Extend as needed.
    if (h.includes("github.com")) return "github";
    if (h.includes("chatgpt.com") || h.includes("openai.com")) return "openai";
    if (h.includes("whatsapp.com")) return "whatsapp";
    if (h.includes("vitejs.dev")) return "vite";
    if (h.includes("linkedin.com")) return "linkedin";
    if (h.includes("twitter.com") || h.includes("x.com")) return "twitter"; // or "x"
    if (h.includes("messenger.com")) return "messenger";
    if (h.includes("youtube.com")) return "youtube";
    if (h.includes("firebase.google.com")) return "firebase";
    if (h.includes("supabase.com")) return "supabase";
    if (h.includes("appwrite.io")) return "appwrite";
    if (h.includes("deepseek.com")) return null; // no guaranteed slug; use favicon
    if (h.includes("claude.ai") || h.includes("anthropic.com")) return "anthropic";
    return null;
  }

  function setupSearch(links) {
    const input = document.getElementById("search");
    if (!input) return;
    const norm = (s) => (s || "").toLowerCase().trim();

    function apply() {
      const q = norm(input.value);
      if (!q) {
        render(links);
        return;
      }
      const filtered = links.filter((l) => {
        const hay = `${norm(l.title)} ${norm(l.link)}`;
        return hay.includes(q);
      });
      render(filtered);
    }

    input.addEventListener("input", apply);
  }

  function main() {
    const links = Array.isArray(window.LINKS) ? window.LINKS : (typeof LINKS !== "undefined" ? LINKS : []);
    render(links);
    setupSearch(links);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})(); 