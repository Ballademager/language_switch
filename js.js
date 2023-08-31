"use strict";
const texts = {
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
};
const local = "da";
const local_de = "de";
const selection = document.querySelector("#language");

console.log(texts.da.texts[0]);

// console.log(selection.value);
selection.addEventListener("change", () => {
  if (selection.value === "dan") {
    order66(local);
  } else {
    order66(local_de);
  }
});

order66(local);
function order66(sprog) {
  console.log("change happened");
  document.querySelector(".header").textContent = texts[sprog].texts[0].text;
  document.querySelector(".footer").textContent = texts[sprog].texts[1].text;
}
