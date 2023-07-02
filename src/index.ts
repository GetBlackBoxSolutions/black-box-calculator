import { add, divide, multiply, subtract } from "./calculator";

const signElement = document?.getElementById("sign") as HTMLInputElement;
const inputOneElement = document?.getElementById(
  "inputOne"
) as HTMLInputElement;
const inputTwoElement = document?.getElementById(
  "inputTwo"
) as HTMLInputElement;

signElement.innerHTML = "+";
inputOneElement.value = "0";
inputTwoElement.value = "0";

document?.getElementById("btn-subtract")?.addEventListener("click", () => {
  signElement.innerHTML = "-";
});

document?.getElementById("btn-add")?.addEventListener("click", () => {
  signElement.innerHTML = "+";
});

document?.getElementById("btn-multiply")?.addEventListener("click", () => {
  signElement.innerHTML = "x";
});

document?.getElementById("btn-divide")?.addEventListener("click", () => {
  signElement.innerHTML = "/";
});

document.getElementById("btn-equals")?.addEventListener("click", () => {
  let total = 0;

  try {
    switch (signElement.innerHTML) {
      case "+":
        total = add(
          parseInt(inputOneElement.value),
          parseInt(inputTwoElement.value)
        );
        break;
      case "-":
        total = subtract(
          parseInt(inputOneElement.value),
          parseInt(inputTwoElement.value)
        );
        break;
      case "x":
        total = multiply(
          parseInt(inputOneElement.value),
          parseInt(inputTwoElement.value)
        );
        break;
      case "/":
        total = divide(
          parseInt(inputOneElement.value),
          parseInt(inputTwoElement.value)
        );
        break;
      default:
        total = 0;
        break;
    }

    document.getElementById("result")!.innerHTML = total.toString();
  } catch (error: any) {
    document.getElementById("result")!.innerHTML = error.message;
  }
});
