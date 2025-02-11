import Button from '@/components/Button';
import Image from 'next/image';
import HeroSection from './../components/HeroSection';
import CoreSection from '@/components/CoreSection';
import TracksSection from '@/components/TracksSection';
import EventsSection from './../components/EventsSection';
import OustandingSection from '@/components/OustandingSection';
import FaqsSection from './../components/FaqsSection';
import Testimonial from './../components/Testimonial'
import Partners from './../components/Partners';
import Footer from './../components/Footer';

export default function Home() {
	return (
		<div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-montserrat)]'>
			<main className='flex flex-col gap-8  items-center '>
				<HeroSection />
			    <CoreSection />
				<TracksSection/>
				<EventsSection />
				<OustandingSection/>
				<FaqsSection />
				<Testimonial/>
				<Partners />
			</main>
			<footer className=''>
				<Footer />
			</footer>

		</div>
	);
}
