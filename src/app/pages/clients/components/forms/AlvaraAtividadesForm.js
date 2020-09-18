/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  TextField,
  Grid,
  InputLabel,
  Fab,
  Tooltip,
} from "@material-ui/core";
import { CustomDropzone } from "../../../../components/Dropzone/CustomDropzone";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

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
  divider: {
    display: "block",
    width: "100%",
  },
  plusButton: {
    cursor: "pointer",
    marginBottom: 20,
  },
}));

export const AlvaraAtividadesForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    numeroAlvara: "",
    inscricaoMunicipal: "",
    inscricaoEstadual: "",
    nire: "",
  });

  const [atividades, setAtividades] = useState([
    { id: 0, cnae: "", principalSecundaria: "", itemServico: "" },
  ]);

  const addInformationOption = (type, index, e) => {
    const newArray = JSON.parse(JSON.stringify(atividades));

    switch (type) {
      case "cnae":
        newArray[index].cnae = e.target.value;

        break;
      case "principalSecundaria":
        newArray[index].principalSecundaria = e.target.value;

        break;
      case "itemServico":
        newArray[index].itemServico = e.target.value;
        break;
      default:
        break;
    }

    setAtividades(newArray);
  };
  const addOption = () => {
    const id = atividades.length;
    const optionLine = {
      id: id,
      cnae: "",
      principalSecundaria: "",
      itemServico: "",
    };

    setAtividades([...atividades, optionLine]);
  };

  const deleteOption = (index) => {
    setAtividades(atividades.filter((_, i) => i !== index));
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <p className="ml-3 font-weight-bold">
        Passo 03: Informe os dados de Alvará & Atividades{" "}
      </p>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField
            disabled={false}
            label="Número do Alvará"
            fullWidth
            value={values.numeroAlvara}
            onChange={handleChange("numeroAlvara")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled={false}
            label="Inscrição Municipal"
            fullWidth
            value={values.inscricaoMunicipal}
            onChange={handleChange("inscricaoMunicipal")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled={false}
            label="Inscrição Estadual"
            fullWidth
            value={values.inscricaoEstadual}
            onChange={handleChange("inscricaoEstadual")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            disabled={false}
            label="NIRE"
            fullWidth
            value={values.nire}
            onChange={handleChange("inscricaoEstadual")}
            className={classes.textField}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} className="pl-6">
          <CustomDropzone />
        </Grid>

        <Grid item xs={12} className="pl-6 mb-4">
          <Divider className={classes.divider} />
          <InputLabel className="mt-4">Atividades da Empresa</InputLabel>
        </Grid>
      </Grid>
      {atividades &&
        atividades.map((item, index) => (
          <Grid container key={index} spacing={5} className="mb-5">
            <Grid item xs>
              <TextField
                disabled={false}
                label="CNAE"
                fullWidth
                value={item[index]}
                onChange={(e) => addInformationOption("cnae", index, e)}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                disabled={false}
                label="Principal ou Secundaria"
                fullWidth
                value={item[index]}
                onChange={(e) =>
                  addInformationOption("principalSecundaria", index, e)
                }
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs>
              <TextField
                disabled={false}
                label="Item de Servico"
                fullWidth
                value={item[index]}
                onChange={(e) => addInformationOption("itemServico", index, e)}
                className={classes.textField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={1}>
              <Tooltip title="Deletar Opção">
                <Fab
                  color="primary"
                  aria-label="Deletar Opção"
                  onClick={() => deleteOption(index)}
                >
                  <DeleteIcon />
                </Fab>
              </Tooltip>
            </Grid>
          </Grid>
        ))}
      <Grid container>
        <Grid lg={3} className={classes.plusButton} onClick={() => addOption()}>
          <Fab size="small" color="primary">
            <AddIcon />
          </Fab>
          <span className="ml-4">Adicionar Atividade</span>
        </Grid>
      </Grid>
    </form>
  );
};
