"use client";
import { title } from "@/components/primitives";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Heading from "../utils/Heading";
import { useSelector } from "react-redux";
import Footer from "../components/Route/Footer";
import About from "../components/Route/About";

export default function AboutPage() {
	const { user } = useSelector((state: any) => state.auth);

	return (
		<>
			<Heading
				title={`${user?.name} Profile - LearnifyPro`}
				description='Explore coding courses and tutorials tailored for your learning needs at LearnifyPro. Enhance your skills with expert-led programming courses.'
				keywords='coding courses, programming tutorials, web development, software engineering, computer science, programming languages, coding bootcamp'
			/>
			<div className='h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center '>
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
				<div className='text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
					<div className=''>
						{" "}
						<About />
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
