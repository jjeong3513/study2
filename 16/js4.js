//가격 * 0.4로 tex 출력


function Product(item,price){
    this.item = item;
    this.price = price;
    /*this.tex=function(){
        return (this.price*0.1)  // 나한테 들어오는 값(생성자 함수)
    }*/
    
}
Product.prototype.tex=function(){
    return(this.price*0.1)
}

const product1 = new Product('book', 15000);
const product2 = new Product('game', 25000);
const product3 = new Product('cd', 20000);

console.log(product1.tex())
console.log(product2.__proto__); //부모요소가 가지고 있는 속성을 확인하게 하는 속성

// 인스턴스 오브젝트가 값을 직접 소유하게 만들고 싶으면 constructor에 만든다
// prototype만 가지고 있고 참조해서 사용하고 싶으면 prototype에 만들어서 상속시킨다.
// 인스턴스는 prototype을 갖고 있지 않음. constructor만 prototype을 갖는다.