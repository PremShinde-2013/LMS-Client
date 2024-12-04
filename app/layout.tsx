"use client";
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/navbar";
import { Link } from "@nextui-org/link";
import socketIO from "socket.io-client";

import clsx from "clsx";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";
import Nav from "./components/Nav";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });
// export const metadata: Metadata = {
// 	title: {
// 		default: siteConfig.name,
// 		template: `%s - ${siteConfig.name}`,
// 	},
// 	description: siteConfig.description,
// 	themeColor: [
// 		{ media: "(prefers-color-scheme: light)", color: "white" },
// 		{ media: "(prefers-color-scheme: dark)", color: "black" },
// 	],
// 	icons: {
// 		icon: "/favicon.ico",
// 		shortcut: "/favicon-16x16.png",
// 		apple: "/apple-touch-icon.png",
// 	},
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<SessionProvider>
						<div className='relative flex flex-col h-screen'>
							<Nav />

							<main className='container mx-auto max-w-7xl pt-16 px-6 flex-grow    '>
								<Custom>{children}</Custom>
							</main>
						</div>
						<Toaster position='top-center' reverseOrder={false} />
					</SessionProvider>
				</Providers>
			</body>
		</html>
	);
}

type CustomProps = {
	children: React.ReactNode;
};

const Custom = ({ children }: CustomProps) => {
	const { isLoading } = useLoadUserQuery({});

	useEffect(() => {
		socketId.on("connection", () => { });
	}, []);

	return <div>{isLoading ? <Loader /> : <div>{children}</div>}</div>;
};
