//object 객체

const cat = {   // cat 객체
    name : 'momo', // (name)키값 : (momo)value
    gender : 'male',
    age : 5,
    family : '러시안블루',
    sayHello : function(){   //함수를 지정하는 것을 메서드라고 함
        console.log('안녕하세요'+this.name+'입니다.') // 오브젝트 안에서 this라는 키워드는 자기 자신을 가리킨다.
    }
}

console.log(cat.name)
console.log(cat['family']) 
console.log(cat.sayHello()) 



const dog= {
    name:'wawa',
    gender: 'female',
    age: 2,
    family: '치와와',
    hello : function(){
        console.log('안녕하세요'+this.name+'입니다.')
    }
}
console.log(dog.name)



// 20세, 김철수, seoul에 거주

const People = {
    name: '김철수',
    age : 20,
    address: 'seoul'

}
    console.log(People);
    console.log(People['address']);
    console.log(People.name);
    
    people.gender = 'male';  // people[gender] = 'male'; 이렇게도 만들 수 있음 (속성값이 더 필요한 경우 이렇게 추가해줄 수 있음)
    console.log(people);