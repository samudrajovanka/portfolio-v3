export type FadeProps = React.PropsWithChildren<Pick<React.HTMLAttributes<HTMLDivElement>, 'role'> & {
  className?: string;
  repeat?: boolean;
}>;
