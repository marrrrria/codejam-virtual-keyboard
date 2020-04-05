let buttons = [
  { which: 192, code: "Backquote", en: "`", ru: "ё", shift: "~", ruShift: "Ё" },
  { which: 49, code: "Digit1", en: "1", shift: "!" },
  { which: 50, code: "Digit2", en: "2", shift: "@", ruShift: '"' },
  { which: 51, code: "Digit3", en: "3", shift: "#", ruShift: "№" },
  { which: 52, code: "Digit4", en: "4", shift: "$", ruShift: ";" },
  { which: 53, code: "Digit5", en: "5", shift: "%" },
  { which: 54, code: "Digit6", en: "6", shift: "^", ruShift: ":" },
  { which: 55, code: "Digit7", en: "7", shift: "&", ruShift: "?" },
  { which: 56, code: "Digit8", en: "8", shift: "*" },
  { which: 57, code: "Digit9", en: "9", shift: "(" },
  { which: 48, code: "Digit0", en: "0", shift: ")" },
  { which: 189, code: "Minus", en: "-", shift: "_" },
  { which: 187, code: "Equal", en: "=", shift: "+" },
  { which: 8, code: "Backspace", en: "Backspace" },

  { which: 9, code: "Tab", en: "Tab" },
  { which: 81, code: "KeyQ", en: "q", ru: "й" },
  { which: 87, code: "KeyW", en: "w", ru: "ц" },
  { which: 69, code: "KeyE", en: "e", ru: "у" },
  { which: 82, code: "KeyR", en: "r", ru: "к" },
  { which: 84, code: "KeyT", en: "t", ru: "е" },
  { which: 89, code: "KeyY", en: "y", ru: "н" },
  { which: 85, code: "KeyU", en: "u", ru: "г" },
  { which: 73, code: "KeyI", en: "i", ru: "ш" },
  { which: 79, code: "KeyO", en: "o", ru: "щ" },
  { which: 80, code: "KeyP", en: "p", ru: "з" },
  {
    which: 219,
    code: "BracketLeft",
    en: "[",
    ru: "х",
    shift: "{",
    ruShift: "Х",
  },
  {
    which: 221,
    code: "BracketRight",
    en: "]",
    ru: "ъ",
    shift: "}",
    ruShift: "Ъ",
  },
  { which: 220, code: "Backslash", en: "\\", shift: "|", ruShift: "/" },

  { which: 20, code: "CapsLock", en: "CapsLock" },
  { which: 65, code: "KeyA", en: "a", ru: "ф" },
  { which: 83, code: "KeyS", en: "s", ru: "ы" },
  { which: 68, code: "KeyD", en: "d", ru: "в" },
  { which: 70, code: "KeyF", en: "f", ru: "а" },
  { which: 71, code: "KeyG", en: "g", ru: "п" },
  { which: 72, code: "KeyH", en: "h", ru: "р" },
  { which: 74, code: "KeyJ", en: "j", ru: "о" },
  { which: 75, code: "KeyK", en: "k", ru: "л" },
  { which: 76, code: "KeyL", en: "l", ru: "д" },
  { which: 186, code: "Semicolon", en: ";", ru: "ж", shift: ":", ruShift: "Ж" },
  { which: 222, code: "Quote", en: "'", ru: "э", shift: '"', ruShift: "Э" },
  { which: 13, code: "Enter", en: "Enter" },

  { which: 16, code: "ShiftLeft", location: 1, en: "Shift" },
  { which: 90, code: "KeyZ", en: "z", ru: "я" },
  { which: 88, code: "KeyX", en: "x", ru: "ч" },
  { which: 67, code: "KeyC", en: "c", ru: "с" },
  { which: 86, code: "KeyV", en: "v", ru: "м" },
  { which: 66, code: "KeyB", en: "b", ru: "и" },
  { which: 78, code: "KeyN", en: "n", ru: "т" },
  { which: 77, code: "KeyM", en: "m", ru: "ь" },
  { which: 188, code: "Comma", en: ",", ru: "б", shift: "<", ruShift: "Б" },
  { which: 190, code: "Period", en: ".", ru: "ю", shift: ">", ruShift: "Ю" },
  { which: 191, code: "Slash", en: "/", ru: ".", shift: "?", ruShift: "," },
  { which: 38, code: "ArrowUp", en: "▲" },
  { which: 16, code: "ShiftRight", location: 2, en: "Shift" },

  { which: 17, code: "ControlLeft", location: 1, en: "Ctrl" },
  { which: 18, code: "AltLeft", location: 1, en: "Alt" },
  { which: 32, code: "Space", en: " " },
  { which: 18, code: "AltRight", location: 2, en: "Alt" },
  { which: 17, code: "ControlRight", location: 2, en: "Ctrl" },
  { which: 37, code: "ArrowLeft", en: "◄" },
  { which: 40, code: "ArrowDown", en: "▼" },
  { which: 39, code: "ArrowRight", en: "►" },
];

