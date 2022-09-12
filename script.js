let button = document.getElementById('add-todo-btn');
button.disabled = true;
let input = document.getElementById('input-todo');
input.addEventListener("input", ()=>{
	if(input.value.length == 0) {
  	button.disabled = true;
  } else {
  	button.disabled = false;
  }
})


document.getElementById('add-todo-btn').addEventListener("click", makeTodo);

function strikeThrough(e){
  
  let editB = e.parentNode.parentNode.lastChild.lastChild;
  let text = e.parentNode.lastChild;
  if (e.checked){
    editB.setAttribute('disabled', '');
    text.setAttribute('disabled', '');

  } else{
    editB.removeAttribute('disabled', '');
    text.removeAttribute('disabled', '');
  }
}

//helper function to set multiple attributes.
function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}



function edit(e){
  let chkbox = e.parentNode.parentNode.firstChild.firstChild;
  const lbl = e.parentNode.parentNode.firstChild.lastChild;
  if (e.id == 'edit'){
    lbl.focus();
    lbl.select();
    lbl.removeAttribute('readonly'); 
    e.innerHTML='<i class="fal fa-check fa-lg"></i>';
    e.id = 'editing';
    chkbox.setAttribute('disabled', '');

  } else if (e.id = 'editing'){
    chkbox.removeAttribute('disabled', '')
    e.id="edit";
    e.innerHTML='<i class="fal fa-edit fa-lg"></i>';

    lbl.setAttribute('readonly','true');
  }
}

function del(e){
  e.parentNode.parentNode.remove();
}

function makeTodo(){


  const task = document.getElementById('input-todo');
  const tasktext = task.value;
  task.value = "";
  button.disabled = true;
  


  var listItem = document.createElement("li");
  listItem.setAttribute('class', 'todo');
  
  var listItemCheckbox = document.createElement("input");
  setAttributes(listItemCheckbox, {class:'check-todo-btn', onclick:'strikeThrough(this)'})

  var listItemLabel = document.createElement('textarea');
  setAttributes(listItemLabel, {class:'todo-text', readonly:'true'})
  
  var txtContainer = document.createElement("div");
  txtContainer.setAttribute('class', 'todo-text-container')
  txtContainer.appendChild(listItemCheckbox);
  txtContainer.appendChild(listItemLabel);


  var btnContainer = document.createElement("div");
  btnContainer.setAttribute('class', 'btn-container');
  
  var editButton = document.createElement("button");
  setAttributes(editButton, {class:'edit-todo-btn', onclick:'edit(this)', id:'edit'});
  editButton.innerHTML='<i class="fal fa-edit fa-lg"></i>';
  
  var deleteButton = document.createElement("button");
  setAttributes(deleteButton, {class:'delete-todo-btn', onclick:'del(this)'})
  deleteButton.innerHTML ='<i class="fal fa-trash fa-lg"></i>';
  
  btnContainer.appendChild(deleteButton);
  btnContainer.appendChild(editButton);

  listItemCheckbox.type = "checkbox";
  listItemLabel.value = tasktext;

  listItem.appendChild(txtContainer);
  listItem.appendChild(btnContainer);
  
  document.getElementById('todos-list').append(listItem); 
}



