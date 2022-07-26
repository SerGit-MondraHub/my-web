
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

//DROPDOWN FUNCTION:
function eventA(subheads,anchors)
    {//The first child element of each SECTION is the subheading, the second one is the paragraph
        function drop()
        {
            if(subheads.children[1].style.display==='inline-block')
                {
                    subheads.children[1].style.display='none';
                }
            else
                {
                    subheads.children[1].style.display='inline-block';
                }
        }
        /*EVENT LISTENERS (triggers)
        subheads.children[0].addEventListener=('click',drop);
        anchors.addEventListener=('click',drop);*/
        subheads.children[0].onclick=drop;
    }
        
        
//SUBHEADINGS DROPDOWN:

for (let i=0; i<document.getElementsByTagName('section').length; i++)
    {
        //SUBHEADING TRIGGERS
        let section;
        section=document.getElementsByTagName('section')[i];//This makes the "SECTION" variable become each one of the sections that contain a subheading and a paragraph
        //NAVIGATION TRIGGERS
        let links;
        links=document.getElementsByClassName('link')
        eventA(section,links);

        

    }

/*SAME LOGIC WITH NAV ACHORS

for (let i=0; i<document.getElementsByTagName('a').length; i++)
    {
        let anchor;

        anchor=document.getElementsByTagName('a')[i];//

        anchor.onclick= function()
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
*/
