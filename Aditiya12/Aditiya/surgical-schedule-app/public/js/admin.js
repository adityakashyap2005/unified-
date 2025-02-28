// import { db } from "./firebase.js";
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// // Function to add a doctor
// document.getElementById("add-doctor-form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const name = document.getElementById("doctor-name").value.trim();
//     const specialization = document.getElementById("doctor-specialization").value.trim();

//     if (!name || !specialization) {
//         alert("Please enter both name and specialization.");
//         return;
//     }

//     try {
//         await addDoc(collection(db, "doctors"), { name, specialization });
//         alert("Doctor added successfully!");
//         document.getElementById("add-doctor-form").reset();
//     } catch (error) {
//         console.error("Error adding doctor:", error);
//         alert(`Failed to add doctor: ${error.message}`);
//     }
// });

// // Function to add a surgery
// document.getElementById("add-surgery-form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const name = document.getElementById("surgery-name").value.trim();
//     const type = document.getElementById("surgery-type").value.trim();
//     const surgeon = document.getElementById("surgery-surgeon").value.trim();
//     const date = document.getElementById("surgery-date").value.trim();

//     if (!name || !type || !surgeon || !date) {
//         alert("All fields are required.");
//         return;
//     }

//     try {
//         await addDoc(collection(db, "surgeries"), { name, type, surgeon, date });
//         alert("Surgery added successfully!");
//         document.getElementById("add-surgery-form").reset();
//     } catch (error) {
//         console.error("Error adding surgery:", error);
//         alert(`Failed to add surgery: ${error.message}`);
//     }
// });





import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Function to add a doctor
document.getElementById("add-doctor-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const doctorName = document.getElementById("doctor-name").value.trim();
    const specialization = document.getElementById("doctor-specialization").value.trim();

    if (!doctorName || !specialization) {
        alert("Please enter both name and specialization.");
        return;
    }

    try {
        await addDoc(collection(db, "doctors"), {
            name: doctorName,
            specialization: specialization,
        });

        alert("Doctor added successfully!");
        document.getElementById("add-doctor-form").reset();
    } catch (error) {
        console.error("Error adding doctor:", error);
        alert("Error adding doctor. Please try again.");
    }
});

// Function to add a surgery
document.getElementById("add-surgery-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const surgeryName = document.getElementById("surgery-name").value.trim();
    const surgeryType = document.getElementById("surgery-type").value.trim();
    const surgerySurgeon = document.getElementById("surgery-surgeon").value.trim();
    const surgeryDate = document.getElementById("surgery-date").value.trim();

    if (!surgeryName || !surgeryType || !surgerySurgeon || !surgeryDate) {
        alert("All fields are required.");
        return;
    }

    try {
        await addDoc(collection(db, "surgeries"), {
            name: surgeryName,
            type: surgeryType,
            surgeon: surgerySurgeon,
            date: surgeryDate,
        });

        alert("Surgery added successfully!");
        document.getElementById("add-surgery-form").reset();
    } catch (error) {
        console.error("Error adding surgery:", error);
        alert("Failed to add surgery. Please try again.");
    }
});
