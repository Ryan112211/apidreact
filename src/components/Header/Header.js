import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import categories from "../../data/category";
import "./Header.css";
const Header = ({ darkmode,word,setword,setcategory, category }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: darkmode?"#000":"#fff",
      },
      type: darkmode?"light":"dark",
    },
  });
const handlechange=(e)=>{
setcategory(e.target.value)
setword("")

  }
  return (
    <div className="header">
      <span className="title">{word?word:"Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search for a word"
            id="standard-basic"
            value={word}
            onChange={(e)=>setword(e.target.value)}
            
          
            
          ></TextField>
          <TextField
          className="select"
            id="standard-select-currency"
            select
            label="Language"
            value={category}
            onChange={(e) => handlechange(e)}
           
          >
            {categories.map((data) => (
              <MenuItem value={data.label} key={data.label}>
                {data.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
