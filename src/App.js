import React from "react";
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextareaAutosize,
  Button,
  styled,
} from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toHalfKatakana, toFullKatakana } from "./katakana";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const MyButton = styled(Button)({
  margin: "8px 0 0 0",
});

const ArrowDownwardIcon = () => {
  return (
    <Box my={1} mx="auto">
      <ArrowDownward color="secondary" />
    </Box>
  );
};

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.title}>
              <header>macユーザーを楽にする！英字・カタカナ変換サイト</header>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <AlphabetConverter classes={classes} />
              </Grid>
              <Grid item xs={5}>
                <KatakanaConverter classes={classes} />
              </Grid>
              <Grid item xs={2}>
                <Ad classes={classes} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <footer></footer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const AlphabetConverter = (classes) => {
  const [textSize, setTextSize] = React.useState("uppercase");
  const [beforeText, setBeforeText] = React.useState("");
  const [afterText, setAfterText] = React.useState("");
  const lowerPlaceholder = "abcdefg";
  const upperPlaceholder = "ABCDEFG";
  const [beforePlaceholder, setBeforePlaceholder] = React.useState(
    lowerPlaceholder
  );
  const [afterPlaceholder, setAfterPlaceholder] = React.useState(
    upperPlaceholder
  );

  const handleTextSize = (event) => {
    const value = event.target.value;
    setTextSize(value);
    setBeforePlaceholder(
      value === "uppercase" ? lowerPlaceholder : upperPlaceholder
    );
    setAfterPlaceholder(
      value === "uppercase" ? upperPlaceholder : lowerPlaceholder
    );
    setAfterText(
      value === "uppercase" ? afterText.toUpperCase() : afterText.toLowerCase()
    );
  };

  const handleChangeText = (event) => {
    const value = event.target.value;
    setBeforeText(value);
    setAfterText(
      textSize === "uppercase" ? value.toUpperCase() : value.toLowerCase()
    );
  };

  const handleClear = () => {
    setBeforeText("");
    setAfterText("");
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        英字を変換する
      </Typography>
      <FormControl
        component="fieldset"
        fullWidth
        margin="normal"
        className={classes.formControl}
      >
        <RadioGroup
          row
          aria-label="alphabetConverter"
          name="alphabetConverter"
          value={textSize}
          onChange={handleTextSize}
        >
          <FormControlLabel
            value="uppercase"
            control={<Radio />}
            label="大文字"
          />
          <FormControlLabel
            value="lowercase"
            control={<Radio />}
            label="小文字"
          />
        </RadioGroup>
        <TextareaAutosize
          rowsMin={5}
          placeholder={beforePlaceholder}
          value={beforeText}
          onChange={handleChangeText}
        />
        <ArrowDownwardIcon />
        <TextareaAutosize
          rowsMin={5}
          placeholder={afterPlaceholder}
          value={afterText}
        />
        <MyButton
          variant="outlined"
          size="medium"
          margin="normal"
          className={classes.margin}
          onClick={handleClear}
        >
          クリア
        </MyButton>
        <CopyToClipboard text={afterText}>
          <MyButton
            variant="contained"
            size="medium"
            color="secondary"
            className={classes.margin}
          >
            コピー
          </MyButton>
        </CopyToClipboard>
      </FormControl>
    </div>
  );
};

const KatakanaConverter = (classes) => {
  const [textWidth, setTextWidth] = React.useState("half");
  const [beforeText, setBeforeText] = React.useState("");
  const [afterText, setAfterText] = React.useState("");
  const fullPlaceholder = "アイウエオ";
  const halfPlaceholder = "ｱｲｳｴｵ";
  const [beforePlaceholder, setBeforePlaceholder] = React.useState(
    fullPlaceholder
  );
  const [afterPlaceholder, setAfterPlaceholder] = React.useState(
    halfPlaceholder
  );

  const handleTextWidth = (event) => {
    const value = event.target.value;
    setTextWidth(value);
    setBeforePlaceholder(value === "half" ? fullPlaceholder : halfPlaceholder);
    setAfterPlaceholder(value === "half" ? halfPlaceholder : fullPlaceholder);
    setAfterText(
      value === "half" ? toHalfKatakana(afterText) : toFullKatakana(afterText)
    );
  };

  const handleChangeText = (event) => {
    const value = event.target.value;
    setBeforeText(value);
    setAfterText(
      textWidth === "half" ? toHalfKatakana(value) : toFullKatakana(value)
    );
  };

  const handleClear = () => {
    setBeforeText("");
    setAfterText("");
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        カタカナを変換する
      </Typography>
      <FormControl
        component="fieldset"
        fullWidth
        margin="normal"
        className={classes.formControl}
      >
        <RadioGroup
          row
          aria-label="alphabetConverter"
          name="alphabetConverter"
          value={textWidth}
          onChange={handleTextWidth}
        >
          <FormControlLabel value="half" control={<Radio />} label="半角" />
          <FormControlLabel value="full" control={<Radio />} label="全角" />
        </RadioGroup>
        <TextareaAutosize
          rowsMin={5}
          placeholder={beforePlaceholder}
          value={beforeText}
          onChange={handleChangeText}
        />
        <ArrowDownwardIcon />
        <TextareaAutosize
          rowsMin={5}
          placeholder={afterPlaceholder}
          value={afterText}
        />
        <MyButton
          variant="outlined"
          size="medium"
          margin="normal"
          className={classes.margin}
          onClick={handleClear}
        >
          クリア
        </MyButton>
        <CopyToClipboard text={afterText}>
          <MyButton
            variant="contained"
            size="medium"
            color="secondary"
            className={classes.margin}
          >
            コピー
          </MyButton>
        </CopyToClipboard>
      </FormControl>
    </div>
  );
};

const Ad = (classes) => {
  return (
    <Box className={classes.root} bgcolor="gray" minHeight={600} pt={30} pl={1}>
      <Typography className={classes.title}>広告枠</Typography>
    </Box>
  );
};

export default App;
