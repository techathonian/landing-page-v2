import { title } from 'process';
import { HeroContent, CoreComponent } from './types';
export const HEROCONTENT: HeroContent = {
	id: '1',
	title: 'Transition into Tech Seamlessly',
	body: 'Techathon is your gateway to a thriving career in tech. With thousands of individuals empowered, we take pride in nurturing aspiring talents and transforming them into seasoned practitioners in various tech domains.',
};

export const CORECOMPOENT: CoreComponent = {
	id: '1',
	title: 'Core Components',
	content:
		"At Techathon, we've meticulously designed our online academic platform to empower individuals on their journey into the dynamic world of tech. Our holistic approach comprises three fundamental components that form the backbone of our mission: Kickstarter, Mentorship, and Open Source.",

	testimonials: [
		{
			id: '1',
			title: 'KICKSTARTER',
			image: 'https:www.img.com',
			subtitle: 'No prior skills or knowledge is needed',
			body: 'No prior skills needed. In transitioning, you will be tutored from the very basics to the required standard of knowledge & skill needed.',
		},
		{
			id: '2',
			title: 'KICKSTARTER',
			image: 'https:www.img.com',
			subtitle: 'No prior skills or knowledge is needed',
			body: 'No prior skills needed. In transitioning, you will be tutored from the very basics to the required standard of knowledge & skill needed.',
		},
	],
};
