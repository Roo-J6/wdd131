const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // Populate the product dropdown
  const productSelect = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Populate the star rating options (1 to 5 stars)
  const ratingContainer = document.getElementById('rating');
  for (let i = 1; i <= 5; i++) {
    const ratingOption = document.createElement('div');
    ratingOption.classList.add('rating-option');
  
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = `rating-${i}`;
    input.name = 'rating';
    input.value = i;
    input.required = true;
  
    const label = document.createElement('label');
    label.setAttribute('for', `rating-${i}`);
    label.classList.add('stars');
    label.innerHTML = '★'.repeat(i); // Dynamically add stars based on the rating level
  
    ratingOption.appendChild(input);
    ratingOption.appendChild(label);
    ratingContainer.appendChild(ratingOption);
  }
  
  // Populate useful features checkboxes
  const featuresContainer = document.getElementById('features');
  const features = ['Fast', 'Reliable', 'Affordable', 'Durable'];
  features.forEach(feature => {
    const label = document.createElement('label');
    label.textContent = feature;
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'features';
    input.value = feature;
    label.appendChild(input);
    featuresContainer.appendChild(label);
  });
  