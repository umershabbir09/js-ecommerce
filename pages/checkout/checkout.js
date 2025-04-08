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
    window.location.href = "../index.html"; // Redirect to the home page
  }
  
  // Call this function when the page loads
  document.addEventListener("DOMContentLoaded", updateNavbar);

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("checkoutCart")) || [];
    let total = localStorage.getItem("checkoutTotal") || "Rs 0.00";
  
    // Display cart items
    let checkoutItems = document.getElementById("checkout-items");
    checkoutItems.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item">
          <img src="${item.productImage}" alt="${item.name}" style="width: 50px; height: 50px;">
          <h5>${item.name} (${item.quantity}) - ${item.price * item.quantity} Rs.</h5>
        </div>
      `
      )
      .join("");
  
    // Display total price
    document.getElementById("checkout-total").innerText = total;
  
    // Handle form submission
    document.getElementById("checkout-form").addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get form data
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let address = document.getElementById("address").value;
      let phone = document.getElementById("phone").value;
      let payment = document.getElementById("payment").value;
  
      // Save order details to localStorage
      let order = {
        name,
        email,
        address,
        phone,
        payment,
        cart,
        total,
      };
      localStorage.setItem("order", JSON.stringify(order));
  
      // Redirect to a confirmation page (you can create this page)
      window.location.href = "../thank page/index.html";
    });
  });