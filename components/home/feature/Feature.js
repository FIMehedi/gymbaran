import FeatureItem from './FeatureItem';

export default function Feature() {
	return (
		<section className="container">
			<div className="flex flex-col md:flex-row items-center justify-between bg-[linear-gradient(87deg,#6462F0,#9190E9)] w-full rounded-lg shadow-primary p-6 md:p-8 lg:p-16 my-4 md:my-6 lg:my-8 gap-4">
				<FeatureItem svgName="crucified-pose.svg" url="#">
					<span>
						Get that 11 line <br /> in 30 days
					</span>
				</FeatureItem>
				<FeatureItem
					svgName="dancer-balance-posture-on-one-leg.svg"
					url="#"
					position="center"
				>
					<span>
						14 Days
						<br />
						sherd challenge
					</span>
				</FeatureItem>
				<FeatureItem svgName="dancer-motion.svg" url="#" position="end">
					<span>
						Get flat belly <br /> in 30 days
					</span>
				</FeatureItem>
			</div>
		</section>
	);
}
