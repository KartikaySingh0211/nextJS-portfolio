"use client";
import Experience from "@/app/_components/Experience";
import Footer from "@/app/_components/Footer";
import Grid from "@/app/_components/Grid";
import Hero from "@/app/_components/Hero";
import RecentProjects from "@/app/_components/RecentProjects";
import { FloatingNav } from "@/app/_components/ui/FloatingNav";
import { navItems } from "@/data";

const Home = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Experience />
				<Footer />
			</div>
		</main>
	);
};

export default Home;
