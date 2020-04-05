let buttons = [
  { which: 192, code: "Backquote", en: "`", ru: "ё" },
  { which: 49, code: "Digit1", en: "1" },
  { which: 50, code: "Digit2", en: "2" },
  { which: 51, code: "Digit3", en: "3" },
  { which: 52, code: "Digit4", en: "4" },
  { which: 53, code: "Digit5", en: "5" },
  { which: 54, code: "Digit6", en: "6" },
  { which: 55, code: "Digit7", en: "7" },
  { which: 56, code: "Digit8", en: "8" },
  { which: 57, code: "Digit9", en: "9" },
  { which: 189, code: "Minus", en: "-" },
  { which: 187, code: "Equal", en: "=" },

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
  { which: 219, code: "BracketLeft", en: "[", ru: "х" },
  { which: 221, code: "BracketRight", en: "]", ru: "ъ" },
  { which: 220, code: "Backslash", en: "\\" },

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
  { which: 186, code: "Semicolon", en: ";", ru: "ж" },
  { which: 222, code: "Quote", en: "'", ru: "э" },
  { which: 13, code: "Enter", en: "Enter" },

  { which: 16, code: "ShiftLeft", location: 1, en: "Shift" },
  { which: 90, code: "KeyZ", en: "z", ru: "я" },
  { which: 88, code: "KeyX", en: "x", ru: "ч" },
  { which: 67, code: "KeyC", en: "c", ru: "с" },
  { which: 86, code: "KeyV", en: "v", ru: "м" },
  { which: 66, code: "KeyB", en: "b", ru: "и" },
  { which: 78, code: "KeyN", en: "n", ru: "т" },
  { which: 77, code: "KeyM", en: "m", ru: "ь" },
  { which: 188, code: "Comma", en: ",", ru: "б" },
  { which: 190, code: "Period", en: ".", ru: "ю" },
  { which: 191, code: "Slash", en: "/", ru: "." },
  { which: 38, code: "ArrowUp", en: "▲" },
  { which: 16, code: "ShiftRight", location: 2, en: "Shift" },

  { which: 17, code: "ControlLeft", location: 1, en: "Ctrl" },
  { which: 18, code: "AltLeft", location: 1, en: "Alt" },
  { which: 32, code: "Space", en: " " },
  { which: 16, code: "ShiftLeft", location: 1, en: "Shift" },
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
  }
  create = () => {
    const button = document.createElement("button");
    button.innerText = this.en;
    button.setAttribute("which", this.which);
    button.setAttribute("code", this.code);
    button.setAttribute("location", this.location);
    button.setAttribute("en", this.en);
    button.setAttribute("ru", this.ru);

    button.classList.add("button");
    if (this.code === "Space") {
      button.classList.add("space");
      button.innerText = "";
    }
    return button;
  };
}

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  let main = document.createElement("main");
  let textarea = document.createElement("textarea");
  let keyboard = document.createElement("div");
  buttons.forEach((item) => {
    keyboard.appendChild(new Button(item).create());
  });
  console.log(keyboard);
  main.appendChild(textarea);
  main.appendChild(keyboard);
  console.log(main);
  document.body.appendChild(main);
}
