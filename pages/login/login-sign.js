// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");

// // login form ka exence
// const userEmailReq = document.getElementById("email_requrid").value;
// const userPasswordReq = document.getElementById("password_requrid").value;
// const sugestionText = document.getElementById("sugestion_text");
// const loginKaBtn = document.getElementById("login_ka_btn");


// console.log(sugestionText);


// signupBtn.onclick = (() => {
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// });
// loginBtn.onclick = (() => {
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// });
// signupLink.onclick = (() => {
//   signupBtn.click();
//   return false;
// });




// function redirectadmin() {
//   console.log("Redirecting to: ./admin-dashboard/admin.ds.html");
//   window.location.href="../admin-dashboard/admin.ds.html"
// }

// function redirectuser() {
//   console.log("Redirecting to:  ../index.html");
//   window.location.href="../index.html"
// }

// loginKaBtn.addEventListener("click" , function(e){
//   e.preventDefault(); 
//   console.log('function called ');

//   var email = document.getElementById('email_requrid').value;
//   var password = document.getElementById('password_requrid').value;

//   console.log(email, password);

//   if (!email || !password) {
//     alert("Please enter all the fields")
//       // swal("warning!", "Please enter all the fields", "info");
//   } else {
//       var usersData = JSON.parse(localStorage.getItem('users'));
//       if (!usersData) {
//           usersData = [];
//       }
  
//       console.log("Users Data:", usersData);

//       var userFound = usersData.find(function(user) {
//           return user.email == email && user.password == password;
//       });

//       if (userFound) {
//           alert('Login successful: ' + userFound.email);
//           localStorage.setItem('currentLoggedinUser', JSON.stringify(userFound));
//           redirect();
//       } else {
//           alert('User not found');
//       }
//   }
// })



// function login(e) {
//   e.preventDefault();
//   console.log('function called ');

//   var email = document.getElementById('email_requrid').value;
//   var password = document.getElementById('password_requrid').value;

//   console.log(email, password);

//   if (!email || !password) {
//     alert("Please enter all the fields")
//       // swal("warning!", "Please enter all the fields", "info");
//   } else {
//       var usersData = JSON.parse(localStorage.getItem('users'));
//       if (!usersData) {
//           usersData = [];
//       }

//       console.log("Users Data:", usersData);

//       var userFound = usersData.find(function(user) {
//           return user.email == email && user.password == password;
//       });

//       if (userFound) {
//           alert('Login successful: ' + userFound.email);
//           localStorage.setItem('currentLoggedinUser', JSON.stringify(userFound));
//           redirect();
//       } else {
//           alert('User not found');
//       }
//   }
// }



// document.querySelector("#sinupbtn").addEventListener("click", function(e) {
//   e.preventDefault(); 
//   console.log("Form submission stopped!");

//   var userEmail = document.getElementById("email_signup").value;
//   var userPassword = document.getElementById("password_signup").value;
//   var userConfirmPassword = document.getElementById("conf_pass_signup").value;

//   var todoData = localStorage.getItem("Data" ,);
//   JSON.parse(todoData);

//   console.log(todoData);
  

//   var signupobj = {
//     email: userEmail,
//     password: userPassword,
//     confirmPassword: userConfirmPassword,
//     todoItem: [],
//   };

// todoData.split('')
// console.log(todoData);


//   usersData = localStorage.getItem("users",) && localStorage.getItem("Data")

//   if (usersData == "") {
//     usersData = [];
//   } else {
//     usersData = JSON.parse(usersData); 
//   }

//   if ( userPassword != userConfirmPassword)  {
//     alert("password and confirm password is not match")
//   }else{
//     console.log(localStorage.todoItem);
    
//   usersData.push(signupobj);
//   alert(`congratulation! sucessful signing`)

//   localStorage.setItem("users", JSON.stringify(usersData));

//   console.log(`userdata in local storage:`, usersData);
//   redirect()
//   }
// });


const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

// Redirect to admin dashboard
function redirectadmin() {
    console.log("Redirecting to: ./admin-dashboard/admin.ds.html");
    window.location.href = "../admin-dashboard/admin.ds.html";
}

// Redirect to user dashboard
function redirectuser() {
    console.log("Redirecting to:  ../index.html");
    window.location.href = "../index.html";
}

// Login function
// document.getElementById("login_ka_btn").addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log('function called ');

//     var email = document.getElementById('email_requrid').value;
//     var password = document.getElementById('password_requrid').value;

//     console.log(email, password);

//     if (!email || !password) {
//         alert("Please enter all the fields");
//     } else {
//         // Check if the user is admin
//         if (email === "admin@gmail.com" && password === "admin1234") {
//             alert('Admin login successful!');
//             redirectadmin(); // Redirect to admin dashboard
//             return;
//         }

//         var usersData = JSON.parse(localStorage.getItem('users'));
//         if (!usersData) {
//             usersData = [];
//         }

//         console.log("Users Data:", usersData);

//         var userFound = usersData.find(function (user) {
//             return user.email == email && user.password == password;
//         });

//         if (userFound) {
//             alert('Login successful: ' + userFound.email);
//             localStorage.setItem('currentLoggedinUser', JSON.stringify(userFound));
//             redirectuser(); // Redirect to user dashboard
//         } else {
//             alert('User not found');
//         }
//     }
// });


document.getElementById("login_ka_btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log('function called ');
  
    var email = document.getElementById('email_requrid').value;
    var password = document.getElementById('password_requrid').value;
  
    console.log(email, password);
  
    if (!email || !password) {
      alert("Please enter all the fields");
    } else {
      // Check if the user is admin
      if (email === "admin@gmail.com" && password === "admin1234") {
        alert('Admin login successful!');
        redirectadmin(); // Redirect to admin dashboard
        return;
      }
  
      var usersData = JSON.parse(localStorage.getItem('users'));
      if (!usersData) {
        usersData = [];
      }
  
      console.log("Users Data:", usersData);
  
      var userFound = usersData.find(function (user) {
        return user.email == email && user.password == password;
      });
  
      if (userFound) {
        alert('Login successful: ' + userFound.email);
        localStorage.setItem('currentLoggedinUser', JSON.stringify(userFound));
        redirectuser(); // Redirect to user dashboard
      } else {
        alert('User not found');
      }
    }
  });

// Signup function
document.querySelector("#sinupbtn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Form submission stopped!");

    var userEmail = document.getElementById("email_signup").value;
    var userPassword = document.getElementById("password_signup").value;
    var userConfirmPassword = document.getElementById("conf_pass_signup").value;

    if (!userEmail || !userPassword || !userConfirmPassword) {
        alert("Please fill all the fields");
        return;
    }

    if (userPassword !== userConfirmPassword) {
        alert("Password and confirm password do not match");
        return;
    }

    var usersData = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    var userExists = usersData.some(user => user.email === userEmail);
    if (userExists) {
        alert("User already exists. Please login.");
        return;
    }

    var signupobj = {
        email: userEmail,
        password: userPassword,
        todoItem: [],
    };

    usersData.push(signupobj);
    localStorage.setItem("users", JSON.stringify(usersData));

    alert("Congratulations! You have successfully signed up.");
    window.location.href = "./login.sign.html"; // Redirect to login page
});