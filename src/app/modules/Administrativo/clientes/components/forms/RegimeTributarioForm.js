/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, MenuItem, InputLabel } from "@material-ui/core";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "30px 15px 30px 0",
    width: "100%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minwidth: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  label: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
  },
}));
var d = new Date();
d.setFullYear(d.getFullYear() - 1);

export const RegimeTributarioForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState([
    { id: 0, ano: "2020", regimeTributario: "" },
    { id: 1, ano: "2019", regimeTributario: "" },
    { id: 2, ano: "2018", regimeTributario: "" },
  ]);

  const handleChange = (name, id) => (event) => {
    let newArray = [...values];

    newArray[id].regimeTributario = event.target.value;

    // setValues({ ...values, [name]: event.target.value });
    console.log(values);

    setValues(newArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const schema = Yup.array().of(
        Yup.object({
          id: Yup.number(),
          ano: Yup.string(),
          regimeTributario: Yup.string().when("ano", {
            is: "2020",
            then: Yup.string().required("Escolha um Regime Tributario"),
          }),
        })
      );
      await schema.validate(values, {
        abortEarly: false,
      });

      console.log("OKAY");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <p className="ml-3 font-weight-bold">
        Passo 04: Informe os dados de regime tributário do cliente. O ano atual
        é obrigatório.
      </p>
      <Grid container spacing={3} className="mb-4 mt-4">
        <Grid item xs={3}>
          <InputLabel className={classes.label}>Ano Atual - 2020 </InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            disabled={false}
            fullWidth
            onChange={handleChange("regimeTributario", 0)}
            className={classes.textField}
            variant="outlined"
            id="select"
            label="Escolha um Regime Tributario"
            select
          >
            <MenuItem value="Simples nacional">Simples nacional</MenuItem>
            <MenuItem value="Lucro presumido">Lucro presumido </MenuItem>
            <MenuItem value="Lucro real">Lucro real</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="mb-4">
        <Grid item xs={3}>
          <InputLabel className={classes.label}>
            Ano Anterior - 2019 (Opcional)
          </InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            disabled={false}
            fullWidth
            onChange={handleChange("regimeTributario", 1)}
            className={classes.textField}
            variant="outlined"
            id="select"
            label="Escolha um Regime Tributario"
            select
          >
            <MenuItem value="Simples nacional">Simples nacional</MenuItem>
            <MenuItem value="Lucro presumido">Lucro presumido </MenuItem>
            <MenuItem value="Lucro real">Lucro real</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <InputLabel className={classes.label}>
            Ano Anterior - 2018 (Opcional)
          </InputLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField
            disabled={false}
            fullWidth
            onChange={handleChange("regimeTributario", 2)}
            className={classes.textField}
            variant="outlined"
            id="select"
            label="Escolha um Regime Tributario"
            select
          >
            <MenuItem value="Simples nacional">Simples nacional</MenuItem>
            <MenuItem value="Lucro presumido">Lucro presumido </MenuItem>
            <MenuItem value="Lucro real">Lucro real</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </form>
  );
};
