let qty = 1;

function plus(){
qty++;
document.getElementById("quantity").innerText = qty;
document.getElementById("cart").innerText = qty;
}

function minus(){
if(qty > 1){
qty--;
document.getElementById("quantity").innerText = qty;
document.getElementById("cart").innerText = qty;
}
}

document.getElementById("orderForm")
.addEventListener("submit", function(e){

e.preventDefault();

const phone =
document.getElementById("phone").value;

const province =
document.getElementById("province").value;

const address =
document.getElementById("address").value;

const product =
document.getElementById("product").innerText;

const price =
document.getElementById("price").innerText;

const message =
`📦 طلب جديد

👤 الاسم: ${name}

🛍️ المنتج: ${product}

💰 الثمن: ${price} دينار

🔢 الكمية: ${qty}

📞 رقم الزبون: ${phone}

🏙️ المحافظة: ${province}

📍 العنوان:
${address}`;

window.open(
"https://wa.me/212784686562?text="
+ encodeURIComponent(message),
"_blank"
);

});
<input
  type="text"
  id="name"
  placeholder="الاسم الكامل"
  required
>
