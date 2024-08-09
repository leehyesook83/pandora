import './App.css';
import './css/main.css'
import './css/detail.css'
import { Button,Nav,Navbar,Container,Row,Col,Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'

import newdata from './data/newdata';
import newdataDetail from './data/newdata-detail';
import bestdata from './data/bestdata';
import bestdataDetail from './data/bestdata-detail';
import mddata from './data/mddata'
import mddataDetail from './data/mddata-detail';
import {Main,Section1,Section2,Section3,Section4,Section5,Section6} from './component/section';
import Detail from './component/detail';

function App() {
  let navigate = useNavigate()
  let [data,setData] = useState(newdata[0])
  let [datas,setDatas] = useState(newdataDetail[0])
  const Comma = (props)=>{
    return props.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="App">
      <header>
        <Link to="/"><img id='logo' src="./img/logo.gif"/></Link>
        <div id="menu">
          <div className='search'>
            <input type="text" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <i class="fa-solid fa-user"></i>
          </div>
          <div>
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
      </header>
      <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/detail')}}>Charms</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Bracelets</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Rings</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Necklaces</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Earrings</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Featured</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Gifts</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Discover</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Event</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Brand</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <span id='hBar'></span>
      <Routes>
        <Route path='/' element={
          <>
          <Main/>
          <Section1/>
          <Section2 newdata={newdata} newdataDetail={newdataDetail} data={data} setData={setData} datas={datas} setDatas={setDatas} Comma={Comma}/>
          <Section3/>
          <Section4 mddata={mddata} mddataDetail={mddataDetail} data={data} setData={setData} datas={datas} setDatas={setDatas} Comma={Comma}/>
          <Section5 bestdata={bestdata} bestdataDetail={bestdataDetail} data={data} setData={setData} datas={datas} setDatas={setDatas} Comma={Comma}/>
          <Section6/>
          </>
        }/>
        <Route path='/detail' element={
          <>
            <Detail data={data} setData={setData} datas={datas} setDatas={setDatas} Comma={Comma}></Detail>
          </>
        }/>
      </Routes>

      <footer>
          <div className="botm">
            <div className="left_botm">
              <h1><img src={"./img/logo.gif"}/></h1>
              <ul className="botm_menu">
                <li><a href="#">HOME</a></li>
                <li><a href="#">COMPANY</a></li>
                <li><a href="#">PRIVACY</a></li>
                <li><a href="#">GUIDE</a></li>
              </ul>
              <address>㈜판도라 사업자등록번호 : 120-86-24028 | 통신판매업등록번호 : 서울 강남 – 4364호
              | 매장 : 서울특별시 강남구 삼성로 561 스타럭스빌딩 판도라팀
              <br></br>COPYRIGHT 2019 PANDORA. ALL RIGHTS RESERVED.</address>
              <ul className="sns">
                  <li><i class="fa-brands fa-instagram"></i></li>
                  <li><i class="fa-brands fa-youtube"></i></li>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-tiktok"></i></li>
                  <li><i class="fa-brands fa-x-twitter"></i></li>
              </ul>
            </div>
            <div className="right_botm">
                <ul className="botm_quick_1">
                  <li><h1>SHOPPING</h1></li>
                  <li><a href="#">마이쇼핑</a></li>
                  <li><a href="#">주문배송조회</a></li>
                  <li><a href="#">교환 및 환불안내</a></li>
                  <li><a href="#">장바구니</a></li>
                  <li><a href="#">관심상품</a></li>
                </ul>
                <ul className="botm_quick_2">
                  <li><h1>COMMUNITY</h1></li>
                  <li><a href="#">이벤트</a></li>
                  <li><a href="#">상품사용후기</a></li>
                  <li><a href="#">자주묻는질문</a></li>
                  <li><a href="#">멤버십</a></li>
                </ul>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
