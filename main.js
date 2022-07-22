
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

//FRONT PAGE EVENTS...............

//SUBHEADINGS DROPDOWN:

for (let i=0; i<document.getElementsByTagName('section').length; i++)
    {
        let section;

        section=document.getElementsByTagName('section')[i];//This makes the "SECTION" variable become each one of the sections that contain a subheading and a paragraph

        section.children[0].onclick= function()
            {//The first child element of each SECTION is the subheading, the second one is the paragraph
                if(section.children[1].style.display==='inline-block')
                    {
                        section.children[1].style.display='none';
                    }
                else
                    {
                        section.children[1].style.display='inline-block';
                    }
            }
    }


