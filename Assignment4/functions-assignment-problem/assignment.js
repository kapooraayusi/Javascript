// Assignment 4

/*function sayHello(name) {
  console.log('Hi ' + name);
}*/

const sayHello = name => alert("Hello " + name + "!");
const sayHello2 = () => alert("Hey there!"); // Without arguments
const sayHello3 = (name, greetingText) => alert(greetingText + " " + name);
const sayHello4 = name => alert('Hi' + name);

sayHello('Aayusi');
sayHello2();
sayHello3('Aayusi', 'Hey');
sayHello4('AK');

const sayHello5 = (name, greetingText = "Heyya") => alert(greetingText + " " + name);
sayHello5("Aayu");

function checkInput(funcCallBack, ...str)
{
  let isblank = false;
  for (const text of str)
   { 
      if (!text)
      {
        isblank = true;
        break;
      }  
   }
      
  if (!isblank)   
    funcCallBack();  
}  


checkInput( 
   () => {console.log("Not blank");},
   'Hello',
   'Blah',
   ' '
);