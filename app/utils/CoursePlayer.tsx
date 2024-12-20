import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
	videoUrl: string;
	title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {
	const [videoData, setVideoData] = useState({
		otp: "",
		playbackInfo: "",
	});

	useEffect(() => {
		axios
			.post("https://lms-server-exz5.onrender.com/api/v1/getVdoCipherOTP", {
				videoId: videoUrl,
			})
			.then((res) => {
				setVideoData(res.data);
			});
	}, [videoUrl]);

	return (
		<>
			<div
				style={{
					position: "relative",
					paddingTop: "56.25%",
					overflow: "hidden",
				}}
			>
				{videoData.otp && videoData.playbackInfo !== "" && (
					<iframe
						src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=lqhdoLSSMzUeGntv`}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							borderRadius: "16px",
							border: 0,
						}}
						allowFullScreen={true}
						allow='encrypted-media'
					/>
				)}
			</div>
		</>
	);
};

export default CoursePlayer;
