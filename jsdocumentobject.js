let val;

val=document;
val=document.doctype;
val=document.head;
val=document.body;
val=document.URL;

val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].action;
val=document.forms[0].method;

val=document.links;
val=document.links[3];
val=document.links[3].id;
val=document.links[3].href;
val=document.links[3].className;

 val=document.links[0];
 val=document.links[0].className;

 val=document.links[0].classList;
 val=document.links[0].classList[0];
 val=document.links[0].classList[1];

 val=document.images;
 val=document.images[0];
 val=document.images[0].src;
 val=document.images[0].className;
 val=document.images[0].classList;
 val=document.images[0].classList[0];
 val=document.images[0].alt;
 val=document.images[0].getAttribute('src');
 val=document.images[0].getAttribute('abc');

// console.log(val);

//Change styling
document.getElementById('task-title').style.background='grey';
document.getElementById('task-title').style.color='white';
document.getElementById('task-title').style.padding='5px';
//cahnge content
document.getElementById('task-title').textContent="My List";
document.getElementById('task-title').innerText="My Text";
document.getElementById('task-title').innerHTML="<span style='color:yellow'>My List</span>";

//HTML Collection Array
const items=document.getElementsByClassName("collection-item");
//console.log(items);
//console.log(items[3]);
items[3].style.color="violet";
//items[3].innerText="Have to shop";

//HTML Collection Array
const lis=document.getElementsByTagName("li");
//console.log(lis[0]);
lis[0].style.color="red";
//lis[0].textContent="Have to visit";

//document.querySelector();
//console.log(document.querySelector('h4')); //tag
//console.log(document.querySelector('.task-title')); //class
//console.log(document.querySelector('#task-title')); //id
// console.log(document.querySelector('li').style.color="blue");
// console.log(document.querySelector('ul li').style.color="green");
// console.log(document.querySelector('ul li:last-of-type').style.color="blue");
// console.log(document.querySelector('ul li:nth-of-type(3)').style.color="red");
// console.log(document.querySelector('ul li:nth-of-type(3)').innerHTML="hello");

// const listitems=document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitems);
// const listitems=document.querySelector('ul').getElementsByTagName('li');
// console.log(listitems);

//console.log(document.querySelector('ul li:nth-of-type(3)').style.background="red");
//document.querySelector('ul li:nth-of-type(odd)').style.background="silver";
//document.querySelector('ul li:nth-of-type(even)').style.background="silver";


//HTML collection array cannot loop
const lists=document.getElementsByTagName('li');
// console.log(lists);
// console.log(lists.length);
// console.log(lists[2]);

const arrlis=Array.from(lists);
arrlis.forEach(function(arrli,idx) {
  //console.log(arrli);
  //console.log(arrli.className);
  // arrli.innerText="hello";
  // arrli.textContent=`${idx}: hello myanmar`;

});
const it=document.querySelector('.collection .collection-item');
//console.log(it);
// document querySelectorAll() (nodelist =array)
const its=document.querySelectorAll('.collection .collection-item');
//console.log(its);
//console.log(its.length);
//console.log(its[2]);
 its.forEach(function(itsa,idx) {
   //console.log(itsa);
   //console.log(itsa.className);
   //itsa.textContent="hellow workd";
   //itsa.innerText=`${idx}: Hello Thailand`;

 });

 const liodds=document.querySelectorAll('li:nth-child(odd)');
 //console.log(liodds);
 const lievens=document.querySelectorAll('li:nth-child(even)');
 //console.log(lievens);
 liodds.forEach(function(liodd){
   //console.log(liodd);
   liodd.style.background="gold";
 });
 for (var i = 0; i < lievens.length; i++) {
   lievens[i].style.background="orange";
 }

//children
let chil;
const getul=document.querySelector('ul.collection');
//console.log(getul);
const getli=document.querySelector('li');
//console.log(getli);

chil=document.getElementsByClassName('collection-item');
chil=document.getElementsByTagName('li');
chil=document.querySelector('ul').getElementsByClassName('collection-item');


//get children element
chil=getul.children;
chil=getul.children[1];

//children of children
chil =getul;
chil=getul.children[1].children;
chil=getul.children[1].children[0];
chil=getul.children[1].children[0].children;
chil=getul.children[1].children[0].children[0].className;

//first children
chil=getul.firstElementChild;

//last child
chil=getul.children[4];

//count child elemnt
chil=getul.children;
chil=getul.childElementCount;

//get parent element
chil=getli.parentElement;

//get next sibling
chil=getli.nextElementSibling;
chil=getli.nextElementSibling.nextElementSibling;

chil=getli.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling;


//console.log(chil);

//create element
const li=document.createElement('li');
li.classList.add('collection-item');

//add id
li.id="new item";
//add attribute                 //(att name, value)
li.setAttribute('title', "new-item")

//create Text node
// li.innerText="abc";
// li.textContent="efg";
// li.innerHTML="hij"
const newnode=document.createTextNode('Hello Mandalay');
li.appendChild(newnode);
//li.appendChild(document.createTextNode('HHello'));

//console.log(li);

//create element for new link absolute
const link=document.createElement('a');
//add attribute
link.setAttribute('href','#');
//add id
link.id='delete-iteam';
//add class
link.className='delete-item';
link.innerHTML=`<i class="far fa-trash-alt"></i>`;
//console.log(link);

 //Append link to li
li.appendChild(link);
//console.log(li);

//append lu as child in ul
document.querySelector('ul.collection').append(li);

//replace element
//create element

const newheading=document.createElement('h2');
//add id
newheading.id='task-title';
//newheading.className="task-title";
newheading.classList.add('task-title');
//creat textNOde
newheading.appendChild(document.createTextNode('Task List'));

