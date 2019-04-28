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

function addNewLiOnClick() {
   Console.log(document.querySelector('input').value);

   document.querySelector('form').addEventListener('submit', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  })
}

 function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    let list = document.querySelectorAll('.employee-list li')

     for (let i=0; i < list.length; i++) {
      list[i].remove();
    }
  })
} 

