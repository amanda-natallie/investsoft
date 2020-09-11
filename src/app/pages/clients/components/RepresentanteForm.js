/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  Divider,
  TextField,
  Grid,
  InputLabel,
  Fab,
  Tooltip,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { CustomDropzone } from "../../../components/Dropzone/CustomDropzone";

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
    marginBottom: 20,
  },
  plusButton: {
    cursor: "pointer",
    marginBottom: 20,
  },
}));

export const RepresentanteForm = () => {
  const classes = useStyles();

  const [estadoCivil, setEstadoCivil] = useState("");
  const [representantes, setRepresentantes] = useState([
    {
      id: 0,
      tipo: "",
      representante: "",
      nome: "",
      cpf: "",
      rg: "",
      orgaoEmissorRg: "",
      ufRg: "",
      carteiraProfissional: "",
      orgaoEmissorCarteira: "",
      ufCarteira: "",
      nacionalidade: "",
      naturalidade: "",
      estadoCivil: "",
      nomeConjuge: "",
      cpfConjuge: "",
      profissao: "",
      dataNascimento: "",
      cep: "",
      logradouro: "",
      bairro: "",
      municipio: "",
      complemento: "",
      uf: "",
      telefone: "",
      email: "",
    },
  ]);

  const addInformationOption = (type, index, e) => {
    const newArray = JSON.parse(JSON.stringify(representantes));

    switch (type) {
      case "pessoaContato":
        newArray[index].pessoaContato = e.target.value;

        break;
      case "telefoneContato":
        newArray[index].telefoneContato = e.target.value;

        break;
      case "emailContato":
        newArray[index].emailContato = e.target.value;
        break;
      case "departamento":
        newArray[index].departamento = e.target.value;
        break;
      default:
        break;
    }

    setRepresentantes(newArray);
  };
  const addOption = () => {
    const id = representantes.length;
    const optionLine = {
      id: id,
      nome: "",
      cpf: "",
      rg: "",
      orgaoEmissorRg: "",
      ufRg: "",
      carteiraProfissional: "",
      orgaoEmissorCarteira: "",
      ufCarteira: "",
      nacionalidade: "",
      naturalidade: "",
      estadoCivil: "",
      nomeConjuge: "",
      cpfConjuge: "",
      profissao: "",
      dataNascimento: "",
      cep: "",
      logradouro: "",
      bairro: "",
      municipio: "",
      complemento: "",
      uf: "",
      telefone: "",
      email: "",
    };

    setRepresentantes([...representantes, optionLine]);
  };

  const deleteOption = (index) => {
    setRepresentantes(representantes.filter((_, i) => i !== index));
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <p className="ml-3 font-weight-bold">
        Passo 06: Informe os dados de representantes. Você pode adicionar quantos
        quiser. O primeiro é obrigatório.
      </p>

      {representantes &&
        representantes.map((item, index) => (
          <>
            <Grid container key={index} spacing={2} className="mb-5 mt-5">
              
              <Grid item xs={12} className="ml-3 ">
                <InputLabel>
                  <strong>Dados Pessoais</strong>
                </InputLabel>
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="Nome"
                  fullWidth
                  onChange={(e) => addInformationOption("nome", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="CPF"
                  fullWidth
                  onChange={(e) => addInformationOption("cpf", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="Data de Nascimento"
                  fullWidth
                  onChange={(e) =>
                    addInformationOption("dataNascimento", index, e)
                  }
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="RG"
                  fullWidth
                  onChange={(e) => addInformationOption("rg", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="Órgão Emissor (RG)"
                  fullWidth
                  onChange={(e) =>
                    addInformationOption("orgaoEmissorRg", index, e)
                  }
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="Uf de origem (RG)"
                  fullWidth
                  onChange={(e) => addInformationOption("ufRg", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="Carteira Profissional"
                  fullWidth
                  onChange={(e) =>
                    addInformationOption("carteiraProfissional", index, e)
                  }
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="Órgão Emissor (Carteira)"
                  fullWidth
                  onChange={(e) =>
                    addInformationOption("orgaoEmissorCarteira", index, e)
                  }
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={false}
                  label="Uf de origem (Carteira)"
                  fullWidth
                  onChange={(e) => addInformationOption("ufCarteira", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6}>
                <TextField
                  disabled={false}
                  label="Nacionalidade"
                  fullWidth
                  onChange={(e) =>
                    addInformationOption("nacionalidade", index, e)
                  }
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  disabled={false}
                  label="Naturalidade"
                  fullWidth
                  onChange={(e) =>
                    addInformationOption("naturalidade", index, e)
                  }
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="ml-3 mt-5">
                <Divider className={classes.divider} />
                <InputLabel>
                  <strong>Estado Civil</strong>
                </InputLabel>
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={false}
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                  id="select"
                  label="Estado Civil"
                  onChange={(e) => setEstadoCivil(e.target.value)}
                  select
                >
                  <MenuItem value="SOLTEIRO">Solteiro</MenuItem>
                  <MenuItem value="CASADO">Casado</MenuItem>
                  <MenuItem value="DIVORCIADO">Divorciado</MenuItem>
                  <MenuItem value="SEPARADO">Separado</MenuItem>
                  <MenuItem value="VIUVO">Viúvo</MenuItem>
                  <MenuItem value="AMASIADO">Amasiado</MenuItem>
                </TextField>
              </Grid>
              {estadoCivil === "CASADO" && (
                <>
                  <Grid item md={4}>
                    <TextField
                      disabled={false}
                      label="Nome do Cônjuge"
                      fullWidth
                      onChange={(e) =>
                        addInformationOption("nomeConjuge", index, e)
                      }
                      className={classes.textField}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      disabled={false}
                      label="CPF do Cônjuge"
                      fullWidth
                      onChange={(e) =>
                        addInformationOption("cpfConjuge", index, e)
                      }
                      className={classes.textField}
                      variant="outlined"
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12} className="ml-3 mt-5">
                <Divider className={classes.divider} />
                <InputLabel>
                  <strong>Profissão</strong>
                </InputLabel>
              </Grid>
              <Grid item md={12}>
                <TextField
                  disabled={false}
                  label="Profissão"
                  fullWidth
                  onChange={(e) => addInformationOption("profissao", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="ml-3 mt-5">
                <Divider className={classes.divider} />
                <InputLabel>
                  <strong>Endereço</strong>
                </InputLabel>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  disabled={false}
                  label="CEP"
                  fullWidth
                  onChange={(e) => addInformationOption("cep", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={7}>
                <TextField
                  disabled={false}
                  label="Logradouro"
                  fullWidth
                  onChange={(e) => addInformationOption("logradouro", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  disabled={false}
                  label="Número"
                  fullWidth
                  onChange={(e) => addInformationOption("numero", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  disabled={false}
                  label="Bairro"
                  fullWidth
                  onChange={(e) => addInformationOption("bairro", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  disabled={false}
                  label="Município"
                  fullWidth
                  onChange={(e) => addInformationOption("municipio", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  disabled={false}
                  label="Complemento"
                  fullWidth
                  onChange={(e) =>
                    addInformationOption("complemento", index, e)
                  }
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="ml-3 mt-5">
                <Divider className={classes.divider} />
                <InputLabel>
                  <strong>Contato</strong>
                </InputLabel>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  disabled={false}
                  label="Telefone"
                  fullWidth
                  onChange={(e) => addInformationOption("telefone", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  disabled={false}
                  label="E-mail"
                  fullWidth
                  onChange={(e) => addInformationOption("email", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className="pl-6 mt-4">
                <InputLabel>
                  <strong>Adicione aqui os anexos de documentos do representante.</strong>
                </InputLabel>
                <CustomDropzone />
              </Grid>
              {representantes.length > 1 && (
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
              )}
            </Grid>
          </>
        ))}
      <Grid container>
        <Grid lg={6} className={classes.plusButton} onClick={() => addOption()}>
          <Fab size="small" color="primary">
            <AddIcon />
          </Fab>
          <span className="ml-4">Adicionar novo representante </span>
        </Grid>
      </Grid>
    </form>
  );
};
