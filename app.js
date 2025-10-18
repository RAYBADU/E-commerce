const body = document.getElementById("body");
const closeBtn = document.getElementById("close-btn");
const cartCard = document.getElementById("cart-card");
const cartIcon = document.getElementById("cart-icon");
const doneBtn = document.getElementById("done-btn");
const checkoutCard = document.getElementById("checkout-card");

doneBtn.addEventListener("click", () => {
  checkoutCard.classList.add("hidden");
});

cartIcon.addEventListener("click", () => {
  cartCard.classList.remove("hidden");
  body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  cartCard.classList.toggle("hidden");
  body.style.overflow = "auto";
});

// card reaction
const value1 = document.getElementById("value1");
const minus1 = document.getElementById("minus1");
const add1 = document.getElementById("add1");
const price1 = document.getElementById("price1");
const dustBin1 = document.getElementById("dustbin1");
const item1 = document.getElementById("item1");

// first card
dustBin1.addEventListener("click", () => {
  item1.classList.add("hidden");
});
let count1 = 1;
add1.addEventListener("click", () => {
  let price = 145;
  count1++;
  value1.textContent = count1;
  price1.textContent = `$${count1 * price}`;
});
minus1.addEventListener("click", () => {
  let price = `${145}`;

  count1--;
  value1.textContent = count1;
  price1.textContent = `$${count1 * price}`;
});

// second card
const value2 = document.getElementById("value2");
const minus2 = document.getElementById("minus2");
const add2 = document.getElementById("add2");
const price2 = document.getElementById("price2");
const dustBin2 = document.getElementById("dustbin2");
const item2 = document.getElementById("item2");

dustBin2.addEventListener("click", () => {
  item2.classList.add("hidden");
});
let count2 = 1;
add2.addEventListener("click", () => {
  let price = 180;
  count2++;
  value2.textContent = count2;
  price2.textContent = `$${count2 * price}`;
});
minus2.addEventListener("click", () => {
  let price = 180;

  count2--;
  value2.textContent = count2;
  price2.textContent = `$${count2 * price}`;
});

// third card
const value3 = document.getElementById("value3");
const minus3 = document.getElementById("minus3");
const add3 = document.getElementById("add3");
const price3 = document.getElementById("price3");
const dustBin3 = document.getElementById("dustbin3");
const item3 = document.getElementById("item3");

dustBin3.addEventListener("click", () => {
  item3.classList.add("hidden");
});
let count3 = 1;
add3.addEventListener("click", () => {
  let price = 250;
  count3++;
  value3.textContent = count3;
  price3.textContent = `$${count3 * price}`;
});
minus3.addEventListener("click", () => {
  let price = 250;

  count3--;
  value3.textContent = count3;
  price3.textContent = `$${count3 * price}`;
});

// Checkout card and button
const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {
  cartCard.classList.add("hidden");
  checkoutCard.classList.remove("hidden");
  body.style.overflow = "auto";

  // after i close the card something should pop up
});

// logout btn and card
const userCard = document.getElementById("user-card");
const logOut = document.getElementById("log-out");
const userIcon = document.getElementById("user-icon");

userIcon.addEventListener("click", () => {
  userCard.classList.remove("hidden");
});
logOut.addEventListener("click", () => {
  userCard.classList.add("hidden");
});
