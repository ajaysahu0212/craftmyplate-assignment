import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/cartlogo1.png";

const NavBar = () => {
  const location = useLocation(); 
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate('/')
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ["Orders", "Payment History", "Order History", "Master"];

  // Check if the current path is '/'
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#f1f1f1",
          boxShadow: `0px 8px 15px rgba(80, 0, 162, 0.3)`,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Left Section: Logo and Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                maxWidth: { xs: "40px", sm: "60px" },
                width: "100%",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Roboto Slab",
                color: "#5000A2",
                fontWeight: 600,
                fontSize: { xs: "1.1rem", sm: "1.5rem" },
              }}
            >
              Craft My Plate
            </Typography>
          </Box>

          {/* Middle Section: Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { xs: 1.5, md: 3 },
              alignItems: "center",
            }}
          >
            {!isHomePage &&
              menuItems.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontWeight: 500,
                    color: "#5000A2",
                    cursor: "pointer",
                    fontSize: { xs: "1rem", md: "20px" },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
          </Box>

          {/* Right Section: Profile and Logout */}
          {!isHomePage && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AccountCircleIcon sx={{ color: "#5000A2" }} />
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#5000A2",
                  }}
                >
                  Parthu
                </Typography>
              </Box>
              <IconButton onClick={handleClick} sx={{ color: "#5000A2" }}>
                <LogoutIcon />
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>

              {/* Toggle Button for Drawer (Visible on Small Screens) */}
              <IconButton
                sx={{
                  display: { xs: "flex", sm: "none" },
                  color: "#5000A2",
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: 2,
              backgroundColor: "#f1f1f1",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                maxWidth: "40px",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Roboto Slab",
                color: "#5000A2",
                fontWeight: 600,
              }}
            >
              Craft My Plate
            </Typography>
          </Box>
          <Divider />
          <List>
            {!isHomePage &&
              menuItems.map((item, index) => (
                <ListItem button key={index} onClick={handleDrawerToggle}>
                  <ListItemText
                    primary={item}
                    sx={{
                      color: "#5000A2",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            {isHomePage && (
              <ListItem button onClick={handleDrawerToggle}>
                <ListItemText
                  primary="All"
                  sx={{
                    color: "#5000A2",
                    fontWeight: 500,
                  }}
                />
              </ListItem>
            )}
          </List>
          <Divider />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              padding: 2,
              justifyContent: "center",
            }}
          >
            <AccountCircleIcon sx={{ color: "#5000A2" }} />
            <Typography
              sx={{
                fontWeight: 500,
                color: "#5000A2",
              }}
            >
              Parthu
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default NavBar;
