//Abecode ... 
let info = document.getElementById('info');
let add = document.getElementById('add');
let buttons = document.getElementById('buttons');
let listItem = document.getElementById('list-item');
let color = []; 
let list = document.getElementById('list');
let index = 0 -1;



add.addEventListener('click', function (){
   indexColor();
   info.value = '';
});

buttons.appendChild(deleteFunction('Delete'));

function addNew (newInfo){
	index++;
	color[index] = newInfo;
	return color;
}


function deleteFunction (deleteText){
	let delButton = document.createElement('button');
	    delButton.innerHTML = deleteText;
	    delButton.classList = 'btn btn-danger btn-sm';
	    delButton.addEventListener('click', function (){

	    	   index = 1;
	    	   list.removeChild(list.childNodes[index]);
	    });
	    return delButton;
}




function indexColor (){
	if (info.value == ''){
		return false;
	}
	{

    let listInfo =  addNew(info.value);
    let newListElement = document.createElement('li');
        newListElement.classList ='list-group-item';
        newListElement.innerHTML = listInfo[index];
        list.appendChild(newListElement);
   }
}













  
  