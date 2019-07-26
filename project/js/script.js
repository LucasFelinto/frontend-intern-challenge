const button = document.querySelector(".button");
const input = document.querySelector(".input");
const reset = document.querySelector(".reset");
const placeholder = document.querySelector(".placeholder");
const rankingTable = document.querySelector(".ranking-table");

button.addEventListener("click", event => {
  event.preventDefault();
  if (input.value == "") input.placeholder = "URL INVALIDA";
  if (
    !!input.value.split(" ")[0].indexOf("http://chr.dc/") &&
    !input.value == ""
  ) {
    reset.style.display = "block";
    button.innerText = "COPIAR";
    button.classList.add("-fadeIn");
    input.value = "";
    placeholder.classList.add("-fadeIn");
    placeholder.style.color = "white";
    placeholder.style.fontWeight = "bold";
    placeholder.innerText = "http://chr.dc/zxasdas";
  }

  setTimeout(() => {
    button.classList.remove("-fadeIn");
    placeholder.classList.remove("-fadeIn");
  }, 2001);
});

reset.addEventListener("click", () => {
  button.innerText = "ENCURTAR";
  reset.style.display = "none";
});

input.addEventListener("mouseover", () => {
  if (input.value.length === 0) {
    placeholder.innerText = "";
    reset.style.display = "none";
    button.innerText = "ENCURTAR";
  }
});

async function getData() {
  let html;
  const get = await fetch("../assets/urls.json");
  const reuslt = await get.json();
  reuslt.map((item, index) => {
    if (index < 5) {
      html += `
      <li class="row">
        <a href="" class="url">${item.shortUrl}</a>
        <span class="points">${item.hits}</span>
      </li>
      `;
    }
  });
  rankingTable.innerHTML = html;
}

getData();
