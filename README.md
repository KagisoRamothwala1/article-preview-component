# Frontend Mentor - Article Preview Component

This is my solution to the [Article Preview Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

The goal of this project was to build a responsive article preview component that closely matches the provided design. The component displays an article preview with an image, author information, publication date, and a share button that reveals social media sharing options when clicked.

## Table of Contents

- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Features](#features)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [What I Learned](#what-i-learned)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)
- [Acknowledgments](#acknowledgments)
- [Author](#author)

## Overview

The Article Preview Component is a small front-end development project focused on creating a clean, modern, and responsive user interface.

The component presents an article preview alongside author details. Users can interact with the share button to display social media sharing options. The layout adapts to different screen sizes to provide a consistent experience on desktop, tablet, and mobile devices.

## The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- See the social media sharing options when clicking the share icon.
- Hide the sharing options by clicking the share icon again.
- See hover states for interactive elements.
- Navigate and interact with the component comfortably across different devices.

## Features

- Responsive layout for desktop and mobile screens.
- Article preview with an image, heading, and description.
- Author profile section with an avatar, name, and publication date.
- Interactive share button powered by JavaScript.
- Toggle functionality for displaying and hiding social media links.
- Hover and focus states for interactive elements.
- Clean styling using CSS Flexbox and media queries.
- Semantic HTML structure for improved accessibility and maintainability.

## Screenshot

Add a screenshot of your completed project to the repository.

For example:

```markdown
![Article Preview Component Screenshot](./screenshots/desktop-preview.png)
```

You can also add a mobile screenshot:

```markdown
![Mobile Article Preview Component](./screenshots/mobile-preview.png)
```

## Links

- **Solution URL:** Add your Frontend Mentor solution link here.
- **Live Site URL:** Add your deployed project link here.

## Built With

- Semantic HTML5
- CSS3
- Flexbox
- CSS Media Queries
- JavaScript (ES6)
- Google Fonts, if applicable
- Visual Studio Code
- Git and GitHub
- Frontend Mentor starter files and design resources

## Project Structure

The project is organized into separate files for structure, styling, functionality, and assets.

```text
article-preview-component/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── avatar-michelle.jpg
│   ├── drawer.jpg
│   └── icon-share.svg
│
│
├── README.md
└── style-guide.md
```

**Note:** The filenames above are examples. Keep the actual filenames provided in your downloaded starter project, and update the paths if your structure differs.

### File Responsibilities

**`index.html`**

Contains the semantic HTML structure of the component, including the article image, article heading, description, author information, and share button.

**`style.css`**

Controls the visual appearance of the component, including colours, typography, spacing, card dimensions, hover states, and responsive layouts.

**`script.js`**

Handles the share button interaction by toggling the visibility of the social media sharing options.

**`images/`**

Contains the images and SVG icons supplied with the challenge.


**`README.md`**

Documents the project, its features, technologies, setup instructions, and learning outcomes.

**`style-guide.md`**

Contains the original design specifications, including colours, fonts, and other styling information supplied by Frontend Mentor.

## Getting Started

### Prerequisites

To run this project locally, you need:

- A modern web browser.
- A code editor such as Visual Studio Code.
- Basic knowledge of HTML, CSS, and JavaScript.

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd article-preview-component
   ```

3. Open the project folder in Visual Studio Code.

4. Open `index.html` in your browser, or use the Live Server extension for automatic browser refreshes while developing.

No additional dependencies or package installations are required for a standard HTML, CSS, and JavaScript implementation.

## What I Learned

During this project, I practised building a responsive user interface using HTML and CSS while adding a small interactive feature with JavaScript.

Some of the key concepts I developed include:

- **Responsive design:** Using CSS media queries to adapt the component to different screen sizes.
- **CSS Flexbox:** Arranging the article image, content, and author information into a structured layout.
- **JavaScript event listeners:** Responding to clicks on the share button.
- **Class toggling:** Using `classList.toggle()` to show and hide the social media sharing options.
- **CSS positioning:** Positioning the share options correctly within the component.
- **Hover and focus states:** Improving visual feedback and keyboard accessibility for interactive elements.
- **Code organization:** Separating HTML, CSS, and JavaScript to keep the project maintainable.

## Challenges

One of the main challenges was implementing the share button so that the sharing options appear in the correct position without disrupting the article layout.

Another challenge was making the component responsive while maintaining the correct spacing, alignment, and proportions across desktop and mobile screens.

I also needed to ensure that the share button could both open and close the sharing options, rather than only displaying them.

Working through these challenges helped me improve my understanding of responsive layouts, CSS positioning, and DOM manipulation in JavaScript.

## Future Improvements

In the future, I would like to:

- Refine the layout to match the original design more precisely.
- Improve accessibility by adding appropriate ARIA attributes and keyboard interaction.
- Test the component across more screen sizes and browsers.
- Add functional sharing links for supported social media platforms.
- Improve the organization and reusability of the CSS.
- Continue practising responsive design and interactive UI development.

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for providing the challenge and design resources.
- [MDN Web Docs](https://developer.mozilla.org/) for documentation and learning resources on HTML, CSS, and JavaScript.

## Author

**KAGISO RAMOTHWALA**

---

This project was created as part of my journey to improve my front-end development skills through practical projects and hands-on learning.