//console.log(newheading);

//get old heading
const oldheading=document.getElementById('task-title');
//console.log(oldheading);

//get parent
const cardaction=document.querySelector('.card-action');


//replace  replaceChild(new,old);
cardaction.replaceChild(newheading,oldheading);

//remove element
const lts=document.querySelectorAll('li');
//console.log(lts[3]);
lts[5].remove();

//remove child Element
const ullts=document.querySelector('ul');
//console.log(ullts.children[2]);
//ullts.removeChild(ullts.children[4]);
//ullts.removeChild(lts[4]);

//class
const firstli=document.querySelector('li');
//console.log(firstli.children[0]);
const flink=firstli.children[0];

let lk=flink.className;
//console.log(lk);
lk=flink.classList;
// console.log(lk[0]);

//chnage class selector name
//flink.className="delete-item disable";


//replace class(old,new)
//flink.classList.replace('active', 'disable');

//add class
//flink.className="delete-item active";
//flink.classList.add('disable');

//Attribute
let lia=flink.getAttribute('href');
//console.log(lia);
//lia=flink.setAttribute('href','https://google.com');
//console.log(flink.getAttribute('href'));

//addEventlistener(type,function);
let clearbtn=document.querySelector('.cleartasks');
//console.log(clearbtn);

//method 1
clearbtn.addEventListener('click',function(e){
//  console.log('hey');
  // console.log(e);
  // e.preventDefault();
});

//method 2
clearbtn.addEventListener('click',myclick);
function myclick(e){
  // console.log('hey myanmar');

  let val;
  val=e.target;
  val=e.target.className;
  val=e.target.classList;
  val=e.target.href;
  val=e.target.getAttribute('href');
  val=e.target.id;
  e.target.innerText="Click me";


//Event type
  val=e.type;

  //coordinate event
  val=e.clientY;
  val=e.clientX;

  //coordinate event
  val=e.offsetY;
  val=e.offsetX;

//  console.log(val);

  e.preventDefault();
}

//movuse events
clearbtn=document.querySelector('.cleartasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h2');

//click
//clearbtn.addEventListener('click',runevent);

//double click
//clearbtn.addEventListener('dblclick',runevent);

//mousedown
//clearbtn.addEventListener('mousedown',runevent);

//mouseup
//clearbtn.addEventListener('mouseup',runevent);

//mouseenter
//card.addEventListener('mouseenter',runevent);

//mouseleave
//card.addEventListener('mouseleave',runevent);

//mousemove
card.addEventListener('mousemove',runevent);

function runevent(e){
  // console.log(`Event type =${e.type}`);
  // heading.textContent=`MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
  // document.body.style.background=`rgba(${e.offsetX},${e.offsetY},1)`;
  // e.preventDefault();
}

//Input Event
let taskinput=document.getElementById('task');
//console.log(taskinput);
const form=document.querySelector('form');
//console.log(form);

//get value by typing
//keydown
//taskinput.addEventListener('keydown',runevent2);

//keyup
//taskinput.addEventListener('keyup',runevent2);

//Input
//taskinput.addEventListener('input',runevent2);

//keypress
//taskinput.addEventListener('keypress',runevent2);

//blur
//taskinput.addEventListener('blur',runevent2);

//focus
//taskinput.addEventListener('focus',runevent2);

//cut
//taskinput.addEventListener('cut',runevent2);

//paste
//taskinput.addEventListener('paste',runevent2);



//Get value by submit
form.addEventListener('submit',runevent2);
function runevent2(e){
//  console.log(`Event Type=${e.type}`);

  //get input
 //console.log(task.value);
 //console.log(taskinput.value);


//  e.preventDefault();
}


//event Bubbling vs event Delegation

//event Bubbling
// document.querySelector('.task-title').addEventListener('click',function(){
//   console.log("I am task-title");
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//   console.log(" i am card-content");
//
// });

// document.querySelector('.card').addEventListener('click',function(){
//   console.log("I am card");
// });



//event Delegation
const delitem=document.querySelector('.delete-item');
//console.log(deletitem);
// deletitem.addEventListener('click',function(){
//   console.log('i am delete item');
// });

document.body.addEventListener('click',deleteitem);
function deleteitem(e){
//  console.log(e.target);
//console.log(e.target.className);
 // if(e.target.className==='far fa-trash-alt'){
 //   console.log("hey");
 // }
 if(e.target.parentElement.className==="delete-item"){
   console.log('hay');
 }

//remove
       // i    a            li
if(e.target.parentElement.classList.contains('active')){
  console.log('hay');
  e.target.parentElement.parentElement.remove();
}
}

//storage
document.querySelector(".form").addEventListener('submit',(e)=>{
//  console.log('hay');
  const newtask=document.getElementById('task').value;
  //console.log(newtask);
  //localStorage.setItem('tasks',newtask);
  let myworks;
  //console.log(myworks);
  if(localStorage.getItem('tasks')===null){
    myworks=[];
  }else{
    myworks=JSON.parse(localStorage.getItem('tasks'));
    console.log(myworks);
    console.log(typeof myworks);
  }
  myworks.push(newtask);
  localStorage.setItem('tasks',JSON.stringify(myworks));
  window.alert("New Task Saved");

  e.preventDefault();
});

let mytasks=JSON.parse(localStorage.getItem('tasks'));
// console.log(mytasks);
// console.log(typeof mytasks);
// console.log(mytasks.length);
// console.log(mytasks[0]);

// mytasks.forEach(function(mytasks){
//   console.log(mytasks);
//
// });
