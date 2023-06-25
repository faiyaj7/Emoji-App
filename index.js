let response = [];
let input = document.querySelector("#emoji_search");

const emoji_api = async () => {
  data = await fetch(
    "https://emoji-api.com/emojis?access_key=6395e0fc0e783f8788349bc1bfa6f23ac4358c2e"
  );
  data = await data.json();
  return data;
};

const apiToList = async () => {
  response = await emoji_api();
};
apiToList();

const formList = async (list) => {
  let font = `<i class="fa-solid fa-clipboard fa-bounce"></i>`;
  let ul = document.querySelector("#list");
  console.log(list);
  // console.log(response);
  for (let i of list) {
    // console.log("i");
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
  let listOfFiltered = [];
  filter = input.value.toLowerCase();
  console.log(filter);
  let ul = document.getElementsByTagName("ul");
  if (ul[0].children.length > 0) {
    Array.from(ul[0].children).map((item) => item.remove());
  }
  for (let i of response) {
    a = i.slug;
    if (a.includes(filter)) {
      listOfFiltered.push(i);
    }
  }
  // console.log(list);
  formList(listOfFiltered);
};
// formList();
