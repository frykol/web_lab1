(function () {
  const element = document.getElementById("ex1_button");
  element.addEventListener("click", (e) => {
    document.getElementById("ex1_content").innerHTML =
      "1, 2, 3, 4, 5, 6, 7, 8, 9";
  });
})();
