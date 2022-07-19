document.getElementById('front').hidden=true;


 let intro= document.getElementById('welcome');


 intro.onclick= function()
     {
         //document.getElementById('welcome').hidden=true;
         document.body.removeChild(document.getElementById('welcome'));
    }