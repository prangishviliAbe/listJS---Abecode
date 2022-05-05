let posts = [];

    const info =  document.getElementById('info');
    const title = document.getElementById('title');
    const list =  document.getElementById('list');
    const remove = document.getElementById('remove');
    const add  =  document.getElementById('add');
    
    let app = document.getElementById('app');
    let counterList = document.createElement('div');
	    counterList.id = 'counter';
	    app.appendChild(counterList);


function getPost (){
    let output = '';
     list.innerHTML = '';
    posts.forEach((post)=>{
     output += `<div>${post.title} ${post.body}</div>`;
     list.innerHTML = output;
    });

}



function addPost (newPost){
   return new Promise ((resolve, reject)=>{ 
   	if (newPost !== false) {
   		posts.push(newPost)
   		resolve();
   	}
   	else{
   		reject('Something is wrong');
   	}
   });
}



function deletePost (){
  
   return new Promise((resolve, reject)=>{
     if (posts.shift()){
     	resolve();
     }
     else{
     	reject('delete is not happened');
     }
   });
}


function checkList (){
        counterList.innerHTML = posts.length;
} 


remove.addEventListener('click', function (){
deletePost().then(function (){
   getPost();
   checkList();
});
});



add.addEventListener('click', function (){

if (info.value !== '' && title.value !== '') {

   addPost({title: title.value, body: info.value}).then(function (){
   getPost();
   info.value = '';
   title.value = '';
   checkList();
});

}
else{
   addPost(false);
}

});








