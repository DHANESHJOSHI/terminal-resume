import { GoVerified } from "react-icons/go";
import { SiGithub, SiInstagram, SiLinkedin, SiPatreon, SiYoutube } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/DHANESHJOSHI",
			text: "@DhaneshJoshi",
		},
		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/dhaneshjoshi/",
			text: "@dhanesh-joshi",
		},
		{
			title: "Instagram",
			Icon: SiInstagram,
			href: "https://www.instagram.com/dhaneshjoshi/",
			text: "@dhaneshjoshi",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://media.licdn.com/dms/image/v2/D4D03AQErpEoVIKcVRQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724000917883?e=1730937600&v=beta&t=eMPI4dTnLWO1GaHR-bUrmQ8H3a5YEBVagteryYftAbQ"
					alt="DhaneshJoshi"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">DhaneshJoshi</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 23 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a software developer and a tech enthusiast. I love
				development and like to learn new thing related to coding and sharing it
				to the internet through my Instagram.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
