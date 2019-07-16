var person={
	name:'tom',
	age:20
}
//检测对象中是否含有某个属性
console.log( person.sex===undefined );
console.log( person.hasOwnProperty('score') );
console.log( 'name' in person );