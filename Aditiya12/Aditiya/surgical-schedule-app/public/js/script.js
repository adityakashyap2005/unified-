card.innerHTML = `
    <div class="image-container">
        <img src="${doctor.image}" alt="${doctor.name}">
    </div>
    <div class="details">
        <h2>${doctor.name}</h2>
        <p><strong>Speciality:</strong> ${doctor.speciality}</p>
        <p><strong>Degree:</strong> ${doctor.degree}</p>
        <p><strong>Experience:</strong> ${doctor.experience}</p>
        <p><strong>Languages:</strong> ${doctor.languages.join(', ')}</p>
        <p><strong>Availability:</strong> ${doctor.availability}</p>
        <p><strong>Fees:</strong> ${doctor.fees}</p>
        <button onclick="bookAppointment('${doctor.name}')">Book Appointment</button>
    </div>
`;