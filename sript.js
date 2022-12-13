function changeImage() {
    if (
      document.getElementById("lampoff").src ===
      "bulb-off.png"
    ) {
      document.getElementById("lampoff").src =
        "https://i.postimg.cc/6QyTynzr/bulb-on.png";
      document.getElementsByClassName("btn").innerHTML = "Desligar";
      document.getElementById("main").classList.remove("lightoff");
      document.getElementById("main").classList.add("lighton");
    } else if (
      document.getElementById("lampoff").src ===
      "bulb-on.png"
    ) {
      document.getElementById("lampoff").src =
        "bulb-off.png";
      document.getElementsByClassName("btn").innerHTML = "Ligar";
      document.getElementById("main").classList.add("lightoff");
      document.getElementById("main").classList.remove("lighton");
    }
  }
  
  document.getElementsByClassName("btn").addEventListener("click", changeImage);
  