# ReWear – Community Clothing Exchange

---

## Overview

**ReWear** is a modern, sustainable fashion platform that enables users to exchange unused clothing through direct swaps. The goal is to promote sustainable fashion and reduce textile waste by encouraging users to reuse wearable garments instead of discarding them.

---

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Code Quality:** ESLint
- **Deployment:** Vercel

---

## Features Implemented

### ✅ Welcome Screen
- Hero introduction to ReWear platform
- Feature highlights with icons (Sustainability, Community, Easy Swaps)
- Call-to-action buttons: "Get Started", "Browse Items"
- Platform benefits showcase

### ✅ User Authentication
- Email/password login flow (simulated for demo)
- User session management
- Admin role support

### 🏠 Landing Page
- Platform introduction with value proposition
- Featured items carousel (auto-rotating display)
- Sustainability impact highlights
- Navigation buttons: *"Start Swapping"*, *"Browse Items"*, *"List an Item"*
- Community stats and testimonials section

### 🔍 Browse Items (Product Catalog)
- Searchable item catalog with real-time filtering
- Category filters: Tops, Bottoms, Dresses, Outerwear, Accessories
- Size filters: XS, S, M, L, XL
- Grid and list view toggle modes
- Item cards with product images, condition, owner info, rating
- Like/favorite functionality with counter
- View count tracking

### 📊 User Dashboard
- **Profile Section:** User details, member rating, swaps completed, member since date
- **My Listings:** View all uploaded items with status, view count, and likes
- **Item Management:** Edit and delete options for own items
- **Swap History:** Completed and ongoing swaps tracking
- Account statistics and activity overview

### 📄 Item Detail Page (Product Detail)
- Full product gallery with multiple images
- Complete item specifications (brand, material, color, condition, size)
- Seller/owner profile with rating, swap history, location
- Item engagement metrics (views, likes, posted time)
- Related items suggestions
- "Swap Request" and messaging options

### ➕ Add/List New Item Page
- Comprehensive item listing form
- Image upload and gallery management
- Fields: title, description, category, size, condition, material, brand, color
- Status tracking: Available, Swapped, Pending
- View, edit, and delete functionality for own listings

### 🔒 Admin Panel
- **Multi-tab Dashboard (Users, Orders, Listings)**
- User management: Account status (Active/Suspended), member statistics, activity monitoring
- Content moderation: Approve/reject listings, remove inappropriate items
- Search and filter capabilities
- Ban and suspension tools
- Comprehensive user and listing management

---

## 🚀 Live Demo

**[ReWear on Vercel](https://re-wear-ten-iota.vercel.app/)**

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/ReWear.git
   cd ReWear
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
ReWear/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with auth controls
│   │   └── ProductDetailPage.tsx # Product detail/item listing page
│   ├── pages/
│   │   ├── WelcomePage.tsx      # Initial welcome screen
│   │   ├── LandingPage.tsx      # Main landing page with carousel
│   │   ├── BrowseItems.tsx      # Item catalog with filters
│   │   ├── ItemListing.tsx      # Item detail view
│   │   ├── UserDashboard.tsx    # User profile and listings
│   │   └── AdminPanel.tsx       # Admin moderation dashboard
│   ├── App.tsx                  # Main app component with routing
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite bundler configuration
├── eslint.config.js             # ESLint configuration
└── package.json                 # Project dependencies

```

---

## 🎨 Key Features & Components

- **Responsive Design:** Fully responsive UI built with Tailwind CSS
- **Type Safety:** Full TypeScript support for all components
- **Component-Based:** Modular React components for maintainability
- **State Management:** React hooks for state management (useState, etc.)
- **Real-time Search:** Instant search and filtering across catalog
- **Image Gallery:** Product images from Pexels API
- **Admin Controls:** Comprehensive moderation and user management tools

---

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

---

## 👥 Team

**Team name:** Binary Beasts

**Team Members:**
- 👤 **Jiyanshu Jain** - Full Stack Development
- 👤 **Yug Bothra** - Frontend & UI/UX
- 👤 **Unnati Sahu** - Full Stack Development
- 👤 **Devashish Moghe** - Backend & Database

---

## 📄 License

This project is for educational purposes and aims to promote sustainable fashion and circular economy principles.

---

## 🤝 Contributing

We welcome contributions from the community! Please feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📧 Contact & Support

For questions, feedback, or inquiries about the project, feel free to reach out:
- **Project Repository:** [GitHub - ReWear](https://github.com/your-repo/ReWear)
- **Live Demo:** [ReWear on Vercel](https://re-wear-ten-iota.vercel.app/)

---

## 🌍 Our Mission

**ReWear** is committed to:
- ♻️ Reducing fashion waste through sustainable clothing exchanges
- 🤝 Building a community of conscious fashion enthusiasts
- 👕 Promoting circular economy principles in the fashion industry
- 💚 Making sustainable fashion accessible to everyone

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

---

*Last Updated: January 2026*
