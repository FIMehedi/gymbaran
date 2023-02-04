import BestFullBody from '@/components/home/best-full-body/BestFullBody';
import Feature from '@/components/home/feature/Feature';
import HealthyInSide from '@/components/home/healthy-in-side/HealthyInSide';
import Hero from '@/components/home/hero/Hero';

export default function Home() {
	return (
		<div>
			<Hero />
			<HealthyInSide />
			<Feature />
			<BestFullBody />
		</div>
	);
}
