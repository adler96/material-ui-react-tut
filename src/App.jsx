import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Save, Cancel } from "@mui/icons-material";
import { useState } from "react";

import makeStyles from "@mui/material/styles";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>
    Test Styled Button
  </Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel 
      control={<Checkbox
        checked={checked}
        icon={<Cancel />}
        checkedIcon={<Save/>}
        onClick={(e) => setChecked(e.target.checked)}
        color="secondary"
      />}
      label="Testing a Checkbox"
    />
      
  );
}

function App() {
  return (
    <>
      <ButtonStyled />
      <TextField 
        variant="outlined"
        color="secondary"
        type="date"
      />
      <CheckboxExample />
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          style={{
            fontSize: 28,
          }}
          endIcon={<Save />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{
            fontSize: 28,
          }}
          endIcon={<Cancel />}
        >
          Discard
        </Button>
      </ButtonGroup>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
