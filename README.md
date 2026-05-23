# POKOBAIMART - Modern E-commerce Platform

A modern, responsive e-commerce platform built with Next.js, React, TypeScript, and Tailwind CSS. Features a gaming/tech-focused design with a complete shopping experience.

## 🚀 Live Demo

Run the development server to see the live demo:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Design System

### Color Palette

- **Primary/Navbar Background**: Deep Navy Blue (`#002147`)
- **Accents/Buttons/Hover States**: Rich Coral (`#FF6F61`)
- **Page Background**: Soft Cream (`#FFFDD0`)
- **Text**: White (on Navy background) and Dark Gray (on light backgrounds)

### Typography

- **Headings**: Bold, modern sans-serif
- **Body Text**: Clean, readable font stack
- **Buttons**: Semibold with proper contrast

## 📱 Features

### ✅ Responsive Design

- **Mobile-First**: Optimized for all screen sizes
- **Breakpoints**: Mobile (< 768px), Tablet (768px-1024px), Desktop (> 1024px)
- **Touch-Friendly**: Proper button sizes and spacing

### 🛍️ E-commerce Components

#### Header System

- **Sticky Navigation**: Always accessible header
- **Logo Branding**: "POKOBAIMART" with consistent styling
- **Search Functionality**: Prominent search bar with icon
- **User Actions**: Profile and shopping cart with badge
- **Category Navigation**: Horizontal menu with hover effects
- **Mobile Menu**: Collapsible hamburger menu

#### Hero Section

- **Auto-Rotating Carousel**: 3 promotional slides
- **Gaming Focus**: "LEVEL UP YOUR GAME" messaging
- **Call-to-Action**: Prominent buttons with hover effects
- **Navigation Controls**: Arrows and dot indicators

#### Product Showcase

- **Featured Products**: Highlighted product grid
- **Category Sections**: Latest Mouse, Latest Keyboard
- **Product Cards**: Rating, pricing, badges, wishlist
- **Interactive Elements**: Hover effects, quick add to cart

#### Promotional Sections

- **Category Grid**: Visual category navigation
- **Promo Banners**: Full-width promotional sections
- **Daily Deals**: Special offers section
- **Trust Indicators**: Shipping, security, support

#### Footer

- **Newsletter Signup**: Email subscription
- **Company Information**: Contact details and links
- **Social Media**: Social platform links
- **Comprehensive Links**: All major site sections

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Header/
│   │   ├── Header.tsx       # Main header wrapper
│   │   ├── Navbar.tsx       # Top navigation bar
│   │   └── CategoryNavigation.tsx # Category menu
│   ├── Hero/
│   │   └── HeroCarousel.tsx # Hero slider
│   ├── Products/
│   │   ├── ProductCard.tsx  # Individual product card
│   │   └── ProductGrid.tsx  # Product grid layout
│   ├── Sections/
│   │   ├── CategorySection.tsx # Category grid
│   │   └── PromoBanner.tsx  # Promotional banners
│   ├── Footer/
│   │   └── Footer.tsx       # Site footer
│   └── index.ts             # Component exports
└── data/
    └── sampleProducts.ts    # Sample product data
```

## 🛠️ Technology Stack

- **Framework**: Next.js 16.2.6 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Turbopack (Next.js built-in)

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd shoplixy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🎯 Key Components

### Header Component

```tsx
import { Header } from "@/components";

// Includes both Navbar and CategoryNavigation
<Header />;
```

### Product Grid

```tsx
import { ProductGrid } from "@/components";

<ProductGrid title="Featured Products" products={productArray} showViewAll={true} />;
```

### Hero Carousel

```tsx
import { HeroCarousel } from "@/components";

// Auto-rotating carousel with 3 slides
<HeroCarousel />;
```

## 🎨 Customization

### Colors

Update theme colors in `src/app/globals.css`:

```css
:root {
  --primary: #002147; /* Navy Blue */
  --accent: #ff6f61; /* Coral */
  --background: #fffdd0; /* Cream */
}
```

### Products

Add/modify products in `src/data/sampleProducts.ts`:

```tsx
export const featuredProducts = [
  {
    id: "1",
    name: "Product Name",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 234,
    badge: "SALE",
    badgeColor: "sale",
  },
];
```

### Categories

Update categories in `CategoryNavigation.tsx`:

```tsx
const categories = [
  "Computer & Electronics",
  "Fashion & Lifestyle",
  // Add more categories
];
```

## 📱 Mobile Responsiveness

### Navbar

- Collapsible hamburger menu
- Stacked search bar
- Touch-friendly buttons
- Optimized spacing

### Product Grid

- Responsive columns: 2 (mobile) → 3 (tablet) → 5 (desktop)
- Proper card sizing
- Touch-friendly interactions

### Hero Carousel

- Responsive text sizing
- Touch swipe support (via CSS)
- Optimized button placement

## 🚀 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Optimized Images**: Next.js Image component ready
- **CSS Optimization**: Tailwind CSS purging
- **TypeScript**: Type safety and better DX
- **Modern Build**: Turbopack for fast development

## 🔮 Future Enhancements

### Planned Features

- [ ] **Product Search**: Real-time search with filters
- [ ] **User Authentication**: Login/register system
- [ ] **Shopping Cart**: Full cart functionality
- [ ] **Wishlist**: Save favorite products
- [ ] **Product Details**: Individual product pages
- [ ] **Checkout Process**: Complete purchase flow
- [ ] **User Dashboard**: Order history and profile
- [ ] **Admin Panel**: Product and order management

### Technical Improvements

- [ ] **Database Integration**: Product and user data
- [ ] **Payment Gateway**: Stripe/PayPal integration
- [ ] **Image Optimization**: CDN and lazy loading
- [ ] **SEO Optimization**: Meta tags and structured data
- [ ] **Analytics**: User behavior tracking
- [ ] **Testing**: Unit and integration tests
- [ ] **Accessibility**: WCAG compliance
- [ ] **Internationalization**: Multi-language support

## 🎯 Design Principles

1. **User-Centric**: Intuitive navigation and clear CTAs
2. **Mobile-First**: Responsive design from the ground up
3. **Performance**: Fast loading and smooth interactions
4. **Accessibility**: Semantic HTML and proper ARIA labels
5. **Consistency**: Unified design system throughout
6. **Scalability**: Modular components for easy expansion

## 📊 Component Features

### ProductCard

- ⭐ Star ratings display
- 🏷️ Price with discount calculation
- 🛒 Quick add to cart
- ❤️ Wishlist toggle
- 🏆 Product badges (Sale, New, Hot)

### HeroCarousel

- 🔄 Auto-rotation (5s intervals)
- 🎯 Manual navigation (arrows + dots)
- 📱 Touch-friendly controls
- 🎨 Gradient backgrounds
- ⚡ Smooth transitions

### CategorySection

- 🎨 Color-coded categories
- 📊 Item count display
- 🖱️ Hover animations
- 📱 Responsive grid layout
- 🎯 Clear visual hierarchy

## 🛡️ Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Component Structure**: Modular and reusable
- **Performance**: Optimized re-renders
- **Accessibility**: Semantic HTML and ARIA labels

---

Built with ❤️ for modern e-commerce experiences. Ready for production deployment and further customization.
