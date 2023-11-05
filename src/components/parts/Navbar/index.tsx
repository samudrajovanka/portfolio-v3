import Container from '@/components/elements/Container';
import Link from '@/components/elements/Link';
import Logo from '@/components/parts/Logo';
import ThemeButton from '@/components/parts/ThemeButton';

const Navbar = () => {
  return (
    <nav className="border-content bg-theme sticky top-0 z-[999] border-b-2">
      <Container className="flex items-center justify-between p-3">
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
