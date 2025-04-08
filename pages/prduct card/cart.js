function updateNavbar() {
    const userAccountSection = document.getElementById("userAccountSection");
    const currentUser = JSON.parse(localStorage.getItem("currentLoggedinUser"));
  
    if (currentUser) {
      // If the user is logged in, show the "My Account" dropdown
      userAccountSection.innerHTML = `
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          My Account
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="../admin-dashboard/admin.ds.html">Profile</a></li>
          <li><a class="dropdown-item" href="../prduct card/cart.html">Cart</a></li>
          <li><a class="dropdown-item" href="#" onclick="logout()">Logout</a></li>
        </ul>
      `;
    } else {
      // If the user is not logged in, show "Login" and "Signup" links
      userAccountSection.innerHTML = `
        <a class="nav-link" href="../login/login.sign.html">Login/singup</a>
      `;
    }
  }
  
  function logout() {
    localStorage.removeItem("currentLoggedinUser");
    updateNavbar(); // Update the navbar after logout
    window.location.href = "../user Dash board/user-dash.html"; // Redirect to the home page
  }
  
  // Call this function when the page loads
  document.addEventListener("DOMContentLoaded", updateNavbar);


// Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render cart items and calculate totals
function renderCart() {
  let cartContainer = document.getElementById("cart-items");
  let subtotalElement = document.getElementById("subtotal");
  let deliveryElement = document.getElementById("delivery");
  let totalPriceElement = document.getElementById("total-price");

  let subtotal = 0;
  let delivery = 300; // Fixed delivery charge
  let totalPrice = 0;

  // Clear the cart container
  cartContainer.innerHTML = "";

  // Loop through each item in the cart
  cart.forEach(item => {
    // Calculate subtotal
    subtotal += item.price * item.quantity;

    // Create cart item HTML
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.productImage}" alt="${item.name}" style="width: 50px; height: 50px;">
        <h5>${item.name} (${item.quantity}) - ${item.price * item.quantity} Rs.</h5>
        <div>
          <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
          <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
          <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `;
  });

  // Calculate total price
  totalPrice = subtotal + delivery;

  // Update the DOM with calculated values
  subtotalElement.innerText = `Rs ${subtotal.toFixed(2)}`;
  deliveryElement.innerText = `Rs ${delivery.toFixed(2)}`;
  totalPriceElement.innerText = `Rs ${totalPrice.toFixed(2)}`;
}

// Update quantity of an item
function updateQuantity(productId, action) {
  let cartItem = cart.find(item => item.id === productId);
  if (!cartItem) return;

  if (action === 'increase') {
    cartItem.quantity += 1;
  } else if (action === 'decrease') {
    cartItem.quantity -= 1;
    if (cartItem.quantity === 0) removeFromCart(productId);
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Re-render the cart to reflect changes
  renderCart();
}

// Remove an item from the cart
function removeFromCart(productId) {
  if (confirm("Are you sure you want to remove this item from the cart?")) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // Re-render the cart
  }
}

// Proceed to Checkout
function proceedToCheckout() {
  // Save cart details to localStorage
  localStorage.setItem("checkoutCart", JSON.stringify(cart));
  localStorage.setItem("checkoutTotal", document.getElementById("total-price").innerText);

  // Redirect to the checkout page
  window.location.href = "../checkout/checkout.html";
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([])); // Initialize empty cart
  }
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  renderCart(); // Render the cart
});