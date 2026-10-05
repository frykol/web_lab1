(function () {
  const element = document.getElementById("ex1_button");
  element.addEventListener("click", (e) => {
    document.getElementById("ex1_content").innerHTML =
      "1, 2, 3, 4, 5, 6, 7, 8, 9";
  });

  const element2 = document.getElementById("ex2_text");
  const output2 = document.getElementById("ex2_content");
  element2.addEventListener("input", (e) => {
    let value = e.target.value;
    const isAlpha = (str) => /[a-zA-Z]+$/.test(str);
    const specialChar = (str) => /[^A-Za-z0-9]/.test(str);
    if (value.length == 9) {
      output2.innerHTML = "Numer jest poprawny";
    } else {
      output2.innerHTML = "Długość numeru musi być równa 9";
    }
    if (isAlpha(value)) {
      output2.innerHTML = "Numer nie może zawierać liter";
    }
    if (specialChar(value)) {
      output2.innerHTML = "Numer nie może zawierać znaków specjalnych";
    }
  });
})();
