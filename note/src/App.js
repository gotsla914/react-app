/* eslint-disable */ /* 터미널의 노란색 warning 없애는 방법*/ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, title변경] = useState(['카페 투어', '사쿠라 꼬깜이! 벚꽃길 산책', '여행맛지도']);
  let [like, like변경] = useState(0);

  function titleSwitch(){ 
    var newArray = [...title];
    newArray[0] = '맛집 투어';
    title변경( newArray );
    //글제목의 0번째 데이터를 맛집<추천으로 바꿈

    // title변경(['맛집 투어', '사쿠라 꼬깜이! 벚꽃길 산책', '여행맛지도'])
  }

  function arrange(){
    var newArray = [...title].sort();
    title변경( newArray );
  }

  return (
    <div className="App">
      <div className="nav">
        <div>개발 노트 : 또리야 니삶살자</div>
      </div>

    <button onClick={ titleSwitch } > 클릭! </button>
    <button onClick={ arrange } > 정렬 </button>

      <section className='list'>
        <h4> { title[0] } <span onClick={ ()=>{ like변경(like + 1) } }>💜</span> { like } </h4>
        <p>4월 18일</p>
        <hr/>
      </section>
      <section className='list'>
        <h4> { title[1] } </h4>
        <p>4월 18일</p>
        <hr/>
      </section>

      <section className='list'>
        <h4> { title[2] } </h4>
        <p>4월 18일</p>
        <hr/>
      </section>

    </div>
  );
}

export default App;
