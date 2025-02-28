// import { db } from "./firebase.js";
// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// async function fetchDoctors() {
//   try {
//     const doctorsRef = collection(db, "doctors");
//     const snapshot = await getDocs(doctorsRef);

//     const doctorsList = document.getElementById("doctors-list");
//     const errorMessage = document.getElementById("error-message");
//     doctorsList.innerHTML = ""; // Clear previous data
//     errorMessage.classList.add("d-none"); // Hide error message

//     if (snapshot.empty) {
//       errorMessage.innerText = "No doctors available.";
//       errorMessage.classList.remove("d-none");
//       return;
//     }

//     snapshot.forEach((doc) => {
//       const doctor = doc.data();
//       const doctorCard = document.createElement("div");
//       doctorCard.className = "col-12 mb-3";
//       doctorCard.innerHTML = `
//         <div class="card shadow-sm">
//           <div class="card-body">
//             <h5 class="card-title text-primary">${doctor.name}</h5>
//             <p class="card-text"><strong>Specialization:</strong> ${doctor.specialization}</p>
//           </div>
//         </div>`;
//       doctorsList.appendChild(doctorCard);
//     });
//   } catch (error) {
//     console.error("Error fetching doctors:", error);
//     const errorMessage = document.getElementById("error-message");
//     errorMessage.innerText = "Error loading doctors: Missing or insufficient permissions.";
//     errorMessage.classList.remove("d-none");
//   }
// }

// document.addEventListener("DOMContentLoaded", fetchDoctors);





import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

async function fetchDoctors() {
  const doctorsList = document.getElementById("doctors-list");
  const errorMessage = document.getElementById("error-message");

  if (!doctorsList || !errorMessage) {
    console.error("Required elements not found in the DOM.");
    return;
  }

  try {
    // Log the Firestore instance to ensure it's correct
    console.log(db); // This should be a valid Firestore instance.

    const doctorsRef = collection(db, "doctors"); // Ensure you're using Firestore correctly
    const snapshot = await getDocs(doctorsRef);

    doctorsList.innerHTML = ""; // Clear previous data
    errorMessage.classList.add("d-none"); // Hide error message

    if (snapshot.empty) {
      errorMessage.innerText = "No doctors available.";
      errorMessage.classList.remove("d-none");
      return;
    }

    snapshot.forEach((doc) => {
      const doctor = doc.data();
      const doctorCard = document.createElement("div");
      doctorCard.className = "col-md-4 mb-3";
      doctorCard.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-primary">${doctor.name}</h5>
            <p class="card-text"><strong>Specialization:</strong> ${doctor.specialization}</p>
          </div>
        </div>`;
      doctorsList.appendChild(doctorCard);
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    if (errorMessage) {
      errorMessage.innerText = "Error loading doctors: " + error.message;
      errorMessage.classList.remove("d-none");
    }
  }
}

document.addEventListener("DOMContentLoaded", fetchDoctors);
