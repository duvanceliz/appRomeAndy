window.addEventListener('load',() =>{
    //const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

function update(){

    

    const progress = document.getElementById("p");


    let porcentaje = `${((window.scrollY)/(document.body.scrollHeight - window.innerHeight) * 100)}`;
     
    if (progress != null){
        progress.setAttribute('style',`width:${porcentaje}%`)

    }
   


    requestAnimationFrame(update);
 
}
