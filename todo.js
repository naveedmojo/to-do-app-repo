const input = document.querySelector('#input');
const list = document.querySelector('.list');
let id = 0;
//inputing the text into the inpu field
input.addEventListener('keypress', function (event) {
  if (event.keyCode == 13) {
    if (input.value != '') {
      add(input.value);
    }
  }
});
//function to add new div into the todo
function add(value) {
  const newdiv = document.createElement('div');
  console.log(newdiv);
  newdiv.classList.add('listitem');
  newdiv.setAttribute('id', `div${id}`);
  newdiv.innerHTML = ` <li id="item">${id + 1})   ${value}</li>
            <div class="icons">
              <i class="fa fa-trash trash" id="trash${id}"></i>
              <i class="fa-solid fa-square-check done" id="done${id}"></i>
            </div>`;
  list.appendChild(newdiv);
  input.value = '';
  id += 1;
  //remove functionality inside add function because element created dynamically is been givent event loop dynamicllay.
  const trash = document.getElementsByClassName('trash');

  for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click', (e) => {
      e.target.parentNode.parentNode.remove(trash[i]);
    });
  }
  //adding done functionality when the click event happens
  const done = document.getElementsByClassName('done');
  for (let i = 0; i < trash.length; i++) {
    done[i].addEventListener('click', (e) => {
      done[i].classList.add('active');
      let li = done[i].parentElement.previousElementSibling;
      li.style.textDecoration = 'line-through';
    });
  }
}
