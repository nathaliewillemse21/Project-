document.getElementById('footer').innerHTML = new Date().getFullYear();

let checkoutData = JSON.parse(localStorage.getItem('cart')) || [];
let checkoutWrapper = document.querySelector('[checkout-data]');

// Custom groupBy function to group products by id
function groupBy(arr, keyFunc) {
  return arr.reduce((acc, item) => {
    let key = keyFunc(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}

let tableData = groupBy(checkoutData, item => item.id);

function displayCheckoutData() {
  checkoutWrapper.innerHTML = '';

  for (let key in tableData) {
    checkoutWrapper.innerHTML += `
      <tr>
        <td>${tableData[key][0].name}</td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="decreaseQuantity('${key}')">-</button>
          <span id="quantity-${key}">${tableData[key].length}</span>
          <button class="btn btn-sm btn-secondary" onclick="increaseQuantity('${key}')">+</button>
        </td>
        <td>R${tableData[key][0].price}</td>
        <td id="total-price-${key}">R${tableData[key][0].price * tableData[key].length}</td>
      </tr>
    `;
  }

  // Add row for the total amount of the entire checkout
  checkoutWrapper.innerHTML += `
    <tr>
      <td colspan="3" class="text-end fw-bold">Total Amount:</td>
      <td id="checkout-total-amount">R${calculateTotalAmount()}</td>
    </tr>
  `;
}

displayCheckoutData();

function increaseQuantity(key) {
  // Add the same product again
  tableData[key].push({ ...tableData[key][0] });
  updateTable(key);
}

function decreaseQuantity(key) {
  if (tableData[key].length > 1) {
    // Remove one product from the array
    tableData[key].pop();
    updateTable(key);
  }
}

function updateTable(key) {
  // Update the quantity displayed
  document.getElementById(`quantity-${key}`).innerText = tableData[key].length;

  // Update the total price displayed for the item
  const totalPrice = tableData[key][0].price * tableData[key].length;
  document.getElementById(`total-price-${key}`).innerText = `R${totalPrice}`;

  // Update the total amount for the entire checkout
  document.getElementById('checkout-total-amount').innerText = `R${calculateTotalAmount()}`;

  // Save updated data back to localStorage (optional)
  localStorage.setItem('cart', JSON.stringify(checkoutData));
}

// Function to calculate the total amount for all products in the checkout
function calculateTotalAmount() {
  let totalAmount = 0;
  for (let key in tableData) {
    totalAmount += tableData[key][0].price * tableData[key].length;
  }
  return totalAmount;
}

function clearCart() {
  localStorage.removeItem('cart');
  checkoutData = []; // Clear the data
  checkoutWrapper.innerHTML = ''; // Clear the table display
  document.getElementById('total-amount').innerText = 'R0.00'; // Reset total amount
}