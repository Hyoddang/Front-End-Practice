//# 객체

// 자바스크립트: 객체 지향 프로그래밍 언어

console.log(typeof([]));
// Array.isArray(배열명): 배열의 형태에 대한 값을 받을 수 있는 메소드

//! 1. 객체(object)의 정의
// 객체: 고유한 특성 & 동작을 가지는 모든 것
// 속성(특성: 이름, 나이, 직업 등) & 메소드(동작: 걷다, 말하다, 먹다) 구성

//! 2. 객체 생성

//? 2-1. 객체 리터럴
// 중괄호 {}를 이용해 생성
// 그 안에 키와 값으 콜론(:)으로 구분되는 속성

let person = {
    // 속성
    name: 'Seung Ah',
    age: 97,
    job: 'Developer',

    // 메서드
    walk: function () {
        console.log('walking...');
    },
    talk: function () {
        console.log('Talking...');
    },
    eat: function () {
        console.log('eating...');
    },
}

//? 2-2 생성자 함수
// 함수를 사용해 객체를 생성하는 방법
// 코드를 재사용 하는 것이 용이
// new 키워드를 사용하여 객체를 새 객체로 생성, 관례적으로 함수명의 첫 글자는 대문자로 지정

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

let person1 = new Person('Seung Ah', 97, 'Developer');
let person2 = new Person('Khan', 95, 'Developer');

//? 2-3. Object.create()
// 지정한 프로토타입 객체 및 속성을 갖는 새로은 객체를 생성

let personProto = {
    greet: function() {
        console.log(`Hello my name is ${this.name}`);
    }
}

let person3 = Object.create(personProto);
person3.name = 'Park';
person3.age = 34;
person3.job = 'Actor';

person3.greet();

//? 2-4. 클래스

class Person2 {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    greet() {
        console.log(`Hello my name is ${this.name}`);
    }
}

let person4 = new Person('Lee', 97, 'Dev');
person4.greet();

//! 객체의 참조 타입
// 원시 타입: 문자열, 숫자, 불린, null, undefined Symbol
// 참조 타입: 주로 객체를 포함한 나머지 데이터 타입

//? 참조 타입
// 메모리에 직접 저장된 값을 참조하는 데이터 타입: 객체, 배열, 함수 등

let computer1 = {namd: 'samsung'};
let computer2 = computer1;

computer2.name = 'samsung Book3 Ultra';
console.log(computer1.name);

//? 참조에 의한 함수 호출

function changeName(computer) {
    computer.name = 'samsung Book3 Ultra';
}

let computer3 = { name : 'samsung Book3'};
changeName(computer3);
console.log(computer3.name);


//! 속성(Property) & 메소드(Method)
// 속성: 객체가 가지고 있는 정보
// 메소드: 그 정보를 사용하여 수행하는 동작

let book = {
    title: 'Go',
    author: 'me',
    publishYear: 1943,

    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.publishYear}`;
    }
};

//? 객체의 속성에 접근하는 방법

// 점 표기법
// 객체명. 속성명

console.log(book.title);

// 대괄호 표기법

console.log(book['author']);

let propertyName = 'author';
console.log(book[propertyName]);

//? 속성 존재 확인
// in 연산자
console.log('title' in book);
console.log('publishYear' in book);

//? 속성 삭제
// delete 객체명.속성명

delete book.author;
console.log('title' in book);

//! 메소드

//? 메소드 정의
// 객체의 속성 중 함수의 속성
// 객체와 관련된 동작을 캡슐화하여 코드의 구조를 개선하고 재사용성을 높일 수 있다.

//? 메소드 형식

let Human = {
    name: 'yoon',
    greet: function() {
        console.log(`hello, my name is ${this.name}`);
    }
}

//? 메소드 호출
Human.greet();

//? this 키워드
// 메소드 내부에서 this키워드를 사용하면 해당 메소드를 호출한 객체에 접근 가능
// 자기 자신이 가진 속성을 출룍하고 싶을 때, 자신이 가진 속성임을 분명하게 표시
// 객체의 다른 속성에 접근하거나, 객체의 상태를 변경하는 등의 작업을 수행 가능

let teacher = {
    name: 'Lee',
    changeName: function(newName) {
        this.name = newName;
    }
};

teacher.changeName('park');
console.log(teacher.name);

//? 메소드 축약 표시

let teacher2 = {
    name: 'Lee',
    
    greet: function() {
        console.log('hi');
    }
};