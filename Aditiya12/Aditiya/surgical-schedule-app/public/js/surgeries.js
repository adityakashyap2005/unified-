// import { db } from "./firebase.js";
// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// async function fetchSurgeries() {
//   try {
//     const surgeryRef = collection(db, "surgeries"); // ✅ Ensure the correct collection name
//     const snapshot = await getDocs(surgeryRef);

//     const surgeryList = document.getElementById("surgery-list");
//     const errorMessage = document.getElementById("error-message");

//     if (!surgeryList || !errorMessage) {
//       console.error("Required elements not found in the DOM.");
//       return;
//     }

//     surgeryList.innerHTML = ""; // Clear previous data
//     errorMessage.classList.add("d-none"); // Hide error message

//     if (snapshot.empty || snapshot.size === 0) {
//       errorMessage.innerText = "No surgery records found.";
//       errorMessage.classList.remove("d-none");
//       return;
//     }

//     snapshot.forEach((doc) => {
//       const surgery = doc.data();
//       const surgeryCard = document.createElement("div");
//       surgeryCard.className = "col-12 mb-3";
//       surgeryCard.innerHTML = `
//         <div class="card shadow-sm">
//           <div class="card-body">
//             <h5 class="card-title text-primary">${surgery.name}</h5>
//             <p class="card-text"><strong>Type:</strong> ${surgery.type}</p>
//             <p class="card-text"><strong>Surgeon:</strong> ${surgery.surgeon}</p>
//             <p class="card-text"><strong>Date:</strong> ${surgery.date}</p>
//           </div>
//         </div>`;
//       surgeryList.appendChild(surgeryCard);
//     });
//   } catch (error) {
//     console.error("Error fetching surgeries:", error);
//     const errorMessage = document.getElementById("error-message");
//     if (errorMessage) {
//       errorMessage.innerText = "Error loading surgery information: Missing or insufficient permissions.";
//       errorMessage.classList.remove("d-none");
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", fetchSurgeries);





import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

async function fetchSurgeries() {
  try {
    const surgeryRef = collection(db, "surgeries"); // Ensure correct Firestore collection reference
    const snapshot = await getDocs(surgeryRef);

    const surgeryList = document.getElementById("surgery-list");
    const errorMessage = document.getElementById("error-message");

    if (!surgeryList || !errorMessage) {
      console.error("Required elements not found in the DOM.");
      return;
    }

    surgeryList.innerHTML = ""; // Clear previous data
    errorMessage.classList.add("d-none"); // Hide error message

    if (snapshot.empty) {
      errorMessage.innerText = "No surgery records found.";
      errorMessage.classList.remove("d-none");
      return;
    }

    snapshot.forEach((doc) => {
      const surgery = doc.data();
      
      // Creating the surgery card element
      const surgeryCard = document.createElement("div");
      surgeryCard.className = "col-md-4 mb-3";

      // Building the card HTML structure
      surgeryCard.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-primary">${surgery.name}</h5>
            <p class="card-text"><strong>Type:</strong> ${surgery.type}</p>
            <p class="card-text"><strong>Surgeon:</strong> ${surgery.surgeon}</p>
            <p class="card-text"><strong>Date:</strong> ${new Date(surgery.date).toLocaleDateString()}</p>
          </div>
        </div>`;

      surgeryList.appendChild(surgeryCard);
    });
  } catch (error) {
    console.error("Error fetching surgeries:", error);
    const errorMessage = document.getElementById("error-message");
    if (errorMessage) {
      errorMessage.innerText = "Error loading surgery information: Missing or insufficient permissions.";
      errorMessage.classList.remove("d-none");
    }
  }
}

document.addEventListener("DOMContentLoaded", fetchSurgeries);
