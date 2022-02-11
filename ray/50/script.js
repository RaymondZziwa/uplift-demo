const arr = ["One end of a length of clean capillary tubing is heated in a bunsen flame until it softens and seals the end of the tube","The tube is then withdrawn from the flame and a small bulb is blown at the end","The thermometer is placed with its open end beneath the surface of some mercury in a jar","The bulb gently heated","The air inside expands and bubbles through the mercury","On cooling,the air contracts and some mercury runs up into the bulb","Heat the bulb force the remaining air out through the mercury in bubbles","Continue to heat the bulb even when the air pocket is gone to evaporate some of the mercury so that a vaccum is formed when it condenses after the tube is sealed","Heat and melt the glass to seal the tube air tight","Remove the heat source","Let the thermometer cool to room temperature"]

const qtnText = document.getElementById("qtntext");
const space = document.getElementById("lab")
let x=0;
let l =1;
const pic = document.createElement("img");
pic.classList.add("createdimg")

setInterval(() => {
    qtnText.innerHTML = arr[x]
    pic.src = `imgs/${l}.png`;
    space.append(pic)
    l++
    x++
}, 3000);

