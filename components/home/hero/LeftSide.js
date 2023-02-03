import Image from 'next/image';
import Link from 'next/link';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

function Brand({ imgName, alt }) {
	return (
		<li>
			<Image
				src={`/images/brands/${imgName}`}
				width={60}
				height={60}
				alt={alt}
			/>
		</li>
	);
}

export default function LeftSide() {
	return (
		<div className="w-full md:w-1/2">
			<div className="w-full max-w-[450px]">
				<h2 className="text-dark-default font-bold text-3xl lg:text-[56px] leading-[140%] lg:leading-[78px] tracking-[.01em] pb-4">
					Healthy in side
					<br />
					<span className="text-secondary-default font-sporting-grotesque">
						fresh
					</span>
					<span> out side</span>
				</h2>
				<p className="text-dark text-sm sm:text-base opacity-[.6] text-justify leading-[28px] tracking-[.01em] pb-2">
					Exercise is a very important need for our body. Health and fitness
					will be obtained if you can do regular exercise and run a healthy
					routine.
				</p>
				<div className="flex justify-between items-center py-4">
					<Link
						href="#"
						className="flex justify-between items-center bg-primary-default rounded-lg px-4 py-3 text-white w-1/2 shadow-primary"
					>
						<span className="text-sm sm:text-base">Get started</span>
						<IoIosArrowDroprightCircle className="text-lg sm:text-2xl" />
					</Link>
					<Link
						href="#"
						className="flex justify-between items-center bg-white rounded-lg px-4 py-3 text-primary-default w-[40%] min-w-fit shadow-primary"
					>
						<BsFillPlayCircleFill className="text-primary-default text-lg sm:text-2xl" />
						<span className="pl-2 text-sm sm:text-base">Learn more</span>
					</Link>
				</div>
				<div className="">
					<h4 className="py-4 text-dark-default text-sm sm:text-base">
						Brands
					</h4>
					<ul className="flex justify-between items-center">
						<Brand imgName="nike.png" alt="Nike" />
						<Brand imgName="adidas.png" alt="Adidas" />
						<Brand imgName="puma.png" alt="Puma" />
						<Brand imgName="reebook.png" alt="Reebook" />
					</ul>
				</div>
			</div>
		</div>
	);
}
