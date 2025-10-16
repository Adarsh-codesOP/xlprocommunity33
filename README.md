# XL Pro Community

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-2024-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

A modern, full-stack web platform for the XL Pro Community, built with Next.js and Supabase. Connect with fellow professionals, discover events, manage memberships, and engage in community discussions.

## 🌐 Live Demo

Visit the live application at: **[xlprocommunity.in](https://xlprocommunity.in)**

## ✨ Features

### 👥 Member Management
- **Member Directory**: Browse and search through community members
- **Profile Cards**: View member information with professional details
- **Responsive Grid Layout**: Optimized display across all devices

### 📅 Event System
- **Event Discovery**: Explore upcoming community events
- **Event Registration**: Easy registration process with approval workflow
- **Event Details**: Comprehensive event information and descriptions
- **Admin Approval**: Streamlined event registration management

### 🔐 Admin Dashboard
- **Secure Access**: Protected admin panel at `/admin007`
- **Registration Management**: Approve or decline member registrations
- **Event Oversight**: Monitor and manage community events
- **User Analytics**: Track community engagement metrics

### 💬 Community Chat
- **Real-time Communication**: Interactive chat system for members
- **Community Engagement**: Foster discussions and connections

### 📤 File Uploads
- **Proof of Payment**: Secure upload system for registration verification
- **Storage Integration**: Powered by Supabase Storage with proper policies

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Themes**: Theme switching capability
- **Interactive Components**: Built with Radix UI primitives
- **Animations**: Smooth transitions with Framer Motion and GSAP

### 🔧 Technical Features
- **Type-Safe Development**: Full TypeScript implementation
- **Server-Side Rendering**: Optimized performance with Next.js
- **Database Integration**: Robust PostgreSQL backend via Supabase
- **API Routes**: RESTful API endpoints for all operations
- **Form Validation**: Client and server-side validation with Zod
- **Toast Notifications**: User feedback with Sonner

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI
- **Animations**: Framer Motion, GSAP
- **Forms**: React Hook Form with Zod validation

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Real-time**: Supabase Realtime

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Build Tool**: Next.js Build System

## 🚀 Getting Started

For detailed setup instructions, please refer to [SETUP.md](./SETUP.md).

### Prerequisites
- Node.js 18+
- Supabase account
- Git

### Quick Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up Supabase project and environment variables
4. Run database migrations
5. Start development server: `npm run dev`

## 📁 Project Structure

```
xlprocommunityWEB/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── admin007/          # Admin dashboard
│   ├── chat/              # Community chat
│   ├── events/            # Events page
│   ├── members/           # Members directory
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   └── chroma/           # Special effects
├── lib/                   # Utility libraries
│   └── supabase/         # Database client
├── scripts/               # Database scripts
│   └── sql/              # Migration files
├── public/                # Static assets
└── styles/                # Additional styles
```

## 📖 Usage

### For Members
1. **Browse Members**: Visit the Members page to explore community profiles
2. **Discover Events**: Check the Events page for upcoming activities
3. **Register for Events**: Use the registration form to join events
4. **Upload Proof**: Submit payment proof for event registrations
5. **Engage in Chat**: Participate in community discussions

### For Admins
1. **Access Dashboard**: Navigate to `/admin007` with admin credentials
2. **Manage Registrations**: Approve or decline pending registrations
3. **Monitor Events**: View and manage community events
4. **Oversee Community**: Track member activities and engagement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary to XL Pro Community.

## 📞 Support

For support or questions, please contact the development team or open an issue in the repository.

---

Built with ❤️ for the XL Pro Community
=======
# XL Pro Community

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-2024-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

A modern, full-stack web platform for the XL Pro Community, built with Next.js and Supabase. Connect with fellow professionals, discover events, manage memberships, and engage in community discussions.

## 🌐 Live Demo

Visit the live application at: **[xlprocommunity.in](https://xlprocommunity.in)**

## ✨ Features

### 👥 Member Management
- **Member Directory**: Browse and search through community members
- **Profile Cards**: View member information with professional details
- **Responsive Grid Layout**: Optimized display across all devices

### 📅 Event System
- **Event Discovery**: Explore upcoming community events
- **Event Registration**: Easy registration process with approval workflow
- **Event Details**: Comprehensive event information and descriptions
- **Admin Approval**: Streamlined event registration management

### 🔐 Admin Dashboard
- **Secure Access**: Protected admin panel at `/admin007`
- **Registration Management**: Approve or decline member registrations
- **Event Oversight**: Monitor and manage community events
- **User Analytics**: Track community engagement metrics

### 💬 Community Chat
- **Real-time Communication**: Interactive chat system for members
- **Community Engagement**: Foster discussions and connections

### 📤 File Uploads
- **Proof of Payment**: Secure upload system for registration verification
- **Storage Integration**: Powered by Supabase Storage with proper policies

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Themes**: Theme switching capability
- **Interactive Components**: Built with Radix UI primitives
- **Animations**: Smooth transitions with Framer Motion and GSAP

### 🔧 Technical Features
- **Type-Safe Development**: Full TypeScript implementation
- **Server-Side Rendering**: Optimized performance with Next.js
- **Database Integration**: Robust PostgreSQL backend via Supabase
- **API Routes**: RESTful API endpoints for all operations
- **Form Validation**: Client and server-side validation with Zod
- **Toast Notifications**: User feedback with Sonner

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI
- **Animations**: Framer Motion, GSAP
- **Forms**: React Hook Form with Zod validation

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Real-time**: Supabase Realtime

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Build Tool**: Next.js Build System
- **Deployment**: Vercel

## 🚀 Getting Started

For detailed setup instructions, please refer to [SETUP.md](./SETUP.md).

### Prerequisites
- Node.js 18+
- Supabase account
- Git

### Quick Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up Supabase project and environment variables
4. Run database migrations
5. Start development server: `npm run dev`

## 📁 Project Structure

```
xlprocommunityWEB/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── admin007/          # Admin dashboard
│   ├── chat/              # Community chat
│   ├── events/            # Events page
│   ├── members/           # Members directory
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   └── chroma/           # Special effects
├── lib/                   # Utility libraries
│   └── supabase/         # Database client
├── scripts/               # Database scripts
│   └── sql/              # Migration files
├── public/                # Static assets
└── styles/                # Additional styles
```

## 📖 Usage

### For Members
1. **Browse Members**: Visit the Members page to explore community profiles
2. **Discover Events**: Check the Events page for upcoming activities
3. **Register for Events**: Use the registration form to join events
4. **Upload Proof**: Submit payment proof for event registrations
5. **Engage in Chat**: Participate in community discussions

### For Admins
1. **Access Dashboard**: Navigate to `/admin007` with admin credentials
2. **Manage Registrations**: Approve or decline pending registrations
3. **Monitor Events**: View and manage community events
4. **Oversee Community**: Track member activities and engagement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary to XL Pro Community.

## 📞 Support

For support or questions, please contact the development team or open an issue in the repository.

---

Built with ❤️ for the XL Pro Community
