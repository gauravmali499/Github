var list = [12,15,9,13,20,19,80,60];

list.push(30);
console.log(list);

list.pop();
console.log(list);

list.shift();
console.log(list);

delete list[3];
console.log(list);

list.splice(1,3);
console.log(list);