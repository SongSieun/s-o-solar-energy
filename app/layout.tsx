import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since next-intl handles the locale layout with html/body tags,
// this root layout simply passes through children.
export default function RootLayout({ children }: Props) {
  return children;
}
