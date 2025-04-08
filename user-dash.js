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
          <li><a class="dropdown-item" href="./admin-dashboard/admin.ds.html">Profile</a></li>
          <li><a class="dropdown-item" href="./prduct card/cart.html">Cart</a></li>
          <li><a class="dropdown-item" href="#" onclick="logout()">Logout</a></li>
        </ul>
      `;
    } else {
      // If the user is not logged in, show "Login" and "Signup" links
      userAccountSection.innerHTML = `
        <a class="nav-link" href="./login/login.sign.html">Login/singup</a>
      `;
    }
  }
  
  function logout() {
    localStorage.removeItem("currentLoggedinUser");
    updateNavbar(); // Update the navbar after logout
    window.location.href = "./user Dash board/user-dash.html"; // Redirect to the home page
  }
  
  // Call this function when the page loads
  document.addEventListener("DOMContentLoaded", updateNavbar);


// Dummy Products ko Local Storage mein set karne ka function
function setInitialProducts() {
  let products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...",
      description: "High performance laptop",
    },
    {
      id: 2,
      name: "Mobile",
      price: 30000,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...",
      description: "Latest smartphone",
    },
    {
      id: 3,
      name: "Headphones",
      price: 5000,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...",
      description: "Noise-canceling headphones",
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
    let data = localStorage.getItem("products");
    let products = data ? JSON.parse(data) : [];
    let productsContainer = document.getElementById("products");

    productsContainer.innerHTML = products
        .map(
            (product) => `
        <div class="pro-card">
            <div class="pro-img">
                <img onclick="viewProduct(${product.id})" src="${product.image}" alt="${product.name}">
            </div>
            <div class="pro-content">
                <h4>${product.name}</h4>
                <h5>${product.price} Rs.</h5>
                <p>${product.description}</p>
                <button type="button" class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `
        )
        .join("");
}

// Ensure this function runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", renderProducts);


// Product Add karne ka function (User se Image Upload karwana)
function addProduct() {
  let name = document.getElementById("product-name").value;
  let price = document.getElementById("product-price").value;
  let description = document.getElementById("product-description").value;
  let imageInput = document.getElementById("product-image");
  let file = imageInput.files[0];

  if (!name || !price || !description || !file) {
    alert("Please fill all fields and upload an image");
    return;
  }

  let reader = new FileReader();
  reader.onload = function (event) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let newProduct = {
      id: products.length + 1,
      name: name,
      price: parseInt(price),
      image: event.target.result, // Base64 image
      description: description,
    };

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
  };
  reader.readAsDataURL(file); // Convert image to Base64
}

// Cart System
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function addToCart(productId) {
//   let products = JSON.parse(localStorage.getItem("products"));
//   let product = products.find((p) => p.id === productId);
//   let cartItem = cart.find((item) => item.id === productId);

//   if (cartItem) {
//     cartItem.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   renderCart();
// }

function addToCart(productId) {
    const currentUser = JSON.parse(localStorage.getItem("currentLoggedinUser"));
  
    if (!currentUser) {
      alert("Please login to add products to the cart.");
      window.location.href = "../login/login.sign.html";
      return;
    }
  
    let products = JSON.parse(localStorage.getItem("products"));
    let product = products.find(p => p.id === productId);
    let cartItem = cart.find(item => item.id === productId);
  
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  function renderProducts() {
    let data = localStorage.getItem("products");
    let products = data ? JSON.parse(data) : [];
    let productsContainer = document.getElementById("products");
  
    productsContainer.innerHTML = products
      .map(
        (product) => {
          console.log(product.image); // Log the image data
          return `
            <div class="pro-card">
                <div class="pro-img">
                    <img onclick="viewProduct(${product.id})" src="${product.productImage}" alt="${product.name}">
                </div>
                <div class="pro-content">
                    <h4>${product.name}</h4>
                    <h5>${product.price} Rs.</h5>
                    <p>${product.productDescription}</p>
                    <button id="prduct-dm-btn" type="button" class="" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
          `;
        }
      )
      .join("");
      console.log(products.product.image);
      
  }



function removeFromCart(productId) {
  if (confirm("Kya aap is product ko cart se remove karna chahte hain?")) {
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

// Pehli dafa page load par products render karo
if (!localStorage.getItem("products")) {
  setInitialProducts();
}
renderProducts();
// renderCart();
