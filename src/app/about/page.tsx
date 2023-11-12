import About from '@/components/pages/About';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata({ title: 'About Me' }, { withSuffix: true });

const AboutPage = About;

export default AboutPage;
