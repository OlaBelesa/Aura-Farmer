let aura = Number(localStorage.getItem("aura")) || 0;
let perClick = Number(localStorage.getItem("perClick")) || 1;
let autoOn = false;

const auraSpan = document.getElementById("aura");
const perClickSpan = document.getElementById("perClick");

const clickBtn = document.getElementById("clickBtn");
const autoBtn = document.getElementById("autoBtn");

const u1 = document.getElementById("upgrade1");
const u2 = document.getElementById("upgrade2");
const u3 = document.getElementById("upgrade3");
const u4 = document.getElementById("upgrade4");
const u5 = document.getElementById("upgrade5");
const u6 = document.getElementById("upgrade6");

function save() {
  localStorage.setItem("aura", aura);
  localStorage.setItem("perClick", perClick);
}

function updateUI() {
  auraSpan.textContent = aura;
  perClickSpan.textContent = perClick;
  save();
}

updateUI();

// CLICK NORMAL
clickBtn.onclick = () => {
  aura += perClick;
  updateUI();
};

// UPGRADES (definidos valores fixos)
u1.onclick = () => { if(aura >= 100){ aura -= 100; perClick = 10; updateUI(); } };
u2.onclick = () => { if(aura >= 5000){ aura -= 5000; perClick = 100; updateUI(); } };
u3.onclick = () => { if(aura >= 50000){ aura -= 50000; perClick = 1000; updateUI(); } };
u4.onclick = () => { if(aura >= 150000){ aura -= 150000; perClick = 10000; updateUI(); } };
u5.onclick = () => { if(aura >= 500000){ aura -= 500000; perClick = 100000; updateUI(); } };
u6.onclick = () => { if(aura >= 10000000){ aura -= 10000000; perClick = 1000000; updateUI(); } };

// AUTO CLICK
autoBtn.onclick = () => {
  if (!autoOn && aura >= 10000) {
    aura -= 10000;
    autoOn = true;
    autoBtn.textContent = "Auto Clicker ATIVO";
    updateUI();
    setInterval(() => { aura += perClick; updateUI(); }, 1000);
  }
};






