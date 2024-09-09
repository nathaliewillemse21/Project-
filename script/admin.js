let products = JSON.parse(localStorage.getItem('products')) || [];

function displayProducts(data) {
  const tableContainer = document.getElementById('admin-products');
  tableContainer.innerHTML = '';

  try {
    if (data && data.length > 0) {
      data.forEach((item, index) => {
        tableContainer.innerHTML += `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>R${item.price}</td>
            <td>
              <div class="d-flex gap-2">
              <button type="button" class="btn btn-outline-danger"
              onclick='editProduct(${JSON.stringify(item)}, ${index})'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
              </svg></button>
              <button type="button" class="btn btn-outline-danger" onclick='deleteProduct(${item.id})'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
              </svg></button>
              </div>
            </td>
          </tr>
        `;
      });
    } else {
      tableContainer.innerHTML = '<tr><td colspan="4">No products found</td></tr>';
    }
  } catch (e) {
    tableContainer.innerHTML = '<tr><td colspan="4">Please try again</td></tr>';
  }
}

function showMessage(message, messageType) {
  const messageContainer = document.getElementById('message');
  messageContainer.innerHTML = `<div class="alert alert-${messageType}" role="alert">${message}</div>`;
}

function editProduct(product, index) {
  try {
    if (product) {
      const updatedName = prompt(`Enter updated name for product ${product.name}:`, product.name);
      const updatedDescription = prompt(`Enter updated description for product ${product.description}:`, product.description);
      const updatedPrice = prompt(`Enter updated price for product ${product.price}:`, product.price);
      const updatedImage = prompt(`Enter the product image URL ${product.image}:`, product.image);

      products[index] = {
        id: product.id,
        name: updatedName,
        description: updatedDescription,
        price: updatedPrice,
        image: updatedImage
      };

      localStorage.setItem('products', JSON.stringify(products));
      displayProducts(products);
    } else {
      console.log('Product was not found');
    }
  } catch (e) {
    console.log(e.message);
  }
}

function deleteProduct(productId) {
  const index = products.findIndex((item) => item.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts(products);
  }
}

function addProduct() {
  const name = prompt('Enter product name:');
  const description = prompt('Enter product description:');
  const price = parseFloat(prompt('Enter product price:'));
  const image = prompt('Enter product image URL:');

  if (name && description && !isNaN(price) && image) {
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name: name,
      description: description,
      price: price,
      image: image
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts(products);
  }
}

document.getElementById('add-product').addEventListener('click', addProduct);

// Initial display of products
displayProducts(products);
