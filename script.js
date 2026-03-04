const startBtn = document.getElementById("start");
const downloadCard = document.getElementById("download");
const verifyCard = document.getElementById("verify");
const bar = document.querySelector(".bar");
const percent = document.getElementById("percent");
const startDownloadBtn = document.querySelector("#verify .primary");

let progress = 0;
let interval = null;

// inicia o "download visual"
startBtn.addEventListener("click", () => {
  startBtn.closest(".card").classList.add("hidden");
  downloadCard.classList.remove("hidden");
  
  interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      downloadCard.classList.add("hidden");
      verifyCard.classList.remove("hidden");
      return;
    }
    
    progress += Math.random() * 6;
    if (progress > 100) progress = 100;
    
    bar.style.width = progress + "%";
    percent.textContent = Math.floor(progress) + "%";
  }, 350);
});

// botão final → download real
startDownloadBtn.addEventListener("click", () => {
  startDownloadBtn.innerText = "Preparing...";
  startDownloadBtn.disabled = true;
  
  setTimeout(() => {
    window.location.href = "https://www.mediafire.com/file/9ikyrj87rienn2d/chazin_beta_skins_nas_partidas.apk/file";
  }, 1500);
});
