document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
}
console.clear();
const stopdata =
"color: #ec0000;" +
"font-size: 80px;" +
"font-weight: bold;" +
"text-shadow: 1px 1px 5px #000;" +
"filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";

const stopcontent =
"color: #fcb800;" +
"font-size: 20px;" +
"font-weight: bold;" +
"text-shadow: 1px 1px 5px #000;" +
"filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";

console.log("%cSTOPP!", stopdata);
console.log(`%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to get a product free of cost or ( hack ) someone's account or Hack Hawkerrz, it is a scam and you can't do anything from here.
Thanks,
Redowan Ahmed`, stopcontent);
