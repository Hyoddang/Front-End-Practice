// 함수

// 특정 동작을 수행하는 코드의 묶음

//! 함수 사용 용도와 예제

// 1. 코드 재사용

function multiply (a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(4, 5)); // 20

// 2. 모듈화 및 추상화

function calculateDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 = y1;

    return Math.sqrt(dx * dx + dy * dy);
}

console.log(calculateDistance(1, 2, 3, 4));

// 3. 이벤트 처리

document.querySelector('button').addEventListener('click', function() {
    console.log('Button was clicked!')
});

//! 자바스크립트에서의 함수 정의 방법 (함수 생성)

// 1. 함수 선언
// 'function' 키워드를 사용하여 함수를 선언

function greet() {
    console.log('Hello world!');
}

// 2. 함수 표현식
// 함수를 변수에 할당하는 방식: 변수에 할당된 함수는 변수의 스코프 내에서만 사용 가능

// 스코프
// 전역 스코프
// : 코드의 어느 곳에서든 접근할 수 있는 가장 바깥쪽 스코프

// 지역 스코프
// : 함수 내부에서 선언된 변수와 함수가 유효한 범위