const button = document.querySelector("#surpriseButton");
const proposal = document.querySelector("#proposal");

function launchSparkles() {
  for (let index = 0; index < 42; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.textContent = "*";
    sparkle.style.setProperty("--x", `${Math.random() * 100}vw`);
    sparkle.style.setProperty("--size", `${14 + Math.random() * 24}px`);
    sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
    document.body.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove());
  }
}

function showFirstQuestion() {
  proposal.hidden = false;
  proposal.innerHTML = `
    <h2>Quieres ser mi novia?</h2>
    <div class="proposal__actions">
      <button type="button" data-answer="yes">Si</button>
      <button type="button" data-answer="no">No</button>
    </div>
  `;
  proposal.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showSureQuestion() {
  proposal.innerHTML = `
    <h2>Segura?</h2>
    <div class="proposal__actions">
      <button type="button" data-answer="back">No, esta es la correcta</button>
      <button type="button" data-answer="sure">Si</button>
    </div>
  `;
}

function showFinalYes() {
  proposal.innerHTML = `
    <figure class="proposal__photo">
      <img src="assets/fotos/propouse.png" alt="Ahora somos novios" />
    </figure>
    <h2>Bueno, ya sabes q conmigo no hay nos</h2>
    <p>Bueno ahora somos novios jajajaja</p>
    <p>Gracias por escogerme ahora deja que mi yo hable, espero estemos en llamada</p>
  `;
  launchSparkles();
}

button.addEventListener("click", () => {
  button.hidden = true;
  showFirstQuestion();
});

proposal.addEventListener("click", (event) => {
  const action = event.target.dataset.answer;

  if (action === "yes") {
    showFinalYes();
    return;
  }

  if (action === "no") {
    showSureQuestion();
    return;
  }

  if (action === "back") {
    showFirstQuestion();
    return;
  }

  if (action === "sure") {
    showFinalYes();
  }
});
