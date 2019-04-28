function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit();


function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let listElement =  document.createElement('li');

   listElement.innerHTML = retrieveEmployeeInformation();

   document.querySelector('.employee-list').appendChild(listElement);
}


