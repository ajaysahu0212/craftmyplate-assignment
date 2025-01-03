import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategorySearch,
  setSelectedCategory,
} from "../../../redux/homeSlice";
import { categories } from "../../../custom-components/JsonFile";

const CategorySidebar = () => {
  const dispatch = useDispatch();
  const categorySearch = useSelector((state) => state.home.categorySearch);
  const selectedCategory = useSelector((state) => state.home.selectedCategory);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(categorySearch.toLowerCase())
  );

  const handleTabChange = (event, newValue) => {
    dispatch(setSelectedCategory(newValue));
  };

  return (
    <div>
      <TextField
        fullWidth
        placeholder="Search Category"
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
        value={categorySearch}
        onChange={(e) => dispatch(setCategorySearch(e.target.value))}
      />

      {isMobile ? (
        <Tabs
          value={selectedCategory}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Category tabs"
          sx={{
            "& .MuiTab-root": {
              minWidth: "auto",
              textTransform: "none",
              color: "#999", // Default color for inactive tabs
              "&.Mui-selected": {
                color: "#5000A2", // Active tab color
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#5000A2", // Indicator color
            },
          }}
        >
          {filteredCategories.map((category) => (
            <Tab
              key={category.name}
              label={category.name}
              value={category.name}
              textColor={theme.palette.primary.main}
              icon={
                <Avatar
                  sx={{ width: "40px", height: "40px" }}
                  src={category.avatar}
                  alt={category.name}
                />
              }
              iconPosition="start"
            />
          ))}
        </Tabs>
      ) : (
        <List>
          {filteredCategories.map((category) => (
            <ListItem
              key={category.name}
              button
              selected={selectedCategory === category.name}
              onClick={() => dispatch(setSelectedCategory(category.name))}
              sx={{
                cursor: "pointer",
                borderRadius: "12px",
                my: 1,
                color:
                  selectedCategory === category.name ? "#5000A2" : "inherit",
                bgcolor:
                  selectedCategory === category.name
                    ? "#EEDEFF"
                    : "transparent",
                "&:hover": {
                  bgcolor:
                    selectedCategory === category.name ? "#EEDEFF" : "#EEDEED",
                },
                transition: "background-color 0.3s",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ width: "50px", height: "50px" }}
                  src={category.avatar}
                  alt={category.name}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{ fontFamily: "Roboto Slab" }}
                primary={category.name}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default CategorySidebar;
