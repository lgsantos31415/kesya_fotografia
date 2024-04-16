let main = document.getElementsByTagName("main")[0]
let footer = document.getElementById("footer")

let pic1 = document.getElementById("pic1")
let pic2 = document.getElementById("pic2")
let pic3 = document.getElementById("pic3")
let pic4 = document.getElementById("pic4")
let pic5 = document.getElementById("pic5")
let pic6 = document.getElementById("pic6")

let tab = document.getElementById("tab")
let menu = document.getElementById("menu")
let back_drawer = document.getElementById("back-drawer")
let drawer = document.getElementById("drawer")

let mobile = window.innerWidth <= 800 ? "mobile" : "desktop"

pic1.style.backgroundImage = `url("./src/${mobile}/img1.png")`
pic2.style.backgroundImage = `url("./src/${mobile}/img2.png")`
pic3.style.backgroundImage = `url("./src/${mobile}/img3.png")`
pic4.style.backgroundImage = `url("./src/${mobile}/img4.png")`
pic5.style.backgroundImage = `url("./src/${mobile}/img5.png")`
pic6.style.backgroundImage = `url("./src/${mobile}/img6.png")`

function mudarBack(pic, entrada){
    main.style.backgroundImage = `url("./src/${mobile}/${entrada}.png")`
    if(mobile == "mobile"){
        pic.classList.add("clique")
        setTimeout(() => {
        pic.classList.remove("clique")
        }, 1600);
    }
    else{
        pic.classList.add("inverter")
        setTimeout(() => {
        pic.classList.remove("inverter")
        }, 1600);
    }
}

function mudarFoo(entrada, entrada2){
    footer.style.transform = `translateY(${parseInt(entrada)}%)`

    if(entrada2 == true){
        document.getElementsByClassName("ph-thin ph-caret-up")[0].classList.remove("invisible")
        document.getElementsByClassName("ph-thin ph-caret-down")[0].classList.add("invisible")
    }
    else{
        document.getElementsByClassName("ph-thin ph-caret-up")[0].classList.add("invisible")
        document.getElementsByClassName("ph-thin ph-caret-down")[0].classList.remove("invisible")
    }
}

pic1.onclick = () => mudarBack(pic1, "img1")
pic2.onclick = () => mudarBack(pic2, "img2")
pic3.onclick = () => mudarBack(pic3, "img3")
pic4.onclick = () => mudarBack(pic4, "img4")
pic5.onclick = () => mudarBack(pic5, "img5")
pic6.onclick = () => mudarBack(pic6, "img6")

tab.onclick = () => {
    if (document.getElementsByClassName("ph-thin ph-caret-up")[0].classList.contains("invisible")){
        mudarFoo(55, true)
    }
    else{
        mudarFoo(0, false)
    }
}

menu.onclick = () => {
    back_drawer.classList.remove("invisible")
    drawer.style.transform = "translateX(0%)"
    mudarFoo(55, true)
}

back_drawer.onclick = () => {
    back_drawer.classList.add("invisible")
    drawer.style.transform = "translateX(100%)"
}