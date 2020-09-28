/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  Switch,
  Divider,
  TextField,
  Grid,
  InputLabel,
  Fab,
  Tooltip,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { CustomDropzone } from "../../../../../components/Dropzone/CustomDropzone";
import InfoIcon from "@material-ui/icons/Info";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import { setIsDisable } from "../../../clientes/_redux/clientesActions";

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

export const SociosForm = ({ managerCustomer = false }) => {
  const classes = useStyles();
  const inputState = useSelector((state) => state.client);
  const dispatch = useDispatch();

  const [estadoCivil, setEstadoCivil] = useState("");
  const [representante, setRepresentante] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  // const [contatos, setContatos] = useState([
  //   {
  //     id: 0,
  //     telefoneContato: "",
  //     emailContato: "",
  //   },
  // ]);
  const [socios, setSocios] = useState([
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
      numero: "",
      bairro: "",
      municipio: "",
      complemento: "",
      uf: "",
      contatos: [
        {
          telefoneContato: "",
          emailContato: "",
        },
      ],
    },
  ]);

  const addInformationOption = (type, index, e) => {
    // const newArray = JSON.parse(JSON.stringify(socios));
    let newArray = [...socios];

    switch (type) {
      case "nome":
        newArray[index].nome = e.target.value;
        break;

      case "cpf":
        newArray[index].cpf = e.target.value;
        break;

      case "dataNascimento":
        newArray[index].dataNascimento = e.target.value;
        break;

      case "rg":
        newArray[index].rg = e.target.value;
        break;

      case "orgaoEmissorRg":
        newArray[index].orgaoEmissorRg = e.target.value;
        break;

      case "ufRg":
        newArray[index].ufRg = e.target.value;
        break;

      case "carteiraProfissional":
        newArray[index].carteiraProfissional = e.target.value;
        break;

      case "orgaoEmissorCarteira":
        newArray[index].orgaoEmissorCarteira = e.target.value;
        break;

      case "ufCarteira":
        newArray[index].ufCarteira = e.target.value;
        break;

      case "nacionalidade":
        newArray[index].nacionalidade = e.target.value;
        break;

      case "naturalidade":
        newArray[index].naturalidade = e.target.value;
        break;

      case "nomeConjuge":
        newArray[index].nomeConjuge = e.target.value;
        break;

      case "cpfConjuge":
        newArray[index].cpfConjuge = e.target.value;
        break;

      case "profissao":
        newArray[index].profissao = e.target.value;
        break;

      case "cep":
        newArray[index].cep = e.target.value;
        break;

      case "logradouro":
        newArray[index].logradouro = e.target.value;
        break;

      case "numero":
        newArray[index].numero = e.target.value;
        break;

      case "bairro":
        newArray[index].bairro = e.target.value;
        break;

      case "municipio":
        newArray[index].municipio = e.target.value;
        break;

      case "complemento":
        newArray[index].complemento = e.target.value;
        break;

      default:
        break;
    }

    setSocios(newArray);
  };

  const handleChangeContatos = (type, index, indexContato, e) => {
    const newArray = [...socios];

    switch (type) {
      case "telefoneContato":
        newArray[index].contatos[indexContato].telefoneContato = e.target.value;
        break;

      case "emailContato":
        newArray[index].contatos[indexContato].emailContato = e.target.value;
        break;

      default:
        break;
    }

    setSocios(newArray);
  };

  const addContactOption = (item) => {
    // const id = contatos.length;
    const optionLine = {
      telefoneContato: "",
      emailContato: "",
    };

    setSocios((state) => [...state, item.contatos.push(optionLine)]);

    setSocios([...socios]);
  };

  const deleteContactOption = (item, index) => {
    // console.log(item, index);
    // setSocios((state) => [
    //   ...state,
    //   item.contatos.filter((_, i) => i !== index),
    // ]);
    setSocios((state) => [...state, item.contatos.splice(index, 1)]);
    setSocios([...socios]);
  };

  const addOption = () => {
    const id = socios.length;
    const optionLine = {
      id: id,
      tipo: "",
      representante: false,
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
      numero: "",
      bairro: "",
      municipio: "",
      complemento: "",
      uf: "",
      contatos: [
        {
          telefoneContato: "",
          emailContato: "",
        },
      ],
    };

    setSocios([...socios, optionLine]);
  };

  const deleteOption = (index) => {
    setSocios(socios.filter((_, i) => i !== index));
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEditButton = () => {
    dispatch(setIsDisable(inputState));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const schema = Yup.array().of(
        Yup.object({
          id: Yup.number(),
          tipo: Yup.string().required("Escolha um tipo de sócio"),
          representante: Yup.boolean(),
          nome: Yup.string().required("Campo Nome, obrigatório"),
          cpf: Yup.string().required("Campo CPF, obrigatório"),
          rg: Yup.string().required("Campo RG, obrigatório"),
          orgaoEmissorRg: Yup.string().required(
            "Campo Órgão Emissor (RG), obrigatório"
          ),
          ufRg: Yup.string().required("Campo Uf de origem (RG), obrigatório"),
          carteiraProfissional: Yup.string().required(
            "Campo Carteira Profissional, obrigatório"
          ),
          orgaoEmissorCarteira: Yup.string().required(
            "Campo Órgão Emissor (Carteira), obrigatório"
          ),
          ufCarteira: Yup.string().required(
            "Campo Uf de origem (Carteira), obrigatório"
          ),
          nacionalidade: Yup.string().required(
            "Campo Nacionalidade, obrigatório"
          ),
          naturalidade: Yup.string().required(
            "Campo Naturalidade, obrigatório"
          ),
          estadoCivil: Yup.string().required("Campo Estado Civil, obrigatório"),
          nomeConjuge: Yup.string(),
          cpfConjuge: Yup.string(),
          profissao: Yup.string().required("Campo Profissão, obrigatório"),
          dataNascimento: Yup.string().required(
            "Campo Data de Nascimento, obrigatório"
          ),
          cep: Yup.string().required("Campo CEP, obrigatório"),
          logradouro: Yup.string().required("Campo Logradouro, obrigatório"),
          bairro: Yup.string().required("Campo Bairro, obrigatório"),
          municipio: Yup.string().required("Campo Município, obrigatório"),
          complemento: Yup.string(),
          uf: Yup.string(),
          contatos: Yup.array().of(
            Yup.object({
              telefoneContato: Yup.string().required(
                "Campo Telefone, obrigatório"
              ),
              emailContato: Yup.string().required("Campo E-mail, obrigatório"),
            })
          ),
        })
      );

      await schema.validate(socios, {
        abortEarly: false,
      });

      console.log(socios);

      console.log("OKAY");
    } catch (err) {
      console.log(socios);
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
        Passo 06: Informe os dados de sócios. Você pode adicionar quantos
        quiser. O primeiro é obrigatório.
      </p>

      {socios &&
        socios.map((item, index) => (
          <>
            <Grid container key={index} spacing={2} className="mb-5 mt-5">
              <Grid item xs={12} className="ml-3">
                <InputLabel>
                  <strong>Tipo de Sócio</strong>
                </InputLabel>
              </Grid>
              <Grid item md={representante ? 4 : 6}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                  id="select"
                  label="Escolha um tipo de sócio"
                  select
                >
                  <MenuItem value="SOCIO_ADMINISTRADOR">
                    Sócio Administrador
                  </MenuItem>
                  <MenuItem value="SoCIO">Sócio</MenuItem>
                  <MenuItem value="ADMINISTRADOR_NAO_SOCIO">
                    Administrador não sócio
                  </MenuItem>
                  <MenuItem value="DIRETOR">Diretor</MenuItem>
                  <MenuItem value="CONSELHEIRO_DE_ADMINISTRACAO">
                    Conselheiro de Administração
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid
                item
                md={representante ? 4 : 6}
                className="pl-5 d-flex w-full align-items-center justify-content-center"
              >
                <InputLabel className="mr-5">
                  Representante perante a RBF?{" "}
                </InputLabel>
                <span>Não</span>
                <Switch
                  disabled={socios.some(
                    (socio) => socio.representante === true
                  )}
                  onChange={() => setRepresentante(!representante)}
                  color="default"
                />
                <span>Sim</span>
              </Grid>

              {representante && (
                <Grid item md={4}>
                  <TextField
                    fullWidth
                    id="date"
                    label="Data de registro do Representante"
                    variant="outlined"
                    type="date"
                    format="DD-MM-YYYY"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              )}
              <Grid item xs={12} className="ml-3 mt-5">
                <Divider className={classes.divider} />
                <InputLabel>
                  <strong>Dados Pessoais</strong>
                </InputLabel>
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="Nome"
                  fullWidth
                  onChange={(e) => addInformationOption("nome", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="CPF"
                  fullWidth
                  onChange={(e) => addInformationOption("cpf", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="RG"
                  fullWidth
                  onChange={(e) => addInformationOption("rg", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="Uf de origem (RG)"
                  fullWidth
                  onChange={(e) => addInformationOption("ufRg", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={4}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="Uf de origem (Carteira)"
                  fullWidth
                  onChange={(e) => addInformationOption("ufCarteira", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                      disabled={
                        managerCustomer === true ? inputState.isDisable : false
                      }
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
                      disabled={
                        managerCustomer === true ? inputState.isDisable : false
                      }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="Logradouro"
                  fullWidth
                  onChange={(e) => addInformationOption("logradouro", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="Número"
                  fullWidth
                  onChange={(e) => addInformationOption("numero", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="Bairro"
                  fullWidth
                  onChange={(e) => addInformationOption("bairro", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  label="Município"
                  fullWidth
                  onChange={(e) => addInformationOption("municipio", index, e)}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
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

              {item.contatos &&
                item.contatos.map((a, indexContato) => (
                  <Grid
                    container
                    key={index}
                    spacing={2}
                    className="mb-5"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <TextField
                        disabled={
                          managerCustomer === true
                            ? inputState.isDisable
                            : false
                        }
                        label="Telefone"
                        fullWidth
                        onChange={(e) =>
                          handleChangeContatos(
                            "telefoneContato",
                            index,
                            indexContato,
                            e
                          )
                        }
                        className={classes.textField}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        disabled={
                          managerCustomer === true
                            ? inputState.isDisable
                            : false
                        }
                        label="E-mail"
                        fullWidth
                        onChange={(e) =>
                          handleChangeContatos(
                            "emailContato",
                            index,
                            indexContato,
                            e
                          )
                        }
                        className={classes.textField}
                        variant="outlined"
                      />
                    </Grid>

                    {item.contatos.length > 1 && (
                      <Grid item xs={1}>
                        <Tooltip title="Deletar Opção">
                          <Fab
                            size="small"
                            color="primary"
                            aria-label="Deletar Opção"
                            onClick={() => deleteContactOption(item, index)}
                          >
                            <DeleteIcon />
                          </Fab>
                        </Tooltip>
                      </Grid>
                    )}
                  </Grid>
                ))}

              <Grid container>
                {managerCustomer === true ? (
                  !inputState.isDisable && (
                    <Grid
                      lg={3}
                      className={classes.plusButton}
                      onClick={() => addContactOption(item)}
                    >
                      <Fab size="small" color="primary">
                        <AddIcon />
                      </Fab>
                      <span className="ml-4">Adicionar novo Contato </span>
                    </Grid>
                  )
                ) : (
                  <Grid
                    lg={3}
                    className={classes.plusButton}
                    onClick={() => addContactOption(item)}
                  >
                    <Fab size="small" color="primary">
                      <AddIcon />
                    </Fab>
                    <span className="ml-4">Adicionar novo Contato </span>
                  </Grid>
                )}
              </Grid>

              <Grid item xs={12} className="pl-6 mt-4">
                {managerCustomer === true ? (
                  !inputState.isDisable && (
                    <InputLabel>
                      <strong>
                        Adicione aqui os anexos de documentos do sócio.
                        <Tooltip title="Documentos anexos dos sócios e representantes">
                          <InfoIcon />
                        </Tooltip>
                      </strong>
                    </InputLabel>
                  )
                ) : (
                  <InputLabel>
                    <strong>
                      Adicione aqui os anexos de documentos do sócio.
                      <Tooltip title="Documentos anexos dos sócios e representantes">
                        <InfoIcon />
                      </Tooltip>
                    </strong>
                  </InputLabel>
                )}

                <CustomDropzone managerCustomer={managerCustomer} />
              </Grid>
              {socios.length > 1 && (
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
        {managerCustomer === true ? (
          !inputState.isDisable && (
            <Grid
              lg={3}
              className={classes.plusButton}
              onClick={() => addOption()}
            >
              <Fab size="small" color="primary">
                <AddIcon />
              </Fab>
              <span className="ml-4">Adicionar novo sócio </span>
            </Grid>
          )
        ) : (
          <Grid
            lg={3}
            className={classes.plusButton}
            onClick={() => addOption()}
          >
            <Fab size="small" color="primary">
              <AddIcon />
            </Fab>
            <span className="ml-4">Adicionar novo sócio </span>
          </Grid>
        )}
      </Grid>
      <button type="submit"> TESTE YUP</button>
    </form>
  );
};
