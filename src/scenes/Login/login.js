import { Link } from "react-router-dom";
import man from "../../assets/svgs/homme_carte.svg";
import panneau from "../../assets/svgs/panneau_indications.svg";
import logoUni from "../../assets//logos/logo_paris_nanterre_uni.png";
import logo from "../../assets/logos/logo_trackmyseat.png";
import "./login.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// import { createTheme } from "@material-ui/core/styles";

// const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#3949ab",
//       },
//       secondary: {
//         main: "#ec407a",
//       },
//     },
//   });

export const LoginPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logoUni}
          className="App-logo"
          alt="Logo université Paris-Nanterre"
        />
        <img src={logo} className="App-logo" alt="Logo TrackMySeat" />
        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{ width: "50vw" }}
        >
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Adresse mail"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Link href="#" variant="body2">
              Mot de passe oublié ?
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Button
                to="/MapBuilding"
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Connexion
              </Button>
            </Link>
          </Grid>
        </Grid>
        <div className="App-sign">
          <img src={man} className="App-man" alt="Un homme avec une carte" />
          <img
            src={panneau}
            className="App-panneau"
            alt="Un panneau de directions"
          />
        </div>
      </header>
    </div>
  );
};
