import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TranslateIcon from "@mui/icons-material/Translate";
import HandymanIcon from "@mui/icons-material/Handyman";
import SwipeDownIcon from '@mui/icons-material/SwipeDown';

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const iconLightr = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673018778/portfolio/about/512px-Adobe_Photoshop_Lightroom_Classic_CC_icon.svg_wsr4tz.png"
		alt=""
	/>
);
const iconEx = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673018778/portfolio/about/272703_dhxatu.png"
		alt=""
	/>
);

const iconWord = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673018778/portfolio/about/647713-word-512_bfttf0.png"
		alt=""
	/>
);
const iconR = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673024603/portfolio/about/R_hd96dx.jpg"
		alt=""
	/>
);
const iconJs = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673025363/portfolio/about/Artboard_3_nbhhc5.jpg"
		alt=""
	/>
);
const iconCss = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673025363/portfolio/about/Artboard_2_gxfwgm.jpg"
		alt=""
	/>
);
const iconReact = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673034909/portfolio/about/P1dsNgj-f1_yi5roc.png"
		alt=""
	/>
);
const iconHtml = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673025362/portfolio/about/Artboard_1_ppqdfh.jpg"
		alt=""
	/>
);
const iconMongo = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673026204/portfolio/about/MongoDB-sm-logo-500x400-1-1_vjx4zw.webp"
		alt=""
	/>
);
const iconNode = (
	<img
		className="about-img-link"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1673026606/portfolio/about/nodejs-1-logo_dnvidm.png"
		alt=""
	/>
);

