

window.addEventListener("load", () => {
  const storedText = localStorage.getItem("textContent");
  if(storedText)
    document.getElementById("text-content-input").value = storedText;
})

function createJSON() {
  const title = document.getElementById("title-input").value;
  const articleId = document.getElementById("articleId-input").value;
  const coverImgSrc = document.getElementById("coverImgSrc-input").value;
  const type = document.getElementById("type-input").value;
  const languages = document.getElementById("language-input").value;
  const sum = document.getElementById("sum-input").value;
  const textContent = document.getElementById("text-content-input").value;
  const createdAt = document.getElementById("createdAt-input").value;
  const updatedAt = document.getElementById("updatedAt-input").value;

  const jsonData = {
    title, articleId, coverImgSrc, type, languages, sum, textContent, createdAt, updatedAt
  }
  localStorage.setItem("textContent", textContent);

  document.getElementById("json-output").textContent = JSON.stringify(jsonData);
  document.getElementById("preview-content").innerHTML = textContent;
}