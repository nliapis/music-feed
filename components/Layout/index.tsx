import { Footer } from '../index';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
