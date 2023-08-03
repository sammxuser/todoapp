const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addButton = document.querySelector('.row button');

function addTask(task) {
  if (task === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = task;
    listContainer.appendChild(li);
    // Add a cross tag
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

addButton.addEventListener('click', function () {
  addTask(inputBox.value);
});

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
