/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Paper } from "@material-ui/core/";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { ProductsPage } from "../../modules/ECommerce/pages/products/ProductsPage";
import { FileTable } from "../../components/pagina-um/FileTable";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "90%",
    margin: "0 auto",
    display: "table",
    marginTop: theme.spacing(1),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingRight: 15,
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
  roundedAvatar: {
    borderRadius: "100%",
    maxWidth: "80%",
    margin: " 0 auto",
  },
  subheader: {
    fontSize: "1rem",
    margin: "20px 0 0 8px",
  },
  paper: {
    width: "90%",
    margin: "0 auto",
    display: "table",
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(1),
  },
}));

export const FormDois = (props) => {
  const classes = useStyles();
  const [formDisabled, setFormDisabled] = useState(true);
  const [values, setValues] = useState(props.selectedCliente[0]);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <h4>Código do cliente: {values.codigo}</h4>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item md={9}>
            <div className="d-flex align-items-center justify-content-between">
              <TextField
                disabled={formDisabled}
                label="Razão Social"
                value={values.razao_social}
                onChange={handleChange("razao_social")}
                className={classes.textField}
                margin="normal"
              />

              <TextField
                id="standard-name"
                label="Nome Fantasia"
                className={classes.textField}
                value={values.nome_fantasia}
                onChange={handleChange("nome_fantasia")}
                disabled={formDisabled}
                margin="normal"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <TextField
                disabled={formDisabled}
                label="CNPJ"
                value={values.cnpj}
                onChange={handleChange("cnpj")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                disabled={formDisabled}
                label="Incrição Estadual"
                value={values.inscricao_estadual}
                onChange={handleChange("inscricao_estadual")}
                className={classes.textField}
                margin="normal"
              />

              <TextField
                id="standard-name"
                label="Inscrição Municipal"
                className={classes.textField}
                value={values.inscricao_municipal}
                onChange={handleChange("inscricao_municipal")}
                disabled={formDisabled}
                margin="normal"
              />
            </div>
            <h5 className={classes.subheader}>Informações Adicionais</h5>
            <TextField
              disabled={formDisabled}
              label="Situação"
              value={values.situacao}
              onChange={handleChange("situacao")}
              className={classes.textField}
              style={{ maxWidth: 200 }}
              margin="normal"
            />
            <div className="d-flex align-items-center justify-content-between">
              <TextField
                disabled={formDisabled}
                label="Contato Principal"
                value={values.pessoa_contato_1}
                onChange={handleChange("pessoa_contato_1")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                disabled={formDisabled}
                label="Setor/Função"
                value={values.setor_funcao_1}
                onChange={handleChange("setor_funcao_1")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                disabled={formDisabled}
                label="Telefone"
                value={values.fone_1}
                onChange={handleChange("fone_1")}
                className={classes.textField}
                margin="normal"
              />

              <TextField
                id="standard-name"
                label="E-mail"
                className={classes.textField}
                value={values.email_1}
                onChange={handleChange("email_1")}
                disabled={formDisabled}
                margin="normal"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <TextField
                disabled={formDisabled}
                label="Contato Principal"
                value={values.pessoa_contato_2}
                onChange={handleChange("pessoa_contato_2")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                disabled={formDisabled}
                label="Setor/Função"
                value={values.setor_funcao_2}
                onChange={handleChange("setor_funcao_2")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                disabled={formDisabled}
                label="Telefone"
                value={values.fone_2}
                onChange={handleChange("fone_2")}
                className={classes.textField}
                margin="normal"
              />

              <TextField
                id="standard-name"
                label="E-mail"
                className={classes.textField}
                value={values.email_2}
                onChange={handleChange("email_2")}
                disabled={formDisabled}
                margin="normal"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <TextField
                disabled={formDisabled}
                label="Contato Principal"
                value={values.pessoa_contato_3}
                onChange={handleChange("pessoa_contato_3")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                disabled={formDisabled}
                label="Setor/Função"
                value={values.setor_funcao_3}
                onChange={handleChange("setor_funcao_3")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                disabled={formDisabled}
                label="Telefone"
                value={values.fone_3}
                onChange={handleChange("fone_3")}
                className={classes.textField}
                margin="normal"
              />

              <TextField
                id="standard-name"
                label="E-mail"
                className={classes.textField}
                value={values.email_3}
                onChange={handleChange("email_3")}
                disabled={formDisabled}
                margin="normal"
              />
            </div>
          </Grid>
          <Grid item md={3} className="text-center">
            <img
              src={toAbsoluteUrl("/media/client-logos/logo4.png")}
              alt="yu"
              className={classes.roundedAvatar}
            />
            <button
              onClick={() => setFormDisabled(!formDisabled)}
              className="btn btn-primary mt-2"
            >
              Editar dados
            </button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <TextField
              id="standard-name"
              label="Observações: "
              fullWidth
              className={classes.textField}
              value={values.observacoes}
              onChange={handleChange("observacoes")}
              disabled={formDisabled}
              margin="normal"
            />
          </Grid>
        </Grid>
      </form>
      <Paper>
        <ProductsPage />
        <FileTable />
      </Paper>
    </>
  );
};
