import Container from '@/components/elements/Container';
import Link from '@/components/elements/Link';
import Logo from '@/components/elements/Logo';
import Navigation from '@/components/parts/Navigation';
import ThemeButton from '@/components/parts/ThemeButton';

const Navbar = () => {
  return (
    <div className="border-content bg-theme sticky top-0 z-navbar border-b-2">
      <Container className="flex items-center gap-6 p-3">
        <Link href="/" title="home">
          <Logo />
        </Link>

        <ThemeButton className="ml-auto" />
        <Navigation />
      </Container>
    </div>
  );
};

export default Navbar;
