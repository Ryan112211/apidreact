import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Defination from "./components/Definations/defination";
import Header from "./components/Header/Header";

function App() {
  const [lightmode, setlightmode] = useState(false);
  const [meanings, setmeanings] = useState([]);
  const [word, setword] = useState("");
  const [category, setcategory] = useState("en");
  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryapi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      console.log(data);
      setmeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dictionaryapi();
  }, [word, category]);
  console.log(meanings);
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: lightmode?"#fff":"#282c34", color: lightmode?"black":"white" ,transition:"all 0.5s linear"}}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
        maxWidth="md"
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <PurpleSwitch
            checked={lightmode}
            onChange={() => setlightmode(!lightmode)}
          ></PurpleSwitch>
          <span> {lightmode ? "Dark" : "Light"} Mode</span>
        </div>
        <Header
          darkmode={lightmode}
          setword={setword}
          word={word}
          setcategory={setcategory}
          category={category}
        ></Header>
        {meanings && (
          <Defination
            darkmode={lightmode}
            meanings={meanings}
            word={word}
            category={category}
          ></Defination>
        )}
      </Container>
    </div>
  );
}

export default App;
