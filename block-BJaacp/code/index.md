1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]` // false, As there is no any variable as `10` in above code.
- What is the value of obj? // { surname: 'Stark' }, As is value of `obj` get updated.
- `obj == newObj` // false, As is value of `obj` get updated to { surname: 'Stark' }
- `obj === newObj` // false, As is value of `obj` get updated to { surname: 'Stark' }
- `user === newObj` // false, As is value of `obj` get updated to { surname: 'Stark' }, and value of obj get coppied by reference to `user`.
- `user == newObj` // false, As is value of `obj` get updated to { surname: 'Stark' }, and value of obj get coppied by reference to `user`.
- `user == obj` // true, As value of `obj` get coppied by reference to `arr2`.
- `arr == arr2` // true, As value of `arr` get coppied by reference to `arr`.
- `arr === arr2` // true, As value of `arr` get coppied by reference to `arr`.

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

 ![image](./person.jpeg)

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); // true, As the user.broehers assigned the value of brothers
console.log(user.brothers.length === brothers.length); // true, As the user.broehers assigned the value of brothers, hence the length will be same of both.
```
