import { OVERLAY_CONTEXT } from '@/context/OverlayProvider';
import { useContext } from 'react';

export default function Overlay() {
	const { overlay } = useContext(OVERLAY_CONTEXT);

	if (!overlay) return;

	return (
		<div className="absolute top-0 left-0 h-screen w-full z-10 bg-[#2643735b] backdrop-blur-[2px]"></div>
	);
}
