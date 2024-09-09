// Load products from localStorage or initialize an empty array
let Products = JSON.parse(localStorage.getItem('products')) || [

  {
    image: 'https://i.ibb.co/nzZFN9x/download.jpg',
    id: 1,
    name: 'Ichigo Daifuku',
    description:
      'It is filled with a sweet red bean paste and a strawberry.',
    price: 60,
  },
  {
    image: 'https://i.ibb.co/3RsQ89s/download-1.jpg',
    id: 2,
    name: 'Sakura Mochi ',
    description:
      'This classic mochi is wrapped in a pickled sakura leaf.',
    price: 60,
  },
  {
    image: 'https://i.ibb.co/JRJfCjB/download-2.jpg',
    id: 3,
    name: 'Bota Mochi',
    description:
      'This is a mochi where the sweet red bean filling surrounds the chewy mochi goodness.',
    price: 65,
  },
  {
    image: 'https://i.ibb.co/h8FbCJh/download-3.jpg',
    id: 4,
    name: 'Yatsuhashi Mochi',
    description:
      'This kind of mochi very unique cause of it shape and because it is filled with cinnamon. ',
    price: 70,
  },
  {
    image: 'https://i.ibb.co/rkVN75B/download-4.jpg',
    id: 5,
    name: 'Ice-Cream Mochi',
    description:
      "As if mochi, couldn't get any better, this mochi is filled with ice cream and you can pick any flavour you fancy.",
    price: 70,
  },
  {
    image: 'https://i.ibb.co/kXLVf2f/download-5.jpg',
    id: 6,
    name: 'Kusa Mochi',
    description:
      'This mochi is filled with the sweet red bean paste and give of a hint of green tea.',
    price: 75,
  },
];

localStorage.setItem('products', JSON.stringify(Products));

// Function to display products
function displayProducts() {
  console.log("Displaying products");
  let productWrapper = document.querySelector('[data-products]');
  productWrapper.innerHTML = '';

  Products.forEach((product) => {
    productWrapper.innerHTML += `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">R${product.price}</p>
<button class="btn btn-outline-danger" onclick='addToCart(${JSON.stringify(product)})'>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
  </svg>
</button>
        </div>
      </div>
    `;
  });
}

// Function to handle search
function handleSearch() {
  let searchProduct = document.getElementById('searchproduct').value.toLowerCase();
  let searchItems = Products.filter((prod) => prod.name.toLowerCase().includes(searchProduct));

  if (searchItems.length > 0) {
    displaySearchResults(searchItems);
  } else {
    displayProducts();
  }
}

// Function to display search results
function displaySearchResults(results) {
  let productWrapper = document.querySelector('[data-products]');
  productWrapper.innerHTML = '';

  results.forEach((item) => {
    productWrapper.innerHTML += `
      <div class="card">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">${item.price}</p>
          <button class="btn btn-outline-danger" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
        </div>
      </div>
    `;
  });
}

// Function to handle sorting
let highest = false;
function handleSort() {
  highest = !highest;
  Products.sort((a, b) => (highest ? a.price - b.price : b.price - a.price));
  displayProducts();
}

// Function to add product to cart
function addToCart(product) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Initial display of products on page load
document.addEventListener('DOMContentLoaded', function () {
  displayProducts();
  document.getElementById('searchproduct').addEventListener('keyup', handleSearch);
  document.getElementById('sortBtn').addEventListener('click', handleSort);
});