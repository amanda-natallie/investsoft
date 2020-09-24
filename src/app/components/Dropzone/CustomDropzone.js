import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "20px 0",
    padding: 0,
  },
  dropzone: {
    textAlign: "center",
    height: "65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "2rem",
    border: `2px dashed ${theme.palette.primary.main}`,
    cursor: "pointer",

    "& p": {
      margin: 0,
      lineHeight: 0,
    },
    "&:focus": {
      outline: "none",
    },
  },
  list: {
    margin: "20px 0",
    overflowY: "scroll",

    "& ul li": {
      listStyle: "none",
    },
  },
}));
export const CustomDropzone = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const classes = useStyles();
  const [renderFiles, setRenderFiles] = useState([]);

  const [arrayFiles, setArrayFiles] = useState(acceptedFiles);

  function checkingIdenticalFiles(files) {
    files.map((file) => {
      const findFileIndex = arrayFiles.findIndex(
        (arrayFile) => arrayFile.name === file.name
      );

      if (findFileIndex !== -1) arrayFiles.splice(findFileIndex, 1);
    });
  }

  function renderingFiles() {
    setRenderFiles(
      arrayFiles.map((file) => (
        <ListItem key={file.path} disableGutters>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${file.path} - ${file.size} bytes`} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteButton(file.name)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))
    );
  }

  useEffect(() => {
    if (acceptedFiles === undefined) return;

    const files = acceptedFiles.map((files) => files);

    checkingIdenticalFiles(files);

    setArrayFiles([...arrayFiles, ...files]);
  }, [acceptedFiles]);

  useEffect(() => {
    renderingFiles();
  }, [arrayFiles, acceptedFiles]);

  function handleDeleteButton(name) {
    const fileIndex = arrayFiles.findIndex((file) => file.name === name);

    if (fileIndex !== -1) {
      arrayFiles.splice(fileIndex, 1);
      renderFiles.splice(fileIndex, 1);
      renderingFiles();
    } else {
      return;
    }
  }

  return (
    <section className={classes.root}>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <p>Arraste seus arquivos para cá, ou clique para selecioná-los.</p>
      </div>
      {renderFiles && <List>{renderFiles}</List>}
    </section>
  );
};
