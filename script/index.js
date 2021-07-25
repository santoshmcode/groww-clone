let wraperThreeContent = [
    {
        mainText: "Zero",
        subText: "account charges",
        pText: "You don’t have to pay a single rupee for opening a stocks account or account maintenance.",
        img: "https://assets-netstorage.groww.in/website-assets/prod/1.7.6/build/client/images/stocks.74948e96.png",
    },
    {
        mainText: "0%",
        subText: "commission",
        pText: "Select from 5000+ direct mutual funds and get higher return than regular funds.",
        img: "https://assets-netstorage.groww.in/website-assets/prod/1.7.6/build/client/images/mf.6c2cde91.png",
    },
    {
        mainText: "99.9%",
        subText: "purity",
        pText: "Invest in digital gold as low as ₹10 without any extra commission or making charges.",
        img: "https://assets-netstorage.groww.in/website-assets/prod/1.7.6/build/client/images/gold.4b4ed1a9.png",
    },
    {
        mainText: "Free",
        subText: "account opening",
        pText: "Invest in Apple, Google, Netflix and many more US companies that you love without any brokerage fee.",
        img: "https://assets-netstorage.groww.in/website-assets/prod/1.7.6/build/client/images/us.fc57ceac.png",
    },
    {
        mainText: "6.7%",
        subText: "interest rate",
        pText: "Open fixed deposits in any bank with higher interest rates without opening a bank account.",
        img: "	https://assets-netstorage.groww.in/website-assets/prod/1.7.6/build/client/images/fd.16c65ccc.png",
    },
];

// Getting buttons Form section-one wraper-two
let sOneWtwoSubBoxOne = document.getElementById("sub-box1");
let sOneWtwoSubBoxTwo = document.getElementById("sub-box2");
let sOneWtwoSubBoxThree = document.getElementById("sub-box3");
let sOneWtwoSubBoxFour = document.getElementById("sub-box4");
let sOneWtwoSubBoxFive = document.getElementById("sub-box5");

// Getting elements to change form section-one wraper-three
let sOneWThreeMainText = document.getElementById("wr-3sub-main-text");
let sOneWThreeSubText = document.getElementById("wr-3sub-sub-text");
let sOneWThreePText = document.getElementById("wr-3sub-p");
let sOneWThreeImg = document.getElementById("wr3-img");

sOneWtwoSubBoxOne.addEventListener("click", function () {
    sOneWThreeImg.src = wraperThreeContent[0].img;
    sOneWThreeMainText.innerHTML = wraperThreeContent[0].mainText;
    sOneWThreeSubText.innerHTML = wraperThreeContent[0].subText;
    sOneWThreePText.innerHTML = wraperThreeContent[0].pText;
});
sOneWtwoSubBoxTwo.addEventListener("click", function () {
    sOneWThreeImg.src = wraperThreeContent[1].img;
    sOneWThreeMainText.innerHTML = wraperThreeContent[1].mainText;
    sOneWThreeSubText.innerHTML = wraperThreeContent[1].subText;
    sOneWThreePText.innerHTML = wraperThreeContent[1].pText;
});
sOneWtwoSubBoxThree.addEventListener("click", function () {
    sOneWThreeImg.src = wraperThreeContent[2].img;
    sOneWThreeMainText.innerHTML = wraperThreeContent[2].mainText;
    sOneWThreeSubText.innerHTML = wraperThreeContent[2].subText;
    sOneWThreePText.innerHTML = wraperThreeContent[2].pText;
});
sOneWtwoSubBoxFour.addEventListener("click", function () {
    sOneWThreeImg.src = wraperThreeContent[3].img;
    sOneWThreeMainText.innerHTML = wraperThreeContent[3].mainText;
    sOneWThreeSubText.innerHTML = wraperThreeContent[3].subText;
    sOneWThreePText.innerHTML = wraperThreeContent[3].pText;
});
sOneWtwoSubBoxFive.addEventListener("click", function () {
    sOneWThreeImg.src = wraperThreeContent[4].img;
    sOneWThreeMainText.innerHTML = wraperThreeContent[4].mainText;
    sOneWThreeSubText.innerHTML = wraperThreeContent[4].subText;
    sOneWThreePText.innerHTML = wraperThreeContent[4].pText;
});

// For Singup Page left text fade animation
function fadeInOut() {
    let fadeInOutArray = [
        "Stocks",
        "Direct Mutual Funds",
        "ETFs",
        "Gold",
        "Fixed Deposits",
    ];
    let fadeInOut = document.getElementById("signup-fade-in-out");
    let fadeCount = 1;

    setInterval(() => {
        fadeInOut.innerHTML = fadeInOutArray[fadeCount];
        if (fadeCount == 4) {
            fadeCount = -1;
        }
        fadeCount++;
    }, 2500);
}
fadeInOut();

// Poping Up Out function of login PopUp page
let btn = document.getElementById("button-nav");
let loginPopUpPage = document.getElementById("main-signup-popup");
let closeLoginFormBtn = document.getElementById("signup-form-close");

function loginPopUp() {
    loginPopUpPage.removeAttribute("class", "main-signup-popup");
}
function loginPopUpClose() {
    loginPopUpPage.setAttribute("class", "main-signup-popup");
}

// Login functionallity
let userArray = [
    {
        mailId: "santoshmane619@gmail.com",
        password: "1234",
    },
];
let email = document.getElementById("signup-form-title-input-box");
let pass = document.getElementById("signup-form-title-input-pass");
let signInError = document.getElementById("Login-error-msg");
let otpPopUp = document.getElementById("main-signup-otp");
function userLogin() {
    let flag = true;
    userArray.forEach(function (el) {
        if (el.mailId == email.value && el.password == pass.value) {
            showDashboard();
            flag = false;
        }
        if (el.mailId == email.value && el.password != pass.value) {
            signInError.innerHTML = "Wrong password!!";
            flag = false;
        }
    });
    if (flag) {
        // loginPopUpClose();
        otpPopUp.removeAttribute("class", "main-signup-otp");
    }
}
function showDashboard() {
    window.location.href = "/pages/dashboard.html";
}

function showLandingPage() {
    window.location.href = "/index.html"
}