const space = {
    mercury: {
        gravity: 0.38,
        image: "mercury.png"
    },
    venus: {
        gravity: 0.91,
        image: "venus.png"
    },
    earth: {
        gravity: 1.0,
        image: "earth.png"
    },
    mars: {
        gravity: 0.38,
        image: "mars.png"
    },
    jupiter: {
        gravity: 2.34,
        image: "jupiter.png"
    },
    saturn: {
        gravity: 0.93,
        image: "saturn.png"
    },
    uranus: {
        gravity: 0.92,
        image: "uranus.png"
    },
    neptune: {
        gravity: 1.12,
        image: "neptune.png"
    }
}
let weight;

const inputBox = document.querySelector("input")
const selectBox = document.querySelector("select")
const buttonSelect = document.querySelector("button")
const container = document.querySelector(".container")
const containerUI = (img,text) => {
    let image = document.createElement("img");
    image.src = `img/${img}`;
    let p = document.createElement("p");
    p.textContent = text;
    p.className = "big"
      
    container.appendChild(image);
    container.appendChild(p);
    // container.className = "container-border"
}

buttonSelect.addEventListener("click", function () {
    let imgSrc = space[selectBox.value].image;
    container.innerHTML="";
    weight = space[selectBox.value].gravity * Number(inputBox.value);
    containerUI(imgSrc, weight);
    console.log(weight)
})

