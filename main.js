let boxValue = document.querySelector(".box-value");
let rang = document.querySelector(".rang span");
let mainrang = document.querySelector(".rang");
let btnPlus = document.querySelector(".btn-plus");
let btnNegtive = document.querySelector(".btn-negtive");

btnPlus.addEventListener("click", function (e) {
  const currentValue = parseInt(boxValue.textContent, 10);

  if (currentValue < 10) {
    boxValue.textContent = currentValue + 1;

    const currentHeight = parseFloat(getComputedStyle(rang).height);
    const totalHeight = parseFloat(getComputedStyle(mainrang).height);
    document.documentElement.style.setProperty(
      "--height",
      `${currentHeight + totalHeight / 10}px`
    );
  }
});

btnNegtive.addEventListener("click", function (e) {
  if (boxValue.textContent > 0) {
    boxValue.textContent = parseInt(boxValue.textContent) - 1;

    const currentHeight = parseFloat(getComputedStyle(rang).height);
    const totalHeight = parseFloat(getComputedStyle(mainrang).height);

    document.documentElement.style.setProperty(
      "--height",
      `${currentHeight - totalHeight / 10}px`
    );
  }
});
