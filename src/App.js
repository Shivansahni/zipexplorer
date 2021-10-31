import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Format from "./components/Description";

import { Des } from "./components/des";
import Zip1 from "./components/Zip1";

function App() {
  return (
    <div>
      <Header />

      <Zip1 />

      <section>
        {Des.map((format, index) => {
          return <Format key={format.id} {...format}></Format>;
        })}
      </section>
      <Footer />
    </div>
  );
}

export default App;
