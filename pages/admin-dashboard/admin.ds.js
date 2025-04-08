// // // // dashboard admin interface

// // // document.getElementById("addProductBtn").addEventListener("click", function () {
// // //   document.getElementById("addProductSection").style.display = "block";
// // //   document.getElementById("manageProductsSection").style.display = "none";
// // // });

// // // document.getElementById("manageProductsBtn").addEventListener("click", function () {
// // //   document.getElementById("addProductSection").style.display = "none";
// // //   document.getElementById("manageProductsSection").style.display = "block";
// // //   displayProducts();
// // // });

// // // document.getElementById("saveProduct").addEventListener("click", function () {
// // //   let name = document.getElementById("productName").value;
// // //   let price = document.getElementById("productPrice").value;
// // //   let category = document.getElementById("productCategory").value;
// // //   let productDescription = document.getElementById("productDescription").value;
// // //   let productImage = document.getElementById("productImage").value;

// // //   if (name && price && category && productDescription && productImage) {
// // //       let products = JSON.parse(localStorage.getItem("products")) || [];
// // //       products.push({ name, price: parseFloat(price), category , productDescription, productImage});
// // //       localStorage.setItem("products", JSON.stringify(products));
// // //       alert("Product added successfully!");
// // //       document.getElementById("productName").value = "";
// // //       document.getElementById("productPrice").value = "";
// // //       document.getElementById("productCategory").value = "";
// // //       document.getElementById("productDescription").value = "";
// // //       document.getElementById("productImage").value = "";
// // //       displayProducts();
// // //   } else {
// // //       alert("Please fill all fields!");
// // //   }
// // // });

// // // document.getElementById("filterCategory").addEventListener("change", function () {
// // //   displayProducts();
// // // });

// // // document.getElementById("searchProduct").addEventListener("input", function () {
// // //   displayProducts();
// // // });

// // // document.getElementById("sortPrice").addEventListener("change", function () {
// // //   displayProducts();
// // // });

// // // function displayProducts() {
// // //   let productList = document.getElementById("productList");
// // //   productList.innerHTML = "";
// // //   let products = JSON.parse(localStorage.getItem("products")) || [];

// // //   let searchQuery = document.getElementById("searchProduct").value.toLowerCase();
// // //   let selectedCategory = document.getElementById("filterCategory").value;
// // //   let sortOption = document.getElementById("sortPrice").value;

// // //   let filteredProducts = products.filter(product => {
// // //       let matchesSearch = product.name.toLowerCase().includes(searchQuery);
// // //       let matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
// // //       return matchesSearch && matchesCategory;
// // //   });

// // //   if (sortOption === "lowToHigh") {
// // //       filteredProducts.sort((a, b) => a.price - b.price);
// // //   } else if (sortOption === "highToLow") {
// // //       filteredProducts.sort((a, b) => b.price - a.price);
// // //   }

// // //   filteredProducts.forEach((product, index) => {
// // //       let row = `<tr>
// // //           <td>${product.name}</td>
// // //           <td>$${product.price.toFixed(2)}</td>
// // //           <td>${product.category}</td>
// // //           <td><button onclick="deleteProduct(${index})">Delete</button></td>
// // //       </tr>`;
// // //       productList.innerHTML += row;
// // //   });
// // // }

// // // function deleteProduct(index) {
// // //   let products = JSON.parse(localStorage.getItem("products")) || [];
// // //   products.splice(index, 1);
// // //   localStorage.setItem("products", JSON.stringify(products));
// // //   displayProducts();
// // // }

// // // function populateCategoryFilter() {
// // //   let products = JSON.parse(localStorage.getItem("products")) || [];
// // //   let categoryFilter = document.getElementById("filterCategory");
// // //   categoryFilter.innerHTML = `<option value="All">All Categories</option>`;

// // //   let categories = [...new Set(products.map(product => product.category))];
// // //   categories.forEach(category => {
// // //       categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
// // //   });
// // // }

// // // window.onload = function () {
// // //   populateCategoryFilter();
// // //   displayProducts();
// // // };

// // document.getElementById("addProductBtn").addEventListener("click", function () {
// //   document.getElementById("addProductSection").style.display = "block";
// //   document.getElementById("manageProductsSection").style.display = "none";
// //   document.getElementById("dashboardSection").style.display = "none";
// // });

// // document.getElementById("manageProductsBtn").addEventListener("click", function () {
// //   document.getElementById("addProductSection").style.display = "none";
// //   document.getElementById("manageProductsSection").style.display = "block";
// //   document.getElementById("dashboardSection").style.display = "none";
// //   displayProducts();
// // });

