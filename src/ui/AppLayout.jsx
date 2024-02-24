import React from "react";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
};

export default AppLayout;
