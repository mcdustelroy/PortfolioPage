import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import PersonIcon from "@mui/icons-material/Person";

const avatar = (
	<img
		className="main-speed"
		src="https://res.cloudinary.com/dmukgc5uu/image/upload/v1690294183/profilePhotoBalloons_pmemrh.jpg"
		alt="avatar"
		style={{borderRadius:'50%'}}
	/>
);
const avatar2 = (
	<img
		className="main-speed"
		src="https://res.cloudinary.com/dlu6j3gxg/image/upload/v1668431103/portfolio/dots-01_nzw0xq.png"
		alt="avatar"
		style={{borderRadius:'50%'}}
	/>
);

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box sx={{ height: 0, transform: "translateZ(0px)", flexGrow: 1, position: "fixed" }}>
			<SpeedDial
				ariaLabel="SpeedDial openIcon example"
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
				sx={{
					position: "absolute",
					top: 16,
					left: 16,
					"& .MuiFab-primary": {
						width: 80,
						height: 80,
						"& .MuiSpeedDialIcon-icon": { fontSize: 30 },
						"&:hover": { backgroundColor: "white", width: 80, height: 80, color: "gray" },
					},
				}}
				direction={"right"}
				icon={
					<SpeedDialIcon
						icon={
							<Link to="/" className="link-speed ">
								{avatar}
							</Link>
						}
						openIcon={
							<Link to="/" className="link-speed ">
								{avatar2}
							</Link>
						}
					/>
				}
				FabProps={{ style: { backgroundColor: "#fff" } }}>
				<SpeedDialAction
					icon={
						<Link to="/helicopters" className="link-speed">
							<AirplanemodeActiveOutlinedIcon />
						</Link>
					}
					tooltipTitle={"Helicopter Career"}
					onClick={handleClose}
				/>

				<SpeedDialAction
					icon={
						<Link to="/webdesign" className="link-speed">
							<LaptopMacIcon />
						</Link>
					}
					tooltipTitle={"Web Design"}
					onClick={handleClose}
				/>
				<SpeedDialAction
					icon={
						<Link to="/about" className="link-speed">
							<PersonIcon />
						</Link>
					}
					tooltipTitle={"About me"}
					onClick={handleClose}
				/>
			</SpeedDial>
		</Box>
	);
}

