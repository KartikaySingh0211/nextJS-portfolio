"use client";
import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

export default function Experience() {
	return (
		<div className="py-20" id="experience">
			<h1 className="heading">
				My
				<span className="text-purple"> work experience</span>
			</h1>
			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{workExperience.map((card) => (
					<Button
						key={card.id}
						className="flex-1 text-white border-neutral-200 dark:border-slate-800"
						duration={Math.floor(Math.random() * 10000) + 10000}
					>
						<CardContainer>
							<CardBody className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
								<CardItem translateZ={500} translateX={450}>
									<img
										src={card.thumbnail}
										alt={card.thumbnail}
										className="lg:w-32 md:w-20"
									/>
								</CardItem>
								<CardItem
									as="p"
									translateZ={500}
									translateX={-100}
									className="lg:ms-5"
								>
									<h1 className="text-start text-xl md:text-2xl font-bold">
										{card.title}
									</h1>
									<p className="text-start text-white-100 mt-3 font-semibold">
										{card.desc}
									</p>
								</CardItem>
							</CardBody>
						</CardContainer>
					</Button>
				))}
			</div>
		</div>
	);
}
