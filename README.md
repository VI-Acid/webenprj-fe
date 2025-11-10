# 🎓 Motivise – Study Micro-Blogging Platform (Frontend)

Motivise is a modern **Vue 3 Single Page Application (SPA)** built with **Vite**, **Pinia**, **Axios** and **TailwindCSS**.  
It’s part of the WEBEN course project at _FH Technikum Wien_ and complements the Motivise **Spring Boot backend**.

---

## 🌟 Main Idea

Students can post short updates about what they studied today –  
similar to a micro-blog that motivates and connects learners.

Each post may contain:

- ✏️ a short learning note
- 🖼️ an image or PDF attachment
- 🏷️ study tags (e.g. `#math`, `#marketing`)
- 💬 comments and likes
- 🔥 optional “study streaks”

Administrators can manage users, roles and posts.

---

## 🧩 Tech Stack

| Layer            | Technology                                            |
| :--------------- | :---------------------------------------------------- |
| Framework        | Vue 3 + Vite                                          |
| State Management | Pinia                                                 |
| HTTP Client      | Axios                                                 |
| Validation       | Yup                                                   |
| Styling          | Tailwind CSS v4 + custom design tokens                |
| Architecture     | Atomic Design (Atoms → Molecules → Organisms → Views) |
| Auth             | JWT-based via backend                                 |
| Accessibility    | Checked with Google Lighthouse & validator.w3.org     |

---

## 🚀 Quick Setup

### Prerequisites

- Node.js ≥ 18
- npm or yarn
- (optional) VS Code + Volar Extension

### 1️⃣ Clone the repository

```bash
git clone https://github.com/VI-Acid/webenprj-fe
cd webenprj-fe
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

## 🧭 Project Structure

```bash
src/
├─ assets/            # images, icons, logo
├─ components/
│   ├─ atoms/         # Base components (buttons, inputs, icons …)
│   ├─ molecules/     # Small UI groups (SearchBar, AuthForm …)
│   └─ organisms/     # Larger blocks (Navbar, PostCard …)
├─ views/             # Pages / routes (Home, Login, Register …)
├─ stores/            # Pinia stores (userStore)
├─ router/            # Vue Router configuration
├─ api.ts             # Axios helper + API base config
├─ main.ts            # App bootstrap
└─ main.css           # Tailwind design tokens + base styles
```
