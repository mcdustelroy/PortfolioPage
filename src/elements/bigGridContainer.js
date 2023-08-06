import React from "react";
import ReactPhotoGallery from "./reactPhotoGallery.js";

const bigGridContainer = ({ content }) => {
	return (
		<div className="big-con">
			{content.map((group) => (
				<ReactPhotoGallery key={group.title} {...group} />
			))}
		</div>
	);
};

export default bigGridContainer;

