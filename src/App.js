import React from "react";
import { Layout } from "antd";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Map from "./Components/Map";
import FormInput from "./Components/FormInput";
import RegionInfo from "./Components/RegionInfo";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Content style={{ position: "relative" }}>
            <FormInput />
            <Map />
            <RegionInfo />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Copyright Shubhangi Jadhav 2023
          </Footer>
        </Layout>
      </Layout>
    </Provider>
  );
};

export default App;
