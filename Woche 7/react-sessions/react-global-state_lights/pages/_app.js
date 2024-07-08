import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const amountLightsOn = lights.filter((light) => light.isOn === true).length;
  const amountLightsOff = lights.filter((light) => light.isOn === false).length;

  function toggleLight(id) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function turnOffLights() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
    console.log("turned off lights");
  }

  function turnOnLights() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
    console.log("turned on lights");
  }

  return (
    <Layout isDimmed={amountLightsOn === 0 ? true : false}>
      <GlobalStyle />
      <Component
        lights={lights}
        toggleLight={toggleLight}
        amountLightsOn={amountLightsOn}
        amountLightsOff={amountLightsOff}
        turnOffLights={turnOffLights}
        turnOnLights={turnOnLights}
        {...pageProps}
      />
    </Layout>
  );
}
