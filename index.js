function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit();

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
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}


// With JQUERY

/* 

function retrieveEmployeeInformation(input){
  let employee = document.querySelector('input').value
  return employee;
}

 function addNewElementAsLi(){
  $('ul.employee-list').append(retrieveEmployeeInformation());
}

 function clearFormField() {
  document.getElementById('myform').reset();
}

 function addNewLiOnClick(event){
  let submit = $('form input:last')[0];
  submit.addEventListener('click', event => {
    addNewElementAsLi();
    clearFormField();
    return false;
  })
}

 function clearEmployeeListOnLinkClick() {
  let x = document.getElementById('clear')
  x.addEventListener('click', event => { event.preventDefault()
  let list = document.getElementById('elist')
  list.innerHTML = '';
  })
*/
