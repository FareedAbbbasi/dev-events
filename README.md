# Tech Event Management App 🎉

A full-stack event management website built with **Next.js** and **TypeScript**, allowing users to browse events, view details, and book using email. This project showcases modern web development skills, responsive UI, and integration with a backend database.

## 📸 Screenshots

### Home Page
![Home Page](./assets/home.png)
*Browse all available tech events displayed in an elegant card layout*

### Event Cards Page
![Event Details](./assets/eventCards.png)
*View comprehensive event information including date, time, location, and description*

### Event Details and booking
![Booking Form](./assets/EventDetails01.png)
![Booking Form](./assets/eventDetails-02.png)
*Simple and intuitive email-based booking system for event registration*

### Similar Events
![Similar Events](./assets/samilarEvents.png)
*Discover related events based on category and interests*

### Full Platform Preview
![Platform Overview](./assets/home.png)
*Complete user experience across all features*

## ✨ Features

### 🏠 **Home Page**
- Displays all available events in a responsive card layout
- Clean and modern design with Tailwind CSS
- Quick navigation to event details

### 📄 **Event Details Page**
- Comprehensive event information display
- Event images powered by Cloudinary
- Date, time, location, and organizer details
- Event description and highlights
- Call-to-action booking button

### 📧 **Book an Event**
- Email-based booking system
- User-friendly registration form
- Instant booking confirmations
- No complex authentication required

### 🔍 **Similar Events**
- Smart event recommendations
- Category-based suggestions
- Helps users discover more relevant events
- Increases user engagement

### 🔮 **Future Features**
- **Admin Dashboard** - Full event management system (coming soon)
- **Search & Filter** - Advanced search functionality
- **User Accounts** - User authentication and profile management
- **Enhanced Analytics** - Event tracking and insights

## 🛠 Tech Stack

### **Frontend**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React Components

### **Backend**
- Node.js
- Next.js API Routes
- MongoDB with Mongoose ODM

### **Media & Storage**
- Cloudinary (Image management and optimization)

### **Key Dependencies**
```json
{
  "dependencies": {
    "next": "16.0.1",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "mongoose": "^9.1.4",
    "cloudinary": "^2.9.0",
    "lucide-react": "^0.562.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0",
    "babel-plugin-react-compiler": "^1.0.0",
    "ogl": "^1.0.11",
    "posthog-js": "^1.327.0"
  }
}
```

## 📦 Installation

### Prerequisites
- Node.js 18 or higher
- MongoDB (local or MongoDB Atlas)
- Cloudinary account
- npm/yarn/pnpm package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/FareedAbbbasi/dev-events.git
cd tech-event-management
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure Environment Variables**

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/event-management

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Service
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
tech-event-management/
├── app/
│   ├── api/
│   │   ├── events/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   └── bookings/
│   │       └── route.ts
│   ├── events/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── EventCard.tsx
│   ├── EventDetails.tsx
│   ├── BookingForm.tsx
│   ├── SimilarEvents.tsx
│   └── Navbar.tsx
├── lib/
│   ├── database/
│   │   ├── mongoose.ts
│   │   └── models/
│   │       ├── Event.ts
│   │       └── Booking.ts
│   ├── cloudinary.ts
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
│   └── screenshots/
├── .env.local
├── tailwind.config.ts
├── tsconfig.json
└── package.json

## 🚀 Usage

1. **Browse Events** - Visit the home page to view all available events
2. **View Details** - Click on any event card to see full details
3. **Book Event** - Fill in your email to register for an event
4. **Explore Similar** - Discover related events on the details page

## 🔜 Future Improvements

### Phase 1: Admin Dashboard
- [ ] Admin authentication and authorization
- [ ] Create, edit, and delete events
- [ ] Manage bookings and registrations
- [ ] View analytics and reports
- [ ] Upload and manage event images

### Phase 2: Enhanced Features
- [ ] Advanced search and filter functionality
- [ ] User authentication and profiles
- [ ] Payment integration for paid events
- [ ] Email notifications and reminders
- [ ] Event calendar view
- [ ] Social sharing capabilities

### Phase 3: Optimization
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Progressive Web App (PWA) features
- [ ] Advanced analytics integration
- [ ] Multi-language support

**Your Name**
- GitHub: [@yourusername](https://github.com/FareedAbbbasi)
- LinkedIn: [Your Name](https://www.linkedin.com/in/fareed-abbasi-ba71752a1)
- Email: fareedabbas072075.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Cloudinary](https://cloudinary.com/) - Media management
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

For support, email your.email@example.com or create an issue in the repository.

---

⭐ **If you found this project helpful, please give it a star!**

**Version:** 1.0.0  
**Status:** Active Development  
