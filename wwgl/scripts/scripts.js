scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            event.preventDefault();
        }
    });
});



// index part



// about part



// Form part
const inquiries = [
  {
      id: "general",
      name: "General Inquiry",
      averageRating: 4.5
  },
  {
      id: "camp",
      name: "Summer Camp Information",
      averageRating: 4.7
  },
  {
      id: "activities",
      name: "Activities and Workshops",
      averageRating: 3.5
  },
  {
      id: "other",
      name: "Other",
      averageRating: 3.9
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('inquiry');

  inquiries.forEach(inquiry => {
      const option = document.createElement('option');
      option.value = inquiry.id;
      option.textContent = inquiry.name;
      select.appendChild(option);
  });
});



document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-visible');
        navToggle.textContent = navMenu.classList.contains('nav-visible') ? 'X' : '☰';
    });

    // Ensure the menu is hidden when resizing to a larger screen
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            navMenu.classList.remove('nav-visible');
            navToggle.textContent = '☰';
        }
    });
});


// Gallery part
// scripts/gallery.js
// document.addEventListener('DOMContentLoaded', () => {
//     const currentYear = new Date().getFullYear();
//     document.getElementById('currentyear').textContent = currentYear;

//     const lastModified = document.lastModified;
//     document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

//     const navToggle = document.querySelector('.nav-toggle');
//     const navMenu = document.querySelector('nav ul');

//     navToggle.addEventListener('click', () => {
//         navMenu.classList.toggle('nav-visible');
//         navToggle.textContent = navMenu.classList.contains('nav-visible') ? 'X' : '☰';
//     });
// });



// Activities parts



// Camp part




// Contacts Parts
document.addEventListener('DOMContentLoaded', function () {
  // Example: alert user on form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
      alert('Thank you for your message. We will get back to you soon!');
  });
});
