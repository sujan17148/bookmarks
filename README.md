# Bookmarks Home Page

A simple, customizable home page with Google search and organized bookmarks. Perfect for personal use.

**Demo:** [https://saveitup.netlify.app/](https://saveitup.netlify.app/)

## Features

- **Google search bar** with logo on top
- **Bookmarks grouped by sections** (Socials, UI Libraries, Development, Backend & BaaS, Tools & Resources)
- **Smart search**: type a section name (e.g., "ui") to show only that section
- **Opens in same tab** - works great as your browser's default/home page
- **Zero setup** - just open `index.html`

## Quick Start

1. Clone or download the repository
2. Open `index.html` in your browser

## Customization

Edit `bookmarks.js` to add your own sections and links. Each section has an `id`, `title`, `icon`, `color`, and an array of `links`.

### Example: Adding a new link to the UI section

```js
{
  id: "ui",
  title: "UI Libraries",
  icon: "fas fa-palette",
  color: "#8B5CF6",
  links: [
    { title: "shadcn/ui", link: "https://ui.shadcn.com/", logo: "fas fa-palette", color: "#000000", description: "Re-usable components" },
    { title: "twekcn", link: "https://twekcn.com/", logo: "fas fa-link", color: "#06B6D4", description: "Customize shadcn" },
    // Add your new link here:
    { title: "Your Tool", link: "https://yourtool.com/", logo: "fas fa-star", color: "#FF6B6B", description: "Your description" }
  ]
}
```

### Example: Adding a new section

```js
{
  id: "gaming",
  title: "Gaming",
  icon: "fas fa-gamepad",
  color: "#10B981",
  links: [
    { title: "Steam", link: "https://store.steampowered.com/", logo: "fab fa-steam", color: "#171a21", description: "Game store" }
  ]
}
```

## How to Clone

```bash
git clone https://github.com/sujan17148/bookmarks.git
cd bookmarks
# Open index.html in your browser
```
