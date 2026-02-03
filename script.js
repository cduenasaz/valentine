const yes = document.getElementById("yes");
const no = document.getElementById("no");
const subtext = document.getElementById("subtext");
var counter = 0;
var moveLimit = 6;
let messages = [
  "are we deadahh",
  "lol jokes over nigga",
  "accidents happen, 2nd chance princess!",
  "stop hurting my feelings",
  "reservation to north",
  "ive spent my life savings on u",
  "im getting cheated on",
  "IM GETTING CHEATED ON??",
  "now ive lost my appetite and all will to live",
  "IM GONNA RIP DIOR TO SHREDS"
];

let index = 0;

function sayNo() {
  let question = document.getElementById("question");

  question.innerText = messages[index];

  index++;

  if (index >= messages.length) {
    index = messages.length - 1;
  }
}

yes.addEventListener("click", () => {
  document.body.innerHTML = `
    <main style="height:100vh;display:grid;place-items:center;font-family:system-ui;text-align:center;">
      <div>
        <h1>peer pressure strikes again</h1>
        <p>ok bet were valentines now</p>
      </div>
    </main>
  `;
});

no.addEventListener("mouseenter", () => {
if(counter >= moveLimit){
  subtext.textContent = "i did something else to see if youll say yes";
  return;
}
  const x = Math.random() * (window.innerWidth - no.offsetWidth);
  const y = Math.random() * (window.innerHeight - no.offsetHeight);
  counter++;
  

  
  no.style.position = "absolute";
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  subtext.textContent = "bro just say yes gang";

});
