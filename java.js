const btnPrimary = document.querySelector(".btn-primary");
const btnoutline = document.querySelector(".btn-outline");
const items = document.querySelectorAll(".item");
const button = document.querySelector(".button");


btnPrimary.addEventListener("click", () => {
  alert("Obrigado! Sua consulta foi agendada. Entraremos em contato em breve!");
});

button.addEventListener("click", () => {
  alert("Mensagem enviada!");
});

btnoutline.addEventListener("click", () => {
  alert("Solicitação enviada!");
});

button.addEventListener("click", () => {
  alert("Mensagem enviada!");
});


items.forEach(item => {
  item.querySelector(".item-header").addEventListener("click", () => {
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});

