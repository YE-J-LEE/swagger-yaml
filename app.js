var express = require("express");
var app = express();

// public이라는 디렉토리를 이제 사용자가 웹서버에 들어가서 열람이 가능하게 해줌
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, world! I'm express");
});

app.get("/adder", (req, res) => {
  let one = req.query.one;
  let two = req.query.two;
  let result = Number(one) + Number(two);
  res.send(String(result));
});

app.listen(3000, () => {
  console.log("Server is listening on port# 3000!");
});
