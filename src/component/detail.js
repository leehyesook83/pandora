import React from "react";
import { Button,Nav,Navbar,Container,Row,Col,Table,Tabs,Tab } from 'react-bootstrap';
import { useState } from 'react';

function Detail(props){
  let [HData] = useState(props.data)
  let [BData] = useState(props.datas)
  let [check,setCheck] = useState(false)
  return(
    <div>
      <div id="detail_area">

        <Container fluid>
        <Row>
            <Col>
              <div className="detail_img">
                  <img src={`${process.env.PUBLIC_URL}${HData.imgUrl}`}/>
              </div>
            </Col>
            <Col>
              <div className="detail_txt">
                <h1>{HData.title}</h1>
                <p className="price2">{props.Comma(HData.price)}원 <span>{props.Comma(HData.Aprice)}원</span></p>
                <p className="content">{HData.content}</p>
                <ul>
                  <li><i class="fa-sharp-duotone fa-solid fa-star"></i></li>
                  <li><i class="fa-sharp-duotone fa-solid fa-star"></i></li>
                  <li><i class="fa-sharp-duotone fa-solid fa-star"></i></li>
                  <li><i class="fa-sharp-duotone fa-solid fa-star"></i></li>
                  <li><i class="fa-sharp-duotone fa-solid fa-star"></i></li>
                  <li>0.0 (0)</li>
                </ul>

                <div onClick={()=>{setCheck(!check)}} className="heart">
                  {check==false?<i class="fa-regular fa-heart"></i>:null}
                  {check==true?<i class="fa-solid fa-heart"></i>:null}
                </div>

                <div className="line_grey"></div>

                <Table className="delivery">
                <tbody>
                  <tr>
                    <th>국내 · 해외배송</th>
                    <td>국내배송</td>
                  </tr>
                  <tr>
                    <th>배송방법</th>
                    <td>택배</td>
                  </tr>
                  <tr>
                    <th>배송비</th>
                    <td>3,000원</td>
                  </tr>
                </tbody>
                </Table>

                <div className="line_grey"></div>

                <Table className="total">
                <tbody>
                  <tr>
                    <td>총 상품금액</td>
                    <th>{props.Comma(HData.price+3000)}원</th>
                  </tr>
                </tbody>
                </Table>

                <Container className="detail_btn">
                <Row>
                  <Col><div className="btn_on">BUY NOW</div></Col>
                </Row>
                <Row>
                  <Col><div className="btn_off">CART</div></Col>
                  <Col><div className="btn_off">WISH</div></Col>
                </Row>
                </Container>
              </div>
            </Col>
        </Row>
        </Container>
        <Tabs
          defaultActiveKey="detail"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="detail" title="상세정보" enabled>
            <img src={`${process.env.PUBLIC_URL}${BData.imgUrl1}`}/>
            <img src={`${process.env.PUBLIC_URL}${BData.imgUrl2}`}/>
          </Tab>
          <Tab eventKey="review" title="리뷰">
          <div id="review">
            <Container fluid>
              <Row>
                <Col>
                  <div className="review_title">
                    <h1>리뷰</h1>
                    <div className="review_btn">
                      <div className="btn_off">리뷰등록</div>
                      <div className="btn_off">모두보기</div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="line_grey"></div>

              <Row>
                <Col>
                  <div className="review_txt">게시물이 없습니다.</div>
                </Col>
              </Row>

              <div className="line_grey"></div>
            </Container>
          </div>
          </Tab>
          <Tab eventKey="inquiry" title="문의">
          <div id="review">
            <Container fluid>
              <Row>
                <Col>
                  <div className="review_title">
                    <h1>문의하기</h1>
                    <div className="review_btn">
                      <div className="btn_off">문의하기</div>
                      <div className="btn_off">모두보기</div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="line_grey"></div>

              <Row>
                <Col>
                  <div className="review_txt">게시물이 없습니다.</div>
                </Col>
              </Row>

              <div className="line_grey"></div>
            </Container>
          </div>
          </Tab>
          <Tab eventKey="delivery" title="배송정보">
          <div id="info">
            <Container fluid>
              <Row>
                <Col xs={12} md={6}>
                  <div className="info_area">
                    <div className="info_txt">
                      <h1>결제안내</h1>
                      <p>고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.  
                      <br></br><br></br>
                      무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.  
                      주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.</p>
                    </div>

                    <div className="info_txt">
                      <h1>배송안내</h1>
                      <p>배송 방법 : 택배<br></br>
                      배송 지역 : 전국지역<br></br>
                      배송 비용 : 2,500원<br></br>
                      배송 기간 : 3일 ~ 7일<br></br>
                      배송 안내 : - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.<br></br>
                      고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다. </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                <div className="info_area">
                    <div className="info_txt">
                      <h1>교환 및 반품안내</h1>

                      <h2>교환 및 반품이 가능한 경우</h2>
                      <p>- 상품을 공급 받으신 날로부터 7일이내 단, 가전제품의
                      경우 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.<br></br>
                      - 공급받으신 상품 및 용역의 내용이 표시.광고 내용과
                      다르거나 다르게 이행된 경우에는 공급받은 날로부터 3월이내, 그사실을 알게 된 날로부터 30일이내
                      <br></br><br></br></p>

                      <h2>교환 및 반품이 불가능한 경우</h2>
                      <p>- 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단, 상품의 내용을 확인하기 위하여
                        포장 등을 훼손한 경우는 제외<br></br>
                      - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우
                        (예 : 가전제품, 식품, 음반 등, 단 액정화면이 부착된 노트북, LCD모니터, 디지털 카메라 등의 불량화소에
                        따른 반품/교환은 제조사 기준에 따릅니다.)<br></br>
                      - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 단, 화장품등의 경우 시용제품을
                        제공한 경우에 한 합니다.<br></br>
                      - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우<br></br>
                      - 복제가 가능한 상품등의 포장을 훼손한 경우<br></br>
                        (자세한 내용은 고객만족센터 1:1 E-MAIL상담을 이용해 주시기 바랍니다.)<br></br><br></br>

                      ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다.
                        (색상 교환, 사이즈 교환 등 포함)
                        </p>
                    
                    </div>

                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Detail;