# Telegram Channels Catalog

![Nuxt 3](https://img.shields.io/badge/Nuxt_3-00C58E?style=flat-square&logo=nuxt.js) ![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square) ![Tests](https://img.shields.io/badge/Tests-Planned-yellow?style=flat-square)

A modern and scalable catalog of Telegram channels built with **Nuxt 3**. This project provides a user-friendly interface to browse, search, and filter Telegram channels by categories. It is designed for performance, SEO optimization, and ease of maintenance.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contact](#contact)

---

## Features

- **Dynamic Channel Catalog**: Browse and filter Telegram channels by category or search queries.
- **SEO Optimized**: Server-side rendering (SSR) with Nuxt 3 ensures fast load times and better search engine visibility.
- **Responsive Design**: Fully responsive UI compatible with desktop, tablet, and mobile devices.
- **API Integration**: Fetch channel data from a backend API (or mock data for development).
- **User-Friendly Interface**: Clean and intuitive design with smooth navigation.
- **Scalable Architecture**: Modular codebase for easy feature additions and maintenance.

---

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue 3 under the hood)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Plugins**: @nuxtjs/tailwindcss, @nuxt/icon, @nuxt/eslint, @nuxtjs/seo, @nuxt/image, @nuxtjs/color-mode
- **API**: NestJS + TypeORM
- **Deployment**: Github Actions
- **Linting & Formatting**: ESLint, Prettier, Husky for lint-staged

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm** (recommended)
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/spektredev/vue-public.git
   cd vue-public
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and configure the necessary variables:
   ```env
   BASE_URL=https://tgrow.ru
   API_BASE_URL=https://api.tgrow.ru
   MINIO_URL=https://cdn.tgrow.ru
   EMAIL=tgrowadmin@protonmail.com
   ```

### Running the Project

- **Development mode** (with hot reloading):
  ```bash
  npm run dev
  ```

- **Build for production**:
  ```bash
  npm run build
  ```

- **Start production server**:
  ```bash
  npm run start
  ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure

```plaintext
├── .github/             # Deployment
├── .husky/              # Pre-commit linter
├── assets/              # Static assets (images, fonts, etc.)
├── components/          # Reusable Vue components
├── composables/         # Reusable logic (composables)
├── layouts/             # Page layouts
├── mocks/               # Temporary replacement of API routes
├── pages/               # Application routes
├── plugins/             # Nuxt plugins
├── public/              # Publicly served files
├── server/              # Server middleware and API routes
├── types/               # TypeScript type definitions
├── .env                 # Environment variables
├── nuxt.config.ts       # Nuxt configuration
├── package.json         # Project dependencies and scripts
├── README.md            # This file
```

---

## Roadmap 🛤️

- Realtime data updates.
- Move admin panel from localhost to main site.
- Support for multiple languages (i18n).
- Ability to add your own channel.
- Discuss section.

---

## Contact

For questions or feedback, reach out to our team:

- **Email**: tgrowadmin@protonmail.com
- **GitHub Issues**: [Create an issue](https://github.com/your-org/telegram-channels-catalog/issues)

Author: Eugene B.

Important note: This project was developed only for the purpose of learning the Nuxt 3 framework (pet project).
