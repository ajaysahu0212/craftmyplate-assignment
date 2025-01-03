import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Toolbar,
  ListItemAvatar,
  Avatar,
  IconButton,
} from "@mui/material";
import { Container, styled } from "@mui/system";
import { categoriesJson } from "../../custom-components/JsonFile";
import NavBar from "../auth/NavBar";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import starterAvatar from "../../assets/platter-images/starters/starter.png";
import biryaniAvatar from "../../assets/platter-images/biryanies/chicken.png";
import theme from "../../theme";
// import beveragesAvatar from "../../assets/platter-images/beverages/beverages.png";

// Updated categories array
const categories = [
  { name: "Starter", avatar: "starterAvatar" },
  { name: "Biryani", avatar: biryaniAvatar },
  { name: "Beverages", avatar: "beveragesAvatar" },
];

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Starter");
  const [platterItems, setPlatterItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categorySearch, setCategorySearch] = useState("");

  const handleAddToPlatter = (item) => {
    setPlatterItems((prev) => [...prev, item]);
  };

  const handleRemoveFromPlatter = (index) => {
    setPlatterItems((prev) => prev.filter((_, i) => i !== index));
  };

  const selectedCategoryItems =
    categoriesJson.find((category) => category.name === selectedCategory)
      ?.items || [];

  const filteredItems = selectedCategoryItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <NavBar />
      <Toolbar sx={{ mb: 3 }} />

      <ResponsiveBox>
        {/* Left Sidebar */}
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },
            p: 2,
            borderRight: "1px solid #ddd",
            overflowX: "hidden",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search categories"
            size="small"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
          />
          <List>
            {filteredCategories.map((category) => (
              <ListItem
                key={category.name}
                button
                selected={selectedCategory === category.name}
                onClick={() => setSelectedCategory(category.name)}
                sx={{
                  cursor: "pointer",
                  borderRadius: "12px",
                  my: 1,
                  color:
                    selectedCategory === category.name ? "#5000A2" : "inherit",
                  bgcolor:
                    selectedCategory === category.name ? "#EEDEFF" : "inherit",
                  "&:hover": {
                    bgcolor:
                      selectedCategory === category.name
                        ? "#EEDEFF"
                        : "#EEDEEE",
                  },
                  transition: "background-color 0.3s",
                }}
              >
                <ListItemAvatar>
                  <Avatar src={category.avatar} alt={category.name} />
                </ListItemAvatar>
                <ListItemText
                  sx={{ fontFamily: "Roboto Slab" }}
                  primary={category.name}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <Container
          maxWidth="md"
          sx={{
            flex: 1,
            p: 2,
            overflowX: "hidden",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search items"
            size="small"
            sx={{
              mb: 4,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            rowGap={3}
            columnGap={2}
            sx={{ overflowX: "hidden" }}
          >
            {filteredItems.length === 0 ? (
              <Typography variant="h6">No items found</Typography>
            ) : (
              filteredItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{ display: "flex", mb: 2, borderRadius: "12px" }}
                >
                  <Card
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      maxWidth: "120px",
                      maxHeight: "120px",
                      minHeight: "120px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                  <CardContent
                    sx={{
                      //   px: "16px",
                      //   py:1,
                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "120px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontSize: { xs: "16px", sm: "18px" } }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                    >
                      {item.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      fullWidth
                      onClick={() => handleAddToPlatter(item)}
                      sx={{
                        mt: 1,
                        width: "60px",
                        borderRadius: "50px",
                        textTransform: "none",
                        color: theme.palette.primary.main,
                        border: ` 1.5px solid ${theme.palette.primary.main}`,
                      }}
                    >
                      Add
                    </Button>
                  </CardContent>
                </Box>
              ))
            )}
          </Box>
        </Container>

        {/* Platter Items */}
        {platterItems.length > 0 && (
          <Box
            sx={{
              width: { xs: "100%", md: "25%" },
              p: 2,
              borderLeft: "1px solid #ddd",
              overflowX: "hidden",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Platter Items
            </Typography>
            <List>
              {platterItems.map((item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveFromPlatter(index)}
                    >
                      <CloseRoundedIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={item.name} secondary={item.category} />
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, borderRadius: "12px" }}
            >
              Confirm Platter
            </Button>
          </Box>
        )}
      </ResponsiveBox>
    </Box>
  );
};

export default HomePage;