// // document.getElementById("dashboardBtn").addEventListener("click", function () {
// //   document.getElementById("addProductSection").style.display = "none";
// //   document.getElementById("manageProductsSection").style.display = "none";
// //   document.getElementById("dashboardSection").style.display = "block";
// // });

// // document.getElementById("saveProduct").addEventListener("click", function () {
// //   let name = document.getElementById("productName").value;
// //   let price = document.getElementById("productPrice").value;
// //   let category = document.getElementById("productCategory").value;
// //   let productDescription = document.getElementById("productDescription").value;
// //   let productImage = document.getElementById("productImage").value;

// //   if (name && price && category && productDescription && productImage) {
// //       let products = JSON.parse(localStorage.getItem("products")) || [];
// //       products.push({ name, price: parseFloat(price), category, productDescription, productImage });
// //       localStorage.setItem("products", JSON.stringify(products));
// //       alert("Product added successfully!");
// //       document.getElementById("productName").value = "";
// //       document.getElementById("productPrice").value = "";
// //       document.getElementById("productCategory").value = "";
// //       document.getElementById("productDescription").value = "";
// //       document.getElementById("productImage").value = "";
// //       displayProducts();
// //   } else {
// //       alert("Please fill all fields!");
// //   }
// // });

// // function displayProducts() {
// //   let productList = document.getElementById("productList");
// //   productList.innerHTML = "";
// //   let products = JSON.parse(localStorage.getItem("products")) || [];

// //   let searchQuery = document.getElementById("searchProduct").value.toLowerCase();
// //   let selectedCategory = document.getElementById("filterCategory").value;
// //   let sortOption = document.getElementById("sortPrice").value;

// //   let filteredProducts = products.filter(product => {
// //       let matchesSearch = product.name.toLowerCase().includes(searchQuery);
// //       let matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
// //       return matchesSearch && matchesCategory;
// //   });

// //   if (sortOption === "lowToHigh") {
// //       filteredProducts.sort((a, b) => a.price - b.price);
// //   } else if (sortOption === "highToLow") {
// //       filteredProducts.sort((a, b) => b.price - a.price);
// //   }

// //   filteredProducts.forEach((product, index) => {
// //       let row = `<tr>
// //           <td>${product.name}</td>
// //           <td>$${product.price.toFixed(2)}</td>
// //           <td>${product.category}</td>
// //           <td>
// //               <button onclick="viewProduct(${index})">👁️</button>
// //               <button onclick="editProduct(${index})">✏️</button>
// //               <button onclick="deleteProduct(${index})">🗑️</button>
// //           </td>
// //       </tr>`;
// //       productList.innerHTML += row;
// //   });
// // }

// // function viewProduct(index) {
// //   let products = JSON.parse(localStorage.getItem("products")) || [];
// //   let product = products[index];
// //   localStorage.setItem("currentProduct", JSON.stringify(product));
// //   window.location.href = "../detail-page/detail.html";
// // }

// // function editProduct(index) {
// //   let products = JSON.parse(localStorage.getItem("products")) || [];
// //   let product = products[index];
// //   // Implement edit functionality here
// //   alert("Edit product: " + product.name);
// // }

// // function deleteProduct(index) {
// //   let products = JSON.parse(localStorage.getItem("products")) || [];
// //   products.splice(index, 1);
// //   localStorage.setItem("products", JSON.stringify(products));
// //   displayProducts();
// // }

// // function populateCategoryFilter() {
// //   let products = JSON.parse(localStorage.getItem("products")) || [];
// //   let categoryFilter = document.getElementById("filterCategory");
// //   categoryFilter.innerHTML = `<option value="All">All Categories</option>`;

// //   let categories = [...new Set(products.map(product => product.category))];
// //   categories.forEach(category => {
// //       categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
// //   });
// // }

// // window.onload = function () {
// //   populateCategoryFilter();
// //   displayProducts();
// // };


// document.getElementById("addProductBtn").addEventListener("click", function () {
//   document.getElementById("addProductSection").style.display = "block";
//   document.getElementById("manageProductsSection").style.display = "none";
//   document.getElementById("dashboardSection").style.display = "none";
// });

// document.getElementById("manageProductsBtn").addEventListener("click", function () {
//   document.getElementById("addProductSection").style.display = "none";
//   document.getElementById("manageProductsSection").style.display = "block";
//   document.getElementById("dashboardSection").style.display = "none";
//   displayProducts();
// });

