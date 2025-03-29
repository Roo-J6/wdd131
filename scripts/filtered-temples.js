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
        templeName: "Mesa Arizona",
        location: "Arizona, United States",
        dedicated: "1927, October, 26",
        area: 6968,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg"
      }, 
      {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 48525,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
      }, 
      {
        templeName: "Praia Cape Verde",
        location: "Praia, Cape Verde",
        dedicated: "2022, June, 19",
        area: 8759,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/praia-cape-verde-temple/praia-cape-verde-temple-27204-main.jpg"
      },
      {
        templeName: "Bountiful Utah",
        location: "Bountiful Utah, United States",
        dedicated: "1995, January, 14",
        area: 9662,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
      },
      {
        templeName: "Logan Utah",
        location: "Logan Utah, United States",
        dedicated: "1884, May, 19",
        area: 11113,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
      },
    
];
  
const templeGrid = document.querySelector(".temple-grid");

function displayTemples(filter) {
  templeGrid.innerHTML = "";

  let filteredTemples = temples;
  if (filter === "old") {
    filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
  } else if (filter === "new") {
    filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
  } else if (filter === "large") {
    filteredTemples = temples.filter(t => t.area > 90000);
  } else if (filter === "small") {
    filteredTemples = temples.filter(t => t.area < 10000);
  }

  filteredTemples.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq. ft.
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    templeGrid.appendChild(figure);
  });
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    displayTemples(event.target.dataset.filter);
  });
});

// Initial load
displayTemples("home");

// Footer updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
