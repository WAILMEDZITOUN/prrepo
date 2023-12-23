const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    // Add more products as needed
];

const productList = document.getElementById('productList');
const cart = document.getElementById('cart');

let cartItems = 0;

// Populate product list
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
    productCard.textContent = `${product.name}\n$${product.price}`;
    productCard.addEventListener('click', () => addToCart(product));

    productList.appendChild(productCard);
});

function addToCart(product) {
    cartItems++;
    updateCart();

    // In a real-world scenario, you would perform server-side operations here.
}

function updateCart() {
    cart.textContent = `Cart: ${cartItems} item${cartItems !== 1 ? 's' : ''}`;
}
