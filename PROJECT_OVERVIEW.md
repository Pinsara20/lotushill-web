# LOTUS HILL Special School Website - Project Overview

## 📋 Project Information

**Project Name:** LOTUS HILL Special School Website  
**Version:** 0.1.0  
**Type:** Next.js Web Application  
**Purpose:** Educational website for a special needs school providing information about programs, services, and enrollment

---

## 🏗️ Technology Stack

### Core Framework
- **Next.js** 16.0.10 (React Framework with App Router)
- **React** 19.2.0
- **TypeScript** 5.x
- **Node.js** (Version 22+)

### Styling & UI
- **Tailwind CSS** 4.1.9 (Utility-first CSS framework)
- **PostCSS** 8.5
- **tw-animate-css** 1.3.3 (Animation utilities)
- **tailwindcss-animate** 1.0.7
- **class-variance-authority** 0.7.1 (Component variants)
- **clsx** 2.1.1 & **tailwind-merge** 3.3.1 (Class management)

### UI Component Libraries
- **Radix UI** (Comprehensive accessible component primitives)
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Navigation Menu, Popover, Radio Group, Select, Slider, Switch
  - Tabs, Toast, Tooltip, and 20+ more components
- **shadcn/ui** (Pre-built component system based on Radix UI)
- **Lucide React** 0.454.0 (Icon library)

### Additional Features
- **next-themes** 0.4.6 (Dark mode support)
- **react-hook-form** 7.60.0 (Form management)
- **zod** 3.25.76 (Schema validation)
- **@hookform/resolvers** 3.10.0 (Form validation integration)
- **embla-carousel-react** 8.5.1 (Carousel functionality)
- **recharts** 2.15.4 (Charting library)
- **sonner** 1.7.4 (Toast notifications)
- **vaul** 1.1.2 (Drawer component)
- **@vercel/analytics** 1.3.1 (Analytics integration)

---

## 📁 Project Structure

```
lotus-hill-website/
├── app/                          # Next.js App Router directory
│   ├── about/                    # About page
│   │   └── page.tsx             # School history, team, achievements
│   ├── contact/                  # Contact page
│   │   └── page.tsx             # Contact form, FAQs, location info
│   ├── news/                     # News & Events page
│   │   └── page.tsx             # Announcements, upcoming events, calendar
│   ├── programs/                 # Programs page
│   │   └── page.tsx             # Educational programs & services
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with header/footer
│   └── page.tsx                 # Homepage
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components (57 files)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── ... (50+ more components)
│   ├── card.tsx                 # Custom card component
│   ├── footer.tsx               # Site footer
│   ├── header.tsx               # Navigation header
│   ├── hero.tsx                 # Hero section component
│   └── theme-provider.tsx       # Theme context provider
│
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
│   ├── banner.png               # Hero banner image (610KB)
│   ├── banner2.png              # Secondary banner (370KB)
│   ├── children-learning-*.jpg  # Stock photos
│   ├── icon-dark-32x32.png     # Dark mode favicon
│   ├── icon-light-32x32.png    # Light mode favicon
│   ├── icon.svg                 # SVG icon
│   └── apple-icon.png           # Apple touch icon
│
├── styles/                       # Additional stylesheets
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies & scripts
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── tailwind.config.js           # Tailwind CSS configuration
```

---

## 🎨 Design System

### Color Palette
The website uses a warm, vibrant red-based color scheme:

**Light Mode:**
- **Primary:** `#c70a00` (Dark red-brown) - Main brand color
- **Accent:** `#fa0d00` (Bright red-orange) - Highlights & CTAs
- **Secondary:** `#ff392e` (Red) - Secondary elements
- **Tertiary:** `#ff6961` (Coral-red) - Tertiary accents
- **Light Coral:** `#ff9994` - Soft highlights
- **Very Light Pink:** `#ffcaca` - Backgrounds

**Dark Mode:**
- Inverted palette with adjusted brightness for accessibility

### Typography
- **Sans-serif:** Geist (Primary font)
- **Monospace:** Geist Mono (Code/technical content)
- **Serif:** Merriweather (Headings, weight: 700, 900)

### Design Features
- Responsive design (mobile-first approach)
- Accessible components (ARIA compliant via Radix UI)
- Smooth animations and transitions
- Gradient backgrounds and decorative elements
- Border accents and shadow effects

---

## 📄 Pages & Features

### 1. **Homepage** (`/`)
- Hero section with school branding
- Mission & Vision statements
- Featured programs showcase (4 cards)
- Testimonials section (3 testimonials)
- Call-to-action for enrollment

**Key Features:**
- Primary education, Speech therapy, Occupational therapy, Creative arts programs
- Parent and educator testimonials
- Gradient backgrounds and animated elements

### 2. **About Page** (`/about`)
- School history and founding story
- Timeline of milestones (2010-2024)
- Achievements showcase (4 achievements)
- Team member profiles (4 staff members)
- Call-to-action for campus visits

**Key Content:**
- Founded in 2010 by Dr. Patricia Williams
- Regional Education Excellence Award (2023)
- 95% graduate success rate
- 4.9/5 parent satisfaction rating

### 3. **Programs Page** (`/programs`)
- Age group overview (Early Learners, Middle Years, Teens)
- 6 detailed program cards with features
- Enrollment process (4-step guide)
- Additional support services
- Call-to-action for enrollment

