# SHOPEE : Shopping App

## Description:
The Shopping App is a web application that allows users to browse and purchase various products. Users can add items to their shopping cart, proceed to checkout, and make payments securely using the integrated Stripe payment system. The app also provides features like product filtering by color and size, user registration, login, and logout functionalities.

## Technologies Used:
- React.js: Front-end user interface and components.
- Redux: State management for the application.
- React Router: Handling navigation and routing within the app.
- Styled Components: Styling the components with CSS-in-JS.
- Axios: Making API requests to the backend server.
- Stripe: Integration for secure and easy payment processing.
- Express.js: Backend server framework.
- MongoDB: Database for storing product and user information.
- Mongoose: ODM library for MongoDB.
- Node.js: Server-side JavaScript runtime environment.

## Features:
- User Registration and Login: Users can create accounts and log in to access their shopping cart and order history.
- Product Listing: Displaying a list of products with details like title, image, price, and available sizes/colors.
- Product Filtering: Users can filter products by color and size to find items of their choice.
- Shopping Cart: Users can add products to their cart, view cart items, and adjust quantities before checkout.
- Checkout and Payment: Integrated Stripe for secure and convenient payment processing.
- Order History: Users can view their past order details and order status.
- Responsive Design: The app is designed to be responsive and accessible on various devices.

## Installation:
1. Clone the repository: `git clone https://github.com/ragtk49/shoppingApp.git`
2. Install dependencies: `cd shopping-app && npm install`
3. Set up environment variables: Create a `.env` file in the root directory with the required variables like `REACT_APP_STRIPE`, `REACT_APP_BASE_URL`, `REACT_APP_STRIPE_SECRET_KEY`, etc.
4. Start the development server: `npm start`

## Usage:
- Visit `http://localhost:3000` in your browser to access the Shopping App.
- Browse through the products, add items to the cart, and proceed to checkout.
- During checkout, you can use the test card number provided by Stripe for payment testing.

## API Endpoints:
The backend of the Shopping App includes various endpoints for product management, user authentication, and payment processing. Detailed API documentation can be found in the `api/routes` folder.

## Contributing:
Contributions to the Shopping App are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## License:
The Shopping App is open-source software licensed under the MIT License. See the `LICENSE` file for more details.
