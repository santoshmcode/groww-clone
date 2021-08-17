let sectionStocks = document.getElementById("dashboard-main-stock");
let sectionMF = document.getElementById("dashboard-main-mf");
let sectionFD = document.getElementById("dashboard-main-fd");
let sectionGold = document.getElementById("dashboard-main-gold");
let sectionUSStock = document.getElementById("dashboard-main-usstock");

let subnavSticks = document.getElementById("subnav-stocks");
subnavSticks.addEventListener("click", showStocks());

function showStocks() {
    console.log("Stocks");
    sectionStocks.removeAttribute("class", "dashboard-main-section");
    sectionMF.setAttribute("class", "dashboard-main-section");
    sectionFD.setAttribute("class", "dashboard-main-section");
    sectionGold.setAttribute("class", "dashboard-main-section");
    sectionUSStock.setAttribute("class", "dashboard-main-section");
}

function showMF() {
    console.log("MF");
    sectionStocks.setAttribute("class", "dashboard-main-section");
    sectionMF.removeAttribute("class", "dashboard-main-section");
    sectionFD.setAttribute("class", "dashboard-main-section");
    sectionGold.setAttribute("class", "dashboard-main-section");
    sectionUSStock.setAttribute("class", "dashboard-main-section");
}

function showFD() {
    console.log("fd");
    sectionStocks.setAttribute("class", "dashboard-main-section");
    sectionMF.setAttribute("class", "dashboard-main-section");
    sectionFD.removeAttribute("class", "dashboard-main-section");
    sectionGold.setAttribute("class", "dashboard-main-section");
    sectionUSStock.setAttribute("class", "dashboard-main-section");
}

function showGold() {
    console.log("Gold");
    sectionStocks.setAttribute("class", "dashboard-main-section");
    sectionMF.setAttribute("class", "dashboard-main-section");
    sectionFD.setAttribute("class", "dashboard-main-section");
    sectionGold.removeAttribute("class", "dashboard-main-section");
    sectionUSStock.setAttribute("class", "dashboard-main-section");
}

function showUSStock() {
    console.log("UsStocks");
    sectionStocks.setAttribute("class", "dashboard-main-section");
    sectionMF.setAttribute("class", "dashboard-main-section");
    sectionFD.setAttribute("class", "dashboard-main-section");
    sectionGold.setAttribute("class", "dashboard-main-section");
    sectionUSStock.removeAttribute("class", "dashboard-main-section");
}

function buyStock() {
    window.location.href = "./../buy-sell-stocks.html";
}

function showWalletPage() {
    window.location.href = "./../wallet.html";
}

function openProfile() {
    window.location.href = "./../profile.html";
}

function showLandingPage() {
    window.location.href = "./../index.html";
}