// document.getElementById("dashboardBtn").addEventListener("click", function () {
//   document.getElementById("addProductSection").style.display = "none";
//   document.getElementById("manageProductsSection").style.display = "none";
//   document.getElementById("dashboardSection").style.display = "block";
// });

// document.getElementById("saveProduct").addEventListener("click", function () {
//   let name = document.getElementById("productName").value;
//   let price = document.getElementById("productPrice").value;
//   let category = document.getElementById("productCategory").value;
//   let productDescription = document.getElementById("productDescription").value;
//   let productImageFile = document.getElementById("productImage").files[0];

//   if (name && price && category && productDescription && productImageFile) {
//       let reader = new FileReader();
//       reader.onload = function (e) {
//           let productImage = e.target.result;
//           let products = JSON.parse(localStorage.getItem("products")) || [];
//           products.push({ name, price: parseFloat(price), category, productDescription, productImage });
//           localStorage.setItem("products", JSON.stringify(products));
//           alert("Product added successfully!");
//           document.getElementById("productName").value = "";
//           document.getElementById("productPrice").value = "";
//           document.getElementById("productCategory").value = "";
//           document.getElementById("productDescription").value = "";
//           document.getElementById("productImage").value = "";
//           displayProducts();
//       };
//       reader.readAsDataURL(productImageFile);
//   } else {
//       alert("Please fill all fields!");
//   }
// });

// function displayProducts() {
//   let productList = document.getElementById("productList");
//   productList.innerHTML = "";
//   let products = JSON.parse(localStorage.getItem("products")) || [];

//   let searchQuery = document.getElementById("searchProduct").value.toLowerCase();
//   let selectedCategory = document.getElementById("filterCategory").value;
//   let sortOption = document.getElementById("sortPrice").value;

//   let filteredProducts = products.filter(product => {
//       let matchesSearch = product.name.toLowerCase().includes(searchQuery);
//       let matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//   });

//   if (sortOption === "lowToHigh") {
//       filteredProducts.sort((a, b) => a.price - b.price);
//   } else if (sortOption === "highToLow") {
//       filteredProducts.sort((a, b) => b.price - a.price);
//   }

//   filteredProducts.forEach((product, index) => {
//       let row = `<tr>
//           <td>${product.name}</td>
//           <td>$${product.price.toFixed(2)}</td>
//           <td>${product.category}</td>
//           <td>
//               <button onclick="viewProduct(${index})">👁️</button>  
//               <button onclick="editProduct(${index})">✏️</button>  
//               <button onclick="deleteProduct(${index})">🗑️</button>
//           </td>
//       </tr>`;
//       productList.innerHTML += row;
//   });
// }

// function viewProduct(index) {
//   let products = JSON.parse(localStorage.getItem("products")) || [];
//   let product = products[index];
//   localStorage.setItem("currentProduct", JSON.stringify(product));
//   window.location.href = "../detail-page/detail.html";
// }

// function editProduct(index) {
//   let products = JSON.parse(localStorage.getItem("products")) || [];
//   let product = products[index];
//   // Implement edit functionality here
//   alert("Edit product: " + product.name);
// }

// function deleteProduct(index) {
//   let products = JSON.parse(localStorage.getItem("products")) || [];
//   products.splice(index, 1);
//   localStorage.setItem("products", JSON.stringify(products));
//   displayProducts();
// }

// function populateCategoryFilter() {
//   let products = JSON.parse(localStorage.getItem("products")) || [];
//   let categoryFilter = document.getElementById("filterCategory");
//   categoryFilter.innerHTML = `<option value="All">All Categories</option>`;

//   let categories = [...new Set(products.map(product => product.category))];
//   categories.forEach(category => {
//       categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
//   });
// }

// window.onload = function () {
//   populateCategoryFilter();
//   displayProducts();
// };





document.getElementById("addProductBtn").addEventListener("click", function () {
  document.getElementById("addProductSection").style.display = "block";
  document.getElementById("manageProductsSection").style.display = "none";
  document.getElementById("dashboardSection").style.display = "none";
});

document.getElementById("manageProductsBtn").addEventListener("click", function () {
  document.getElementById("addProductSection").style.display = "none";
  document.getElementById("manageProductsSection").style.display = "block";
  document.getElementById("dashboardSection").style.display = "none";
  displayProducts();
});

document.getElementById("dashboardBtn").addEventListener("click", function () {
  document.getElementById("addProductSection").style.display = "none";
  document.getElementById("manageProductsSection").style.display = "none";
  document.getElementById("dashboardSection").style.display = "block";
});

