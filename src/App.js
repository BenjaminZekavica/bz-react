import Buttons from "./components/button";
import Feature from "./components/feature";
import Contents from "./widgets/contents";
import Heading from "./widgets/heading";


function App() {
  return (
    <>
      <Heading 
          preheadline="Hallo"
          headline="Test"
          headlineSize={1}
          hasBorder={true} 
      />

      <Contents
        content="Hallo Welt"
      />
      <Buttons
        text="hallo"
        variant="filled"
        link="https://mantine.dev/core/button/"
      />
      <Feature
        headline="hhah"
        text="klhjsjh"
      />
    </>    
  );
}

export default App;
