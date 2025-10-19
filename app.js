const body = document.getElementById("body");
const closeBtn = document.getElementById("close-btn");
const cartCard = document.getElementById("cart-card");
const cartIcon = document.getElementById("cart-icon");
const doneBtn = document.getElementById("done-btn");
const checkoutCard = document.getElementById("checkout-card");
const userCloseBtn = document.getElementById("user-close-btn");

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
userCloseBtn.addEventListener("click", () => {
  userCard.classList.add("hidden");
});
//  IO

const section = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-x-0");
    }
  }),
    {
      threshold: 0.4,
    };
});

section.forEach((section) => observer.observe(section));

// IO FOR TEXT
const text = document.querySelectorAll(".text");
const observer1 = new IntersectionObserver((entries, observer1) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  }),
    {
      threshold: 0.4,
    };
});
text.forEach((text) => observer1.observe(text));

const mobileMenuCloseBtn = document.getElementById("mobile-menu-close")
const mobileMenu = document.getElementById("mobile-menu")
const hamBtn = document.getElementById("ham-btn")


mobileMenuCloseBtn.addEventListener("click", ()=>{
  mobileMenu.classList.add("-translate-x-full")
})
hamBtn.addEventListener("click", ()=>{
  mobileMenu.classList.remove("-translate-x-full")
})