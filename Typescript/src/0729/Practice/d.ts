//! 배열 메소드와 제네릭을 사용한 회원 관리 프로그램 구현

//* Todo 관리 프로그램 구현

//* Todo 항목은 title(제목), done(완료 상태) 의 속성
//* Todo 관리 프로그램은 Todo항목을
// 추가(addTodo), 검색(findTodo), 제거(removeTodo), 완료 항목만 필터링(filterDoneTodos)하는 기능을 제공

//* Todo 항목을 관리하기 위한 Todo 클래스를 정의

//* Todo관리 기능을 제공하는 TodoList 클래스를 제네릭을 사용하여 정의
// (TodoList 클래스는 Todo 객체의 리스트를 관리)

class Todo {
    constructor(
        title: string,
        done: boolean = false
        ) {}
}