// Admin
const a = new Date();
let year = a.getFullYear();
document.getElementById('footer').innerHTML = year;


  // let Products = JSON.parse(localStorage.getItem('product'))
  // ? JSON.parse(localStorage.getItem('product'))
  // : localStorage.setItem(
  //     'product',
  //     JSON.stringify([
  //       {
  //         image: 'https://i.postimg.cc/W1mV8yrp/ichigo-daifuku.jpg',
  //         id: 0,
  //         name: 'Ichigo Daifuku',
  //         description:
  //           'It is filled with a sweet red bean paste and a strawberry.',
  //         price: 60,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/05HyKhGL/sakura-mochi.jpg',
  //         id: 1,
  //         name: 'Sakura Mochi ',
  //         description:
  //           'This classic mochi is wrapped in a pickled sakura leaf.',
  //         price: 60,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/m2pWqV9G/bota-mochi.jpg',
  //         id: 2,
  //         name: 'Bota Mochi',
  //         description:
  //           'This is a mochi where the sweet red bean filling surrounds the chewy mochi goodness.',
  //         price: 65,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/htYLCCqw/Yatsuhashi-mochi.jpg',
  //         id: 3,
  //         name: 'Yatsuhashi Mochi',
  //         description:
  //           'This kind of mochi very unique cause of it shape and because it is filled with cinnamon. ',
  //         price: 70,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/g09wX1pY/mochi-icecream.jpg',
  //         id: 4,
  //         name: 'Ice-Cream Mochi',
  //         description:
  //           "As if mochi, couldn't get any better, this mochi is filled with ice cream and you can pick any flavour you fancy.",
  //         price: 70,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/W4rk5T8F/Kusa-mochi.jpg',
  //         id: 5,
  //         name: 'Kusa Mochi',
  //         description:
  //           'This mochi is filled with the sweet red bean paste and give of a hint of green tea.',
  //         price: 75,
  //       },
  //     ])
  //   );

  //     // Sample product data
  // const products = [
  //           {
  //         image: 'https://i.postimg.cc/W1mV8yrp/ichigo-daifuku.jpg',
  //         id: 0,
  //         name: 'Ichigo Daifuku',
  //         description:
  //           'It is filled with a sweet red bean paste and a strawberry.',
  //         price: 60,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/05HyKhGL/sakura-mochi.jpg',
  //         id: 1,
  //         name: 'Sakura Mochi ',
  //         description:
  //           'This classic mochi is wrapped in a pickled sakura leaf.',
  //         price: 60,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/m2pWqV9G/bota-mochi.jpg',
  //         id: 2,
  //         name: 'Bota Mochi',
  //         description:
  //           'This is a mochi where the sweet red bean filling surrounds the chewy mochi goodness.',
  //         price: 65,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/htYLCCqw/Yatsuhashi-mochi.jpg',
  //         id: 3,
  //         name: 'Yatsuhashi Mochi',
  //         description:
  //           'This kind of mochi very unique cause of it shape and because it is filled with cinnamon. ',
  //         price: 70,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/g09wX1pY/mochi-icecream.jpg',
  //         id: 4,
  //         name: 'Ice-Cream Mochi',
  //         description:
  //           "As if mochi, couldn't get any better, this mochi is filled with ice cream and you can pick any flavour you fancy.",
  //         price: 70,
  //       },
  //       {
  //         image: 'https://i.postimg.cc/W4rk5T8F/Kusa-mochi.jpg',
  //         id: 5,
  //         name: 'Kusa Mochi',
  //         description:
  //           'This mochi is filled with the sweet red bean paste and give of a hint of green tea.',
  //         price: 75,
  //       },
// ];
  

