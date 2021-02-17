/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/
const injectElement = document.getElementById("inject");
const center = document.createElement('center');
const h1 = document.createElement('h1');
const i = document.createElement('i');
const h2 = document.createElement('h2');
const a = document.createElement('a');
const hr = document.createElement('HR');
const hr2 = document.createElement('HR');
const p = document.createElement('p');
const p2 = document.createElement('p');
const ul = document.createElement('ol');
const l1 = document.createElement('li');
const l2 = document.createElement('li');
const l3 = document.createElement('li');
const h12 = document.createElement('h1');


center.appendChild(h1);
center.appendChild(h2);
h1.appendChild(i);
h2.appendChild(a);
ul.appendChild(l1);
ul.appendChild(l2);
ul.appendChild(l3);


i.textContent = "HTML Practice Exercise TEKcamp.";
a.textContent = "TEKsystems 'TEKcamp'";
p.insertAdjacentText("afterbegin", "I love ");
p.insertAdjacentHTML("beforeend", `<i>HTML </i>`); 
p.insertAdjacentText("beforeend", "for the following reasons:");
p2.insertAdjacentText("afterbegin", "My instructor’s email address is: ");
p2.insertAdjacentHTML("beforeend", `<a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>`); 
a.href = "";
l1.textContent = "I learned it quickly.";
l2.textContent = "I can make web pages using code";
l3.textContent = "It’s fun.";
h12.textContent = "Have a great day!";
h12.insertAdjacentText("afterend", " I really look forward to learning how to code!  Have a great day. -[Team 'Giter Done']");

injectElement.appendChild(center);
injectElement.appendChild(hr);
injectElement.appendChild(p);
injectElement.appendChild(ul);
injectElement.appendChild(hr2);
injectElement.appendChild(p2);
injectElement.appendChild(h12);