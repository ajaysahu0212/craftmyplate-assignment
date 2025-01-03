import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { categoriesJson } from "../../../custom-components/JsonFile"; // Assume categories data
import { addToPlatter, setSearchQuery } from "../../../redux/homeSlice";
import theme from "../../../theme";

const CategoryListItems = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.home.selectedCategory);
  const searchQuery = useSelector((state) => state.home.searchQuery);
  const platterItems = useSelector((state) => state.home.platterItems); // Get platter items from state

  const selectedCategoryItems =
    categoriesJson.find((category) => category.name === selectedCategory)
      ?.items || [];

  const filteredItems = selectedCategoryItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const itemsWithCategoryName = filteredItems.map((item) => ({
  //   ...item,
  //   category: selectedCategory, // Add the category name to each item
  // }));

  // console.log(itemsWithCategoryName, "itemsWithCategoryName");

  return (
    <Box>
      <TextField
        fullWidth
        placeholder="Search items"
        size="small"
        sx={{
          mb: 4,
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            "& fieldset": {
              borderColor: "#5000A2", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "#5000A2", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5000A2", // Focused border color
            },
          },
          "& .MuiInputBase-input": {
            color: "#5000A2", // Input text color
          },
          "& .MuiInputLabel-root": {
            color: "#5000A2", // Placeholder text color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#5000A2", // Focused placeholder color
          },
        }}
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
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
        sx={{ overflowX: "hidden", px: 2 }}
      >
        {filteredItems.length === 0 ? (
          <Typography variant="h6">No items found</Typography>
        ) : (
          filteredItems.map((item) => {
            const isAdded = platterItems.some(
              (platterItem) => platterItem?.item.id === item.id
            );

            return (
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
                    ml: 3,
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "140px",
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
                    variant={isAdded ? "contained" : "outlined"}
                    size="small"
                    fullWidth
                    disabled={isAdded}
                    onClick={() =>
                      dispatch(
                        addToPlatter({ item, category: selectedCategory })
                      )
                    }
                    sx={{
                      mt: 1,
                      width: "60px",
                      borderRadius: "50px",
                      textTransform: "none",
                      backgroundColor: isAdded
                        ? theme.palette.primary.main
                        : "transparent",
                      color: isAdded ? "white" : theme.palette.primary.main,
                      border: isAdded
                        ? `1.5px solid ${theme.palette.primary.main}`
                        : `1.5px solid ${theme.palette.primary.main}`,
                      "&:hover": {
                        backgroundColor: isAdded
                          ? theme.palette.primary.main
                          : "rgba(80, 0, 162, 0.1)", // Optional hover effect for not added state
                      },
                      "&.Mui-disabled": {
                        backgroundColor: isAdded
                          ? theme.palette.primary.main
                          : "#f0f0f0",
                        color: isAdded ? "white" : "#a0a0a0",
                        border: isAdded
                          ? `1.5px solid ${theme.palette.primary.main}`
                          : "1.5px solid #f0f0f0",
                      },
                    }}
                  >
                    {isAdded ? "Added" : "Add"}
                  </Button>
                </CardContent>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default CategoryListItems;
