# Ecommerce Beauty Products Store
![Ecommerce Homepage](./src/assets/design/homepage.png)

A modern, responsive ecommerce website built with React for selling beauty and skincare products. Features user authentication, shopping cart, wishlist, PayPal integration, and a beautiful UI with dark/light theme support.


## Features

- **User Authentication**: Login and registration system
- **Product Catalog**: Browse beauty products with categories (Men, Women, Accessories)
- **Shopping Cart**: Add/remove products, quantity management
- **Wishlist**: Save favorite products for later
- **Search & Filter**: Find products easily with search and category filters
- **PayPal Integration**: Secure payment processing
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Product Reviews**: View and add ratings and reviews
- **Order Management**: Track order history and status

## 🛠️ Tech Stack

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router** - Declarative routing for React
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind 

### Backend & Data
- **JSON Server** - REST API mock server
- **Axios** - HTTP client for API requests

### Payment
- **PayPal React SDK** - PayPal integration for payments


## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerceProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in the terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments
- Images from Freepik and Vecteezy