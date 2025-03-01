let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (ele)=>{
    if(ele.target.innerHTML=="="){
      document.querySelector('input').value=eval(string);
    }
      else if(ele.target.innerHTML=="c"){
        string ="";
        document.querySelector('input').value=string;
    }
    else if(ele.target.innerHTML=="d"){
      string = string.slice(0,-1);
        document.querySelector('input').value=string;
    }
    else if(ele.target.innerHTML=="d"){
      string = string.slice(0,-1);
        document.querySelector('input').value=string;
    }
      else{
        console.log(ele.target);
        string = string+ele.target.innerHTML;
        document.querySelector('input').value=string;
    }
  })
})