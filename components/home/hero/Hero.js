import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function Hero() {
	return (
		<>
			<div className=" bg-shadow opacity-[.3] bg-[#F3B411] top-[80px] left-[-180px]" />
			<section className="container flex flex-col md:flex-row gap-8 justify-center md:justify-between items-end py-8">
				<LeftSide />
				<RightSide />
			</section>
		</>
	);
}
