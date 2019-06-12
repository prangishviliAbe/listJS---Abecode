
let info = document.getElementById('info');
let add = document.getElementById('add');
let color = []; 
let list = document.getElementById('list');
let index = 0 -1;



add.addEventListener('click', function (){
   indexColor();
});


function addNew (newInfo){
	index++;
	color[index] = newInfo;
	return color;
}





function indexColor (){
	if (info.value == ''){
		return false;
	}
	{

    let listInfo =  addNew(info.value);
    let newListElement = document.createElement('li');
        newListElement.innerHTML = listInfo[index];
        list.appendChild(newListElement);
        console.log(list);

   }
}













  
  