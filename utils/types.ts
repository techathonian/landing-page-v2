export interface HeroContent {
	id: string;
	title: string;
	body: string;
}

interface Features {
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
	features: Features[];
}

interface TrackBase {
	id: string;
	title: string;
	subtitle: string;
}
interface Tracks extends TrackBase{
	path: string;
	front: string;
	back: string;
}
export interface TrackComponent{
	id: string;
	title: string;
	content: string;
	tracks: Tracks[];
}

interface Content{
	id: string;
	image: string;
	subtitle: string;
	description: string;
}
export interface EventComponent {
	id: string;
	title: string;
	content: Content[];
} 

interface Stickers{
	id: string;
	svg: string;
	title: string;
	description: string;
}
export interface UnderstandTechathonComponent {
	title: string;
	body: string;
	stickers: Stickers[]
}


interface Questions{
	id: string;
	question: string;
}
interface Answers{
	id: string;
	answer: string;
}
export interface FaqComponent {
	id: string;
	title: string;
	questions: Questions[];
	answers: Answers[]
}

interface Student {
id: string;
image: string;
name: string;
course: string;
title: string;
comment: string;
}
export interface TestimonialComponent {
	id: string;
	title: string;
	subtitle: string;
	student: Student[]
}

interface Partners{
	id: string;
	svg: string;
}
export interface FooterComponent {
	id: string;
	title: string;
	partners: Partners[];
	subtitle: string;
	description: string;
	footer: string;
}

///---------------------COURSES PAGE-------------------------////
export interface CourseIntroComponent {
	id: string;
	title: string;
	content: string;
}

interface  Courses{
	id: string;
	title: string;
	content: string;
}
export interface CodingTracks{
	id: string;
	title: string;
	content: string;
	courses: Courses[]
}

export interface  NoCodingTracks {
	id: string;
	title: string;
	content: string;
	courses: Courses[]
}

interface Body{
	id: string;
	type: string
	svg: string;
	title: string;
	main?: string;
	first?: string;
	second?: string;
	description?: string;
}
interface Card {
	id: string;
	image: string;
	title: string;
	description: string;
}
export interface ProgrammesComponent{
	id: string;
	title: string;
	subtitle: string;
	body: Body[];
	cards: Card[];
	takestep: {};
}

///---------------------ABOUT US------------------------////
interface Subtitle{
	id: string;
	title: string;
	content: string;
}
export interface AboutUsComponent{
	id: string;
	title: string;
	content: string;
	subtitle: Subtitle[]
}

interface Principles{
	id: string;
	title: string;
	content: string;
}
export interface GuidePrincipleComponent{
	id: string;
	title: string;
	principles: Principles[]
}

interface Persons{
	id: string;
	title: string;
	content: string;
}
export interface KeyPersonComponent{
	id: string;
	title: string;
	description: string;
	persons: Persons[]
}
export interface AboutEventComponent{
	id: string;
	title: string;
	subtitle: string;
	description: string;
}


//---------------------COURSE DETAILS------------------------////

/******COMPOENTS */

// Button

export interface ButtonProps {
	label: string;
	className: string;
	handleClick?: () => void;
}

//