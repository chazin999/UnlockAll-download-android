const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// frontend
app.use(express.static(path.join(__dirname, "site")));

// rota de download real
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "files", "Astute.apk");
  res.download(filePath, "Astute-Beta.apk");
});

app.listen(PORT, () => {
  console.log("🔥 Server rodando em http://localhost:" + PORT);
});