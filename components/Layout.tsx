import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="content">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
