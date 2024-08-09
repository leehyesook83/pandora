import React from "react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'

function Main(props){
    return(
        <section id='main'>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            {
                [1,2,3].map((a)=>{
                return(
                    <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/slide-${a}.jpg`}/></SwiperSlide>
                )
                })
            }
            ...
            </Swiper>
        </section>
    )
}

function Section1(props){
    return(
        <section id='section1'>
            <div className='txt'>
            <h1 className='title'>About Pandora</h1>
            <p>덴마크 코펜하겐의 작은 공방에서 시작한 PANDORA 쥬얼리는 현재 50여 개국에서 판매되고 있는 세계적인 쥬얼리 브랜드 입니다.</p>
            <p>유니크한 보헤미안 스타일의 쥬얼리를 선보여 왔으며 이러한 비젼이 지금의 판도라를 만들어낸 초석이 되었습니다.</p>
            </div>
            <div className='box'>
            <div>
                {
                [1,2].map((a)=>{
                    return(
                    <img src={`${process.env.PUBLIC_URL}/img/gallery-${a}.jpg`}/>
                    )
                })
                }
            </div>
            <div>
                {
                [3,4].map((a)=>{
                    return(
                    <img src={`${process.env.PUBLIC_URL}/img/gallery-${a}.jpg`}/>
                    )
                })
                }
            </div>
            </div>
        </section>
    )
}

function Section2(props){
    let navigate = useNavigate()
    return(
        <section id='section2'>
            <div className='txt'>
            <h1 className='title'>New item</h1>
            <p>다양한 귀금속으로 제작되고 수작업으로 완성된 판도라의 최신 상품을 살펴보세요.</p>
            <p>당신의 독특한 스타일을 보완하는 주얼리를 찾아보세요.</p>
            </div>
            <div className='box'>
            {
                props.newdata.map((a,i)=>{
                return(
                    <div onClick={()=>{
                        navigate('/detail');
                        props.setData(props.newdata[i]);
                        props.setDatas(props.newdataDetail[i]);
                    }}>
                    <img className="bg" src={`${process.env.PUBLIC_URL}${props.newdata[i].imgUrl}`}/>
                    <h1>{props.newdata[i].title}</h1>
                    <p>{props.newdata[i].content}</p>
                    <p className='line'>{props.Comma(props.newdata[i].Aprice)}원</p>
                    <p className='price'>{props.Comma(props.newdata[i].price)}원</p>
                    <br/>
                    <span className='pBox'>BEST</span><span className='pBox'>NEW</span>
                    </div>
                )
                })
            }
            </div>
        </section>
    )
}

function Section3(props){
    return(
        <section id='section3'>
            <div className='box'>
            <div className='txt'>
                <h1 className='title'>The Pandora Journey</h1>
                <p>모든 여성들에게 좋은 품질, 모던한 디자인의 진정한 주얼리를 합리적인 가격에 제공합니다.</p>
            </div>
            {
                [1,2,3].map((a)=>{
                return(
                    <img src={`${process.env.PUBLIC_URL}/img/banner-${a}.jpg`}/>
                )
                })
            }
            </div>
        </section>
    )
}

function Section4(props){
    let navigate = useNavigate()
    return(
        <section id='section4'>
            <div className='box'>
            <img src={`${process.env.PUBLIC_URL}/img/left_gallery.jpg`}/>
            <div className='sBox'>
                <h1 className='title'>MD item</h1>
                <p>다양한 금속과 보석을 사용하여 모든 라인이 서로 어울리게 디자인 되어 있습니다.</p>
                <p>당신의 개성에 맞는 주얼리를 찾아 믹스매치 하세요.</p>
                <div className='sSlide'>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
                {
                    props.mddata.map((a,i)=>{
                    return(
                        <SwiperSlide
                        onClick={()=>{
                            navigate('/detail');
                            props.setData(props.mddata[i]);
                            props.setDatas(props.mddataDetail[i]);
                        }}>
                        <img className='bg' src={`${process.env.PUBLIC_URL}${props.mddata[i].imgUrl}`}/>
                        <h1>{props.mddata[i].title}</h1>
                        <p>{props.mddata[i].content}</p>
                        <p className='line'>{props.Comma(props.mddata[i].Aprice)}원</p>
                        <p className='price'>{props.Comma(props.mddata[i].price)}원</p>
                        <br/>
                        <span className='pBox'>BEST</span><span className='pBox'>NEW</span>
                        </SwiperSlide>
                    )
                    })
                }
                ...
                </Swiper>
                </div>
            </div>
            </div>
        </section>
    )
}

function Section5(props){
    let navigate = useNavigate()
    return(
        <section id='section5'>
            <div className='txt'>
            <h1 className='title'>Best item</h1>
            <p>제품 하나하나에 스토리와 즐거움이 있는 세계적인 주얼리를 만나보세요.</p>
            </div>
            <div className='box'>
            {
                props.bestdata.map((a,i)=>{
                return(
                    <div onClick={()=>{
                        navigate('/detail');
                        props.setData(props.bestdata[i]);
                        props.setDatas(props.bestdataDetail[i]);
                    }}>
                    <img className='bg' src={`${process.env.PUBLIC_URL}${props.bestdata[i].imgUrl}`}/>
                    <h1>{props.bestdata[i].title}</h1>
                    <p>{props.bestdata[i].content}</p>
                    <p className='line'>{props.Comma(props.bestdata[i].Aprice)}원</p>
                    <p className='price'>{props.Comma(props.bestdata[i].price)}원</p>
                    <br/>
                    <span className='pBox'>BEST</span><span className='pBox'>NEW</span>
                    </div>
                )
                })
            }
            </div>
        </section>
    )
}

function Section6(props){
    return(
        <section id='section6'>
            <div className='box'>
                <div className='txt'>
                <h1 className='title'>Follow</h1>
                <h1 className='title'>our Pandora</h1>
                </div>
                <div className='top'>
                <div className='w1'>
                    <div>
                    <div className='embo'></div>
                    <img src={`${process.env.PUBLIC_URL}/img/instagram-1.jpg`}/>
                    </div>
                </div>
                <div className='w1'>
                    <div>
                    <div className='embo'></div>
                    <img src={`${process.env.PUBLIC_URL}/img/instagram-2.jpg`}/>
                    </div>
                </div>
                <div className='w1'>
                    <div>
                    <div className='embo'></div>
                    <img src={`${process.env.PUBLIC_URL}/img/instagram-3.jpg`}/>
                    </div>
                </div>
                <div className='w1'></div>
                <div className='w2 title'>
                    follow us @pandora_official
                </div>
                <div className='w1'>
                    <div>
                    <div className='embo'></div>
                    <img src={`${process.env.PUBLIC_URL}/img/instagram-4.jpg`}/>
                    </div>
                </div>
                <div className='w1'>
                    <div>
                    <div className='embo'></div>
                    <img src={`${process.env.PUBLIC_URL}/img/instagram-5.jpg`}/>
                    </div>
                </div>
                </div>
                <div className='btm'>
                <img src={`${process.env.PUBLIC_URL}/img/slogan-img-1.jpg`}/>
                <img src={`${process.env.PUBLIC_URL}/img/slogan-img-2.jpg`}/>
                <img src={`${process.env.PUBLIC_URL}/img/slogan-img-3.jpg`}/>
                <span className='title st1'>You embody love, you live it. Radiate it. Initiate it.</span>
                <span className='title st2'>You embody love, you live it. Radiate it. Initiate it.</span>
                </div>
            </div>
        </section>
    )
}

export {Main,Section1,Section2,Section3,Section4,Section5,Section6};