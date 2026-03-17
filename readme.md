# Choice – Fashion E‑Commerce Web App

Choice is a full‑stack shopping experience for men’s and women’s fashion. It combines a modern React front‑end with a Node/Apollo/GraphQL backend, persistent cart, and Stripe checkout to simulate a real production store.

![Home](screenshot.png)


---

### Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Key Implementation Details](#key-implementation-details)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [Project Highlights for Recruiters](#project-highlights-for-recruiters)
- [Future Improvements](#future-improvements)

---

## Features

- **Product browsing by gender & category**
  - Separate flows for **Women** and **Men** (`T‑shirt`, `jacket`, `sweatshirt`, `pants`, etc.).
  - Dedicated product list and product details pages for each category.

- **Rich product details with live filtering**
  - **Size filter**: dynamically filter cards by `small`, `medium`, `large`.
  - **Color filter**: filter by color (black, white, blue, brown, green, orange, pink, …).
  - **Price range slider**: show only products priced at or below the selected maximum.
  - All three filters **combine together** (size + color + max price) and update in place without page reload.

- **Shopping cart with guest and logged‑in flows**
  - Cart is available on **every page** and persists items using IndexedDB.
  - **Add to cart** on any product card:
    - Adds the selected product to the global cart state.
    - If the same product is added again, it increments quantity.
  - **Logged‑in user**:
    - Can proceed to checkout using Stripe.
  - **Guest user**:
    - Can freely add items to the cart.
    - Sees a clear CTA in the cart: “Please log in first to complete your purchase” plus a **Login to checkout** button.
    - Cannot complete payment until logging in.

- **Authentication & authorization**
  - JWT‑based auth with tokens stored in `localStorage`.
  - Authenticated requests are sent via Apollo using an auth link.
  - Logged‑in users can see **Order History** and complete checkout.

- **Responsive UI**
  - Custom layouts for desktop vs. mobile on:
    - Home page
    - Product list pages
    - Product detail pages
  - Dropdowns and controls are optimised for small screens.

- **Stripe checkout integration**
  - Checkout session is created via GraphQL and redirected using Stripe.js.
  - Cart contents are sent as product IDs, mapped on the server for payment.

---

## Tech Stack

**Front‑end**

- React
- React Router
- Apollo Client (GraphQL)
- Bootstrap + custom SCSS
- Font Awesome (icons)

**Back‑end**

- Node.js (20.x)
- Express (via `server/server.js`)
- Apollo Server / GraphQL
- Mongoose & MongoDB

**Other**

- Stripe / `@stripe/stripe-js`
- IndexedDB via a small helper (`idbPromise`) for cart persistence
- Concurrent dev scripts with `concurrently`

---

## Architecture

- **Monorepo layout**

  - `client/` – React SPA
    - `src/pages` – route‑level pages (Home, ProductListMen, ProductListWomen, ProductDetails, MenProductDetails, Login, Signup, OrderHistory)
    - `src/components` – shared UI (Nav, Cart, CartItem, product cards, timers, chat widget, etc.)
    - `src/utils` – global state, reducers, actions, GraphQL queries, auth helper
    - `src/scss` – page‑level and component‑level styles

  - `server/` – Node / GraphQL API
    - Express app exposing `/graphql`
    - Mongoose models and resolvers for products, categories, users, orders
    - Stripe checkout endpoint integrated into GraphQL

- **Global state management**

  - Lightweight custom context:
    - `GlobalState.js` uses `useReducer` with `reducers.js`.
    - Actions in `actions.js` handle products, categories, and cart.
  - The `StoreProvider` wraps the entire app in `App.js`.
