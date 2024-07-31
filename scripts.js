// Existing functions
function toggleNav() {
    const sideNav = document.getElementById("sideNav");
    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
    } else {
        sideNav.style.width = "250px";
    }
}

function addToCart(productName, productPrice, productImage, productDescription) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);
    
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({name: productName, price: productPrice, image: productImage, description: productDescription, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function changeQuantity(productName, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);

    if (product && newQuantity > 0) {
        product.quantity = newQuantity;
    } else if (product) {
        removeFromCart(productName);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cartItems');
    let totalPrice = 0;

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <p>$${item.price.toFixed(2)}</p>
                    <label for="quantity${index}">Quantity:</label>
                    <input type="number" id="quantity${index}" value="${item.quantity}" min="1" onchange="changeQuantity('${item.name}', this.value)">
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            </div>
        `;
        totalPrice += ite// Existing functions
function toggleNav() {
    const sideNav = document.getElementById("sideNav");
    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
    } else {
        sideNav.style.width = "250px";
    }
}

function addToCart(productName, productPrice, productImage, productDescription) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);
    
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({name: productName, price: productPrice, image: productImage, description: productDescription, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function changeQuantity(productName, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.name === productName);

    if (product && newQuantity > 0) {
        product.quantity = newQuantity;
    } else if (product) {
        removeFromCart(productName);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cartItems');
    let totalPrice = 0;

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <p>$${item.price.toFixed(2)}</p>
                    <label for="quantity${index}">Quantity:</label>
                    <input type="number" id="quantity${index}" value="${item.quantity}" min="1" onchange="changeQuantity('${item.name}', this.value)">
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            </div>
        `;
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

// Unified dropdown function
function toggleDropdown(id) {
    const subcategory = document.getElementById(id);
    if (subcategory.classList.contains('show')) {
        subcategory.classList.remove('show');
        subcategory.style.display = 'none';
    } else {
        subcategory.classList.add('show');
        subcategory.style.display = 'block';
    }
}
m.price * item.quantity;
    });

    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

// New functions for dropdowns
function toggleDropdown(id) {
    const subcategory = document.getElementById(id);
    if (subcategory.style.display === 'block') {
        subcategory.style.display = 'none';
    } else {
        subcategory.style.display = 'block';
    }
}

        function toggleDropdown(id) {
            const subcategory = document.getElementById(id);
            if (subcategory.classList.contains('show')) {
                subcategory.classList.remove('show');
                subcategory.style.display = 'none';
            } else {
                subcategory.classList.add('show');
                subcategory.style.display = 'block';
            }
        }
  
  function toggleDropdown(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('show')) {
        element.classList.remove('show');
    } else {
        element.classList.add('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayCart();
    
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission here (e.g., send data to server)
        alert('Thank you for your purchase!');
        localStorage.removeItem('cart'); // Clear cart after purchase
        displayCart();
    });
});