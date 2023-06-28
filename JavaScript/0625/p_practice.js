// 구구단 만들기 //

// 1 ~ 9단
// for문 사용 (중첩된 for문 사용)

let num;
let num2;

for (let num = 1; num < 10; num++) {
    document.write(` ${num}단`);
    for (let num2 = 1; num2 < 10; num2++) {
        document.write(` ${num} X ${num2} = ${num * num2}`);
    }
}


// 첫 번째 루트 : 구구단이 몇 단인지 반복
// 두 번째 루트 : 각 구구단이 실제 연산되는 반복