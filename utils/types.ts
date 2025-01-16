export interface HeroContent {
	id: string;
	title: string;
	body: string;
}

interface Testimonials {
	id: string;
	title: string;
	image: string;
	subtitle: string;
	body: string;
}
export interface CoreComponent {
	id: string;
	title: string;
	content: string;
	testimonials: Testimonials[];
}

/******COMPOENTS */

// Buitton

export interface ButtonProps {
	label: string;
	className: string;
	handleClick?: () => void;
}
