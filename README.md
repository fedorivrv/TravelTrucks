# TravelTrucks 🚐

**TravelTrucks** is a frontend web application for a camper rental company.  
The application allows users to browse available campers, filter them by various criteria, view detailed camper information, read reviews, and make a booking.

This project was implemented as a technical assignment using modern frontend technologies and best practices.

---

## 🔗 Demo

- **Live:** (add your Vercel / Netlify link here)
- **API:** https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

---

## 🧩 Features

### 🏠 Home Page

- Hero banner with a primary call to action
- **View Now** button that navigates to the campers catalog

### 📋 Campers Catalog

- Display of all available campers
- **Backend-based filtering** by:
  - location
  - vehicle type
  - availability of air conditioning, kitchen, and other features
- Ability to add campers to **favorites**
- Pagination with **Load More** button
- Navigation to the camper details page via **Show more**

### 🚐 Camper Details Page

- Detailed camper description and specifications
- Image gallery
- Tabs:
  - **Features** (active by default)
  - **Reviews** (user reviews with a 5-star rating system)
- Booking form with a success notification after submission

### ⭐ Favorites

- Add and remove campers from favorites
- Favorites are persisted after page refresh using `localStorage`

---

## 🛠 Technologies

- **Next.js** (App Router)
- **TypeScript**
- **Zustand** — global state management
- **Axios** — API requests
- **CSS Modules** — styling
- **MockAPI** — backend for test data

---

## 🧠 Architecture & Approach

- Component-based architecture
- Global state management for:
  - campers list
  - filters
  - favorites
- Filtering and pagination are handled **exclusively on the backend**
- Loaders for asynchronous requests
- Clean and readable code following the **DRY** principle

---

## 📦 Installation & Running Locally

1. Clone the repository:

```bash
git clone https://github.com/fedorivrv/TravelTrucks.git
```

2. Navigate to the project directory:

```bash
cd TravelTrucks
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open in your browser:

```text
http://localhost:3000
```

---

## 👤 Author

**Roman Fedoriv**  
Frontend Developer  
GitHub: https://github.com/fedorivrv

---

## ✅ Project Status

✔ Implemented according to the technical requirements  
✔ Backend filtering and pagination  
✔ Ready for review and deployment
