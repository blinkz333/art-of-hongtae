import React , { useState } from "react";

import ResponsiveGallery from 'react-responsive-gallery';

import ramakien from '../../assets/Json/ramakien'
import disney from '../../assets/Json/disney'
import thai from '../../assets/Json/thai'
import longka from '../../assets/Json/longka'
import {FaArrowCircleUp} from 'react-icons/fa';
import '../../App.css';


import { Collapse, Button, CardBody, Card } from 'reactstrap';

function PageBodyMobile() {

    const [showScroll, setShowScroll] = useState(false)

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    

    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);
    const toggle4 = () => setIsOpen4(!isOpen4);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 1000){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)
        }
      };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

   
        return (
            <>
            <br/>
            <div class="container">
			<div class="row">
				<div class="col-lg-12">
					<Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' , width: '100%' }}>รามเกียรติ์ - Redraw</Button>
                </div>
                <div class="col-lg-12">
					 <Button color="warning" onClick={toggle2} style={{ marginBottom: '1rem', width: '100%' }}>ตัวร้ายดิสนีย์ตัวโปรดทั้ง 11 ตัว</Button>
                </div>
                <div class="col-lg-12">
					<Button color="warning" onClick={toggle3} style={{ marginBottom: '1rem', width: '100%' }}>หนังสือเรียนภาษาไทย - Rework</Button>
                </div>
                <div class="col-lg-12">
					<Button color="warning" onClick={toggle4} style={{ marginBottom: '1rem', width: '100%' }}>ขีดขิน ลงกา อโยธยา REMIX</Button>
                </div>
			</div>
		</div>
           

      {/* รามเกียรติ์ - Redraw */}
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <section class="experience-section section">   
        <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="heading">
                    <h3><b>รามเกียรติ์ - Redraw</b></h3>
                    <h6 class="font-lite-black"><b>Ramakien - Redraw</b></h6>
                </div>
            </div>
        </div>
     </div>
     <div class="portfolioContainer">
                <ResponsiveGallery images={ramakien} useLightBox lightBoxAdditionalProps={{imagePadding : 350 }} />
          </div>  
     </section>
          </CardBody>
        </Card>
      </Collapse>
      {/* ตัวร้ายดิสนีย์ตัวโปรดทั้ง 11 ตัว */}
      <Collapse isOpen={isOpen2}>
        <Card>
          <CardBody>
          <section class="experience-section section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="heading">
                            <h3><b>ตัวร้ายดิสนีย์ตัวโปรดทั้ง 11 ตัว</b></h3>
                            <h6 class="font-lite-black"><b>11 favorite Disney villains</b></h6>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="portfolioContainer">
                <ResponsiveGallery images={disney}   />
            </div>
            </section>
        
          </CardBody>
        </Card>
      </Collapse>
      {/* หนังสือเรียนภาษาไทย - Rework */}
      <Collapse isOpen={isOpen3}>
        <Card>
          <CardBody>
          <section class="experience-section section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="heading">
                            <h3><b>หนังสือเรียนภาษาไทย - Rework </b></h3>
                            <h6 class="font-lite-black"><b>Thai language textbooks - Rework</b></h6>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="portfolioContainer">
                <ResponsiveGallery images={thai} />
            </div>
        
            </section>
          </CardBody>
        </Card>
      </Collapse>
      {/* ขีดขิน ลงกา อโยธยา REMIX */}
      <Collapse isOpen={isOpen4}>
        <Card>
          <CardBody>
          <section class="experience-section section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="heading">
                            <h3><b>ขีดขิน ลงกา อโยธยา REMIX</b></h3>
                            <h6 class="font-lite-black"><b>Kishkindha Longka Ayothaya Remix</b></h6>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="portfolioContainer">
                <ResponsiveGallery images={longka} />
            </div>
        
            </section>
          </CardBody>
        </Card>
      </Collapse>
      <section class="experience-section section">
            <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="heading">
                                <h3><b>About me</b></h3>
                                <h6 class="font-lite-black"><b>เกี่ยวกับฉัน</b></h6>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <p class="margin-b-50">เริ่มวาดรูปเล่นตามผนังบ้านตั้งเเต่ 2 ขวบ<br/>
        พอ 4 ขวบ เเม่กะพ่อพาไปเรียนกับครูสังคม ทองมี<br/>
        พอ 5 ขวบ ได้รางวัลวาดรูปที่โน่นที่นี่บ้างประปราย<br/>
        พอ 8 ขวบ ไปสอนวาดรุปออกทีวีกับครูสังคม<br/>
        พอ 11 ขวบ รายการเลิกจ้าง<br/>
        พอ 18 ขวบ เริ่มสอนความถนัด'ถาปัด ให้น้องๆ<br/>
        พอ 21 ขวบ สอนวาดรุปจริงจังให้ น้องๆ เพื่อนๆ พี่ๆ ที่สนใจ<br/>
        พอ 22 ขวบ มาช่วยอาจารย์สอนน้องปีหนึ่งวาดสีน้ำ ทั้งในเเละนอกสถานที่<br/>
        พอ 23 ขวบ ลองทำหัวโขน วาดสีน้ำ sketch อย่างบ้าคลั่ง<br/>
        พอ 24 ขวบ ออกเเบบเเละวางภาพรวมงานเเต่งงาน เขียนหนังสือ เเละวาดภาพประกอบ<br/>
        พอ 25 ขวบ เป็นวิทยากร พิธีกร เเละครูสอนวาดรูปทั่วไป อย่างต่อเนื่อง<br/>
        
        พอ....ก่อนละกัน^^</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        </>
        )
}

export default PageBodyMobile;
