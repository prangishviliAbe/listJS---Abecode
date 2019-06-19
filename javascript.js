let posts = [];

	const info =  document.getElementById('info');
	const title = document.getElementById('title');
    const list =  document.getElementById('list');
    const remove = document.getElementById('remove');
    const add  =  document.getElementById('add');



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

remove.addEventListener('click', function (){
   deletePost().then(function (){
      getPost();
   });
});


add.addEventListener('click', function (){

if (info.value !== '' && title.value !== '') {
   addPost({title: title.value, body: info.value}).then(function (){
   getPost();
   info.value = '';
   title.value = '';
});
}
else{
   addPost(false);
}
});








