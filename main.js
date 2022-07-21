
//INTRO EVENTS......

const enter= document.querySelector('h2');

enter.parentNode.onmouseover= function()
    {enter.hidden=true;}
enter.parentNode.onmouseout= function()
    {enter.hidden=false;}

enter.parentNode.onclick= function()
    {
        document.getElementById('welcome').hidden=true;
        document.getElementById('front-page').style.display='block';
    }

//FRONT PAGE EVENTS......

//const subheads= document.querySelector('section').children[0];

let subheads;

for (let i=0; i<document.getElementsByTagName('section').length; i++)
    {subheads=document.getElementsByTagName('section')[i]}


subheads.children[0].onclick= function()
    {
        document.body.innerHTML='TEST';
    }