const input1Element: HTMLInputElement = document.querySelector("#input1");
const input2Element: HTMLInputElement = document.querySelector("#input2");
const addButtonElement = document.querySelector("button");

const add = (a: number, b: number) => {
  return a + b;
};

addButtonElement.addEventListener("click", () => {
  const sum = add(Number(input1Element.value), Number(input2Element.value));
  console.log(sum);
});

console.log(123);