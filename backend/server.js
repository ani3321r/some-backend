import express from "express";

const app = express();

app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get("/api/details", (req, res) => {
  const details = [
    {
      id: 1,
      title: "usrname",
      content: "fatbrad",
    },
    {
      id: 2,
      title: "pass",
      content: "fat_123",
    },
    {
      id: 3,
      title: "college",
      content: "iitm_gnit",
    },
  ];
  res.send(details);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server at https://localhost:${port}`);
});
