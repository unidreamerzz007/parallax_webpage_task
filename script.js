let moon = document.getElementById("moon")
let text = document.getElementById("text")
let train = document.getElementById("train")
let desert_moon = document.getElementById("desert-moon")
let man = document.getElementById("man")
window.addEventListener("scroll", () => {
  let value = window.scrollY
  moon.style.top = value * .9 + "px";
  text.style.top = 85 + value * -.2 + '%'
  train.style.left = value * 1.5 + "px"

  desert_moon.style.top = value * .3 + "px"
  man.style.left = value * .6 + "px"
})

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let ScrollValue=Math.round((pos*100)/calcHeight)
  if(pos>100)
  {
    scrollProgress.style.display="grid"
  }else{
    scrollProgress.style.display="none"
  }
  
}

window.onscroll = calcScrollValue
Window.onload = calcScrollValue