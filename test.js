let target1 = document.getElementById('1');
//Creates a variable for the element that will act as trigger

let target2 = document.getElementById('2');
//Creates a variable for the element that will act as trigger

function eventFunction(eventObject)
  {//The 'eventObject' argument becomes the event that is being triggered
    console.log(eventObject.timeStamp);
  }
 
//EVENT HANDLERS:
target1.onclick=eventFunction; //Sets ‘target1’ as an event target
target2.onclick=eventFunction; //Sets ‘target2’ as an event target
