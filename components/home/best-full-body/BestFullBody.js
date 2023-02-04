import BestLeftSide from './BestLeftSide';
import BestRightSide from './BestRightSide';

export default function BestFullBody() {
	return (
		<section className="container flex flex-col-reverse md:flex-row justify-between items-center py-4 md:py-8 relative">
			<div className="bg-shadow bg-[#D388FF] -right-20 top-0  opacity-[.2] absolute" />
			<BestLeftSide />
			<BestRightSide />
		</section>
	);
}
