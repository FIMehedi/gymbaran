import Image from 'next/image';

export default function GradientEllipse({ bg, svgName }) {
	return (
		<div className={`${bg} rounded-full p-4 w-fit h-fit shadow-secondary`}>
			<Image
				src={`/svg/${svgName}`}
				alt=""
				width="30"
				height="30"
				className="h-5 lg:h-8 w-5 lg:w-8"
			/>
		</div>
	);
}
