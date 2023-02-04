import GradientEllipse from '@/components/shared/widget/GradientEllipse';
import Image from 'next/image';

export default function BestLeftSide() {
	return (
		<div className="w-full md:w-1/2 relative">
			<Image
				src="/images/best-full-body.svg"
				alt="best-full-body"
				width="300"
				height="300"
				className="w-full lg:w-auto lg:h-full mx-auto"
			/>
			<div className="flex justify-between items-center  bg-white px-2 lg:px-4 py-1 lg:py-2 rounded-lg shadow-primary ml-0 lg:ml-10 absolute bottom-5 md:bottom-10 -left-3 md:-left-10">
				<GradientEllipse
					bg="bg-gr-5478EF-D6DFFF"
					svgName="crucified-pose.svg"
				/>
				<div className="pl-2 lg:pl-4 text-dark-default">
					<h4 className="font-bold text-xs lg:text-base">800 kall</h4>
					<p className="opacity-[.6] text-xs lg:text-base">Burn fat</p>
				</div>
			</div>
		</div>
	);
}
