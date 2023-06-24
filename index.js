window.addEventListener("load", async () => {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=6395e0fc0e783f8788349bc1bfa6f23ac4358c2e"
  );
  response = await response.json();
  console.log(response);
  let font = `<i class="fa-solid fa-clipboard fa-bounce"></i>;`;
  let input = document.querySelector("#emoji_search");
  let ul = document.querySelector("#list");
  for (let i of response[10]) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    let div = document.createElement("div");
    div.setAttribute("class", "single_row");
    li.textContent = i.character;
    button.innerHTML = font;
    div.append(li, button);
    ul.append(div);
  }
});
