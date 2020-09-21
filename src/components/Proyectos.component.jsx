import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Grid } from "@material-ui/core";

import CardProyecto from "./ui/CardProyecto.component";

const Proyectos = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography
          className={classes.titulo}
          variant="h3"
          id="Proyectos"
          style={{ marginTop: "5rem" }}
        >
          Proyectos que he construido
        </Typography>
      </Grid>
      <Grid>
        {proyectos.map((proyecto, index) => (
          <CardProyecto key={index} proyecto={proyecto} />
        ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  titulo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
}));

const proyectos = [
  {
    nombre: "Chilepostbot",
    imagen: require("../assets/chilepostbot.png"),
    descripcion:
      "*WIP* Una aplicacion full-stack para un proyecto personal. El usuario puede crear una cuenta, subir imagenes y ver imagenes cargadas por otros usuarios. (WIP refactorizando y actualizando a Nextjs)",
    herramientas: [
      "React",
      "Redux",
      "GraphQL",
      "MongoDB",
      "Cloudinary",
      "SCSS",
    ],
    /*     url: "https://www.chilepostbot.cl/",
    fb: "https://www.facebook.com/chileposting1810", */
  },
  {
    nombre: "Portafolio",
    imagen: require("../assets/portafolio.png"),
    descripcion:
      "Portafolio sencillo para mostrar mis aptitudes e información. (Desactualizado, actualmente refactorizandolo utilizando la experiencia que he ganado)",
    herramientas: ["React", "Material-UI"],
    codigo: "https://github.com/ByronMunozG/portafolio",
  },
];

export default Proyectos;
