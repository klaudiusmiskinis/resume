if (document.querySelector(".rellax")) {
  var rellax = new Rellax(".rellax");
}

const elementsToReveal = [
  document.querySelector(".navbar"),
  document.querySelector(".fullscreen"),
  document.querySelector(".tool-1"),
  document.querySelector(".tool-2"),
  document.querySelector(".tool-3"),
  document.querySelector(".tool-4"),
  document.querySelector(".tool-5"),
];

const reset = {
  reset: true,
  delay: delayReveal(2),
};

ScrollReveal().reveal(elementsToReveal, reset);

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
