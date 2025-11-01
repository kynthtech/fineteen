import { Fragment } from "react";
import { Outlet } from "react-router";
import Navigation from "@components/others/Navigation";
import Footer from "@components/others/Footer";
import { NavigationSetter } from "@components/app/NavigationSetter";

function RootLayout() {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
      <Footer />
      <NavigationSetter />
    </Fragment>
  );
}

export default RootLayout;
