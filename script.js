function changeImage() {
  if (
    document.getElementById("lamp").src ===
    "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
  ) {
    document.getElementById("lamp").src =
      "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    document.getElementById("button").innerHTML = "Desligar";
    document.getElementById("main").classList.remove("lightoff");
    document.getElementById("main").classList.add("lighton");
  } else if (
    document.getElementById("lamp").src ===
    "https://i.postimg.cc/6QyTynzr/bulb-on.png"
  ) {
    document.getElementById("lamp").src =
      "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    document.getElementById("button").innerHTML = "Ligar";
    document.getElementById("main").classList.add("lightoff");
    document.getElementById("main").classList.remove("lighton");
  }
}

document.getElementById("button").addEventListener("click", changeImage);