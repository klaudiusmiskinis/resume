if (document.querySelector(".rellax")) {
  var rellax = new Rellax(".rellax");
}

const uniqueElements = [
  document.querySelector(".navbar"),
  document.querySelector(".fullscreen"),
];
const tools = document.querySelectorAll(".tool");
const formation = document.querySelectorAll(".formation");
console.log(formation);
const project = document.querySelectorAll(".project");
const reset = {
  reset: true,
  delay: delayReveal(2),
};

ScrollReveal().reveal(uniqueElements, reset);
ScrollReveal().reveal(formation, reset);
ScrollReveal().reveal(tools, reset);
ScrollReveal().reveal(project, reset);

function delayReveal(number) {
  if (typeof number !== "number") throw new Error("Parameter must be a number");
  if (number > 15) throw new Error("Number can't be higher than 15");
  return number * 100;
}

function toolReveal(number) {
  return {
    reset: true,
    delay: delay(number),
  };
}
