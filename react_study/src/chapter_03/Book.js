import React from "react";

// 함수의 문법을 이용하지만 , 리액트에서 컴포넌트라고 한다.
//컴포넌트는 사용자 정의태그와 같다
function Book(props)  {
    return(
    <div>
        <h1>이 책의 이름은 {props.name}입니다</h1>
        <h2>이책은 총 {props.numOfPage} 페이지로 구성되어있습니다</h2>
    </div>
    );
}


export default Book; // 타 js 파일에서 import구문으로 참조가 가능하게됨