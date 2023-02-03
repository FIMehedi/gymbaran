import Image from 'next/image';

function GradientEllipse({ bg, svgName }) {
	return (
		<div className={`${bg} rounded-full p-4 w-fit h-fit shadow-secondary`}>
			<Image
				src={`/images/svg/${svgName}`}
				alt=""
				width="30"
				height="30"
				className="h-5 lg:h-8 w-5 lg:w-8"
			/>
		</div>
	);
}

export default function RightSide() {
	return (
		<div className="w-full md:w-1/2">
			<div className="relative">
				<Image
					src="/images/hero-cover-img.png"
					alt=""
					width="400"
					height="400"
					className="w-full md:w-auto h-auto md:h-full ml-0 md:ml-auto mr-0 lg:mr-10"
				/>

				<div className="absolute top-16 right-0 flex w-full justify-between items-center">
					<div className="flex justify-between items-center  bg-white px-2 lg:px-4 py-1 lg:py-2 rounded-lg shadow-primary ml-0 lg:ml-10">
						<GradientEllipse
							bg="bg-gr-F8A422-FEDEAC"
							svgName="dancer-motion.svg"
						/>
						<div className="pl-2 lg:pl-4 text-dark-default">
							<h4 className="font-bold text-xs lg:text-base">150+</h4>
							<p className="opacity-[.6] text-xs lg:text-base">Members</p>
						</div>
					</div>
					<GradientEllipse
						bg="bg-gr-4BACE1-D8F1FF"
						svgName="person-practicing-a-strengthen-posture.svg"
					/>
				</div>

				<div className="flex justify-between w-full items-center absolute right-0 lg:-right-10 bottom-10">
					<GradientEllipse
						bg="bg-gr-5478EF-D6DFFF"
						svgName="person-practicing-a-strengthen-posture.svg"
					/>
					<div className="flex flex-col justify-center items-center  bg-white px-3 lg:px-6 py-2 lg:py-4 rounded-lg shadow-primary">
						<GradientEllipse bg="bg-[#6765F0]" svgName="gallery.svg" />
						<div className="pt-2 text-dark-default text-center">
							<h4 className="font-bold text-xs lg:text-base">Zaqky Simorang</h4>
							<p className="opacity-[.6] text-xs lg:text-base">Trainer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
