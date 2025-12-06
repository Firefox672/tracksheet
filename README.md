# TRACKSHEET – Student Performance Tracking System

[![Deploy Next.js site to Pages](https://github.com/Firefox672/tracksheet/actions/workflows/nextjs.yml/badge.svg)](https://github.com/Firefox672/tracksheet/actions/workflows/nextjs.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

**Live Demo:** [https://firefox672.github.io/tracksheet/](https://firefox672.github.io/tracksheet/)

TRACKSHEET is a modern, responsive web application designed to track and manage student performance data. Built with Next.js 16 and TypeScript, it provides intuitive dashboards for both **students** and **staff** to access and manage academic performance information.

This repository contains the **frontend-only implementation**, currently deployed as a **static site** to **GitHub Pages** using automated CI/CD workflows.

---

## ✨ Features

### 🔐 Role-Based Access Control
- **Dual Login System**: Separate authentication flows for Students and Staff
- **Student View**: Access personal academic records, performance metrics, and alerts
- **Staff View**: Manage multiple students, edit records, and view analytics
- Clean, modern login interface with role toggle

### 📊 Comprehensive Dashboards

#### Student Dashboard
- **Profile Section**: Personal information and academic details
- **Academic Section**: Course-wise performance tracking, grades, and progress
- **Co-Curricular Section**: Participation in clubs, societies, and activities
- **Extra-Curricular Section**: Sports, events, and competitions tracking
- **Online Platforms Section**: Integration tracking for learning management systems
- **Alerts Section**: Important notifications, deadlines, and announcements
- **Overall Analysis**: Visual performance analytics with charts and insights

#### Staff Dashboard
- **Student Selector**: Quick access to manage individual student records
- **Student Details View**: Comprehensive view of selected student's data
- **Edit Modal**: In-place editing capabilities for student information
- **Batch Management**: Tools for managing multiple student records

### 🎨 Modern UI/UX
- **Glassmorphic Design**: Beautiful gradient backgrounds with glass effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Eye-friendly interface with blue-purple gradient themes
- **Smooth Animations**: Enhanced user experience with fluid transitions
- **Component Library**: 40+ pre-built UI components using Radix UI primitives

### 🌐 Static Deployment
- **GitHub Pages Integration**: Automatic deployment on push to main branch
- **Optimized Build**: Static export with code splitting and optimization
- **Fast Loading**: Pre-rendered pages for instant load times
- **SEO Ready**: Static HTML generation for better search engine visibility

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | Next.js (App Router) | 16.0.0 |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 4.1.9 |
| **UI Components** | Radix UI | Various |
| **State Management** | React Hooks | - |
| **Form Handling** | React Hook Form | 7.60.0 |
| **Validation** | Zod | 3.25.76 |
| **Charts** | Recharts | Latest |
| **Icons** | Lucide React | 0.454.0 |
| **Theme** | next-themes | 0.4.6 |
| **Notifications** | Sonner | 1.7.4 |
| **Build Tool** | Turbopack | (Next.js default) |
| **Deployment** | GitHub Pages | - |
| **CI/CD** | GitHub Actions | - |

### Key Dependencies
- **UI Primitives**: @radix-ui/* (Accordion, Dialog, Dropdown, Select, etc.)
- **Styling Utilities**: clsx, tailwind-merge, tailwindcss-animate
- **Date Handling**: date-fns, react-day-picker
- **Utilities**: class-variance-authority, input-otp, cmdk
- **Carousels**: embla-carousel-react

---

## 📁 Project Structure

```
tracksheet/
├── .github/
│   └── workflows/
│       └── nextjs.yml                 # GitHub Actions deployment workflow
│
├── app/
│   ├── layout.tsx                     # Root layout with providers
│   ├── page.tsx                       # Main entry point (login/dashboard router)
│   └── globals.css                    # Global styles and Tailwind directives
│
├── components/
│   ├── login-page.tsx                 # Login interface with role selection
│   ├── student-dashboard.tsx          # Student main dashboard
│   ├── staff-dashboard.tsx            # Staff main dashboard
│   ├── staff-edit-modal.tsx           # Modal for editing student records
│   ├── staff-student-details.tsx      # Detailed view of student information
│   ├── staff-student-selector.tsx     # Student selection interface
│   ├── student-sidebar.tsx            # Navigation sidebar for students
│   ├── theme-provider.tsx             # Theme context provider
│   │
│   ├── sections/                      # Dashboard section components
│   │   ├── academic-section.tsx       # Academic performance section
│   │   ├── alerts-section.tsx         # Notifications and alerts
│   │   ├── co-curricular-section.tsx  # Co-curricular activities
│   │   ├── extra-curricular-section.tsx # Extra-curricular activities
│   │   ├── online-platforms-section.tsx # Online learning platforms
│   │   ├── overall-analysis-section.tsx # Performance analytics
│   │   ├── overview-section.tsx       # Dashboard overview
│   │   └── profile-section.tsx        # Student profile information
│   │
│   └── ui/                            # Reusable UI components (40+ components)
│       ├── accordion.tsx              # Collapsible content panels
│       ├── alert-dialog.tsx           # Modal dialogs for alerts
│       ├── avatar.tsx                 # User avatar component
│       ├── badge.tsx                  # Status badges
│       ├── button.tsx                 # Button component with variants
│       ├── card.tsx                   # Card container component
│       ├── chart.tsx                  # Chart wrapper component
│       ├── dialog.tsx                 # Modal dialog component
│       ├── input.tsx                  # Form input component
│       ├── select.tsx                 # Dropdown select component
│       ├── table.tsx                  # Data table component
│       ├── tabs.tsx                   # Tab navigation component
│       ├── toast.tsx & toaster.tsx    # Toast notifications
│       └── ...                        # 30+ more UI components
│
├── hooks/
│   ├── use-mobile.ts                  # Mobile detection hook
│   └── use-toast.ts                   # Toast notification hook
│
├── lib/
│   └── utils.ts                       # Utility functions (cn, etc.)
│
├── public/                            # Static assets
│
├── styles/
│   └── globals.css                    # Additional global styles
│
├── components.json                    # Shadcn/UI configuration
├── next.config.mjs                    # Next.js configuration
├── package.json                       # Dependencies and scripts
├── postcss.config.mjs                 # PostCSS configuration
├── tailwind.config.mjs                # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # This file
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- **Node.js**: Version 18.x or higher (v20.x recommended)
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For cloning the repository

Check your installed versions:

```bash
node -v
npm -v
```

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Firefox672/tracksheet.git
cd tracksheet
```

#### 2. Install Dependencies

```bash
npm install
```

> **Note:** If you encounter peer dependency warnings, you can safely ignore them. The project uses React 18.3.1 for compatibility with all dependencies.

If installation fails, try clearing the cache:

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### 3. Run the Development Server

```bash
npm run dev
```

The application will start at:
```
http://localhost:3000
```

Open this URL in your browser to see the TRACKSHEET login page.

#### 4. Build for Production (Optional)

To create a production build locally:

```bash
npm run build
```

This generates a static export in the `dist/` directory.

To preview the production build:

```bash
npm start
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload at `localhost:3000` |
| `npm run build` | Creates an optimized production build (static export to `dist/`) |
| `npm start` | Starts the Next.js production server (for testing locally) |
| `npm run lint` | Runs ESLint to check code quality |

---

## ⚙️ Configuration

### Next.js Configuration (`next.config.mjs`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Generate static HTML/CSS/JS
  distDir: 'dist',       // Build output directory
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,   // Required for static export
  },
}

export default nextConfig
```

#### Configuration Breakdown:

- **`output: 'export'`**  
  Enables static HTML export, generating a fully static site without requiring a Node.js server. This is essential for GitHub Pages deployment.

- **`distDir: 'dist'`**  
  Specifies the build output directory. The GitHub Actions workflow uploads this folder as the deployment artifact.

- **`typescript.ignoreBuildErrors: true`**  
  Allows build to proceed even with TypeScript errors (useful during development).

- **`images.unoptimized: true`**  
  Disables Next.js Image Optimization API, which requires a server. Images are served as static files.

### Tailwind CSS Configuration

The project uses **Tailwind CSS v4** with the new CSS-first configuration approach via `@tailwindcss/postcss`.

```javascript
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

---

## 🌍 Deployment

### GitHub Pages (Automated)

This project uses **GitHub Actions** for continuous deployment to GitHub Pages.

**Live URL:** [https://firefox672.github.io/tracksheet/](https://firefox672.github.io/tracksheet/)

#### Workflow: `.github/workflows/nextjs.yml`

**Trigger:** Automatically runs on every push to the `main` branch.

**Key Steps:**

1. **Checkout Code**
   ```yaml
   - uses: actions/checkout@v4
   ```

2. **Detect Package Manager**
   - Auto-detects npm/yarn based on lockfiles
   - Sets up appropriate commands for installation

3. **Setup Node.js**
   ```yaml
   - uses: actions/setup-node@v4
     with:
       node-version: "20"
       cache: npm
   ```

4. **Install Dependencies**
   ```yaml
   - run: npm ci
   ```

5. **Install Linux-Specific Native Binaries**
   
   Tailwind CSS v4 and LightningCSS use native binaries. On Linux CI runners, we need platform-specific packages:
   
   ```yaml
   - name: Install lightningcss Linux binary
     run: npm install --save-dev lightningcss-linux-x64-gnu@1.30.2 --force
   
   - name: Install Tailwind Oxide Linux binary
     run: npm install --save-dev @tailwindcss/oxide-linux-x64-gnu@4.1.17 --force
   ```

6. **Build with Next.js**
   ```yaml
   - run: npx next build
   ```
   
   This creates a static export in the `dist/` directory.

7. **Upload Artifact**
   ```yaml
   - uses: actions/upload-pages-artifact@v3
     with:
       path: ./dist
   ```

8. **Deploy to GitHub Pages**
   ```yaml
   - uses: actions/deploy-pages@v4
   ```

#### Deployment Settings

Ensure GitHub Pages is enabled in your repository settings:

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. The workflow will handle the rest automatically

---

## 🔑 Demo Credentials

The application currently uses **mock authentication** for demonstration purposes. Real backend integration is planned for future releases.

### Available Credentials

**Student Login:**
- Email: `student@example.com`
- Password: `any password`

**Staff Login:**
- Email: `staff@example.com`
- Password: `any password`

> **Note:** These credentials are shown directly in the login UI. Any password will work as authentication is not yet connected to a backend.

---

## 🧩 Component Library

TRACKSHEET includes a comprehensive set of 40+ reusable UI components built on **Radix UI** primitives:

### Layout & Navigation
- Sidebar, Navigation Menu, Breadcrumb, Tabs

### Forms & Input
- Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider
- Input OTP, Calendar, Date Picker
- Form (with React Hook Form integration)

### Feedback & Overlays
- Dialog, Alert Dialog, Sheet, Drawer
- Toast, Sonner, Alert
- Hover Card, Tooltip, Popover

### Data Display
- Table, Card, Badge, Avatar
- Chart (Recharts wrapper), Progress, Spinner, Skeleton

### Interactive
- Button, Button Group, Toggle, Toggle Group
- Accordion, Collapsible, Carousel
- Command, Context Menu, Dropdown Menu, Menubar

### Utilities
- Scroll Area, Resizable Panels, Separator
- KBD (Keyboard shortcut display)
- Empty State, Field wrapper

All components support:
- ✅ Dark theme
- ✅ Keyboard navigation
- ✅ Screen reader accessibility
- ✅ Custom variants with CVA (Class Variance Authority)

---

## 🐞 Troubleshooting

### Common Issues and Solutions

#### 1. **npm ERESOLVE / Peer Dependency Conflicts**

**Symptom:** Installation fails with peer dependency errors (e.g., React version mismatches).

**Solution:**
```bash
# Use React 18.3.1 (as configured in package.json)
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### 2. **CI Build Fails: Cannot Find lightningcss Binary**

**Symptom:** GitHub Actions fails with:
```
Error: Cannot find module '../lightningcss.linux-x64-gnu.node'
```

**Solution:** Already fixed in `.github/workflows/nextjs.yml`:
```yaml
- name: Install lightningcss Linux binary
  run: npm install --save-dev lightningcss-linux-x64-gnu@1.30.2 --force
```

#### 3. **CI Build Fails: Cannot Find @tailwindcss/oxide**

**Symptom:** Build error mentioning missing Tailwind Oxide binary.

**Solution:** Already fixed in workflow:
```yaml
- name: Install Tailwind Oxide Linux binary
  run: npm install --save-dev @tailwindcss/oxide-linux-x64-gnu@4.1.17 --force
```

#### 4. **Package Manager Mismatch**

**Symptom:** CI tries to use pnpm when you use npm.

**Solution:**
- Ensure no `pnpm-lock.yaml` exists in the repo
- Remove `packageManager` field from `package.json` if present
- The workflow auto-detects the correct manager based on lockfiles

#### 5. **Styles Not Loading in Production**

**Symptom:** Application loads but styles are missing.

**Solution:**
- Verify `output: 'export'` in `next.config.mjs`
- Check `distDir: 'dist'` matches workflow upload path
- Ensure Tailwind directives are in `app/globals.css`:
  ```css
  @import "tailwindcss";
  ```

#### 6. **Images Not Loading on GitHub Pages**

**Symptom:** Images return 404 errors.

**Solution:**
- Verify `images.unoptimized: true` in `next.config.mjs`
- Use relative paths for images in `public/`
- Avoid Next.js `<Image>` optimization features (use `<img>` for static export)

---

## 📈 Roadmap & Future Enhancements

### Phase 1: Backend Integration ⏳
- [ ] Connect to REST API backend (Node.js/Express or Python/Django)
- [ ] Implement JWT-based authentication
- [ ] Real user registration and password recovery
- [ ] Session management and token refresh

### Phase 2: Enhanced Features 🎯
- [ ] Real-time notifications using WebSockets
- [ ] File upload for student documents and assignments
- [ ] Export reports as PDF
- [ ] Advanced search and filtering
- [ ] Bulk import/export (CSV, Excel)

### Phase 3: Analytics & Reporting 📊
- [ ] Detailed performance analytics with predictive insights
- [ ] Attendance tracking and visualization
- [ ] Grade calculation and GPA tracking
- [ ] Comparison charts (student vs. class average)

### Phase 4: Collaboration Features 👥
- [ ] Staff comments and feedback on student records
- [ ] Parent portal for viewing child's performance
- [ ] Direct messaging between staff and students
- [ ] Announcement broadcast system

### Phase 5: Mobile & Accessibility 📱
- [ ] Progressive Web App (PWA) support
- [ ] Native mobile app (React Native)
- [ ] Full WCAG 2.1 AA compliance
- [ ] Multi-language support (i18n)

### Phase 6: Advanced Admin Features 🔧
- [ ] Role-based permissions (Admin, Teacher, Student, Parent)
- [ ] Audit logs for all data changes
- [ ] Backup and restore functionality
- [ ] System settings and customization panel

---

## 🤝 Contributing

Contributions are welcome! This project is primarily an academic/educational endeavor, but improvements and suggestions are appreciated.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit with clear messages
   ```bash
   git commit -m "Add: feature description"
   ```
4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** with a detailed description

### Coding Guidelines
- Follow existing code style and structure
- Use TypeScript for type safety
- Write clear, descriptive commit messages
- Test your changes locally before submitting
- Keep components modular and reusable

---

## 📄 License

This project is developed as an **academic/educational project**.

**Usage Terms:**
- ✅ Free to fork and adapt for learning purposes
- ✅ Suitable for college projects and coursework
- ✅ Can be used as a reference for Next.js + TypeScript projects
- ⚠️ Not licensed for commercial use without permission

If you use this project as a reference, please provide attribution:
```
Based on TRACKSHEET by Firefox672
https://github.com/Firefox672/tracksheet
```

---

## 👨‍💻 Author

**Developer:** [Your Name]  
**GitHub:** [@Firefox672](https://github.com/Firefox672)  
**Project Repository:** [tracksheet](https://github.com/Firefox672/tracksheet)

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for Next.js and deployment tools
- **Radix UI** for accessible component primitives
- **Tailwind Labs** for Tailwind CSS
- **shadcn/ui** for UI component inspiration
- **GitHub** for free hosting via GitHub Pages

---

## 📞 Support

If you encounter issues or have questions:

1. **Check the Troubleshooting section** above
2. **Review existing GitHub Issues:** [Issues Page](https://github.com/Firefox672/tracksheet/issues)
3. **Open a new issue** with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshots (if applicable)

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Firefox672/tracksheet)
![GitHub last commit](https://img.shields.io/github/last-commit/Firefox672/tracksheet)
![GitHub issues](https://img.shields.io/github/issues/Firefox672/tracksheet)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Firefox672/tracksheet)

---

<div align="center">

**⭐ If you find this project helpful, please consider giving it a star! ⭐**

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS

</div>
