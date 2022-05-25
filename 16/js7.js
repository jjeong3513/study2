// 생성자 함수롤 사용해서 여러개의 오브젝트를 만들어서 사용
// prototype을 이용해서 상속받아서 값을 참조
// => ES6 클래스 Class

class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.hi= function(){
            console.log('이름은'+this.name+'나이는'+this.age)
        }
    }
    hi(){
        console.log('이름은'+this.name+'나이는'+this.age)
    }

}

const user1 = new User('쿠쿠루삥뽕',10)
const user2 = new User('얄라리얄라',15) 

console.log(User.prototype)

// people1 {name:'새싹'} hello()=>반갑습니다.  welcome()=> 방문해주셔서 갑사합니다.

class People{
    constructor(name){
        this.name=name;
        }
        hello(){
            console.log(this.name+'반갑습니다.')
        }
        welcom(){
            console.log(this.name+'방문해주셔서 감사합니다')
        }
}


const people1 = new People('새싹');
console.log(people1.hello())
console.log(people1.welcome())
console.log(people1) // people1__proto__ => Object.getPrototypeOf(people1)
console.log(Object.getPrototypeOf(people1))

//class는 요즘 많이 사용하고 있기 때문에 기억해두는 게 좋음