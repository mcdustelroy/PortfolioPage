import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Background from "../../src/images/backgroundimage.jpg";

const heliIcon = (
	<img
		className="main-page-img"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/c_fit/v1690465680/Hoist_practice_Suriname-29_ylbwdw.jpg"
		alt="data vis"
	/>
);
const websiteIcon = (
	<img
		className="main-page-img"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/c_fit/v1690467205/caba62d4-7500-46a4-a25e-f0b81a4256fb_usigbs.jpg"
		alt="data vis"
	/>
);
const aboutMeIcon = (
	<img
		className="main-page-img"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/c_thumb,g_auto/v1690466608/e17f59cf-ceea-45d9-8c92-eaafc5122a1b_dujw5l.jpg"
		alt="about"
	/>
);

const styles = {
  header: {
    backgroundImage: `url(${Background})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  }
}

const Main = () => {
	return (
	<div style={styles.header}>
		{/* <div className="main-page-big-con" style={styles.content}> */}
		<div className="main-page-big-con" >
			<div className="main-page-block-con">
				<div className="main-page-photo-con">
					<Link to="/helicopters" className="link-photo">
						{heliIcon}
					</Link>
				</div>
				<h3>
					<Link to="/helicopters" className="link">
						Helicopter Career
					</Link>
				</h3>
			</div>
			<div className="main-page-block-con">
				<div className="main-page-photo-con">
					<Link to="/webdesign" className="link-photo">
						{websiteIcon}
					</Link>
				</div>
				<h3>
					<Link to="/webdesign" className="link">
						Web development
					</Link>
				</h3>
			</div>
			<div className="main-page-block-con">
				<div className="main-page-photo-con">
					<Link to="/about" className="link-photo-about">
						{aboutMeIcon}
					</Link>
				</div>
				<h3>
					<Link to="/about" className="link">
						About
					</Link>
				</h3>
			</div>
			<div className="about-social-links-block so">
				<div className="about-social-link">
					<a
						href="https://github.com/mcdustelroy"
						target="_blank"
						rel="noreferrer noopener"
						className="social-link social-link-white">
						<GitHubIcon />
					</a>
				</div>
				<div className="social-link">
					<a
						href="https://www.instagram.com/mcdustelroy/"
						target="_blank"
						rel="noreferrer noopener"
						className="social-link social-link-white">
						<InstagramIcon />
					</a>
				</div>
				<div className="social-link">
					<a
						href="https://www.facebook.com/profile.php?id=868760155"
						target="_blank"
						rel="noreferrer noopener"
						className="social-link social-link-white">
						<FacebookIcon />
					</a>
				</div>
				<div className="social-link">
					<a
						href="https://twitter.com/mcdustelroy"
						target="_blank"
						rel="noreferrer noopener"
						className="social-link social-link-white">
						<TwitterIcon />
					</a>
				</div>
				<div className="social-link">
					<a
						href="https://wa.me/19087418383"
						target="_blank"
						rel="noreferrer noopener"
						className="social-link social-link-white">
						<WhatsAppIcon />
					</a>
				</div>
				<div className="social-link">
					<a
						href="https://www.linkedin.com/in/dustin-mcelroy-329a143a/"
						target="_blank"
						rel="noreferrer noopener"
						className="social-link social-link-white">
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Main;

