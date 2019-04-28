function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit();

/* 

function retrieveEmployeeInformation(){
  return document.querySelector('input[name="name"]').value
}

function addNewElementAsLi(){
  let node = document.createElement("LI")
  node.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(node);
}


function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    resetInput();
  });
}
      


function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  });
}

function resetInput(){
  document.querySelector('input').value = ''
}

*/

// With JQUERY



function retrieveEmployeeInformation(input){
  let employee = document.querySelector('input').value
  return employee;
}

 function addNewElementAsLi(){
  $('ul.employee-list').append(retrieveEmployeeInformation());
}


 function addNewLiOnClick(event){
  let submit = $('input')[1];
  submit.addEventListener('click', event => {
    addNewElementAsLi();
    resetInput();
  })
}

 function clearEmployeeListOnLinkClick() {
  let link = $('a');
  link.addEventListener('click', event => { event.preventDefault()
  let list = $('ul');
  list.innerHTML = '';
  });
}

