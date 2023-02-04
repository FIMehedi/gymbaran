import Image from 'next/image';
import Link from 'next/link';
import { HiArrowSmRight } from 'react-icons/hi';

export default function FeatureItem({ svgName, url, position, children }) {
	return (
		<div className="  w-full md:w1/3">
			<div
				className={`
        ${position === 'center' && 'md:mx-auto'} 
        ${position === 'end' && 'md:ml-auto'}
         w-fit flex items-center gap-4 lg:gap-8`}
			>
				<div className="rounded-xl p-4 bg-[rgba(255,255,255,0.25)] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px]">
					<Image
						src={`/svg/${svgName}`}
						width={40}
						height={40}
						alt="svgName"
						className="w-full h-full"
					/>
				</div>
				<div className="h-[80px] lg:h-[100px] flex flex-col justify-between">
					<h4 className="text-base lg:text-xl font-bold text-white">
						{children}
					</h4>
					<Link href={url} className="text-white opacity-50 flex items-center">
						<span className="text-sm md:text-base">Learn more </span>
						<HiArrowSmRight />
					</Link>
				</div>
			</div>
		</div>
	);
}
