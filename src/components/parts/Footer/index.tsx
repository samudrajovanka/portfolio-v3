import Container from '@/components/elements/Container';
import Reveal from '@/components/elements/Reveal';
import Text from '@/components/elements/Text';
import Logo from '@/components/parts/Logo';
import SocialMediaIconList from '@/components/parts/SocialMediaIconList';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-subtitle border-content bg-theme z-[2] border-t-2">
      <Container className="flex flex-col items-center gap-2 p-3 md:flex-row md:justify-between">
        <Reveal>
          <div className="flex justify-center gap-6">
            <Logo size="sm" />

            <div className="bg-subtitle h-6 w-[2px]" />

            <Text resetColor>&copy; {currentYear} - Jovanka Samudra</Text>
          </div>
        </Reveal>

        <Reveal>
          <SocialMediaIconList />
        </Reveal>
      </Container>
    </footer>
  );
};

export default Footer;
