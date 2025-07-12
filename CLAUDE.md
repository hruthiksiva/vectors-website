# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based business website for Vectors, built with Vite, React Router, TailwindCSS, and Framer Motion. The site showcases company services, portfolio, team information, and includes case studies and client testimonials.

## Common Commands

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production 
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

### Testing
No test framework is currently configured in this project.

## Architecture

### Tech Stack
- **Frontend**: React 19 with Vite build tool
- **Routing**: React Router DOM for SPA navigation
- **Styling**: TailwindCSS v4 with custom fonts (Inter, Plus Jakarta Sans)
- **Animations**: Framer Motion for page transitions and effects
- **Email**: EmailJS for contact form functionality
- **Icons**: Lucide React and React Icons
- **UI Components**: React CountUp for metrics display

### Project Structure
- `src/pages/` - Main page components (Home, About, Services, Portfolio, Contact, etc.)
- `src/components/` - Reusable UI components organized by functionality
- `src/assets/images/` - Static assets organized by page/section
- `public/` - Static files served directly

### Key Components
- **NavBar.jsx** - Main navigation component
- **Footer.jsx** - Site footer with links and contact info
- **HeroSection.jsx** - Landing page hero with animations
- **ServicesSection.jsx** - Service offerings display
- **PortfolioSection.jsx** & **PortfolioGrid.jsx** - Project showcase
- **TeamSection.jsx** - Team member profiles
- **TestimonialSection.jsx** - Client testimonials
- **ContactSection.jsx** - Contact form with EmailJS integration

### Routing Structure
The app uses React Router with routes for:
- `/` & `/home` - Landing page
- `/services` - Service offerings
- `/portfolio` - Project portfolio
- `/about` - Company information
- `/contact` - Contact form
- `/pricing` - Pricing plans
- Case study routes: `/casestudy-professional`, `/casestudy-ecommerce`, `/casestudy-brand-identity`
- Legal pages: `/privacy-policy`, `/terms-and-conditions`, `/sitemap`
- `/*` - 404 error page

### Animation Patterns
Uses consistent Framer Motion patterns with `sectionVariant` for fade-in animations on scroll. Common animation properties:
- `initial="hidden"` with `whileInView="visible"`
- `viewport={{ once: true, amount: 0.2 }}`
- Standard transition durations of 0.6s

### Image Organization
Assets are well-organized in subdirectories:
- `home/` - Homepage images and logos
- `about/` - Team photos and mission images
- `service/` - Service-related graphics
- `portfolio/` - Project screenshots
- `client/` - Client logos and testimonials
- `casestudy/` - Detailed case study images

## File Naming Conventions
- React components use PascalCase (e.g., `ServicesSection.jsx`)
- Pages are in `pages/` directory, components in `components/`
- Image files use kebab-case or descriptive naming