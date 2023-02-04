import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function BestRightSide() {
	return (
		<div className="w-full md:w-1/2">
			<div className="py-8">
				<h3 className="text-dark-default text-[28px] md:text-[36px] lg:text-[46px] leading-[140%] lg:leading-[60px] tracking-[.01em] font-sporting-grotesque">
					Best full body
					<br />
					workout to lose fat
				</h3>
				<p className="text-justify text-sm md:text-base text-dark-default opacity-[.5] leading-[28px] tracking-[.01em] py-4">
					Exercise is a very important need for our body. Health and fitness
					will be obtained if you can do regular exercise and run a healthy
					routine. Even at home we still have to be diligent in exercising,
					either alone or with your friends at home. Healthy life makes you more
					excited to live the day
				</p>
				<Link
					href="#"
					className="flex items-center justify-between bg-primary-default py-3 px-4 w-[240px] rounded-lg text-white text-sm sm:text-base shadow-primary"
				>
					<span>Get Started</span>
					<BsArrowRight />
				</Link>
			</div>
		</div>
	);
}
