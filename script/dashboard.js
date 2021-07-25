let sectionStocks = document.getElementById("dashboard-main-stock");
let sectionMF = document.getElementById("dashboard-main-mf");
let sectionFD = document.getElementById("dashboard-main-fd");
let sectionGold = document.getElementById("dashboard-main-gold");
let sectionUSStock = document.getElementById("dashboard-main-usstock");

function showStocks() {
    sectionStocks.removeAttribute("class", "dashboard-main-section");
    sectionMF.setAttribute("class", "dashboard-main-section");
    sectionFD.setAttribute("class", "dashboard-main-section");
    sectionGold.setAttribute("class", "dashboard-main-section");
    sectionUSStock.setAttribute("class", "dashboard-main-section");
}

function showMF() {
    sectionStocks.setAttribute("class", "dashboard-main-section");
    sectionMF.removeAttribute("class", "dashboard-main-section");
    sectionFD.setAttribute("class", "dashboard-main-section");
    sectionGold.setAttribute("class", "dashboard-main-section");
    sectionUSStock.setAttribute("class", "dashboard-main-section");
}

function showFD() {
    sectionStocks.setAttribute("class", "dashboard-main-section");
    sectionMF.setAttribute("class", "dashboard-main-section");
    sectionFD.removeAttribute("class", "dashboard-main-section");
    sectionGold.setAttribute("class", "dashboard-main-section");
    sectionUSStock.setAttribute("class", "dashboard-main-section");
}

function showGold() {
    sectionStocks.setAttribute("class", "dashboard-main-section");
    sectionMF.setAttribute("class", "dashboard-main-section");
    sectionFD.setAttribute("class", "dashboard-main-section");
    sectionGold.removeAttribute("class", "dashboard-main-section");
    sectionUSStock.setAttribute("class", "dashboard-main-section");
}

function showUSStock() {
    sectionStocks.setAttribute("class", "dashboard-main-section");
    sectionMF.setAttribute("class", "dashboard-main-section");
    sectionFD.setAttribute("class", "dashboard-main-section");
    sectionGold.setAttribute("class", "dashboard-main-section");
    sectionUSStock.removeAttribute("class", "dashboard-main-section");
}

function buyStock() {
    window.location.href = "/pages/buy-sell-stocks.html";
}

function showWalletPage() {
    window.location.href = "/pages/wallet.html"
}


function openProfile() {
    window.location.href = "/pages/profile.html";
};

function showLandingPage() {
    window.location.href = "/index.html";
}