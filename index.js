let response = [];
const emoji_api = async () => {
  data = await fetch(
    "https://emoji-api.com/emojis?access_key=6395e0fc0e783f8788349bc1bfa6f23ac4358c2e"
  );
  data = await data.json();
  // console.log(data);
  // data.map((item) => response.push(item));
  return data;
};
let input = document.querySelector("#emoji_search");

const formList = async () => {
  response = await emoji_api();
  let font = `<i class="fa-solid fa-clipboard fa-bounce"></i>`;
  let ul = document.querySelector("#list");

  console.log(response);
  for (let i of response.slice(0, 10)) {
    console.log("i");
    let li = document.createElement("li");
    let button = document.createElement("button");
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = div.setAttribute("class", "single_row");

    p.textContent = i.slug;
    li.textContent = i.character;
    button.innerHTML = font;

    // copying the emoji
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(i.character);
    });

    div.append(li, p, button);
    ul.append(div);
  }
};

const inputQueries = () => {
  filter = input.value.toLowerCase();
  let p = document.getElementsByTagName("p");
  console.log(p);

  console.log(filter);
  for (let i of p) {
  }
};
formList();