class Button {
  constructor(obj) {
    this.which = obj.which;
    this.code = obj.code;
    this.location = obj.location || 0;
    this.en = obj.en;
    this.ru = obj.ru || obj.en;
    this.shift = obj.shift;
    this.ruShift = obj.ruShift || obj.shift;
  }
  create = () => {
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = this.en;
    button.setAttribute("which", this.which);
    button.setAttribute("code", this.code);
    button.setAttribute("location", this.location);
    button.setAttribute("en", this.en);
    button.setAttribute("ru", this.ru);
    if (this.shift) {
      button.setAttribute("shift", this.shift);
    }
    if (this.ruShift) {
      button.setAttribute("ruShift", this.ruShift);
    }

    button.classList.add("button");
    if (this.code === "Space") {
      button.classList.add("space");
      button.innerText = "";
    }
    if (this.which == 16) {
      button.classList.add("shift");
    }
    if (this.which == 9) {
      button.classList.add("tab");
    }
    if (this.which == 13) {
      button.classList.add("enter");
    }
    return button;
  };
}

let main = document.createElement("main");
main.classList.add("main");
let textarea = document.createElement("textarea");
textarea.rows = "20";
textarea.classList.add("textarea");
textarea.setAttribute("readonly", "true");
let keyboard = document.createElement("div");
keyboard.classList.add("container");
buttons.forEach((item) => {
  keyboard.appendChild(new Button(item).create());
});

main.appendChild(textarea);
main.appendChild(keyboard);
document.body.appendChild(main);

const TEXT = document.querySelector(".textarea");
let isCapsLock = false;
let LANG = "en";
let pushedButtons = [];

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  keyboard.addEventListener("click", clickOnKeyboard);
  keyboard.addEventListener("mousedown", mouseDown);
  keyboard.addEventListener("mouseup", mouseUp);
  keyboard.addEventListener("mouseover", mouseOver);
  keyboard.addEventListener("mouseout", mouseOut);
  // keyboard.addEventListener("mouseleave", mouseLeave);

  window.addEventListener("keyup", keyupOnKeyboard);
  window.addEventListener("keydown", keydownOnKeyboard);
  window.addEventListener("keypress", keypressOnKeyboard);
}

function clickOnKeyboard(e) {
  e.preventDefault();
  if (e.target.tagName == "BUTTON") {
    if (e.target.getAttribute("which") == 32) {
      TEXT.value += e.target.getAttribute("en");
    }

    if (
      (e.target.getAttribute("which") >= 48 &&
        e.target.getAttribute("which") <= 57) ||
      (e.target.getAttribute("which") >= 65 &&
        e.target.getAttribute("which") <= 90) ||
      (e.target.getAttribute("which") >= 186 &&
        e.target.getAttribute("which") <= 192) ||
      (e.target.getAttribute("which") >= 219 &&
        e.target.getAttribute("which") <= 222)
    ) {
      TEXT.value += e.target.innerText;
    }

    if (e.target.getAttribute("which") == 13) {
      TEXT.value += "\n";
    }
    if (e.target.getAttribute("which") == 8) {
      TEXT.value = TEXT.value.slice(0, -1);
    }
    if (e.target.getAttribute("which") == 9) {
      TEXT.value += "\t";
    }

    if (e.target.getAttribute("which") == 20 && isCapsLock === false) {
      keyboard.querySelectorAll(".button").forEach((item) => capsLockOn(item));
    } else if (e.target.getAttribute("which") == 20 && isCapsLock === true) {
      keyboard.querySelectorAll(".button").forEach((item) => capsLockOff(item));
    }
  }
}

function mouseDown(e) {
  if (e.target.tagName == "BUTTON") {
    e.target.classList.add("buttonDown");
  }
}

function mouseUp(e) {
  if (e.target.tagName == "BUTTON") {
    e.target.classList.remove("buttonDown");
  }
}

function mouseOver(e) {
  if (e.target.tagName == "BUTTON") {
    e.target.classList.add("buttonOver");
  }
}

function mouseOut(e) {
  if (e.target.tagName == "BUTTON") {
    e.target.classList.remove("buttonOver");
  }
}

// function mouseLeave(e) {
//   if (e.target.tagName == "BUTTON") {
//     e.target.classList.remove("buttonDown");
//   }
// }

