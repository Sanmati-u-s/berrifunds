# 🍓 BerriFunds — Master Plan (Phase 1 → Future)

---

## 1. App Overview & Objective

**BerriFunds** is a personal finance web application designed to make expense and income tracking intuitive, visual, and emotionally engaging through a **minimalistic berry‑garden theme**.

Instead of traditional numbers-heavy finance tools, BerriFunds uses **nature‑inspired metaphors** (berries, baskets, plants) to help users:

- Build healthy money habits
- Understand spending patterns visually
- Feel rewarded rather than stressed while managing finances

**Primary Objective (Phase 1 – MVP):**
Enable users to securely track expenses, categorize them, and view monthly summaries and basic analytics through a clean, responsive UI.

---

## 2. Target Audience

### Primary Users

- College students & young professionals
- First-time budgeters
- Individuals who dislike traditional “finance-heavy” apps

### Secondary Users

- Creatives who value aesthetic UI/UX
- Users looking for lightweight, personal expense tracking (not enterprise accounting)

**User Traits:**

- Mobile + desktop users
- Prefer simple visuals over complex dashboards
- Motivated by progress indicators and metaphors

---

## 3. Core Features (MVP – Phase 1)

### Authentication

- User signup & login
- JWT-based authentication
- Secure password hashing

### Expense Management

- Add, edit, delete expenses
- Categorize expenses (Food, Travel, Shopping, etc.)
- Date-based expense tracking

### Monthly Overview

- Monthly expense total
- List of expenses for selected month

### Basic Analytics

- Category-wise expense split
- Simple charts (pie / bar)

### UI / UX

- Responsive design (desktop + mobile)
- Minimalistic layout
- Berry-garden themed metaphors:
  - 🍓 Picking berries → adding expenses
  - 🧺 Basket → monthly spending

---

## 4. Additional Features (Post-MVP / Nice-to-Have)

- Income tracking (planting / growing berry trees)
- Monthly budgets (basket capacity)
- Visual budget alerts (basket getting full)
- Notes & tags on expenses
- Dark mode (night garden theme)
- Export expenses (CSV)

---

## 5. Tech Stack

### Frontend

- React.js (or Next.js)
- Tailwind CSS
- Chart.js / Recharts

### Backend

- Node.js
- Express.js

### Database

- MongoDB (MongoDB Atlas)
- Mongoose ODM

### Authentication

- JWT (access tokens)
- bcrypt for password hashing

### Development & Tooling

- Git & GitHub
- Nodemon
- Local development environment (Phase 1 only)

---

## 6. Conceptual Data Model

### User

- id
- name
- email
- passwordHash
- createdAt

### Category

- id
- name (Food, Travel, etc.)
- icon (optional)
- isDefault

### Expense

- id
- userId (reference to User)
- categoryId (reference to Category)
- amount
- date
- note
- createdAt

### (Future) Income

- id
- userId
- amount
- source
- date

---

## 7. Development Phases

### Phase 1 — MVP (Current Focus)

- Backend setup
- Authentication
- Expense CRUD
- Categories
- Monthly summaries
- Basic analytics
- Responsive UI

### Phase 2 — Visual Finance Layer

- Income tracking
- Budget limits
- Berry garden visual metaphors
- Enhanced analytics

### Phase 3 — Experience & Scale

- Gamification
- Insights & recommendations
- Performance optimizations
- Deployment & monitoring

---

## 8. Potential Challenges & Solutions

### Challenge: Over‑engineering early

**Solution:** Strict MVP scope, no premature abstractions

### Challenge: UI metaphors becoming confusing

**Solution:** Keep metaphors optional and intuitive; always show numeric values alongside visuals

### Challenge: Data consistency across months

**Solution:** Enforce date-based queries and backend validation

### Challenge: Solo developer burnout

**Solution:** Phase-based development with clear completion checkpoints

---

## 9. Future Expansion Possibilities

- AI-powered spending insights
- Smart budget suggestions
- Habit streaks (consistent saving)
- Multi-currency support
- Mobile app (React Native)
- Shared budgets (family / roommates)

---

## 🌱 Design Philosophy (Berry Garden Theme)

BerriFunds blends **finance + nature + growth**:

- Expenses are not failures — they are berries picked intentionally
- Income is growth — planting and nurturing trees
- Budgets are containers — baskets with visible limits

The goal is to make users feel:

> _“I’m growing my garden,” not “I’m fighting my finances.”_

---

🚧 This document is a living master plan and will evolve with the product.