// document.getElementById("saveProduct").addEventListener("click", function () {
//   let name = document.getElementById("productName").value;
//   let price = document.getElementById("productPrice").value;
//   let category = document.getElementById("productCategory").value;
//   let productDescription = document.getElementById("productDescription").value;
//   let productImageFile = document.getElementById("productImage").files[0];

//   if (name && price && category && productDescription && productImageFile) {
//       let reader = new FileReader();
//       reader.onload = function (e) {
//           let productImage = e.target.result;
//           let products = JSON.parse(localStorage.getItem("products")) || [];
//           let productId = Date.now(); // Generate a unique ID using current timestamp
//           products.push({ id: productId, name, price: parseFloat(price), category, productDescription, productImage });
//           localStorage.setItem("products", JSON.stringify(products));
//           alert("Product added successfully!");
//           document.getElementById("productName").value = "";
//           document.getElementById("productPrice").value = "";
//           document.getElementById("productCategory").value = "";
//           document.getElementById("productDescription").value = "";
//           document.getElementById("productImage").value = "";
//           displayProducts();
//       };
//       reader.readAsDataURL(productImageFile);
//   } else {
//       alert("Please fill all fields!");
//   }
// });

document.getElementById("saveProduct").addEventListener("click", function () {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  let category = document.getElementById("productCategory").value;
  let productDescription = document.getElementById("productDescription").value;
  let productImageFile = document.getElementById("productImage").files[0];

  if (name && price && category && productDescription && productImageFile) {
    let reader = new FileReader();
    reader.onload = function (e) {
      let productImage = e.target.result; // Base64 image
      let products = JSON.parse(localStorage.getItem("products")) || [];
      let productId = Date.now(); // Generate a unique ID
      products.push({ id: productId, name, price: parseFloat(price), category, productDescription, productImage });
      localStorage.setItem("products", JSON.stringify(products));
      alert("Product added successfully!");
      document.getElementById("productName").value = "";
      document.getElementById("productPrice").value = "";
      document.getElementById("productCategory").value = "";
      document.getElementById("productDescription").value = "";
      document.getElementById("productImage").value = "";
      displayProducts();
    };
    reader.readAsDataURL(productImageFile); // Convert image to Base64
  } else {
    alert("Please fill all fields!");
  }
});

// let reader = new FileReader();
// reader.onload = function (event) {
//   let products = JSON.parse(localStorage.getItem("products")) || [];
//   let newProduct = {
//     id: products.length + 1,
//     name: name,
//     price: parseFloat(price),
//     image: event.target.result, // Base64 image
//     description: description,
//   };
//   products.push(newProduct);
//   localStorage.setItem("products", JSON.stringify(products));
//   renderProducts();
// };
// reader.readAsDataURL(file); // Convert image to Base64

function displayProducts() {
  let productList = document.getElementById("productList");
  productList.innerHTML = "";
  let products = JSON.parse(localStorage.getItem("products")) || [];

  let searchQuery = document.getElementById("searchProduct").value.toLowerCase();
  let selectedCategory = document.getElementById("filterCategory").value;
  let sortOption = document.getElementById("sortPrice").value;

  let filteredProducts = products.filter(product => {
      let matchesSearch = product.name.toLowerCase().includes(searchQuery);
      let matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
  });

  if (sortOption === "lowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
  }

  filteredProducts.forEach((product, index) => {
      let row = `<tr>
          <td>${product.name}</td>
          <td>$${product.price.toFixed(2)}</td>
          <td>${product.category}</td>
          <td>
              <button onclick="viewProduct(${product.id})">👁️</button>  
              <button onclick="editProduct(${product.id})">✏️</button>  
              <button onclick="deleteProduct(${product.id})">🗑️</button>
          </td>
      </tr>`;
      productList.innerHTML += row;
  });
}

function viewProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let product = products.find(p => p.id === id);
  if (product) {
      localStorage.setItem("currentProduct", JSON.stringify(product));
      window.location.href = "../detail-page/detail.html";
  }
}

function editProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let product = products.find(p => p.id === id);
  if (product) {
      // Implement edit functionality here
      alert("Edit product: " + product.name);
  }
}

function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products = products.filter(product => product.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
}

function populateCategoryFilter() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let categoryFilter = document.getElementById("filterCategory");
  categoryFilter.innerHTML = `<option value="All">All Categories</option>`;

  let categories = [...new Set(products.map(product => product.category))];
  categories.forEach(category => {
      categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
  });
}

window.onload = function () {
  populateCategoryFilter();
  displayProducts();
};