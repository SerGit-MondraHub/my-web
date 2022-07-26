
//INTRO EVENTS.............

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

//FRONT PAGE EVENTS....................   
        
//TRIGGERS ITERATION:
for (let i=0; i<document.getElementsByTagName('section').length; i++)
    {
        //SUBHEADING TRIGGERS
        let section;
        section=document.getElementsByTagName('section')[i];//This makes the "SECTION" variable become each one of the sections that contain a subheading and a paragraph

        //NAVIGATION TRIGGERS
        let links;
        links=document.getElementsByClassName('link')[i];//This makes the "LINKS" variable become each one of the anchors in the nav bar
        dropdown(section,links);
    }

//DROPDOWN FUNCTION:
function dropdown(subheads,anchors)
    {
        function drop()
        {//TO SHOW THE CONTENT OF THE SUBHEADINGS
            if(subheads.children[1].style.display==='inline-block')
                {
                    subheads.children[1].style.display='none';
                }
            else
                {
                    subheads.children[1].style.display='inline-block';
                }
        }
        //EVENT LISTENERS (triggers)
        subheads.children[0].addEventListener('click',drop);
        anchors.addEventListener('click',drop);
    }
   