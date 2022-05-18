import "./styles.css";

const onClickAdd = () => {
  //入力textの取得とクリア
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addInconpletelist(inputText);
};

//未完了リストから削除する
const deleteFromInconpletelist = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

const addInconpletelist = (text) => {
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //完了ボタンが押されたら、完了したTodoへ移動して、削除する
  completeButton.addEventListener("click", () => {
    //未完了のTodoリストから、削除する
    deleteFromInconpletelist(completeButton.parentNode);

    //完了、削除ボタンを削除
    const completediv = completeButton.parentNode;
    const addtext = completediv.firstElementChild.innerText;
    completediv.textContent = null;
    const li = document.createElement("li");
    li.innerText = addtext;

    //戻すボタンを生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    //戻すボタンが押されたら、完了したTodoから削除して、未完了のTodoに追加する。
    returnButton.addEventListener("click", () => {
      //完了のTodoリストから、削除する
      const addreturn = returnButton.parentNode;
      const addreturntext = addreturn.firstElementChild.innerText;
      document.getElementById("complete-list").removeChild(addreturn);
      addInconpletelist(addreturntext);
    });

    //divタグの中身を追加
    completediv.appendChild(li);
    completediv.appendChild(returnButton);
    //完了したTodoへ追加する
    document.getElementById("complete-list").appendChild(completediv);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //削除ボタンが押されたら、削除する
  deleteButton.addEventListener("click", () => {
    deleteFromInconpletelist(deleteButton.parentNode);
  });

  //divタグの下に要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに要素を追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
