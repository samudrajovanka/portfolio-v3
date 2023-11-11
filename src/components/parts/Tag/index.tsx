import Text from '@/components/elements/Text';

const Tag: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text
      typography="small"
      className="border border-primary-main bg-theme-light px-2 py-[2px]
        text-primary-main dark:border-white dark:bg-theme-dark"
    >
      {children}
    </Text>
  );
};

export default Tag;
