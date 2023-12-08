// Checkout
document.getElementById('footer').innerHTML = new Date().getFullYear();

let checkoutData = JSON.parse(localStorage.getItem('cart')) || [];
let checkoutWrapper = document.querySelector('[checkout-data]');

function displayCheckoutData() {
  checkoutWrapper.innerHTML = '';
  let tableData = Object.groupBy(checkoutData, item => item.id);
  for (let key in tableData) {
    checkoutWrapper.innerHTML += `
            <tr>
                <td>${tableData[key][0].id}</td>
                <td>${tableData[key][0].name}</td>
                <td>${tableData[key].length}</td>
                <td>R${tableData[key][0].price}</td>
                <td>R${eval(
                  `${tableData[key][0].price} * ${tableData[key].length}`
                )}</td>
            </tr>
        `;
  }
}

displayCheckoutData();
