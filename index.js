

function retrieveEmployeeInformation(){
  return document.querySelector('input[name="name"]').value
}

function addNewElementAsLi(){
  let node = document.createElement("LI")
  node.innerHTML = "Hello";
  document.querySelector('.employee-list').appendChild(node);
}


function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    resetInput();
    event.preventDefault();
  });
}
      


function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}
