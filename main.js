// document.getElementById('front').hidden=true;


 /*
 intro.onclick= function()
     {
         //document.getElementById('welcome').hidden=true;
         document.body.removeChild(document.getElementById('welcome'));
    }
*/

const enter= document.querySelector('h2');

enter.parentNode.onmouseover= function()
    {enter.hidden=true;}
enter.parentNode.onmouseout= function()
    {enter.hidden=false;}

enter.parentNode.onclick= function()
    {
        document.getElementById('frame').hidden=true;
        document.getElementById('front-page').style.visibility='visible';
    }

