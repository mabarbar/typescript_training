// const logAge = (name, age) => {
//   console.log(`${name[0].toUpperCase() + name.slice(1)} is ${age} years old.`);
// };
// logAge("mateusz", 23);
// logAge("paulina", "twenty-two");
const buttonElement = document.querySelector("button");
const calculatePrice = (originalPrice, hasDiscount) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
};
buttonElement.addEventListener("click", () => {
    const originalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(calculatePrice(originalPrice, hasDiscount));
});
// It's just for practice. I know it's a bad practice.
