let text=document.getElementById('text')
text.onclick=function(){
  text.innerHTML='';
  let newImg = document.createElement('img')
  newImg.src="assets/img/airballon.png";
  text.appendChild(newImg)
}
