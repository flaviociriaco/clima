document.querySelector(".search").addEventListener("submit", (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    showWarning("Carregando...");
  }
});

function showWarning(msg) {
  document.querySelector(".notice").innerHTML = msg;
}
