var ArrowRight = window.document.getElementById("arrow-right")
var ArrowLeft = window.document.getElementById("arrow-left")
var Card1 = window.document.getElementById("card1")
var Card2 = window.document.getElementById("card2")
var Card3 = window.document.getElementById("card3")

function rollright () {
    Card1.style ="display:none"
    Card3.style ="display:flex"
    ArrowLeft.style ="display:flex ;margin-top:55px"
    ArrowRight.style ="display:none ;margin-top:55px"
}

function rollLeft () {
    Card1.style ="display:flex"
    Card3.style ="display:none"
    ArrowLeft.style ="display:none ;margin-top:55px"
    ArrowRight.style ="display:flex ;margin-top:55px"
}