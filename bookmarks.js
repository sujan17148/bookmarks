// Bookmarks data organized by sections
const BOOKMARK_SECTIONS = [
  {
    id: "socials",
    title: "Socials",
    icon: "fas fa-users",
    color: "#3B82F6",
    links: [
      { title: "WhatsApp Web", link: "https://web.whatsapp.com/", logo: "fab fa-whatsapp", color: "#25D366", description: "Chat with friends" },
      { title: "YouTube", link: "https://www.youtube.com/", logo: "fab fa-youtube", color: "#FF0000", description: "Watch videos" },
      { title: "ChatGPT", link: "https://chatgpt.com/", logo: "fas fa-robot", color: "#10A37F", description: "AI chat assistant" },
      { title: "Messenger", link: "https://www.messenger.com/", logo: "fab fa-facebook-messenger", color: "#0084FF", description: "Facebook messaging" },
      { title: "LinkedIn", link: "https://www.linkedin.com/", logo: "fab fa-linkedin", color: "#0077B5", description: "Professional network" },
      { title: "Twitter (X)", link: "https://twitter.com/", logo: "fab fa-twitter", color: "#1DA1F2", description: "Social media platform" },
      { title: "DeepSeek Chat", link: "https://chat.deepseek.com/", logo: "fas fa-brain", color: "#6366F1", description: "AI coding assistant" },
      { title: "Claude AI", link: "https://claude.ai/", logo: "fas fa-user-tie", color: "#FF6B35", description: "Anthropic AI chat" },
    ]
  },
  {
    id: "ui",
    title: "UI Libraries",
    icon: "fas fa-palette",
    color: "#8B5CF6",
    links: [
      { title: "shadcn/ui", link: "https://ui.shadcn.com/", logo: "fas fa-palette", color: "#000000", description: "Re-usable components" },
      { title: "twekcn", link: "https://twekcn.com/", logo: "fas fa-link", color: "#06B6D4", description: "Customize shadcn" },
      { title: "Framer Motion", link: "https://www.framer.com/motion/", logo: "fas fa-magic", color: "#0055FF", description: "Animation library" },
      { title: "Ant Design", link: "https://ant.design/", logo: "fas fa-ant", color: "#1890FF", description: "Enterprise UI library" },
      { title: "Chakra UI", link: "https://chakra-ui.com/", logo: "fas fa-bolt", color: "#319795", description: "Modern component library" },
      { title: "Material UI", link: "https://mui.com/", logo: "fab fa-google", color: "#1976D2", description: "Google's design system" },
      { title: "Radix UI", link: "https://www.radix-ui.com/", logo: "fas fa-circle", color: "#161618", description: "Headless UI primitives" },
      { title: "Headless UI", link: "https://headlessui.com/", logo: "fas fa-eye-slash", color: "#3B82F6", description: "Unstyled components" },
      { title: "Aceternity UI", link: "https://ui.aceternity.com/", logo: "fas fa-star", color: "#8B5CF6", description: "Modern UI components" },
    ]
  },
  {
    id: "development",
    title: "Development",
    icon: "fas fa-code",
    color: "#10B981",
    links: [
      { title: "GitHub", link: "https://github.com/", logo: "fab fa-github", color: "#333333", description: "Code repository" },
      { title: "My GitHub (sujan17148)", link: "https://github.com/sujan17148", logo: "fab fa-github", color: "#333333", description: "My projects" },
      { title: "React Docs", link: "https://react.dev/", logo: "fab fa-react", color: "#61DAFB", description: "React framework docs" },
      { title: "Redux Toolkit Docs", link: "https://redux-toolkit.js.org/", logo: "fas fa-cube", color: "#764ABC", description: "State management" },
      { title: "Tailwind CSS Docs", link: "https://tailwindcss.com/docs", logo: "fab fa-css3-alt", color: "#38BDF8", description: "Utility-first CSS" },
      { title: "MDN Web Docs", link: "https://developer.mozilla.org/", logo: "fab fa-firefox", color: "#FF7139", description: "Web development docs" },
      { title: "Chrome Web Store", link: "https://chromewebstore.google.com/", logo: "fab fa-chrome", color: "#4285F4", description: "Browser extensions" },
      { title: "JavaScript Interview Questions", link: "https://github.com/sudheerj/javascript-interview-questions", logo: "fab fa-js", color: "#F7DF1E", description: "JS interview prep" },
      { title: "React Interview Questions", link: "https://github.com/sudheerj/reactjs-interview-questions", logo: "fab fa-react", color: "#61DAFB", description: "React interview prep" },
      { title: "Learn Git", link: "https://github.com/DevMountain/learn-git", logo: "fab fa-git-alt", color: "#F05032", description: "Git tutorials" },
    ]
  },
  {
    id: "backend",
    title: "Backend & BaaS",
    icon: "fas fa-server",
    color: "#F59E0B",
    links: [
      { title: "Firebase", link: "https://firebase.google.com/", logo: "fas fa-fire", color: "#FFCA28", description: "Google's BaaS platform" },
      { title: "Supabase", link: "https://supabase.com/", logo: "fas fa-database", color: "#3ECF8E", description: "Open source Firebase alternative" },
      { title: "Appwrite", link: "https://appwrite.io/", logo: "fas fa-server", color: "#FD366E", description: "Self-hosted BaaS" },
    ]
  },
  {
    id: "tools",
    title: "Tools & Resources",
    icon: "fas fa-tools",
    color: "#EF4444",
    links: [
      { title: "Method Draw", link: "https://editor.method.ac/", logo: "fas fa-draw-polygon", color: "#FF6B6B", description: "SVG editor" },
      { title: "GenSpark AI", link: "https://www.genspark.ai/", logo: "fas fa-sparkles", color: "#06B6D4", description: "AI-powered development" },
      { title: "100 JavaScript Projects", link: "https://github.com/pradipchaudhary/100-javascript-projects", logo: "fab fa-js-square", color: "#F7DF1E", description: "Practice projects" },
      { title: "10015 Tools", link: "https://10015.io/", logo: "fas fa-tools", color: "#10B981", description: "Developer tools" },
      { title: "Striver A2Z DSA Sheet", link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", logo: "fas fa-book", color: "#EF4444", description: "DSA practice problems" },
      { title: "Programming Street 150", link: "https://github.com/Preparation-Street/Programming-Street-150/tree/main/PS-Sprint-1", logo: "fas fa-code", color: "#8B5CF6", description: "Coding challenges" },
      { title: "Globe Explorer", link: "https://explorer.globe.engineer/", logo: "fas fa-globe", color: "#3B82F6", description: "Interactive globe" },
    ]
  }
];

// Legacy support - keep the old LINKS array for backward compatibility
const LINKS = BOOKMARK_SECTIONS.flatMap(section => section.links); 