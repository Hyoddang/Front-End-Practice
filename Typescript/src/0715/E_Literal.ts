console.log("Litertal Type");

// Literal
// : 특정 값으로 제한도니 타입을 나타내는 것

const student = 'Yoon'; // Yoon(할당된 리터럴 타입)
student.toUpperCase();

// 재할당을 할 수 없는 student 변수의 경우 string 타입보다 더 구체화 된 Yoon일는 타입을 가짐.

let student2 = 'Hyo'; // string(일반적인 원시타입)
student2.toUpperCase();

// 유니언 타입에서는 리터럴 타입과 원시 타입을 섞어서 사용 가능
let student3: number | 'Yoon' | 'Hyo';

student3 = 123;
student3 = 121;
student3 = 1;
// student3 = 'Park';
student3 = 'Yoon';
student3 = 'Hyo';

// 리터럴 타입 사용
// : 구체적인 값을 강제 | 특정 값들만 허용하는 API 설계 시 유용

//? boolean 리터럴 타입

type YesOrNo = 'yes' | 'no';
let answer: YesOrNo;
answer = 'yes';
answer = 'no';

//? Enum 리터럴 타입
{
enum Color {
    Red,
    Green,
    Blue,
}
let myColor: Color.Red;
myColor = Color.Red;
// myColor = Color.Green;
}
