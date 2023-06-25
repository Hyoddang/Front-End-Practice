// 1-1. 텍스트 에디터 & 구글 크롬

// 1-2. 자바스크립트 실행 (스크립트 적용)

let heading = document.querySelector('#heading');
heading.onclick = function() {
    heading.style.color = 'red';
}

// 오류확인 방법(Reference Error, SyntaxError)

// Reference Error (예외 처리)
// Uncaught ReferenceError: ** is not defined 
// 변수가 선언되지 않은 상태에서 사용될 때 발생

// SyntaxError (구문 오류)
// 문법적으로 유효하지 않은 코드를 작성

// 자바스크립트 표준 스타일

// 1. 코드 들여쓰기 tap, space 사용

// 2. 세미콜론으로 문장 구분

// let n = 10; let m = 20; // 권장하지 않음

let n = 10;
let m = 20;

// 3. 공백을 사용 (가독성)

// let num=1;
let num = 1;

// 4. 주석 작성
// 한 줄 주석 : // (슬래시 2개)

/*
    여러 줄 주석
    여러 줄 주석 안에는 또 다른 주석 사용 불가
*/

// 식별자


// let 또는 const를 사용하여 변수를 선언 (var 사용 금지)
// 문자열을 만들 때 작은 따옴표 사용('')
// 항상 엄격한 비교를 사용합니다. (타입 비교)
// 화살표 함수를 사용하여 함수를 만듭니다.
