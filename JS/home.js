{
    let i = 0;
    let para = Array(2);
    para[0] = "Made In India | COD Available* | 100% Original | Free Returns | Free Shipping*";
    para[1] = "EXTRA DISCOUNT : 5% OFF ON YOUR FIRST ORDER. USE CODE (FLAT5) LIMITED OFFER FOR TODAY ONLY.";
    function changeContent() {
        document.getElementById("nav1P").innerHTML = para[i]
        if (i < para.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout("changeContent()", 2500);
    }
    changeContent();
}

document.getElementById("logo").addEventListener('click', function () {
    window.location.href = 'home.html';
});
// document.getElementById("caraousel").addEventListener('click', function () {
//     window.location.href = 'men.html';
// });
document.getElementById("footerLogo").addEventListener('click', function () {
    window.location.href = 'home.html';
});

document.getElementById("oneHeading2").addEventListener('click', function () {
    window.location.href = 'men.html';
});


document.getElementById('formalBtn').addEventListener('click', function () {
    window.location.href = 'men.html#formal';
});

document.getElementById('casualBtn').addEventListener('click', function () {
    window.location.href = 'men.html#casual';
});

document.getElementById('tshirtBtn').addEventListener('click', function () {
    window.location.href = 'men.html#tshirt';
});


document.getElementById('wformalBtn').addEventListener('click', function () {
    window.location.href = 'women.html#wformal';
});

document.getElementById('wkurtaBtn').addEventListener('click', function () {
    window.location.href = 'women.html#wkurta';
});

document.getElementById('wtshirtBtn').addEventListener('click', function () {
    window.location.href = 'women.html#wtshirt';
});


document.getElementById('sunglassesBtn').addEventListener('click', function () {
    window.location.href = 'accessories.html#sunglasses';
});

document.getElementById('flipflopsBtn').addEventListener('click', function () {
    window.location.href = 'accessories.html#flipflops';
});

document.getElementById('capsBtn').addEventListener('click', function () {
    window.location.href = 'accessories.html#caps';
});

function subscribe(){
    alert("Thank you for joining us.")
}


function submitForm(event) {
    event.preventDefault(); 
    document.getElementById('sign').innerText = 'Logout';
    // var myModal =document.getElementById('exampleModal');
    // myModal.hide();
    alert("Logged in Successfully....")
    var form = document.getElementById("exampleModal")
    document.getElementById('clse').click();
}
