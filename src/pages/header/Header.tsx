import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/_.svg";
import style from "./Header.module.css";
import MobileHeader from "./MobileHeader";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" className={style.toolbar}>
      <Container maxWidth="lg">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" width={40} style={{ marginRight: 8 }} />

          {!isMobile && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <Button
                  color="inherit"
                  onClick={() => handleScroll("home")}
                  sx={{ textTransform: "none" }}
                  className={style.buttonHeader}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleScroll("proposta")}
                  sx={{ textTransform: "none" }}
                  className={style.buttonHeader}
                >
                  Proposta
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleScroll("equipe")}
                  sx={{ textTransform: "none" }}
                  className={style.buttonHeader}
                >
                  Equipe
                </Button>
              </div>
              <Button
                variant="contained"
                onClick={() => handleScroll("proposta")}
                className={style.button}
                sx={{ textTransform: "none", marginLeft: "auto" }}
              >
                Proposta
              </Button>
            </>
          )}

          {isMobile && (
            <MobileHeader
              handleDrawerToggle={handleDrawerToggle}
              drawerOpen={drawerOpen}
              handleNavigation={handleScroll}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
