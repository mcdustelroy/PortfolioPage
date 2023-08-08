import React from "react";

import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

import r44 from "../images/r44.png"
import r22 from "../images/r22.png"
import as350 from "../images/as350.png"
import ec120 from "../images/ec120.png"
import a119 from "../images/a119.png"
import a109 from "../images/a109.png"
import katana from "../images/katana.jpeg"
import c152 from "../images/c152.png"
import c172 from "../images/c172.png"
import drone from "../images/drone.png"

const Helicopter = () => {
	const photo = (
		<img
			className="me_and_aaron"
			src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1690465787/AARON_AND_DUSTIN_fdzlf1.jpg"
			alt=""
		/>
	);

	return (
		<div>
			<div className="about-top-block">
				<div className="about-photo">{photo}</div>
				<div className="about-description">
					<h1 className="title-con title-con-about">Helicopter Career</h1>
					<div className="social-links-block">
						<div className="social-link">
							<a
								href="https://github.com/mcdustelroy"
								target="_blank"
								rel="noreferrer noopener"
								className="social-link">
								<GitHubIcon />
							</a>
						</div>
						<div className="social-link">
							<a
								href="https://www.instagram.com/mcdustelroy/"
								target="_blank"
								rel="noreferrer noopener"
								className="social-link">
								<InstagramIcon />
							</a>
						</div>
						<div className="social-link">
							<a
								href="https://www.facebook.com/profile.php?id=868760155"
								target="_blank"
								rel="noreferrer noopener"
								className="social-link">
								<FacebookIcon />
							</a>
						</div>
						<div className="social-link">
							<a
								href="https://twitter.com/mcdustelroy"
								target="_blank"
								rel="noreferrer noopener"
								className="social-link">
								<TwitterIcon />
							</a>
						</div>
						<div className="social-link">
							<a
								href="https://wa.me/19087418383"
								target="_blank"
								rel="noreferrer noopener"
								className="social-link">
								<WhatsAppIcon />
							</a>
						</div>
						<div className="social-link">
							<a
								href="https://www.linkedin.com/in/dustin-mcelroy-329a143a/"
								target="_blank"
								rel="noreferrer noopener"
								className="social-link">
								<LinkedInIcon />
							</a>
						</div>
					</div>
					Over 5000 hours flight time with ATP rating
					<br />
					First flight at 14 years old, flight instructor at 19
					<br />
					Flight time in 9 countries, 7 helicopters, 5 airplanes
					<br />

				</div>
			</div>

			<div className="about-section-background">
				<div className="about-section-name">
					<AirplanemodeActiveOutlinedIcon sx={{ fontSize: 40 }} />
					<div className="about-exp-block">
						<h1>Flight Time</h1>
					</div>
				</div>
			</div>

			<div className="about-section-container">
				<div className="about-dotted-line"></div>
				<div className="about-riteofline-container">
					<div className="about-section-block">
						<div className="about-year">
							<div>Helicopter Time</div>
							<br />
						</div>
						<div className="about-course">
							<div>Total time</div>
							<div className="about-course-by">5,000 hours</div>
							<div>Pilot in Command time</div>
							<div className="about-course-by">4,700 hours</div>
							<div>Second in Command time</div>
							<div className="about-course-by">4,700 hours</div>
							<div>Offshore time</div>
							<div className="about-course-by">3,700 hours</div>
							<div>Emergency Medevac time</div>
							<div className="about-course-by">250 hours</div>
							<div>High Altitude time</div>
							<div className="about-course-by">1075 hours</div>
						</div>
						<div className="about-course">
							<div>Night time</div>
							<div className="about-course-by">238 hours</div>
							<div>NVG time (night vision goggles)</div>
							<div className="about-course-by">71 hours</div>
							<div>Simulated Instrument time</div>
							<div className="about-course-by">54 hours</div>
							<div>Actual Instrument time</div>
							<div className="about-course-by">200+ hours</div>
							<div>Multi-Engine Rotorcraft time</div>
							<div className="about-course-by">1,500 hours</div>
							<div>Turbine Helicopter</div>
							<div className="about-course-by">4,000 hours</div>
						</div>
					</div>

					<br />
					<div className="about-section-block">
						<div className="about-year">
							<div>Airplane Time</div>
							<br />
						</div>
						<div className="about-course">
							<div>Total time</div>
							<div className="about-course-by">72 hours</div>
							<div>Single Engine Land time</div>
							<div className="about-course-by">73</div>
							<div>Multi Engine Land time</div>
							<div className="about-course-by">10 hours</div>
						</div>
						<div className="about-course"></div>
					</div>

				</div>
			</div>

			<div className="about-section-background">
				<div className="about-section-name">
					<photoPilotWings sx={{ fontSize: 40 }} />
					<div className="about-exp-block">
						<h1>Timeline of Achievements</h1>
					</div>
				</div>
			</div>

			<div className="about-section-container">
				<div className="about-dotted-line"></div>
				<div className="about-riteofline-container">

					<div className="about-section-block">
						<div className="about-year">
							<div>1999</div>
						</div>
						<div className="about-course">
							<div>
								First Flight! <br />14 years old
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="about-img"
									src={katana}
									alt=""
								/>
							</div>
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>2003</div>
						</div>
						<div className="about-course">
							<div>
								Private Pilot license (airplane) <br />17 years old
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="about-img"
									src={katana}
									alt=""
								/>
							</div>
							<div className="heli-icons">
								<img
									className="about-img"
									src={c152}
									alt=""
								/>
							</div>
							<div className="heli-icons">
								<img
									className="about-img"
									src={c172}
									alt=""
								/>
							</div>
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>2004</div>
						</div>
						<div className="about-course">
							<div>
								First helicopter Flight!<br />Little Helicopter
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="r22"
									src={r22}
									alt=""
								/>
							</div>
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>2004</div>
						</div>
						<div className="about-course">
							<div>
								Private Pilot license (helicopter) <br />18 years old
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="r22"
									src={r22}
									alt=""
								/>
							</div>
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>2005</div>
						</div>
						<div className="about-course">
							<div>
								Flight Instructor (CFI/CFII) <br /> 19 years old
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="r22"
									src={r22}
									alt=""
								/>
							</div>
							<div className="heli-icons">
								<img
									className="about-img"
									src={r44}
									alt=""
								/>
							</div>
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>2006</div>
						</div>
						<div className="about-course">
							<div>
								Hired for my first "real" job in the Gulf of Mexico flying turbine helicopters
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="as350"
									src={as350}
									alt=""
								/>
							</div>
							<div className="heli-icons">
								<img
									className="a119"
									src={a119}
									alt=""
								/>
							</div>
							<div className="heli-icons">
								<img
									className="ec120"
									src={ec120}
									alt=""
								/>
							</div>
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>2011</div>
						</div>
						<div className="about-course">
							<div>
								Completed Airline Transport Pilot Rating and IFR Captain in AW139
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="aw139"
									src="data:image/jpeg;base64,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"
									alt=""
								/>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2015</div>
						</div>
						<div className="about-course">
							<div>
								Became an EMS pilot (emergency medical services)
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="as350"
									src={as350}
									alt=""
								/>
							</div>

						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2016</div>
						</div>
						<div className="about-course">
							<div>
								Became SPIFR EMS pilot (single pilot IFR, EMS)
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="a119"
									src={a119}
									alt=""
								/>
							</div>
							<div className="heli-icons">
								<img
									className="a109"
									src={a109}
									alt=""
								/>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2016</div>
						</div>
						<div className="about-course">
							<div>
								First Multi-Engline Airplanes
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="a119"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PHF2tD3dUOotZmQKntTSazn_D_IerMMfiA&usqp=CAU"
									alt=""
								/>
							</div>
							<div className="heli-icons">
								<img
									className="a109"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPi7w5A8KtqspzITLX33F9eyMl-HdxMofvQ&usqp=CAU"
									alt=""
								/>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2019</div>
						</div>
						<div className="about-course">
							<div>
								International IFR captain position. 
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="aw139"
									src="data:image/jpeg;base64,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"
									alt=""
								/>
							</div>
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>2019</div>
						</div>
						<div className="about-course">
							<div>
								Completed UAV rating
							</div>
						</div>
						<div className="about-univer">
							<div className="heli-icons">
								<img
									className="uav"
									src={drone}
									alt=""
								/>
							</div>
						</div>
					</div>					
				</div>
			</div>

			<div className="about-section-background">
				<div className="about-section-name">
					<ConnectingAirportsIcon sx={{ fontSize: 40 }} />
					<div className="about-exp-block about-exp-block2">
						<h1>Models Flown</h1>
					</div>
					<MilitaryTechIcon sx={{ fontSize: 40 }} className="about-exp-block2-icon" />
					<div className="about-exp-block about-exp-block2">
						<h1>Ratings Held</h1>
					</div>
				</div>
			</div>

			<div className="about-section-container ">
				<div className="about-riteofline-container about-section-lang-tools">
					<div className="about-lang-con">
						<div className="models-flown-boxes">
							<div className="about-lang-text">Katana DA20-C1</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src={katana}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">Cessna 152</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src={c152}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">Cessna 172</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src={c172}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">Piper Apache</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PHF2tD3dUOotZmQKntTSazn_D_IerMMfiA&usqp=CAU"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">Piper Comanche</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPi7w5A8KtqspzITLX33F9eyMl-HdxMofvQ&usqp=CAU"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">Robinson R22</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="r22"
										src={r22}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">Robinson R44</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src={r44}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">EC120</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src={ec120}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">AS350</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src={as350}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">A119</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src={a119}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">A109</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src={a109}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="models-flown-boxes">
							<div className="about-lang-text">AW139</div>
							<div className="about-lang-circle-con">
								<div className="heli-icons">
									<img
										className="about-img"
										src="data:image/jpeg;base64,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"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="about-lang-con"> */}
					<ul className="achievments">
						<li><span className="about-lang-text">Private pilot</span> - Airplane SEL</li>
						<br/>
						<li><span className="about-lang-text">Private pilot</span>  - Helicopter</li>
						<br/>
						<li><span className="about-lang-text">Commercial pilot</span>  - Helicopter</li>
						<br/>
						<li><span className="about-lang-text">Instrument pilot</span>  - Helicopter</li>
						<br/>
						<li><span className="about-lang-text">CFI</span> - Helicopter (certified flight instructor)</li>
						<br/>
						<li><span className="about-lang-text">CFII</span> - Helicopter (CFI-instrument)</li>
						<br/>
						<li><span className="about-lang-text">ATP</span> - Helicopter (airline transport pilot)</li>
						<br/>
						<li><span className="about-lang-text">UAV pilot</span></li>
					</ul>
					{/* </div> */}
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};
export default Helicopter;

