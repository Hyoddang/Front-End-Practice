//! 타입스크립트의 객체 지향 프로그래밍

//! 객체 지향 프로그래밍
// OOP(object oriented programing)
// : 프로그램을 객체들의 집합으로 볼 수 있는 패러다임
// : 객체는 상태(state)와 행동(behavior, 메소드)

//! 객체 지향 프로그래밍 주요 개념(원칙)

//? 1. 클래스(class) & 객체(object)
// 클래스: 공통적 성질을 가진 대상들을 정의한 것
//        데이터(속성)와 메소드(동작)를 포함
// 객체: 클래스에 정의된 대로 생성된 실체
//      클래스에 의해서 생성되어 클래스에서 정의한 행동 수행이 가능

//? 캡슐화(Encapsulation)
// 객체의 속성(data fields)와 행동(메서드)을 하나로 묶는 것
// : 외부에서 직접 접근할 수 없도록 제한하고, 대신 메서드를 통해서만 접근 가능하도록 설계

//? 상속(Inheritance)
// 하나의 클래스가 다른 클래스의 특성과 기능을 이어받는 것
// 이를 통해 코드의 재사용성이 높아지고, 중복을 줄이는 것이 가능

//? 다형성(Polymorphism)
// 하나의 인터페이스나 클래스가 여러 형태로 동작하는 것
// 이는 메소드 오버로딩과 오버라이딩을 통해 실현됩니다.

//? 추상화(Abstraction)
// 복잡한 시스템을 단순화시키는 프로세스
// 사용자가 세부 구현 내용을 몰라도 시스템을 쉽게 사용 가능하도록 설계

//! 객체 지향 프로그래밍의 장점

//? 재사용성 (Reusabillity)
// 클래스를 정의하면 그 클래스의 인스턴스를 여러 개 생성 가능
// : 코드의 재사용성 증가, 개발 시간과 비용 단축

//? 유지보수성(Maintainability)
// 클래스는 코드를 논리적인 단위로 분할
// : 가독성을 향상, 유지보수 용어

//? 신뢰성(Reliability)
// 캡슐화, 상속, 다형성 등의 객체 지향 원칙들은 개발자가 신뢰성 높은 ㅗ드를 작성하는 데 도움

//? 확장성(Extensibility)
// : 상속을 이용하면 기존 클래스를 확장하여 새로운 기능을 쉽게 추가 가능