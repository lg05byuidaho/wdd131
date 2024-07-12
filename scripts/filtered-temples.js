const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Port-au-Prince Haiti",
        location: "Port-au-Prince, Haiti",
        dedicated: "2019, September, 1",
        area: 10396,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/port-au-prince-haiti/400x250/01-Port-au-Prince-Haiti-Temple-2264538.jpg"
      },
      {
        templeName: "Santo Domingo Dominican Republic",
        location: "Santo Domingo, Distrito Nacional, Dominican Republic",
        dedicated: "2000, September, 17",
        area: 67000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santo-domingo-dominican-republic/400x250/temples-santo-domingo-dominican-republic-638246-wallpaper.jpg"
      },
      {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756497-wallpaper.jpg"
      },
      {
        templeName: "Buenos Aires Argentina",
        location: "Ciudad Evita, Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 17683,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
      },
      {
        templeName: "Layton Utah",
        location: "Layton, Utah, United States",
        dedicated: "2024, June, 16",
        area: 95185,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756497-wallpaper.jpg"
      }
    // Add more temple objects here...
  ];


// Function to create a temple card
function createTempleCard(temple) {
    return `
      <div class="temple-card">
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      </div>
    `;
  }
  
  // Function to display temple cards
  function displayTemples(filterFunction) {
    const templeCardsSection = document.getElementById('temple-cards');
    templeCardsSection.innerHTML = temples.filter(filterFunction).map(createTempleCard).join('');
  }
  
  // Event listeners for the navigation menu
  document.getElementById('home').addEventListener('click', () => displayTemples(() => true));
  document.getElementById('old').addEventListener('click', () => displayTemples(temple => new Date(temple.dedicated).getFullYear() < 1900));
  document.getElementById('new').addEventListener('click', () => displayTemples(temple => new Date(temple.dedicated).getFullYear() > 2000));
  document.getElementById('large').addEventListener('click', () => displayTemples(temple => temple.area > 90000));
  document.getElementById('small').addEventListener('click', () => displayTemples(temple => temple.area < 10000));
  
  // Set the footer content
//   document.getElementById('year').textContent = new Date().getFullYear();
//   document.getElementById('last-modified').textContent = document.lastModified;
  
  // Initial display of all temples
  displayTemples(() => true);
