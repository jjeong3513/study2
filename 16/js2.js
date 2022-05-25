
function People(name,age) {
    this.name = name;  // 키 값을 넣을 떄 this로 해줘야 여러개 찍어낼 수 있음
    this.age = age;
    this.address = 'seoul'
    
}
const people1 = new People('순이',30)
const people2 = new People('철수',10)

console.log(people1)  // people {name:'순이', age: 30, address: 'seoul'} 이렇게 출력됨


function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return this.radius * 2
    }
}

const circle1 = new Circle(5)
const circle2 = new Circle(10)
console.log(circle2.getDiameter())
console.log(circle1)


//이름, 국, 영, 수, 평균
//kim, lee, park

function Subject(nick, score, jumsu, study){
    this.name = nick;
    this.ko = score;
    this.en = jumsu;
    this.ma = study; 
    this.getAvg = function(){
        
    Subject.prototype.getAvg = function(){
        return (this.ko+this.en+this.ma)/3
    } 
}
const kim = new Subject('kIM', 80, 90, 70)
const lee = new Subject('LEE', 90, 60, 75)
const park = new Subject('PARK', 70, 50, 60)
   
console.log(park.getAvg())

console.log(Subject.prototype) // object
