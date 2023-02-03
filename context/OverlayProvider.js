import { createContext, useState } from 'react';

export const OVERLAY_CONTEXT = createContext();

export default function OverlayProvider({ children }) {
	const [overlay, setOverlay] = useState(false);
	const context = { overlay, setOverlay };
	return (
		<OVERLAY_CONTEXT.Provider value={context}>
			{children}
		</OVERLAY_CONTEXT.Provider>
	);
}
