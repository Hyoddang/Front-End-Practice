// 조건문
// 코드의 실행 흐름을 제어, 사용자 입력을 검증, 접근 권한을 제어 등의 로직에 사용

//? if문

//! 입력 값 검증

// age 변수에 사용자로부터 입력 받은 나이를 할당
// 조건문을 사용해서 0미만, 200 초과일 경우 알림창 "Invalid age."

// let age = prompt('나이를 입력 해주세요');

// if (age < 0 || age > 200) {
//     alert('Invalid age.');
// }

// //! 특정 조건에 따른 경고 메세지 출력

// // 특정 조건이 충족되면 경고 메세지를 출력하는 등의 동작을 하도록 만들기

// let temperature = prompt('Please enter your temperature')

// if (temperature > 37.2) {
//     console.log('You may have a fever.');
// }

//? else문

//! 사용자의 입력 값 검증

// 사용자의 나이를 입력받아 age2 변수에 할당
// 나이가 18세 이상일 경우 알림창에 You are an adult.
// 아닐경우 You are a minor.

// let age2 = prompt('Please enter your age.');

// if (age2 >= 18) {
//     alert('You are an adult.');
// } else {
//     alert ('You are a minor');
// }

//! 로그인 상태에 따른 메세지 출력

// 사용자의 로그인 상태에 따라 다른 메세지를 출력하는 기능

// let isLoggedin = false;

// if (isLoggedin) {
//     console.log('Please Log in.')
// } else {
//     console.log('Welcome back!')
// }

// if문만을 사용할 때 보다 훨씬 더 많은 로직 구현 가능
// 코드의 유연성과 가독성을 높이는 것이 가능

//? else-if문

// let ageElseIf = prompt('Please enter your age.');

// if (ageElseIf < 13) {
//     alert('You are a child.');
// } else if(ageElseIf)

//! 점수에 따른 등급 부여

// 학생의 점수에 따라 등급 부여하는 예제

// 학생의 점수를 입력받아 score 변수에 할당
// 100점 초과 0점 미만일 경우 "Invalid score"
// 90점 이상일 경우 Grade A
// 80점 이상일 경우 Grade B
// 70점 이상일 경우 Grade C
// 60점 이상일 경우 Grade D
// 그 외에는 Grade F

// let score = prompt('Please enter your score');

// if (score > 100 || score < 0) {
//     alert('Invalid score');
// } else if (score >= 90) {
//     alert('Grade A');
// } else if (score >= 80) {
//     alert('Grade B');
// } else if (score >= 70) {
//     alert('Grade C');
// } else if (score >= 60) {
//     alert('Grade D');
// } else {
//     alert('Grade F');
// }

// else if문을 사용하면 여러 개의 조건을 순차적으로 확인하고, 각 조건에 따라 디른 코드 실행 가능

//? switch문

// 사용자의 직업을 입력받아 job 변수에 할당

// job(doctor, teacher, engineer) 각 case와 동일 할 경우

// doctor 입력 시 alert('You heal people')

// teacher 입력 시 alert('You teach student')

// engineer 입력 시 alert('You design and build')

// alert('I don't know about that job)

// let job = prompt('Please enter your job')

// switch (job) {
//     case 'doctor' :
//         alert('You heal people');
//         break;
//     case 'teacher' :
//         alert('You teach student');
//         break;
//     case 'engineer' :
//         alert('You design and build');
//         break;
//     default :
//         alert("I don't know about that job");
//         break;
// }

//! 요일에 따른 


// switch문을 사용하면, 여러 가지 가능한 케이스 중 하나를 선택하여 해당하는 코드 블록을 실행
// 복잡한 else문이나 else-if문을 간결하게 바꾸는 것이 가능

//? 조건 연산자(삼항 연산자)

//! 조건에 따른 변수 값 할당

// 변수 isRainingCondition에 true값을 할당.
// 해당 값이 참일 경우 'Stay home read a book' 문자열 값을 activity 변수에 할당
// 해당 값이 거짓일 경우 'Go for a work' 문자열 값을 activity 변수에 할당

// activity 값은 console 창에 출력

let isRainingCondition = true;