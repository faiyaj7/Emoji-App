let response = [];
let input = document.querySelector("#emoji_search");
let ul = document.getElementsByTagName("ul");

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
  let a = document.getElementsByTagName("h2");
  console.log("The length of the h2 tag is " + a.length);
  if (list.length == 0 && a.length == 0) {
    let error_msg = document.createElement("h2");
    error_msg.classList.add("error_msg");
    error_msg.textContent = "No match found!!";
    input.insertAdjacentElement("afterend", error_msg);
  } else if (list.length > 0 && a.length >= 1) {
    a = document.querySelector(".error_msg");
    console.log(a);
    a.remove(a);
  }
  let font = `<i class="fa-solid fa-clipboard" style="color: #0fcc74;"></i>`;
  let ul = document.querySelector("#list");
  console.log(list);

  for (let i of list) {
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

    button.addEventListener("mouseover", () => {
      button.classList.add("fa-bounce");
    });

    button.addEventListener("mouseout", () => {
      button.classList.remove("fa-bounce");
    });

    div.append(li, p, button);
    ul.append(div);
  }
};

const inputQueries = () => {
  let listOfFiltered = [];
  filter = input.value.toLowerCase();

  if (filter.length == 0) {
    ul[0].style.display = "none";
    console.log(ul);
  } else {
    ul[0].style.display = "inline-block";
  }
  if (ul[0].children.length > 0) {
    Array.from(ul[0].children).map((item) => item.remove());
  }
  for (let i of response) {
    a = i.slug;
    if (a.includes(filter)) {
      i.slug = i.slug.split("-").join(" ");
      listOfFiltered.push(i);
    }
  }

  formList(listOfFiltered);
};
