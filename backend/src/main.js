import express from "express";
const app = express();
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => {
  res.send({
    nama: "Desi Suci Nofiyanti",
  });
});

app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Ramen",
      rasa: "Tomyum",
    },
    {
      id: 2,
      nama: "Ramen",
      rasa: "Shio",
    },
    {
      id: 3,
      nama: "Ramen",
      rasa: "Shoyu",
    },
    {
      id: 4,
      nama: "Ramen",
      rasa: "Misho",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Milk Shake",
      rasa: "Vanila",
    },
    {
      id: 2,
      nama: "Mil Shake",
      rasa: "Strawberry",
    },
    {
      id: 3,
      nama: "Lemon Tea",
      rasa: "Lemon",
    },
    {
      id: 4,
      nama: "Orange Jus",
      rasa: "Jeruk",
    },
  ]);
});
app.po;
app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
