const AdressBtn = document.querySelector('#adress-form')
AdressBtn.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "flex"
})
const CloseBtn = document.querySelector('#btn-close')
CloseBtn.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "none"
})
// -------slide----------
let index = 0
const nextbtn = document.querySelector('div.slide-container-btn i:nth-child(2)')
const privebtn = document.querySelector('div.slide-container-btn i:nth-child(1)')
const imgnumber = document.querySelectorAll('.slide-container-top img')

if (nextbtn) {
    nextbtn.addEventListener("click", function () {
        index = index + 1
        if (index > imgnumber.length-1) {
            index = 0
        }
        document.querySelector('.slide-container-top').style.right=index*100+'%'
        console.log(imgnumber.length)
    })
}
if(privebtn){
    privebtn.addEventListener("click",function(){
        index = index - 1
            if (index <0) {
                index = imgnumber.length-1
            }
        document.querySelector('.slide-container-top').style.right = index*100 +"%"
    })
}

function autoimg(){
    index = index + 1
    if (index > imgnumber.length-1) {
        index = 0
    }
    document.querySelector('.slide-container-top').style.right = index*100 +"%"
}
setInterval(autoimg,3000)

// -------slide two----------
let index2 = 0
const nextbtn2 = document.querySelector('div.slide-two-btn i:nth-child(2)')
const privebtn2 = document.querySelector('div.slide-two-btn i:nth-child(1)')
const imgnumber2 = document.querySelectorAll('.main-product-two-container-slider .main-product-two-slider')

if (nextbtn2) {
    nextbtn2.addEventListener("click", function () {
        index2 = index2 + 1
        if (index2 > imgnumber2.length-1) {
            index2 = 0
        }
        document.querySelector('.main-product-two-container-slider').style.right=index2*100+'%'
        console.log(imgnumber2.length)
    })
}
if(privebtn2){
    privebtn2.addEventListener("click",function(){
        index2 = index2 - 1
            if (index2 <0) {
                index2 = imgnumber2.length-1
            }
        document.querySelector('.main-product-two-container-slider').style.right = index2*100 +"%"
    })
}

function autoimg2(){
    index2 = index2 + 1
    if (index2 > imgnumber2.length-1) {
        index2 = 0
    }
    document.querySelector('.main-product-two-container-slider').style.right = index2*100 +"%"
}
setInterval(autoimg2,3000)

// --------------------btn slider3---------------
let index3 = 0
const nextbtn3 = document.querySelector('div.slide-three-btn i:nth-child(2)')
const privebtn3 = document.querySelector('div.slide-three-btn i:nth-child(1)')
const imgnumber3 = document.querySelectorAll('.main-product-three-container-slider .main-product-three-slider')

if (nextbtn3) {
    nextbtn3.addEventListener("click", function () {
        index3 = index3 + 1
        if (index3 > imgnumber3.length-1) {
            index3 = 0
        }
        document.querySelector('.main-product-three-container-slider').style.right=index3*100+'%'
        console.log(imgnumber3.length)
    })
}
if(privebtn3){
    privebtn3.addEventListener("click",function(){
        index3 = index3 - 1
            if (index3 <0) {
                index3 = imgnumber3.length-1
            }
        document.querySelector('.main-product-three-container-slider').style.right = index3*100 +"%"
    })
}

function autoimg3(){
    index3 = index3 + 1
    if (index3 > imgnumber3.length-1) {
        index3 = 0
    }
    document.querySelector('.main-product-three-container-slider').style.right = index3*100 +"%"
}
setInterval(autoimg3,3000)
// ---------------------slider five--------------------
const op1Btn = document.querySelector('.option1')
const op2Btn = document.querySelector('.option2')
const op3Btn = document.querySelector('.option3')
const op4Btn = document.querySelector('.option4')
op1Btn.addEventListener("click",function(){
    document.querySelector('.main-product-five-container-slider').style.right='0%'
})
op2Btn.addEventListener("click",function(){
    document.querySelector('.main-product-five-container-slider').style.right='100%'
})
op3Btn.addEventListener("click",function(){
    document.querySelector('.main-product-five-container-slider').style.right='200%'
})
op4Btn.addEventListener("click",function(){
    document.querySelector('.main-product-five-container-slider').style.right='300%'
})