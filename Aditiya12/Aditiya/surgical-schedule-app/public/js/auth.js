// import { auth, googleProvider } from "./firebase.js";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// // Helper function for error handling
// function handleAuthError(error) {
//   console.error(error);
//   let message = "An error occurred. Please try again.";

//   if (error.code === "auth/email-already-in-use") {
//     message = "Email is already registered. Try logging in.";
//   } else if (error.code === "auth/invalid-email") {
//     message = "Invalid email format. Please enter a valid email.";
//   } else if (error.code === "auth/wrong-password") {
//     message = "Incorrect password. Try again.";
//   } else if (error.code === "auth/user-not-found") {
//     message = "No account found with this email.";
//   } else if (error.code === "auth/weak-password") {
//     message = "Password should be at least 6 characters.";
//   }

//   alert(message);
// }

// // Function to handle authentication
// function setupAuth() {
//   // Register Form
//   const registerForm = document.getElementById("register-form");
//   if (registerForm) {
//     registerForm.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       const email = document.getElementById("register-email").value;
//       const password = document.getElementById("register-password").value;
//       const confirmPassword = document.getElementById("confirm-password").value;

//       // Validate password match
//       if (password !== confirmPassword) {
//         alert("Passwords do not match. Please try again.");
//         return;
//       }

//       try {
//         await createUserWithEmailAndPassword(auth, email, password);
//         alert("User registered successfully!");
//         window.location.href = "index.html"; // Redirect to login
//       } catch (error) {
//         handleAuthError(error);
//       }
//     });
//   }

//   // Login Form
//   const loginForm = document.getElementById("login-form");
//   if (loginForm) {
//     loginForm.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       const email = document.getElementById("login-email").value;
//       const password = document.getElementById("login-password").value;

//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         alert("Login successful!");
//         window.location.href = "dashboard.html"; // Redirect to dashboard
//       } catch (error) {
//         handleAuthError(error);
//       }
//     });
//   }

//   // Google Login
//   const googleLogin = document.getElementById("google-login");
//   if (googleLogin) {
//     googleLogin.addEventListener("click", async () => {
//       try {
//         const result = await signInWithPopup(auth, googleProvider);
//         alert(`Google login successful! Welcome, ${result.user.displayName}`);
//         window.location.href = "dashboard.html"; // Redirect after login
//       } catch (error) {
//         handleAuthError(error);
//       }
//     });
//   }

//   // Logout
//   const logoutBtn = document.getElementById("logout-btn");
//   if (logoutBtn) {
//     logoutBtn.addEventListener("click", async () => {
//       try {
//         await signOut(auth);
//         alert("Logged out successfully!");
//         window.location.href = "index.html"; // Redirect to home
//       } catch (error) {
//         alert("Error logging out. Try again.");
//       }
//     });
//   }
// }

// // Run authentication setup when the page loads
// document.addEventListener("DOMContentLoaded", setupAuth);






import { auth, googleProvider } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// 🔴 Helper function for error handling
function handleAuthError(error) {
  console.error(error);
  let message = "An error occurred. Please try again.";

  const errorMap = {
    "auth/email-already-in-use": "Email is already registered. Try logging in.",
    "auth/invalid-email": "Invalid email format. Please enter a valid email.",
    "auth/wrong-password": "Incorrect password. Try again.",
    "auth/user-not-found": "No account found with this email.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/popup-closed-by-user": "Popup closed before authentication.",
    "auth/network-request-failed": "Network error. Please check your connection.",
    "auth/popup-blocked": "Popup was blocked. Redirecting instead...",
  };

  if (errorMap[error.code]) {
    message = errorMap[error.code];
  }

  alert(message);
}

// 🔵 Function to handle authentication
function setupAuth() {
  // ✅ Register Form
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User registered successfully!");
        window.location.href = "login.html"; // Redirect to login
      } catch (error) {
        handleAuthError(error);
      }
    });
  }

  // ✅ Login Form
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to dashboard
      } catch (error) {
        handleAuthError(error);
      }
    });
  }

  // ✅ Google Login
  const googleLogin = document.getElementById("google-login");
  if (googleLogin) {
    googleLogin.addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        alert(`Google login successful! Welcome, ${result.user.displayName}`);
        window.location.href = "dashboard.html"; // Redirect after login
      } catch (error) {
        if (error.code === "auth/popup-blocked") {
          alert("Popup was blocked! Redirecting instead...");
          await signInWithRedirect(auth, googleProvider);
        } else {
          handleAuthError(error);
        }
      }
    });

    // ✅ Handle Google Redirect Login (if popup is blocked)
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          alert(`Welcome back, ${result.user.displayName}!`);
          window.location.href = "index.html"; // Redirect after login
        }
      })
      .catch(handleAuthError);
  }

  // ✅ Logout
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
        alert("Logged out successfully!");
        window.location.href = "index.html"; // Redirect to home
      } catch (error) {
        alert("Error logging out. Try again.");
      }
    });
  }
}

// ✅ Run authentication setup when the page loads
document.addEventListener("DOMContentLoaded", setupAuth);