**Programs Offered:**
- Primary Education (Ages 5-8)
- Intermediate Education (Ages 9-12)
- Secondary Education (Ages 13-16)
- Speech Therapy
- Occupational Therapy
- Creative Arts & Music

**Support Services:**
- Transportation, Nutritious meals, Parent workshops
- Medical coordination, Transition services, Family support groups

### 4. **News & Events Page** (`/news`)
- Upcoming events grid (6 events)
- Latest announcements (5 announcements)
- School calendar with important dates
- Photo gallery preview
- Newsletter subscription form
- Social media links

**Event Categories:**
- Community, Academic, Special Event, Sports, Arts

### 5. **Contact Page** (`/contact`)
- Contact information cards (Phone, Email, Address, Hours)
- Interactive contact form with validation
- Location map placeholder (2 campuses)
- FAQ section (6 questions)
- Multiple contact methods
- Success message on form submission

**Contact Details:**
- Phone: +1 (555) 123-4567
- Email: info@lotushill.edu
- Address: 123 Education Lane, City, State 12345
- Hours: Mon-Fri 8:00 AM - 4:00 PM

---

## 🧩 Key Components

### Layout Components
- **Header** (`header.tsx`): Sticky navigation with mobile menu, logo, nav links, CTA button
- **Footer** (`footer.tsx`): 4-column layout with links, contact info, hours
- **Hero** (`hero.tsx`): Reusable hero section with image, title, description, CTAs

### UI Components (57 total in `/components/ui/`)
- Form elements: Input, Textarea, Select, Checkbox, Radio, Switch
- Navigation: Navigation Menu, Menubar, Breadcrumb, Pagination
- Overlays: Dialog, Alert Dialog, Sheet, Drawer, Popover, Tooltip
- Data display: Card, Table, Badge, Avatar, Separator
- Feedback: Toast, Alert, Progress, Spinner, Skeleton
- Interactive: Button, Button Group, Accordion, Tabs, Collapsible, Carousel
- Advanced: Calendar, Chart, Command, Sidebar, Field, Form

### Custom Components
- **Card** (`card.tsx`): Reusable card with icon, title, description, color variants
- **Theme Provider** (`theme-provider.tsx`): Dark mode context

---

## 🔧 Configuration Files

### `next.config.mjs`
- TypeScript build errors ignored (for development)
- Image optimization disabled (unoptimized: true)

### `tsconfig.json`
- Target: ES6
- Strict mode enabled
- Path alias: `@/*` maps to project root
- JSX: react-jsx

### `package.json` Scripts
```json
{
  "dev": "next dev",        // Development server
  "build": "next build",    // Production build
  "start": "next start",    // Production server
  "lint": "eslint ."        // Linting
}
```

---

## 🎯 Key Features & Functionality

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Hamburger menu for mobile navigation
- Responsive grid layouts

### Accessibility
- ARIA-compliant components via Radix UI
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Color contrast compliance

### Forms & Validation
- Contact form with React Hook Form
- Zod schema validation
- Client-side validation
- Success/error states
- Loading states

### Performance
- Next.js App Router for optimized routing
- Server-side rendering (SSR)
- Static generation where applicable
- Image optimization (configurable)
- Code splitting

### Analytics
- Vercel Analytics integration
- User behavior tracking

### SEO
- Metadata configuration per page
- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Favicon support (light/dark mode)

---

## 🚀 Getting Started

### Installation
```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development
```bash
# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 📊 Project Statistics

- **Total Pages:** 5 (Home, About, Programs, News, Contact)
- **Total Components:** 62+ (57 UI components + 5 custom)
- **Dependencies:** 50+ packages
- **Images:** 13 static assets
- **Lines of Code:** ~3,000+ (estimated)
- **TypeScript Coverage:** 100%

---

## 🎓 School Information

**LOTUS HILL Special School** is a fictional special education institution providing:
- Quality education for children with special needs
- Comprehensive therapeutic services
- Inclusive learning environment
- Professional staff and modern facilities
- Multiple campuses serving the community

**Target Audience:**
- Parents of children with special needs
- Educational professionals
- Community members
- Prospective students and families

---

## 🔮 Future Enhancements (Potential)

- Blog/articles section
- Student gallery/portfolio
- Online enrollment system
- Parent portal/dashboard
- Staff directory with detailed profiles
- Resource library/downloads
- Live chat support
- Multilingual support
- Video content integration
- Interactive campus tour
- Online payment system
- Event registration system

---

## 📝 Notes

- The project uses Next.js 16 with the App Router architecture
- All components are built with TypeScript for type safety
- The design system is based on Tailwind CSS with custom color variables
- The UI component library (shadcn/ui) provides a consistent, accessible foundation
- Forms use React Hook Form with Zod for validation
- The site is optimized for both light and dark modes
- Analytics are integrated via Vercel Analytics
- The project follows modern React best practices and conventions

---

## 📞 Contact Information (Fictional)

**LOTUS HILL Special School**  
123 Education Lane  
City, State 12345  

Phone: +1 (555) 123-4567  
Email: info@lotushill.edu  

Hours: Monday - Friday, 8:00 AM - 4:00 PM  
Saturday: 9:00 AM - 1:00 PM  
Sunday: Closed

---

**Last Updated:** January 29, 2026  
**Document Version:** 1.0