function keyupOnKeyboard(e) {
  e.preventDefault();

  keyboard.querySelectorAll(".button").forEach((item) => keyUpHandler(item, e));

  if (
    (e.which >= 48 && e.which <= 57) ||
    (e.which >= 65 && e.which <= 90) ||
    (e.which >= 186 && e.which <= 192) ||
    (e.which >= 219 && e.which <= 222) ||
    e.which == 32
  ) {
    TEXT.value += e.key;
  }
  if (e.which == 13) {
    TEXT.value += "\n";
  }
  if (e.which == 8) {
    TEXT.value = TEXT.value.slice(0, -1);
  }
  if (e.which == 9) {
    TEXT.value += "\t";
  }
  if (e.which === 20 && isCapsLock === false) {
    keyboard.querySelectorAll(".button").forEach((item) => capsLockOn(item));
  } else if (e.which === 20 && isCapsLock === true) {
    keyboard.querySelectorAll(".button").forEach((item) => capsLockOff(item));
  }

  if (e.which == 16) {
    keyboard
      .querySelectorAll(".button")
      .forEach((item) => changeFromShift(item));
  }

  pushedButtons.splice(pushedButtons.indexOf(e.which), 1);
}

function keydownOnKeyboard(e) {
  e.preventDefault();
  if (!pushedButtons.includes(e.which)) {
    pushedButtons.push(e.which);
  }

  if (
    pushedButtons.length === 2 &&
    pushedButtons.includes(18) &&
    pushedButtons.includes(16)
  ) {
    LANG = LANG === "ru" ? "en" : "ru";
    keyboard
      .querySelectorAll(".button")
      .forEach((item) => changeLanguage(item, LANG));
  }

  keyboard
    .querySelectorAll(".button")
    .forEach((item) => keyDownHandler(item, e));

  if (e.which == 16) {
    keyboard.querySelectorAll(".button").forEach((item) => changeToShift(item));
  }
}

function keypressOnKeyboard(e) {
  e.preventDefault();
}

function keyDownHandler(item, e) {
  if (
    item.getAttribute("which") == e.which &&
    item.getAttribute("location") == e.location
  ) {
    item.classList.add("buttonDown");
  }
}

function keyUpHandler(item, e) {
  if (item.getAttribute("which") == e.which) {
    item.classList.remove("buttonDown");
  }
}

function capsLockOn(item) {
  if (
    item.getAttribute("which") == 186 ||
    item.getAttribute("which") == 188 ||
    item.getAttribute("which") == 190 ||
    item.getAttribute("which") == 192 ||
    item.getAttribute("which") == 219 ||
    item.getAttribute("which") == 221 ||
    item.getAttribute("which") == 222 ||
    (item.getAttribute("which") >= 65 && item.getAttribute("which") <= 90)
  ) {
    item.innerText = item.innerText.toUpperCase();
  }
  if (item.getAttribute("which") == 20) {
    item.classList.add("capsL");
  }
  isCapsLock = true;
}

function capsLockOff(item) {
  if (
    item.getAttribute("which") == 186 ||
    item.getAttribute("which") == 188 ||
    item.getAttribute("which") == 190 ||
    item.getAttribute("which") == 192 ||
    item.getAttribute("which") == 219 ||
    item.getAttribute("which") == 221 ||
    item.getAttribute("which") == 222 ||
    (item.getAttribute("which") >= 65 && item.getAttribute("which") <= 90)
  ) {
    item.innerText = item.innerText.toLowerCase();
  }
  if (item.getAttribute("which") == 20) {
    item.classList.remove("capsL");
  }
  isCapsLock = false;
}

function changeToShift(item) {
  if (LANG === "en" && pushedButtons.length < 2) {
    if (item.getAttribute("which") >= 65 && item.getAttribute("which") <= 90) {
      item.innerText = item.innerText.toUpperCase();
    }
    if (item.getAttribute("shift")) {
      item.innerText = item.getAttribute("shift");
    }
  }

  if (LANG === "ru") {
    if (item.getAttribute("which") >= 65 && item.getAttribute("which") <= 90) {
      item.innerText = item.innerText.toUpperCase();
    }
    if (item.getAttribute("shift")) {
      item.innerText = item.getAttribute("ruShift");
    }
  }
}

function changeFromShift(item) {
  if (LANG === "en") {
    if (item.getAttribute("which") >= 65 && item.getAttribute("which") <= 90) {
      item.innerText = item.innerText.toLowerCase();
    }
    if (item.getAttribute("shift")) {
      item.innerText = item.getAttribute("en");
    }
  }
  if (LANG === "ru") {
    if (item.getAttribute("which") >= 65 && item.getAttribute("which") <= 90) {
      item.innerText = item.innerText.toLowerCase();
    }
    if (item.getAttribute("shift")) {
      item.innerText = item.getAttribute("ru");
    }
  }
}

function changeLanguage(item, l) {
  item.innerText = item.getAttribute(l);
}
