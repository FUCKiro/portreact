# Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and TailwindCSS. Features a bilingual interface (Italian/English) and engaging 3D animations.

![Portfolio Preview](https://i.ibb.co/ryytGVx/Screenshot-2023-11-25-at-11-28-11-AM.png)

## Features

- 🌐 Bilingual support (Italian/English)
- 🎨 Interactive 3D elements using Three.js
- 📱 Fully responsive design
- ⚡ Built with Vite for optimal performance
- 🎵 Background music toggle
- 📧 Contact form integration
- 🌓 Modern UI with TailwindCSS

## Tech Stack

- React
- Three.js (@react-three/fiber & @react-three/drei)
- TailwindCSS
- EmailJS for contact form
- React Router for navigation
- Vite for build tooling

## Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── assets/        # Static assets (3D models, images, icons)
├── components/    # Reusable React components
├── contexts/      # React contexts (language)
├── models/        # 3D model components
├── pages/         # Page components
├── constants/     # Configuration and constants
├── translations/  # Language translations
└── hooks/         # Custom React hooks
```

## Deployment

The site is configured for deployment on Netlify with automatic redirects and GitHub integration.

## License

MIT License - feel free to use this code for your own projects!