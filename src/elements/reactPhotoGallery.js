import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const ReactPhotoGallery = ({ title, images }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	return (
		<div className="gallery-con">
			<div className="images-con">
				<Gallery photos={images} targetRowHeight={150} margin={3} onClick={openLightbox} />
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox} showThumbnails={true}>
							<Carousel
								currentIndex={currentImage}
								views={images.map((x) => ({
									...x,
									srcset: x.srcSet,
									caption: x.title,
								}))}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			</div>
			<div className="photo-group-title">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default ReactPhotoGallery;

