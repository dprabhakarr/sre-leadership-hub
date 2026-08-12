# The SRE Leadership Hub

A modern, professional static website for engineering leadership, SRE, platform engineering, cloud, and AI-driven operations.

## Project Overview

The SRE Leadership Hub is a standalone, production-ready website built with modern HTML5, CSS3, and vanilla JavaScript. It's designed as a professional platform for thought leadership, technical insights, frameworks, and advisory services.

**Build Stack:**
- HTML5 (semantic structure)
- CSS3 (variables, responsive design, modern layout)
- Vanilla JavaScript (no frameworks)
- Static content (no backend required)

## Project Structure

```
sre-leadership-hub/
│
├── index.html                          # Homepage
│
├── insights/
│   ├── index.html                      # Insights listing page
│   └── articles/
│       ├── reliability-business-strategy.html
│       ├── slos-error-budgets.html
│       ├── mttr-business-resilience.html
│       └── ...other articles...
│
├── resources/
│   └── index.html                      # Resources/downloads hub
│
├── advisory/
│   └── index.html                      # Advisory services page
│
├── newsletter/
│   └── index.html                      # Newsletter signup page
│
├── about/
│   └── index.html                      # About page
│
├── contact/
│   └── index.html                      # Contact form page
│
├── css/
│   ├── style.css                       # Main styles & design system
│   ├── components.css                  # Reusable component styles
│   └── responsive.css                  # Responsive design & media queries
│
├── js/
│   ├── main.js                         # Main functionality (forms, filtering)
│   └── navigation.js                   # Navigation & mobile menu
│
├── data/
│   └── content.js                      # Content data (articles, resources)
│
├── assets/
│   ├── images/                         # Image assets
│   ├── icons/                          # Icon assets
│   └── logos/                          # Logo assets
│
└── README.md                           # This file
```

## Design System

### Color Palette

- **Background**: `#fafaf8` (warm off-white)
- **Surface**: `#ffffff` (white)
- **Primary Text**: `#1a1a1a` (dark charcoal)
- **Secondary Text**: `#4a4a4a` (muted gray)
- **Primary Accent**: `#2c3e7f` (muted professional blue)
- **Secondary Accent**: `#d4b5e0` (soft lavender)
- **Borders**: `#e5e5e0` (subtle neutral)

All colors are defined as CSS variables in `css/style.css` for easy theming.

### Typography

- **Font Family**: System fonts stack for optimal performance
- **Font Sizes**: Scalable rem-based sizing system
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Line Heights**: Optimized for readability (1.3 to 2.0)

### Spacing

Uses consistent spacing scale:
- Base spacing: 1rem (16px)
- Multiples: xs, sm, base, lg, xl, 2xl, 3xl, 4xl

### Components

Pre-built components include:
- Buttons (primary, secondary, outline, ghost, sizes)
- Cards (standard, article cards, resource cards)
- Forms (inputs, textareas, validation)
- Badges & pills
- Grids (2, 3, 4 column layouts)
- Feature sections
- CTA sections
- Quote blocks
- Breadcrumbs
- Hero sections

## Features

### Navigation
- **Sticky header** with responsive navigation
- **Mobile hamburger menu** with smooth interactions
- **Active page highlighting** in navigation
- **Keyboard navigation** support
- **Skip navigation link** for accessibility

### Forms
- **Newsletter signup** on multiple pages
- **Contact form** with client-side validation
- **Frontend form handling** (ready for backend integration)
- **Success/error messaging**

### Content
- **Article listing** with category filtering
- **Article detail pages** with related articles
- **Resource library** organized by category
- **Advisory service descriptions** with detailed content

### Responsive Design
- **Mobile-first approach**
- **Breakpoints**: 768px (tablet), 1024px (desktop), 1440px (large)
- **Flexible typography** scales with viewport
- **Touch-friendly** interfaces
- **Optimized layouts** for each screen size

### Accessibility
- **Semantic HTML5** structure
- **ARIA labels** where appropriate
- **Keyboard navigation** support
- **Focus management**
- **Color contrast** compliance
- **Skip navigation** links
- **Alt text** placeholders for images

## Running the Website Locally

### Option 1: Simple HTTP Server (Python)

```bash
# Python 3.x
python -m http.server 8000

# Navigate to: http://localhost:8000
```

### Option 2: Node.js HTTP Server

