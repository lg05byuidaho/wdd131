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

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      averagrating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

//   // JavaScript to populate Product Name options from products array
// const products = [
//   {
//     id: 'fc-1888',
//     name: 'flux capacitor',
//     averagerating: 4.5
//   },
//   {
//     id: 'fc-2050',
//     name: 'power laces',
//     averagerating: 4.7
//   },
//   {
//     id: 'fs-1987',
//     name: 'time circuits',
//     averagerating: 3.5
//   },
//   {
//     id: 'ac-2000',
//     name: 'low voltage reactor',
//     averagerating: 3.9
//   },
//   {
//     id: 'jj-1969',
//     name: 'warp equalizer',
//     averagerating: 5.0
//   }
// ];

document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('productName');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});



// Gallery part
// scripts/gallery.js
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-visible');
        navToggle.textContent = navMenu.classList.contains('nav-visible') ? 'X' : '☰';
    });
});



// Activities parts



// Camp part