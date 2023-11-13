import Link from '@/components/elements/Link';
import Text from '@/components/elements/Text';
import SectionPage from '@/components/parts/SectionPage';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata({ title: 'Oops. Not found' }, { withSuffix: true });

const NotFoundPage = () => {
  return (
    <SectionPage withContainer className="flex flex-col items-center justify-center gap-5">
      <Text resetTypography className="text-6xl font-bold">404</Text>

      <Text>This page could not be found.</Text>

      <Link href="/">Back to home</Link>
    </SectionPage>
  );
};

export default NotFoundPage;
