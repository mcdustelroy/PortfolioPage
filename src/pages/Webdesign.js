import React from "react";
import CampaignIcon from '@mui/icons-material/Campaign';

const candleStixxIcon = (
	<img
		className="main-page-img"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1691262679/screen_social_xq97mg.jpg"
		alt="data vis"
	/>
);
const facebookIcon = (
	<img
		className="main-page-img"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1691262679/screen_social_xq97mg.jpg"
		alt="data vis"
	/>
);
const coolPlacesIcon = (
	<img
		className="main-page-img"
		// src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1671470777/portfolio/website/calc_s_pkf7wq.jpg"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1691262679/screen_coolplaces_gy0csn.jpg"
		alt="data vis"
	/>
);
const gitHubFinderIcon = (
	<img
		className="main-page-img"
		// src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1671471006/portfolio/website/css_lyelkk.jpg"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1691262679/screen_githab_wq00lj.jpg"
		alt="frontend"
	/>
);
const contactKeeperIcon = (
	<img
		className="main-page-img"
		// src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1671550968/portfolio/website/sun2_neohis.jpg"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1691262679/screen_kontakth_wjwob9.jpg"
		alt="about"
	/>
);
const goalSetterIcon = (
	<img
		className="main-page-img"
		// src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1671534543/portfolio/website/space_qgxxcd.jpg"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1691262679/screen_goal_hhihvw.jpg"
		alt="about"
	/>
);

const Webdesign = () => {
	return (
		<div>
			<h1 className="title-con title-websites"> Web Development </h1>
			<h5 className="subtitle">
				&nbsp;
				<CampaignIcon /> 
				<div>Some links require spin-up from the host and can take up to a minute.  Please be patient.</div>
			</h5>
			<div className="con-websites">
				<div className="wide-block-con">
					<div className="wide-photo-con">
						<a
							href="https://candlestixx.onrender.com/"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							{candleStixxIcon}
						</a>
					</div>
					<h3>
						<a
							href="https://candlestixx.onrender.com/"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							React App
						</a>
					</h3>
					<h5 className="sub-title">Financial candlestick Analysis App</h5>
				</div>
				<div className="wide-block-con">
					<div className="wide-photo-con">
						<a
							href="https://dustinbook.onrender.com/64cf7624305e3d2471fb7429"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							{facebookIcon}
						</a>
					</div>
					<h3>
						<a
							href="https://dustinbook.onrender.com/64cf7624305e3d2471fb7429"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							MERN + JWT + cloudinary
						</a>
					</h3>
					<h5 className="sub-title">social media site with images/comments/friends</h5>
				</div>

				<div className="wide-block-con">
					<div className="wide-photo-con">
						<a
							href="https://cool-places-full-stack-app.onrender.com/"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							{coolPlacesIcon}
						</a>
					</div>
					<h3>
						<a
							href="https://cool-places-full-stack-app.onrender.com/"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							MongoDb + Express + EJS + Node.js
						</a>
					</h3>
					<h5 className="sub-title">Coolplaces App using Mapbox</h5>
				</div>

				<div className="wide-block-con">
					<div className="wide-photo-con">
						<a
							href="https://contact-keeper-da98.onrender.com"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							{contactKeeperIcon}
						</a>
					</div>
					<h3>
						<a
							href="https://contact-keeper-da98.onrender.com"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							MERN + JWT + ClOUDINARY
						</a>
					</h3>
					<h5 className="sub-title">A fullstack app to store your contacts</h5>
				</div>

				<div className="wide-block-con">
					<div className="wide-photo-con">
						<a
							href="https://goal-setting-todo-app.onrender.com/login"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							{goalSetterIcon}
						</a>
					</div>
					<h3>
						<a
							href="https://goal-setting-todo-app.onrender.com/login"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							MERN + JWT + ClOUDINARY
						</a>
					</h3>
					<h5 className="sub-title">A fullstack React app for setting goals</h5>
				</div>

				<div className="wide-block-con">
					<div className="wide-photo-con">
						<a
							href="https://main--dustin-github-finder.netlify.app/"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							{gitHubFinderIcon}
						</a>
					</div>
					<h3>
						<a
							href="https://main--dustin-github-finder.netlify.app/"
							target="_blank"
							rel="noreferrer noopener"
							className="link">
							React
						</a>
					</h3>
					<h5 className="sub-title">Github finding app to search GitHub users</h5>
				</div>
			</div>
		</div>
	);
};

export default Webdesign;

