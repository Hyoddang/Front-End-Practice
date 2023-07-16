//! 타입스크립트의 인터페이스

import { get } from "http";

//? 1. 인터페이스의 기본

type PersonType = {
    name: string;
    age: number;
}
interface PersonInterface {
    name: string;
    age: number;
}

function greet(person: PersonInterface) {
    return `Hello ${person.name}, ${person.age}`;
}

let user = { name: 'Hyo', age: 29 };
console.log(greet(user));

//! 선택적 속성(프로퍼티)

{
    interface Car {
        brand: string;
        year?: number;
    }
}
//! 읽기 전용 속성 정의

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // 읽기 전용 속성이므로 'x'에 할당할 수 없습니다.

//? 타입스크립트 인터페이스의 역할

// 1. 타입 체킹
// 2. 코드의 가독성 향상
// 3. 코드 재사용
// 4. 확장 가능성: 한 인터페이스가 다른 인터페이스를 확장(상속)하여 사용가능

//? 함수 타입 & 인덱서블(배열) 타입의 인터페이스

interface GreetingFunc {
    (name: string): string;
}

interface StringArray {
    [index: number]: string;
}

//? 클래스 타입의 인터페이스

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
}

//! 인터페이스 확장
// extends 키워드를 사용

interface Shape {
    color: string;
}

interface Square extends Shape{
    // color: string;
    sideLength: number;
}

// 빈 객체 ({})를 Square 타입으로 지정하여 square라는 변수에 할당
let square = {} as Square;

square.sideLength = 10;
square.color = 'blue';

//! 인터페이스 vs 타입 별칭

{
interface User {
    name: string;
}
interface User {
    age: number;
}
}
// User인터페이스
// interface User {
//     name: string;
//     age: number;
// }

// type UserType = {
//     age: number;
// }

// 2. 유니온(Union)타입, 인터섹션(intersaction)타입
// 3. 리터럴 타입, 튜플, 기타 타입 구성
// type NameOrAge = string | number;
// type UserWithRole = User & {role: string};

// type Name = 'Lee';
// type UserTuple = [string, number];

//? 인터페이스에서는 유니온, 인터섹션 타입을 표현할 수 X
//? 인터페이스에서는 리터럴 타입, 튜플을 표현할 수 X

{
    interface Person {
        firstname: string;
        lastname: string;
        middlename? : string;
    }

    function getFullName(person: Person) {
        if (person.middlename) {
            return person.firstname + person.middlename + person.lastname;
        } else {
            return person.firstname + person.lastname;
        }
    }

    let lee: Person = { firstname: 'Yoon', middlename: 'Sung', lastname: 'Hyo'};
    let yoon: Person = { firstname: 'Seong', lastname: 'Hyo'};

    console.log(getFullName(lee));
    console.log(getFullName(yoon));
}