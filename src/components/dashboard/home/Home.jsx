import { Box, Divider, Toolbar, useMediaQuery, useTheme } from "@mui/material";
// import { useDispatch } from "react-redux";
import CategorySidebar from "./CategorySidebar";
import CategoryListItems from "./CategoryListItems";
import PlatterItems from "./PlatterItems";
import NavBar from "../../auth/NavBar";
// import { setSearchQuery } from "../../store/homeSlice";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <NavBar />
      <Toolbar sx={{ mb: 3 }} />

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        {/* Left Sidebar */}
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            p: 2,
          }}
        >
          <CategorySidebar />
        </Box>
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "grey.200", width: "1.2px", height: "85vh" }}
          />
        )}

        {/* Main Content */}
        <Box sx={{ flex: 1, p: 2 }}>
          <CategoryListItems />
        </Box>

        {/* Platter Items */}
        <Box sx={{ width: { xs: "100%", md: "20%" }, p: 2 }}>
          <PlatterItems />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
