import { OVERLAY_CONTEXT } from '@/context/OverlayProvider';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';

function NavItem({ handler, children }) {
	return (
		<li className="" onClick={handler}>
			{children}
		</li>
	);
}

export default function Navbar() {
	const { overlay, setOverlay } = useContext(OVERLAY_CONTEXT);
	const [isMobileNavShow, setIsMobileNavShow] = useState(false);

	const handleToggleMenu = () => {
		setOverlay(!overlay);
		setIsMobileNavShow(!isMobileNavShow);
	};

	const navLinkClickHandler = () => {
		setOverlay(false);
		setIsMobileNavShow(false);
	};

	return (
		<>
			<div className="bg-shadow opacity-[.6] bg-[#D388FF] left-0 right-0 -top-[50%] mx-auto" />
			<div className="bg-shadow bg-[#F4CDD6] -left-20 -top-[55%]" />
			<div className="container flex justify-between items-center py-9 bg-white md:bg-transparent shadow-alt md:shadow-none">
				<div className="">
					<h1 className="font-sporting-grotesque text-xl ">
						<span className="text-white bg-secondary-default rounded-lg px-1 shadow-primary">
							Gym
						</span>
						<span className="text-secondary-default px-1">baran</span>
					</h1>
				</div>
				<nav className="">
					<AiOutlineMenu
						onClick={handleToggleMenu}
						className="md:hidden text-primary-default text-xl cursor-pointer"
					/>
					<ul
						className={`responsive-nav ${isMobileNavShow && 'flex'} transition`}
					>
						<NavItem handler={navLinkClickHandler}>
							<Link href="/">Home</Link>
						</NavItem>
						<NavItem handler={navLinkClickHandler}>
							<Link href="/">Blog</Link>
						</NavItem>
						<NavItem handler={navLinkClickHandler}>
							<Link href="/">Program</Link>
						</NavItem>
						<NavItem handler={navLinkClickHandler}>
							<Link href="/">About us</Link>
						</NavItem>
						<NavItem handler={navLinkClickHandler}>
							<Link
								href="#"
								className="bg-primary-default text-white rounded-lg px-6 py-2 shadow-primary"
							>
								Login
							</Link>
						</NavItem>

						<li className="md:hidden block">
							<AiFillCloseCircle
								onClick={navLinkClickHandler}
								className="text-4xl text-primary-default cursor-pointer"
							/>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