const About = () => {
	const photo = (
		<img
			className="about-img"
			src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1690387453/492a54c1-5c33-47cd-871b-bce1b3052c59_odnd2u.jpg"
			alt=""
			style={{borderRadius:'5%', marginTop:'40px'}}
		/>
	);
	const photo2 = (
		<img
			className="about-img"
			src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1690466608/e17f59cf-ceea-45d9-8c92-eaafc5122a1b_dujw5l.jpg"
			alt=""
			style={{borderRadius:'50%'}}
		/>
	);
	const photoUdemi = (
		<img
			className="about-img"
			src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1672852420/portfolio/about/nxZY4zVv_400x400_hfgxpo.png"
			alt=""
		/>
	);
	const photoBridge = (
		<img
			className="about-img"
			src="https://bridge.edu/tefl/img/myimg/svg/logo-bridge-color.svg?v=8cc5750c0c73d03ebc1301f7a925c1b90e705951"
			alt=""
		/>
	);
	const photoUVU = (
		<img
			className="about-img"
			src="https://upload.wikimedia.org/wikipedia/en/a/a1/Utah_Valley_University_seal.svg"
			alt=""
		/>
	);
	const photoFAA = (
		<img
			className="about-img"
			src="data:image/png;base64,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"
			alt=""
		/>
	);
	const photoPCHS = (
		<img
			className="about-img"
			src="https://www.pcschools.us/cms/lib/UT50010789/Centricity/Template/GlobalAssets/images///logos/PCHS.png"
			alt=""
		/>
	);
	const photoUHI = (
		<img
			className="about-img"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKAmSnTkfcY51QpTe-w3bJt_z8tsMLffyUHLsLJI_rbZj548ECGjfmSyxELrpQaV-uCc&usqp=CAU"
			alt=""
		/>
	);
	
	return (
		<div>
			<div className="about-top-block">
				<div className="about-photo">{photo}</div>
				<div className="about-description">
					<h1 className="title-con title-con-about">Dustin McElroy</h1>
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
					Helicopter pilot turned developer
					<br />
					Previously IFR helicopter captain with <span className="about-desc-bold">over 5000 hours</span> flight-time
					<br />
					Made a career change into web-development and programming
					<br />
					Programming is more fun!
					<br />
				</div>
			</div>

			<div className="about-section-background">
				<div className="about-section-name">
					<SchoolIcon sx={{ fontSize: 40 }} />
					<div className="about-exp-block">
						<h1>Education</h1>
					</div>
				</div>
			</div>

			<div className="about-section-container">
				<div className="about-dotted-line"></div>
				<div className="about-riteofline-container">
					<div className="about-section-block">
						<div className="about-year">
							<div>2022</div>
							<br />
							<div className="br-hide"></div>
							<div>2021</div>
						</div>
						<div className="about-course">
							<div>React Front To Back</div>
							<div className="about-course-by">(by Brad Traversy)</div>
							<div>The Web Developer Bootcamp</div>
							<div className="about-course-by">(by Colt Steele)</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Udemi</div>
								<div className="about-uni-desription">(online courses)</div>
							</div>
							<div className="about-uni-logo">{photoUdemi}</div>
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
							<div className="about-uni-text">
								<div className="about-uni-name">FAA issued</div>
								<div className="about-uni-desription">(small unmanned aircraft system)</div>
							</div>
							<div className="about-uni-logo">{photoFAA}</div>
						</div>
					</div>

					<div className="about-section-block">
						<div className="about-year">
							<div>2014</div>
						</div>
						<div className="about-course">
							<div>TEFL certificate (Teaching English as a Foreign Language)</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Bridge Education</div>
								<div className="about-uni-desription">(120-hour online diploma)</div>
							</div>
							<div className="about-uni-logo">{photoBridge}</div>
						</div>
					</div>

					<div className="about-section-block">
						<div className="about-year">
							<div>2011</div>
						</div>
						<div className="about-course">
							<div>
								Completed Airline Transport Pilot 
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">FAA issued</div>
								<div className="about-uni-desription">(Rotorcraft-helicopter AB-139; AW139)</div>
							</div>
							<div className="about-uni-logo">{photoFAA}</div>
						</div>
					</div>

					<div className="about-section-block">
						<div className="about-year">
							<div>2004 - 2010</div>
						</div>
						<div className="about-course">
							<div>
								University: Aviation Professional Pilot
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Utah Valley University</div>
								<div className="about-uni-desription">(bachelor of science degree)</div>
							</div>
							<div className="about-uni-logo">{photoUVU}</div>
						</div>
					</div>

					<div className="about-section-block">
						<div className="about-year">
							<div>2004 - 2005 </div>
						</div>
						<div className="about-course">
							<div>Flight school</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Universal Helicopters Inc.</div>
								<div className="about-uni-desription">(ratings: private pilot, commercial, instrument, CFI, CFII)</div>
							</div>
							<div className="about-uni-logo">{photoUHI}</div>
						</div>
					</div>

					<div className="about-section-block">
						<div className="about-year">
							<div>2000 - 2004 </div>
						</div>
						<div className="about-course">
							<div>High school diploma</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Park City High School</div>
								<div className="about-uni-desription">(3.9 GPA)</div>
							</div>
							<div className="about-uni-logo">{photoPCHS}</div>
						</div>
					</div>
				</div>
			</div>

			<div className="about-section-background">
				<div className="about-section-name">
					<BusinessCenterIcon sx={{ fontSize: 40 }} />
					<div className="about-exp-block">
						<h1>Experience</h1>
					</div>
					<h5>Click company links</h5>
					<SwipeDownIcon sx={{ fontSize: 20 }} />
				</div>
			</div>

			<div className="about-section-container">
				<div className="about-dotted-line"></div>
				<div className="about-riteofline-container">

					<div className="about-section-block">
						<div className="about-year">
							<div>2021 - Present</div>
						</div>
						<div className="about-course">
							<div>
								Freelancer & Student
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Web-development</div>
								<div className="about-uni-desription">Brest, Belarus</div>
							</div>
								<div className="about-uni-logo">
									<a
									href="https://github.com/mcdustelroy"
									target="_blank"
									rel="noreferrer noopener"
									className="about-social-link">
									{photo2}
									</a>
								</div>
							{/* <div className="about-uni-logo">{photo2}</div> */}
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>2019 - 2021</div>
						</div>
						<div className="about-course">
							<div>
								Bristow Group Inc.
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">International IFR helicopter captain</div>
								<div className="about-uni-desription">Helicopters: AW139</div>
								<div className="about-uni-desription">Paramaribo, Suriname</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://www.bristowgroup.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="https://d1io3yog0oux5.cloudfront.net/_f82d24443da1802f9e06da54174e3bc9/bristowgroup/files/theme/images/logo-header.svg"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>	
					<div className="about-section-block">
						<div className="about-year">
							<div>Summer 2018</div>
						</div>
						<div className="about-course">
							<div>
								Wollaston Lake fishing lodge
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Fishing guide assistant</div>
								<div className="about-uni-desription">Seasonal job at upscale remote fishing lodge</div>
								<div className="about-uni-desription">Remote, northern Saskatchewan, Canada</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://wollastonlakelodge.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="https://wollastonlakelodge.com/wp-content/uploads/2020/11/WLL-Logo-Negative-250x250-1.png"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2017 - 2018</div>
						</div>
						<div className="about-course">
							<div>
								Siam Knowledge
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">TEFL English teacher in Thailand</div>
								<div className="about-uni-desription">Taught grades 1-3, english/science/math/computers</div>
								<div className="about-uni-desription">Phetchabun, Thailand</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://tefl.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="data:image/jpeg;base64,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"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2016 - 2017</div>
						</div>
						<div className="about-course">
							<div>
								7Bar Aviation
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">SPIFR EMS helicopter pilot</div>
								<div className="about-uni-desription">Helicopters: A109</div>
								<div className="about-uni-desription">New Mexico/Virginia, USA</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://www.7bar.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="data:image/jpeg;base64,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"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2015 - 2016</div>
						</div>
						<div className="about-course">
							<div>
								Air Medical Research Group <br />
								(now Guardian flight)
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">EMS Helicopter pilot</div>
								<div className="about-uni-desription">Helicopters: AS350</div>
								<div className="about-uni-desription">North Dakota/Wyoming/New Mexico/Arizona, USA</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://www.guardianflight.com/home"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="data:image/jpeg;base64,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"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2011 - 2013</div>
						</div>
						<div className="about-course">
							<div>
								Era Helicopters Inc. <br />(now Bristow Group Inc.)
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">International offshore IFR helicopter captain</div>
								<div className="about-uni-desription">Helicopters: AW139</div>
								<div className="about-uni-desription">Louisiana/Texas/Alambama, USA</div>
								<div className="about-uni-desription">Maldanado, Uruguay</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://www.bristowgroup.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="data:image/png;base64,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"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2006 - 2011</div>
						</div>
						<div className="about-course">
							<div>
								Era Helicopters Inc. <br />(now Bristow Group Inc.)
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Offshore VFR helicopter captain</div>
								<div className="about-uni-desription">Helicopters: AS350, EC120, A119</div>
								<div className="about-uni-desription">Louisiana/Texas/Alambama, USA</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://www.bristowgroup.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="data:image/png;base64,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"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2005 - 2006</div>
						</div>
						<div className="about-course">
							<div>
								Universal Helicopters Inc. <br />
								now Universal Flight Concepts
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Flight Instructor (CFI and CFII)</div>
								<div className="about-uni-desription">Helicopters: R22, R44</div>
								<div className="about-uni-desription">Provo, Utah, USA</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://www.universalheli.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKAmSnTkfcY51QpTe-w3bJt_z8tsMLffyUHLsLJI_rbZj548ECGjfmSyxELrpQaV-uCc&usqp=CAU"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2002 - 2004</div>
						</div>
						<div className="about-course">
							<div>
								Baja Cantina restaurant
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Busser and server assistant</div>
								<div className="about-uni-desription">Park City, Utah, USA</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://www.bajaparkcity.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="https://www.bajaparkcity.com/img/logo.png"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		
					<div className="about-section-block">
						<div className="about-year">
							<div>2000 - 2002</div>
						</div>
						<div className="about-course">
							<div>
								McDonalds restaurant
							</div>
						</div>
						<div className="about-univer">
							<div className="about-uni-text">
								<div className="about-uni-name">Teller and drive-thru assistant</div>
								<div className="about-uni-desription">Park City, Utah, USA</div>
							</div>
							<div className="about-uni-logo">
								<a
								href="https://www.bajaparkcity.com/"
								target="_blank"
								rel="noreferrer noopener"
								className="about-social-link">
									<img
										className="about-img"
										src="data:image/png;base64,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"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>		

				</div>
			</div>
			<div className="about-section-background">
				<div className="about-section-name">
					<TranslateIcon sx={{ fontSize: 40 }} />
					<div className="about-exp-block about-exp-block2">
						<h1>Languages</h1>
					</div>
					<HandymanIcon sx={{ fontSize: 40 }} className="about-exp-block2-icon" />
					<div className="about-exp-block about-exp-block2">
						<h1>Tools</h1>
					</div>
				</div>
			</div>

			<div className="about-section-container ">
				<div className="about-riteofline-container about-section-lang-tools">
					<div className="about-lang-con">
						<div className="about-lang-single-con">
							<div className="about-lang-text">English</div>
							<div className="about-lang-circle-con">
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
							</div>
						</div>
						<div className="about-lang-single-con">
							<div className="about-lang-text">Russian</div>
							<div className="about-lang-circle-con">
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
							</div>
						</div>
						<div className="about-lang-single-con">
							<div className="about-lang-text">Spanish</div>
							<div className="about-lang-circle-con">
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-dark"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
								<div className="about-lang-circle-light"></div>
							</div>
						</div>
					</div>
					<div className="about-tools-con">
						<div className="about-tools-block ">
							<div className="about-tools-icon-con">{iconR}</div>
							<div className="about-tools-icon-con">{iconJs}</div>
							<div className="about-tools-icon-con">{iconCss}</div>
							<div className="about-tools-icon-con">{iconHtml}</div>
							<div className="about-tools-icon-con">{iconReact}</div>
							<div className="about-tools-icon-con">{iconMongo}</div>
							<div className="about-tools-icon-con">{iconNode}</div>
						</div>
						<div className="about-tools-block">
							<div className="about-tools-icon-con">{iconWord}</div>
							<div className="about-tools-icon-con">{iconEx}</div>
							<div className="about-tools-icon-con">{iconLightr}</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};
export default About;

