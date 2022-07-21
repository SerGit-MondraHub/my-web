
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

// const subheads= document.querySelector('section').children[0];

// const subheads= document.getElementsByTagName('section');

// console.log(subheads);

/*subheads.forEach(element => element[0]);

function test()
{console.log(subheads);}

test();*/

/*subheads.onclick= function()
    {
        document.body.innerHTML='TEST';
    }*/