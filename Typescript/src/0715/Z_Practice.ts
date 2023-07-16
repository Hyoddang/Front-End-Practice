import { Dir } from "fs";

// Status라는 리터럴 타입을 선언 ( 'student' 또는 'teacher' 중 하나의 값만 가짐)
type Status = 'student' | 'teacher'

// Person이라는 타입을 선언 ( 이 타입은 status (위에서 선언한 Status 타입)와 subject(문자열)라는 두 개의 필드 포함)
type Person = {
    name: string;
    age: number;
}

//? name, age
//Deteails라는 타입을 선언 ( 이 타입은 status (위에서 선언한 Status 타입)와 subject(문자열)라는 두 개의 필드 포함)
type Details = {
    status: Status;
    subject: string;
}
//? status, subject

// Person과 Details를 합쳐 SchoolPerson이라는 인터섹션 타입 생성
type SchoolPerson = Person & Details;

// SchoolPerson 또는 문자열을 가질 수 있는 SchoolPersonString이라는 유니온 타입을 선언
type SchoolPersonOrString = SchoolPerson | string;

// SchoolPersonOrString 타입의 입력을 받아서
// 1. 입력이 SchoolPerson일 경우, ${name} is a ${status} who teaches %{subject}. They are ${age} years old.
// 형태의 문자열을 반환하고

// 2. 입력이 문자열일 경우 Hello, ${input}!
// 형태의 문자열을 반환하는 process라는 함수를 작성
function process2(input: SchoolPersonOrString): string {
    return typeof input === 'string'
    ? `Hello${input}` // input이 문자열일 경우
    : `${input.name} is a ${input.status} who teaches ${input.subject}. They are ${input.age} years old.`; // input이 SchoolPerson일 경우 
}

// 작성한 함수를 출력: SchoolPerson 객체와 문자열을 생성하서 process함수에 전달 후 콘솔에 출력

let lee: SchoolPerson = {
    name: 'Lee',
    age: 27,
    status: 'teacher',
    subject: 'TS'
};

console.log(process2(lee));
console.log(process2('Hyo'));

type Direction = 'left' | 'right' | 'up' | 'down';

function move(direction: Direction) {
    console.log(`Moving ${direction}`)
}