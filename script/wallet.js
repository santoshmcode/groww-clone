let walletBalence = 0
if (localStorage.getItem("walletBalence") == null) {
    localStorage.setItem("walletBalence",0)
} else {
    walletBalence = JSON.parse(localStorage.getItem("walletBalence"))
}
let currentWallet = document.getElementById("wallet-total-amount");
let closingBalance = document.getElementById("closing-balance");
let ongoingBalance = document.getElementById("ongoing-balance");
let balance = document.getElementById("balance");
let walletBalanceInput = document.getElementById("amount");

currentWallet.innerHTML = walletBalence;
closingBalance.innerHTML = walletBalence;
balance.innerHTML = walletBalence;
ongoingBalance.innerHTML = walletBalence;
function updateWalletBalence() {
    localStorage.setItem(
        "walletBalence",
        JSON.stringify(walletBalence/1 + walletBalanceInput.value/1)
    );
    currentWallet.innerHTML = JSON.parse(localStorage.getItem("walletBalence"));
    closingBalance.innerHTML = JSON.parse(localStorage.getItem("walletBalence"));
    balance.innerHTML = JSON.parse(localStorage.getItem("walletBalence"));
    ongoingBalance.innerHTML = JSON.parse(
        localStorage.getItem("walletBalence")
    );;
}

function showLandingPage() {
    window.location.href = "/index.html";
}

function openProfile() {
    window.location.href = "/pages/profile.html";
};