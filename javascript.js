//Abecode ... 

 //push() add new element at the top 

let add  = document.getElementById('add');
let info = document.getElementById('info');
let list = document.getElementById('list');
let app =  document.getElementById('app');
let buttons = document.getElementById('buttons');
let index = 0 - 1;

let listInfo = [];


add.addEventListener('click', function (){
listIndex();
});



function listElmenet (li_element){
  let liElement = document.createElement('li');
      liElement.innerHTML = li_element;
      liElement.classList = 'list-group-item';
      return liElement;
}


function buttonElement  (){
   let deleteButton = document.createElement('button');
       deleteButton.innerHTML = 'Delete';
       deleteButton.classList = 'btn btn-danger';
       deleteButton.id = 'remove';
       return deleteButton; 
}



let removeBtn  = buttons.appendChild(buttonElement());
    removeBtn.addEventListener('click', function (){
      listInfo.shift();
      console.log(list);
      list.removeChild(list.childNodes[1]);
      console.log(listInfo);
    });



function listIndex (){
  let currentInfo = info.value;
  listInfo.push(currentInfo);
  console.log(listInfo);
  index++;
  let listEl = listElmenet(listInfo[index]);
  list.appendChild(listEl);
  info.value = '';
  
}

