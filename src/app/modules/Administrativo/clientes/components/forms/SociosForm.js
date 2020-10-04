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
  Button,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { CustomDropzone } from "../../../../../components/Dropzone/CustomDropzone";
import InfoIcon from "@material-ui/icons/Info";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import {
  setIsDisable,
  setClientes,
  createSocios,
  createCliente,
  clearClientes,
} from "../../../clientes/_redux/clientesActions";

import {
  nextStep,
  backStep,
  resetStep,
} from "../../../steps/_redux/stepsActions";

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
  const stepRedux = useSelector((state) => state.step);
  const dispatch = useDispatch();

  const [arrayOfErrors, setArrayOfErrors] = useState([]);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [socios, setSocios] = useState([
    {
      id: 0,
      tipoSocio: "",
      representanteRbf: false,
      nome: "",
      cpf: "",
      rg: "",
      orgaoEmissorRg: "",
      ufRg: "",
      carteiraProfissional: "",
      orgaoEmissorCarteiraProfissional: "",
      ufCarteiraProfissional: "",
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
      AssociateContacts: [
        {
          telefoneContato: "",
          emailContato: "",
        },
      ],
    },
  ]);

  const addInformationOption = (type, index, e) => {
    let newArray = [...socios];

    switch (type) {
      case "tipoSocio":
        newArray[index].tipoSocio = e.target.value;
        break;

      case "representanteRbf":
        newArray[index].representanteRbf = !newArray[index].representanteRbf;
        break;

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

      case "orgaoEmissorCarteiraProfissional":
        newArray[index].orgaoEmissorCarteiraProfissional = e.target.value;
        break;

      case "ufCarteiraProfissional":
        newArray[index].ufCarteiraProfissional = e.target.value;
        break;

      case "nacionalidade":
        newArray[index].nacionalidade = e.target.value;
        break;

      case "naturalidade":
        newArray[index].naturalidade = e.target.value;
        break;

      case "estadoCivil":
        newArray[index].estadoCivil = e.target.value;
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
        newArray[index].AssociateContacts[indexContato].telefoneContato =
          e.target.value;
        break;

      case "emailContato":
        newArray[index].AssociateContacts[indexContato].emailContato =
          e.target.value;
        break;

      default:
        break;
    }

    setSocios(newArray);
  };

  const addContactOption = (item) => {
    // const id = AssociateContacts.length;
    const optionLine = {
      telefoneContato: "",
      emailContato: "",
    };

    setSocios((state) => [...state, item.AssociateContacts.push(optionLine)]);

    setSocios([...socios]);
  };

  const deleteContactOption = (item, index) => {
    // console.log(item, index);
    // setSocios((state) => [
    //   ...state,
    //   item.AssociateContacts.filter((_, i) => i !== index),
    // ]);
    setSocios((state) => [...state, item.AssociateContacts.splice(index, 1)]);
    setSocios([...socios]);
  };

  const addOption = () => {
    const id = socios.length;
    const optionLine = {
      id: id,
      tipoSocio: "",
      representanteRbf: false,
      nome: "",
      cpf: "",
      rg: "",
      orgaoEmissorRg: "",
      ufRg: "",
      carteiraProfissional: "",
      orgaoEmissorCarteiraProfissional: "",
      ufCarteiraProfissional: "",
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
      AssociateContacts: [
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
          tipoSocio: Yup.string().required("Escolha um tipo de sócio"),
          representanteRbf: Yup.boolean(),
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
          orgaoEmissorCarteiraProfissional: Yup.string().required(
            "Campo Órgão Emissor (Carteira), obrigatório"
          ),
          ufCarteiraProfissional: Yup.string().required(
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
          AssociateContacts: Yup.array().of(
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

      console.log("OKAY");
      dispatch(createSocios(socios));
      dispatch(createCliente(inputState.clienteInformation, socios));
      console.log("PÓS SAGA");
      dispatch(clearClientes());
      dispatch(nextStep(stepRedux));
    } catch (err) {
      const validationErros = {};
      let InputError = [];

      err.inner.forEach((error, i) => {
        validationErros[error.path] = error.message;
        InputError[i] = error.path;
      });

      setArrayOfErrors(InputError);

      console.log(err);
    }
  };

  const checkingArrayOfErrors = (name, index) => {
    const find = arrayOfErrors.findIndex(
      (error) => error === `[${index}].${name}`
    );
    if (find !== -1) return true;
    else return false;
  };

  const checkingArrayOfErrorsContacts = (name, index, indexContato) => {
    const find = arrayOfErrors.findIndex(
      (error) =>
        error === `[${index}].AssociateContacts[${indexContato}].${name}`
    );
    if (find !== -1) return true;
    else return false;
  };

  const handleBack = () => {
    dispatch(backStep(stepRedux));
  };

  const checkRepresentateDisable = (index) => {
    const someTrue = socios.some((socio) => socio.representanteRbf === true);

    if (someTrue === true && socios[index].representanteRbf === true)
      return false;
    else if (someTrue === true && socios[index].representanteRbf === false)
      return true;
    else return false;
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
              <Grid item md={item.representanteRbf ? 4 : 6}>
                <TextField
                  disabled={
                    managerCustomer === true ? inputState.isDisable : false
                  }
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                  id="select"
                  label="Escolha um tipo de sócio"
                  onChange={(e) => addInformationOption("tipoSocio", index, e)}
                  error={checkingArrayOfErrors("tipoSocio", index)}
                  select
                >
                  <MenuItem value="SOCIO_ADMINISTRADOR">
                    Sócio Administrador
                  </MenuItem>
                  <MenuItem value="SOCIO">Sócio</MenuItem>
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
                md={item.representanteRbf ? 4 : 6}
                className="pl-5 d-flex w-full align-items-center justify-content-center"
              >
                <InputLabel className="mr-5">
                  Representante perante a RBF?{" "}
                </InputLabel>
                <span>Não</span>
                <Switch
                  disabled={checkRepresentateDisable(index)}
                  onChange={(e) =>
                    addInformationOption("representanteRbf", index, e)
                  }
                  color="default"
                />
                <span>Sim</span>
              </Grid>

              {item.representanteRbf && (
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
                  error={checkingArrayOfErrors("nome", index)}
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
                  error={checkingArrayOfErrors("cpf", index)}
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
                  error={checkingArrayOfErrors("dataNascimento", index)}
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
                  error={checkingArrayOfErrors("rg", index)}
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
                  error={checkingArrayOfErrors("orgaoEmissorRg", index)}
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
                  error={checkingArrayOfErrors("ufRg", index)}
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
                  error={checkingArrayOfErrors("carteiraProfissional", index)}
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
                    addInformationOption(
                      "orgaoEmissorCarteiraProfissional",
                      index,
                      e
                    )
                  }
                  error={checkingArrayOfErrors(
                    "orgaoEmissorCarteiraProfissional",
                    index
                  )}
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
                  onChange={(e) =>
                    addInformationOption("ufCarteiraProfissional", index, e)
                  }
                  error={checkingArrayOfErrors("ufCarteiraProfissional", index)}
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
                  error={checkingArrayOfErrors("nacionalidade", index)}
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
                  error={checkingArrayOfErrors("naturalidade", index)}
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
                  onChange={(e) =>
                    addInformationOption("estadoCivil", index, e)
                  }
                  error={checkingArrayOfErrors("estadoCivil", index)}
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
              {item.estadoCivil === "CASADO" && (
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
                      error={checkingArrayOfErrors("nomeConjuge", index)}
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
                      error={checkingArrayOfErrors("cpfConjuge", index)}
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
                  error={checkingArrayOfErrors("profissao", index)}
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
                  error={checkingArrayOfErrors("cep", index)}
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
                  error={checkingArrayOfErrors("logradouro", index)}
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
                  error={checkingArrayOfErrors("numero", index)}
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
                  error={checkingArrayOfErrors("bairro", index)}
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
                  error={checkingArrayOfErrors("municipio", index)}
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
                  error={checkingArrayOfErrors("complemento", index)}
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

              {item.AssociateContacts &&
                item.AssociateContacts.map((a, indexContato) => (
                  <Grid
                    container
                    key={(a, indexContato)}
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
                        error={checkingArrayOfErrorsContacts(
                          "telefoneContato",
                          index,
                          indexContato
                        )}
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
                        error={checkingArrayOfErrorsContacts(
                          "emailContato",
                          index,
                          indexContato
                        )}
                        className={classes.textField}
                        variant="outlined"
                      />
                    </Grid>

                    {item.AssociateContacts.length > 1 && (
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

      <Grid item md={6}>
        {managerCustomer === false && (
          <Grid container>
            <Grid item md={2}>
              <Button
                disabled={stepRedux.step === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Voltar
              </Button>
            </Grid>

            <Grid item md={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                {stepRedux.step === 5 ? "Finalizar" : "Próximo"}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </form>
  );
};
