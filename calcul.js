document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelectorAll(".container");
  let res = document.getElementById("result");
  let clear = document.getElementById("clr");
  let solution = document.getElementById("sol");

  clear.addEventListener("click", clrres);
  solution.addEventListener("click", output);

  btn.forEach(item => {
    item.addEventListener("click", (e) => {
      if (e.target.id === "clr") return;
      if (e.target.id === "sol") return;
      handleInput(e.target.innerText);
    });
  });

  function handleInput(value) {
    if (res.innerText === "Error") {
      res.innerText = "";
    }
    if (value === "π") {
      value = Math.PI.toFixed(8);
    } else if (value === "e") {
      value = Math.E.toFixed(8);
    }
    if (value === "←") {
      res.innerText = res.innerText.slice(0, -1);
      return;
    }

    res.innerText += value;
  }

  function clrres() {
    res.innerText = "";
  }

  let ansValue = 0; // store previous answer here

function output() {
  try {
    if (res.innerText.trim() === "") return;

    let expr = res.innerText
      .replace(/\^/g, "**")
      .replace(/ans/g, ansValue)
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(");

    let result = eval(expr);
    ansValue = result;
    res.innerText = result;
  } catch (err) {
    res.innerText = "Error";
  }
}

});
