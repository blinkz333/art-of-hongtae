import React from "react";
import pic from '../../assets/images/profile.jpg'

function PageHeader() {
 
  return (
    <>
    <section class="intro-section">
        <div class="container">

        <div class="heading-wrapper">
				<div class="row">
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="info">
							<i class="icon ion-ios-chatboxes-outline"></i>
							<div class="right-area">
								<h5>คิด....วาด</h5>
								<h5>ถ่ายทอด</h5>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="info">
							<i class="icon ion-ios-telephone-outline"></i>
							<div class="right-area">
								<h5>081-4228855</h5>
								<h6>MIN - FRI,8AM - 7PM</h6>
							</div>
						</div>
					</div>
					
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="info">
							<i class="icon ion-ios-chatboxes-outline"></i>
							<div class="right-area">
								<h5>E-mail</h5>
								<h6>p_hongtae@hotmail.com</h6>
							</div>
						</div>
					</div>
				</div>
		</div>

        <div class="intro">
            <div class="row">

                    <div class="col-sm-8 col-md-4 col-lg-3">
                        <div class="profile-img margin-b-30"><img src={pic} alt=""/></div>
					</div>

                    <div class="col-sm-10 col-md-5 col-lg-6">
                            <br/><br/>	
							<h2><b>Art-Of-Hongtae</b></h2>
							<h4 class="font-yellow">Online Gallary</h4>
							<ul class="information margin-tb-30"></ul>
                            <br/>
							<ul class="social-icons">
								{/* <li><a href="#"><i class="ion-social-pinterest"></i></a></li> */}
								{/* <li><a href="#"><i class="ion-social-linkedin"></i></a></li> */}
								<li><a href="https://www.instagram.com/art_of_hongtae/"><i class="ion-social-instagram"></i></a></li>
								<li><a href="https://web.facebook.com/artofhongtae"><i class="ion-social-facebook"></i></a></li>
								{/* <li><a href="https://twitter.com/hashtag/artofhongtae"><i class="ion-social-twitter"></i></a></li> */}
							</ul>
					</div>

            </div>
        </div>


        </div>
    </section>
    </>
  );
}

export default PageHeader;
