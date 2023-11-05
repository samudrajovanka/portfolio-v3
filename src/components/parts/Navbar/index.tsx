import Container from '@/components/elements/Container';
import Link from '@/components/elements/Link';
import Logo from '@/components/parts/Logo';
import ThemeButton from '@/components/parts/ThemeButton';

const Navbar = () => {
  return (
    <nav className="z-[999] sticky top-0 border-content border-b-2 bg-theme">
      <Container className="flex justify-between items-center p-3">
        <Link href="/" title="home">
          <Logo />
        </Link>

        <div>
          <ThemeButton />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
