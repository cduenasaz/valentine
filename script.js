const yes = document.getElementById("yes");
const no = document.getElementById("no");
const subtext = document.getElementById("subtext");

yes.addEventListener("click", () => {
  document.body.innerHTML = `
    <main style="height:100vh;display:grid;place-items:center;font-family:system-ui;text-align:center;">
      <div>
        <h1>WOOOOO LETS GO 💖</h1>
        <p>Best decision you’ve made all year 😌</p>
      </div>
    </main>
  `;
});

no.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - no.offsetWidth);
  const y = Math.random() * (window.innerHeight - no.offsetHeight);

  no.style.position = "absolute";
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  subtext.textContent = "Nahhh you almost clicked it 😭";
});
