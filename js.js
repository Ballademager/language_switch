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

console.log("original object", texts);
const english = {
  en: {
    texts: [
      { text: "The Boat", location: ".header" },
      { text: "The Robot", location: ".footer" },
    ],
  },
};

Object.assign(texts, english);
console.log("added a lang. ", texts);

const local = "da";
const local_de = "de";
const local_en = "en";
const selection = document.querySelector("#language");

console.log(texts.da.texts[0]);

// console.log(selection.value);
selection.addEventListener("change", () => {
  if (selection.value === "dan") {
    order66(local);
  } else if (selection.value === "deu") {
    order66(local_de);
  } else if (selection.value === "eng") {
    order66(local_en);
  }
});

order66(local);
function order66(sprog) {
  console.log("change happened");
  document.querySelector(".danish-flag").classList.add("hidden");
  document.querySelector(".german-flag").classList.add("hidden");
  document.querySelector(".english-flag").classList.add("hidden");
  document.querySelector(".header").textContent = texts[sprog].texts[0].text;
  document.querySelector(".footer").textContent = texts[sprog].texts[1].text;
  console.log(sprog);
  if (sprog === "da") {
    document.querySelector(".danish-flag").classList.remove("hidden");
  } else if (sprog === "de") {
    document.querySelector(".german-flag").classList.remove("hidden");
  } else if (sprog === "en") {
    document.querySelector(".english-flag").classList.remove("hidden");
  }
}
