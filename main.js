let main = document.getElementById("main")
let pic1 = document.getElementById("pic1")
let pic2 = document.getElementById("pic2")
let pic3 = document.getElementById("pic3")
let pic4 = document.getElementById("pic4")
let pic5 = document.getElementById("pic5")
let pic6 = document.getElementById("pic6")

let img1
let img2
let img3
let img4
let img5
let img6

if(window.innerWidth > 700){

   img1 = "./src/desktop/img1.png"
   img2 = "./src/desktop/img2.png"
   img3 = "./src/desktop/img3.png"
   img4 = "./src/desktop/img4.png"
   img5 = "./src/desktop/img5.png"
   img6 = "./src/desktop/img6.png"

    pic1.onclick = () => {
        editBack(img1)
    }
    pic2.onclick = () => {
        editBack(img2)
    }
    pic3.onclick = () => {
        editBack(img3)
    }
    pic4.onclick = () => {
        editBack(img4)
    }
    pic5.onclick = () => {
        editBack(img5)
    }
    pic6.onclick = () => {
        editBack(img6)
    }
}
else{

    pic1.onclick = () => {
        editBack(img1)
        pic1.style.transform = "scale(115%) translateY(-5%)"
        setTimeout(() => {
            pic1.style.transform = "scale(100%) translateY(0%)"
        }, 800);
    }
    pic2.onclick = () => {
        editBack(img2)
        pic2.style.transform = "scale(115%) translateY(-5%)"
        setTimeout(() => {
            pic2.style.transform = "scale(100%) translateY(0%)"
        }, 800);
    }
    pic3.onclick = () => {
        editBack(img3)
        pic3.style.transform = "scale(115%) translateY(-5%)"
        setTimeout(() => {
            pic3.style.transform = "scale(100%) translateY(0%)"
        }, 800);
    }
    pic4.onclick = () => {
        editBack(img4)
        pic4.style.transform = "scale(115%) translateY(-5%)"
        setTimeout(() => {
            pic4.style.transform = "scale(100%) translateY(0%)"
        }, 800);
    }

    img1 = "./src/mobile/img4.png"
    img2 = "./src/mobile/img3.png"
    img3 = "./src/mobile/img2.png"
    img4 = "./src/mobile/img1.png"
}

let button = document.getElementById("button")
let button2 = document.getElementById("button2")
let bt = true
let bt2 = true
let up = document.getElementById("up")
let down = document.getElementById("down")

let footer = document.getElementById("footer")

let back_drawer = document.getElementById("back-drawer")
let drawer = document.getElementById("drawer")

button2.onclick = (e) => {
    if(e !== "cancel"){
        if(bt2 == true){
            up.classList.remove("invisible")
            down.classList.add("invisible")
            footer.style.transform = "translateY(60%)"
            bt2 = !bt2
        }
        else{
            up.classList.add("invisible")
            down.classList.remove("invisible")
            footer.style.transform = "translateY(0%)"
            bt2 = !bt2
        }
    }
    else{
        up.classList.remove("invisible")
            down.classList.add("invisible")
            footer.style.transform = "translateY(60%)"
            bt2 = false
    }
}



function editBack(backgroundImage){
    main.style.backgroundImage = (`url("${backgroundImage}")`)
    main.style.backgroundSize = "115%"
    setTimeout(() => {
        main.style.backgroundSize = "cover"
    }, 800);
}

button.onclick = () => {
    back_drawer.classList.remove("invisible")
    drawer.style.transform = "translateX(0%)"
    button2.onclick("cancel")
}

back_drawer.onclick = () => {
    back_drawer.classList.add("invisible")
    drawer.style.transform = "translateX(100%)"
}