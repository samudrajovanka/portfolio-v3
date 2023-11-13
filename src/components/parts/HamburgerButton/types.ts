export type HamburgerButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> & {
  isOpen: boolean;
};
