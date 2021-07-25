let walletBalence;
if (localStorage.getItem("walletBalence") == null) {
    walletBalence = 0;
} else {
    walletBalence = JSON.parse(localStorage.getItem("walletBalence")) / 1;
}

let stockPrice = document.getElementById("buy-card-price-value");
let stockNumber = document.getElementById("buy-card-stock-numbers-value");
let companyOneStackPrice = document.getElementById("stock-company-price-value");

let walletBalenceError = document.getElementById("wallet-blance-error");
let walletBalenceSuccess = document.getElementById("wallet-blance-succesful");

function updateStockPriceValue(e) {
    if (e.key == "Enter") {
        stockPrice.innerHTML =
            (companyOneStackPrice.innerHTML / 1) * (stockNumber.value / 1);
    }
}

function buyStock() {
    if (stockPrice.innerHTML / 1 > walletBalence / 1) {
        walletBalenceError.innerHTML = "In sufficient wallet balance";
    } else if (stockPrice.innerHTML / 1 <= walletBalence / 1) {
        walletBalence = walletBalence / 1 - stockPrice.innerHTML / 1;
        localStorage.setItem("walletBalence", walletBalence);
        let profile = {
            name: "HDFC Bank",
            totalStock: stockNumber.value,
        };
        localStorage.setItem("Profile", JSON.stringify(profile));
        walletBalenceSuccess.innerHTML = "Successfully bought the Stocks";
    }
}

function showWalletPage() {
    window.location.href = "/pages/wallet.html";
}

function openProfile() {
    window.location.href = "/pages/profile.html";
}
