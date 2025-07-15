# Ibrahim Majid – Personal Portfolio

A clean, responsive portfolio site for a Canadian CS student, built with Vite, React, Tailwind CSS, and Framer Motion.

## Features
- Modern, accessible design
- Animated sections and project cards
- Contact form (EmailJS)
- Résumé download
- Unit-tested ProjectCard

## Tech Stack
- Vite + React (hooks)
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons
- Jest + React Testing Library

## Setup
1. **Clone the repo:**
   ```sh
   git clone <repo-url>
   cd Personal-Website
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Add assets:**
   - Place `ibrahim.jpg`, `ai-therapist.jpg`, `gaiascope.jpg`, `chrome-ext.jpg` in `src/assets/`.
   - Add your `resume.pdf` to `public/`.
4. **Configure EmailJS:**
   - Sign up at [EmailJS](https://www.emailjs.com/).
   - Create a service and template.
   - In `src/components/Contact.js`, replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your values.

## Development
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173).

## Build for Production
```sh
npm run build
```
Output in `dist/` is deploy-ready.

## Testing
```sh
npm test
```
Runs unit tests for `ProjectCard`.

## Accessibility & UX
- Keyboard navigable, focus rings, aria-labels
- WCAG AA color contrast
- Responsive and mobile-friendly

---
© {year} Ibrahim Majid · Built with React 