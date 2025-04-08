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