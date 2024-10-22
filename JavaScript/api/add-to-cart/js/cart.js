let productQuantity = 1;

const productQuantityValue = document.querySelector('#countValue');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');

// To increment the value of productQuantity
incrementBtn.addEventListener('click', () => {
    productQuantity++;
    productQuantityValue.innerHTML = productQuantity;
});

// To decrement the value of productQuantity
decrementBtn.addEventListener('click', () => {
    if (productQuantity > 1) {
        productQuantity--;
        productQuantityValue.innerHTML = productQuantity;
    }
});

const addToCartButton = document.getElementById('addToCart');
const cartList = document.querySelector('.offcanvas-body');  //off-canvas body

let arr = JSON.parse(localStorage.getItem("cart")) || [];

addToCartButton.addEventListener('click', () => {


    const selectedRadioButton = document.querySelector('input[name="size"]:checked');  // selecting the checked size
    let productSize = selectedRadioButton.value;

    // calculating the total bill
    let productPrice = document.querySelector(".productPrice").innerHTML;
    let totalBill = productQuantity * productPrice;
    arr.map((val, index) => {
        const newItem = document.createElement('p');
        newItem.innerHTML =
            `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="images/top1.avif" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">T-shirt</h5>
                <p class="card-text">Color : Pink </p>
                <div id="size">${productSize}</div>
                <div class="countDown d-flex mb-2">
                    <button id="increment" class="btn btn-dark rounded-circle">+</button>
                    <div id="countValue" class="d-flex align-items-center px-3">${productQuantity}</div>
                    <button id="decrement" class="btn btn-dark rounded-circle">-</button>
                </div>

                <button onclick="deleteData(${index})"><img src="images/trash.png"/></button>

                <p class="card-text"><small class="text-body-secondary"><b>Rs. 599</b>
                </small></p>
            </div>
        </div>
        </div>
    </div>
    <div class="d-flex align-items-end">Total Bill : ${totalBill}</div>`;

        cartList.appendChild(newItem);
    });

    let cartCount = document.querySelector("#cartCount");
    cartCount.innerHTML = `${productQuantity}`;

    let productTitle = document.querySelector(".card-title").innerHTML;
    let productColor = document.querySelector(".productColor").innerHTML;

    let data = {
        productTitle,
        productColor,
        productSize, //size
        productQuantity,
        productPrice
    }

    arr.push(data);
    localStorage.setItem("cart", JSON.stringify(arr));
    console.log(data);
});

function deleteData(index) {
    arr.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(arr));
    location.reload();
}












