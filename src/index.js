const ex = require("express");
const fs = require("fs");
const axios = require("axios");
const path = require("path");

const app = ex();

const url =
  "https://cataas.com/cat/says/GatocorpCapital?fontSize=70&fontColor=green";

const port = process.env.PORT || 3000;

async function downloadImage() {
  try {
    const response = await axios({
      method: "get",
      url: url,
      responseType: "stream",
      headers: {
        Accept: "image/png",
      },
    });

    const write = fs.createWriteStream(
      path.join(__dirname, "..", "utils", "gato.png")
    );

    response.data.pipe(write);

    return new Promise((resolve, reject) => {
      write.on("finish", resolve);
      write.on("error", reject);
    });
  } catch (error) {
    console.error("Hubo un error descargando el archivo: ", error);
    throw error;
  }
}

app.get("/api/cat", async (req, res) => {
  try {
    await downloadImage();
    res.sendFile(path.join(__dirname, "..", "utils", "gato.png"));
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error al descargar la imagen");
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
