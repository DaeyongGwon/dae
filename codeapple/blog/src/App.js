/* eslint-disable */
import './App.css';
import { useState } from'react';

function App() {
  
  let post = '매곡 고기 맛집';
  let [menu, menuChange] = useState(['한우 생고기','특수부위','물냉면','비빔냉면','육회(중) 200g']);
  let [price, setPrice] = useState(["35,900", "35,900", "10,000"]);
  let [gram, setGram] = useState(["300", "300", "150", "150", "200"]);
  // let [side, sideChange] = useState(['물냉면','비빔냉면','한우된장찌개','빡빡된장 비빔밥','계란찜추가','공기밥']);
  // let [drink, drinkChange] = useState(['열무국수','소주','맥주','막걸리','음료수']);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>한우가 뒷고기</h4>
      </div>

      <div className='menuContainer'>
        <ul className="list">
          <li className='liContainer'>
            <div className='imgBox'>
              <img className='hImg' src="./kCow.jpeg"></img>
            </div>
            <div className='textBox'>
              <h4 className='detailText'>{ menu[0] }</h4>
              <h5 className='detailText'>가격 {price[0]}원 / {gram[0]}g</h5>
            </div>
          </li>
        </ul>
      </div>
      <div className='menuContainer'>
        <ul className="list">
          <li className='liContainer'>
            <div className='imgBox'>
              <img className='hImg' src="./special.jpeg"></img>
            </div>
            <div className='textBox'>
              <h4 className='detailText'>{ menu[1] }</h4>
              <h5 className='detailText'>가격 {price[1]}원/{gram[1]}g</h5>
            </div>
          </li>
        </ul>
      </div>
      <div className='menuContainer'>
        <ul className="list">
          <li className='liContainer'>
            <div className='imgBox'>
              <img className='hImg' src="./water_myun.jpeg"></img>
            </div>
            <div className='textBox'>
              <h4 className='detailText'>{ menu[2] }</h4>
              <h5 className='detailText'>가격 {price[2]}원/{gram[2]}g</h5>
            </div>
          </li>
        </ul>
      </div>
      <div className='menuContainer'>
        <ul className="list">
          <li className='liContainer'>
            <div className='imgBox'>
              <img className='hImg' src="./bibim_myun.jpeg"></img>
            </div>
            <div className='textBox'>
              <h4 className='detailText'>{ menu[2] }</h4>
              <h5 className='detailText'>가격 {price[2]}원/{gram[2]}g</h5>
            </div>
          </li>
        </ul>
      </div>

      <Modal></Modal>

    </div>
  );
}


function Modal() {
  return (
    <div className='modal'>
      <h2 className='align-text-center'>예약신청</h2>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
    )
  }
function Like() {

}



export default App;
