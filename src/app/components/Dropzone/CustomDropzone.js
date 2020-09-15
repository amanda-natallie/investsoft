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

  const files = acceptedFiles.map((file) => (
    <ListItem key={file.path} disableGutters>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${file.path} - ${file.size} bytes`} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  return (
    <section className={classes.root}>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <p>Arraste seus arquivos para cá, ou clique para selecioná-los.</p>
      </div>
      {files && <List>{files}</List>}
    </section>
  );
};