```bash
# Using http-server package
npm install -g http-server
http-server

# Or using built-in Node server
# Install a simple package like:
npm install -g live-server
live-server
```

### Option 3: Direct File Opening

Simply open `index.html` in a web browser:
- Click the file in Finder/Explorer, or
- Drag and drop into browser window

**Note:** Some features may work differently when opening files directly. Using a local server is recommended for testing.

## Customization Guide

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --color-accent-primary: #your-color;
  --color-background: #your-color;
  /* ...etc */
}
```

### Adding New Articles

1. Create a new file in `insights/articles/` directory
2. Copy the template from an existing article
3. Update content, metadata, and links
4. Add article data to `data/content.js` in the articles array
5. Link from the insights listing page

### Adding New Pages

1. Create directory and `index.html` file
2. Use existing pages as template (maintain header, footer, navigation)
3. Ensure navigation links are updated globally
4. Test responsive design at multiple breakpoints

### Updating Navigation

Navigation is in the `<header>` of each HTML file:

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/insights/">Insights</a></li>
    <!-- Add new links here -->
  </ul>
</nav>
```

Update in all HTML files to maintain consistency.

### Styling Custom Sections

Add custom styles in a `<style>` tag in your HTML file, or create a new CSS file and link it:

```html
<link rel="stylesheet" href="css/custom.css">
```

## Content Structure

### Articles

Articles are organized with:
- **Title**: Main headline
- **Category**: Single category tag
- **Date**: Publication date
- **Reading Time**: Estimated read duration
- **Excerpt**: Short summary
- **Content**: Full article body
- **Related Articles**: Link to related content

### Resources

Resources include:
- **Title**: Resource name
- **Description**: What it is and why it's useful
- **Type**: Framework, Checklist, Guide, Playbook, Reference, etc.
- **Link**: URL to resource (can be downloadable or external)

### Advisory Services

Advisory offerings include:
- **Title**: Service name
- **Description**: Overview of the service
- **Areas**: Specific capabilities and focus areas
- **Details**: In-depth explanation and approach

## Future Enhancements

The architecture supports easy integration of:

- **Backend API**: Connect forms and newsletter signup to backend
- **CMS**: Integrate a headless CMS for content management
- **Authentication**: Add user accounts and member content
- **Newsletter Service**: Connect to Mailchimp, ConvertKit, etc.
- **Analytics**: Add Google Analytics or alternative
- **E-commerce**: Implement course or product sales
- **Comments/Community**: Add engagement features
- **Search**: Implement full-text search
- **Dark Mode**: Already includes dark mode media queries

## Performance Considerations

- **No external dependencies**: No npm packages, frameworks, or heavy libraries
- **Minimal JavaScript**: Only essential interactivity
- **CSS variables**: Efficient theme management
- **Semantic HTML**: Good for SEO and accessibility
- **Responsive images**: Use appropriate sizing
- **Lazy loading ready**: Image lazy loading implemented

## Browser Support

Tested and compatible with:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- ✅ Semantic HTML5
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ ARIA labels
- ✅ Color contrast compliance
- ✅ Skip navigation links
- ✅ Form validation
- ✅ Reduced motion support
- ✅ Dark mode support

## SEO Foundation

Each page includes:
- Descriptive `<title>` tags
- Meta descriptions
- Open Graph metadata
- Semantic heading structure
- Canonical URLs
- Descriptive link text

## Development Workflow

### Adding a New Feature

1. **Create HTML structure** in the appropriate file
2. **Add CSS** in the relevant stylesheet
3. **Add JavaScript** in `main.js` or create a new module
4. **Test responsiveness** at 320px, 768px, 1024px, 1440px
5. **Test accessibility** with keyboard and screen reader
6. **Test browser compatibility**

### File Naming Conventions

- HTML files: kebab-case (e.g., `reliability-business-strategy.html`)
- CSS files: kebab-case
- JavaScript files: camelCase
- Asset files: descriptive kebab-case

### CSS Organization

- `style.css`: Base styles, design system, layout
- `components.css`: Reusable component styles
- `responsive.css`: Media queries and responsive overrides

## License

© 2026 The SRE Leadership Hub. All rights reserved.

## Support

For questions or issues:
1. Check existing documentation
2. Review code comments in relevant files
3. Ensure you're using a supported browser
4. Test with a local HTTP server (not file:// protocol)

---

**Happy building!** 🚀

This website is designed to scale with your needs. Start here and extend with confidence.