const products = [
  {
    image: 'https://i.postimg.cc/W1mV8yrp/ichigo-daifuku.jpg',
    id: 0,
    name: 'Ichigo Daifuku',
    description: 'It is filled with a sweet red bean paste and a strawberry.',
    price: 60,
  },
  {
    image: 'https://i.postimg.cc/05HyKhGL/sakura-mochi.jpg',
    id: 1,
    name: 'Sakura Mochi ',
    description: 'This classic mochi is wrapped in a pickled sakura leaf.',
    price: 60,
  },
  {
    image: 'https://i.postimg.cc/m2pWqV9G/bota-mochi.jpg',
    id: 2,
    name: 'Bota Mochi',
    description:
      'This is a mochi where the sweet red bean filling surrounds the chewy mochi goodness.',
    price: 65,
  },
  {
    image: 'https://i.postimg.cc/htYLCCqw/Yatsuhashi-mochi.jpg',
    id: 3,
    name: 'Yatsuhashi Mochi',
    description:
      'This kind of mochi very unique cause of it shape and because it is filled with cinnamon. ',
    price: 70,
  },
  {
    image: 'https://i.postimg.cc/g09wX1pY/mochi-icecream.jpg',
    id: 4,
    name: 'Ice-Cream Mochi',
    description:
      "As if mochi, couldn't get any better, this mochi is filled with ice cream and you can pick any flavour you fancy.",
    price: 70,
  },
  {
    image: 'https://i.postimg.cc/W4rk5T8F/Kusa-mochi.jpg',
    id: 5,
    name: 'Kusa Mochi',
    description:
      'This mochi is filled with the sweet red bean paste and give of a hint of green tea.',
    price: 75,
  },
];


  // Function to display products in the table
  function displayProducts() {
    const productTable = document.getElementById('productTable');
    const tbody = productTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    products.forEach(product => {
      const row = tbody.insertRow();
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>
          <button onclick="editProduct(${product.id})">Edit</button>
          <button onclick="deleteProduct(${product.id})">Delete</button>
        </td>`;
    });
  }

  // Function to add a new product (you can customize this)
  function addProduct() {
    const newProduct = {
      id: products.length + 1,
      name: 'New Product',
      description: 'Description',
      price: 0,
    };
    products.push(newProduct);
    displayProducts();
  }

 // Function to edit a product (you can customize this)
function editProduct(productId) {
  // Find the product to edit
  const productToEdit = products.find(product => product.id === productId);

  // Check if the product is found
  if (productToEdit) {
    // Prompt the user for updated information (you can customize this)
    const updatedName = prompt(`Enter updated name for product ${productId}:`, productToEdit.name);
    const updatedDescription = prompt(`Enter updated description for product ${productId}:`, productToEdit.description);
    const updatedPrice = prompt(`Enter updated price for product ${productId}:`, productToEdit.price);

    // Update the product with the new information
    productToEdit.name = updatedName || productToEdit.name;
    productToEdit.description = updatedDescription || productToEdit.description;
    productToEdit.price = updatedPrice ? parseFloat(updatedPrice) : productToEdit.price;

    // Display the updated products
    displayProducts();
  } else {
    console.error(`Product with ID ${productId} not found.`);
  }
}

  // Function to delete a product (you can customize this)
  function deleteProduct(productId) {
    // Logic to delete the product based on the productId
    console.log(`Delete product with ID ${productId}`);
    // Remove the product from the array
    const index = products.findIndex(product => product.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
      displayProducts();
    }
  }

  // Initial display of products
  displayProducts();








 
  // Initial display of products
  // displayProducts();
// function displayProducts() {
//   let productWrapper = document.querySelector('[data-products]');
//   productWrapper.innerHTML = '';

//   if (Products) {
//     Products.forEach((product) => {
//       productWrapper.innerHTML += `
//                 <div class="card">
//                     <img src="${product.image}" class="card-img-top" alt="${product.id}">
//                     <div class="card-body">
//                         <h5 class="card-title">${product.name}</h5>
//                         <p class="card-text">${product.description}</p>
//                         <p class="card-text">${product.price}</p>
//                         <button class="btn btn-dark">      <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>Add to Cart
// </button>
//                     </div>
//                 </div>`;
//     });
//   } else {
//     productWrapper.innerHTML = 'No product';
//   }
// }

// displayProducts();
   