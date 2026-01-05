/* ===== STORAGE KEYS ===== */
const CART_KEY = "livera_cart";
const USER_KEY = "livera_user";

/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem(CART_KEY)) || {};

/* ===== CART ===== */
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  showToast("Produk ditambahkan");
}

function buyNow(id) {
  addToCart(id);
  openDrawer("cart");
}

function changeQty(id, delta) {
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function removeItem(id) {
  delete cart[id];
  saveCart();
  renderCart();
}

function clearCart() {
  cart = {};
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function cartTotal() {
  let total = 0;
  Object.keys(cart).forEach((id) => {
    const p = products.find((x) => x.id == id);
    if (p) total += p.price * cart[id];
  });
  return total;
}

/* ===== CART UI ===== */
function renderCart() {
  const body = document.querySelector("#drawerCart .drawerBody");
  const totalEl = document.querySelector(".totalRow div:last-child");
  if (!body || !totalEl) return;

  body.innerHTML = "";

  if (Object.keys(cart).length === 0) {
    body.innerHTML = `<p>Keranjang kosong</p>`;
    totalEl.textContent = rupiah(0);
    return;
  }

  Object.keys(cart).forEach((id) => {
    const p = products.find((x) => x.id == id);
    const qty = cart[id];

    body.innerHTML += `
      <div class="cartItem">
        <img src="${p.img}">
        <div>
          <b>${p.name}</b>
          <p>${rupiah(p.price)}</p>
          <button onclick="changeQty(${id},-1)">-</button>
          ${qty}
          <button onclick="changeQty(${id},1)">+</button>
        </div>
        <button onclick="removeItem(${id})">Hapus</button>
      </div>
    `;
  });

  totalEl.textContent = rupiah(cartTotal());
}

/* ===== USER INFO ===== */
function renderMe() {
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  if (!user) return;

  document.getElementById("meName").textContent = user.nama;
  document.getElementById("meEmail").textContent = user.email;
  document.getElementById("meMember").textContent = user.member;
}

/* ===== LOGOUT ===== */
function logout() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(CART_KEY);
  window.location.href = "index.html";
}

/* ===== BADGE ===== */
function updateCartBadge() {
  const btn = document.getElementById("btnCart");
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  let badge = btn.querySelector(".badge");

  if (count > 0) {
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "badge";
      btn.appendChild(badge);
    }
    badge.textContent = count;
  } else {
    badge?.remove();
  }
}

/* ===== DRAWER ===== */
function openDrawer(id) {
  document.getElementById("overlay").classList.add("show");
  document.getElementById("drawer" + capitalize(id)).classList.add("active");

  if (id === "cart") renderCart();
  if (id === "me") renderMe();
}

function closeAll() {
  document.getElementById("overlay").classList.remove("show");
  document
    .querySelectorAll(".drawer")
    .forEach((d) => d.classList.remove("active"));
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ===== TOAST ===== */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(() => (t.style.display = "none"), 1500);
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderMe();
});
/* ===============================
   CHECKOUT (FINAL & WAJIB ADA)
   =============================== */
function checkout() {
  const cart = JSON.parse(localStorage.getItem("livera_cart")) || {};

  if (Object.keys(cart).length === 0) {
    alert("Keranjang masih kosong");
    return;
  }

  // simpan status order (simulasi)
  const order = {
    items: cart,
    status: "checkout",
    time: new Date().toISOString(),
  };

  localStorage.setItem("livera_order", JSON.stringify(order));

  // PINDAH KE HALAMAN PAYMENT
  window.location.href = "payment.html";
}
