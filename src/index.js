import "./styles.css";

const onClickAdd = () => {
  //入力textの取得とクリア
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの下に要素を設定
  div.appendChild(li);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
