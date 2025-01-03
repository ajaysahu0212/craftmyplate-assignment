import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { clearPlatter, removeFromPlatter } from "../../../redux/homeSlice";
import CustomButton from "../../../custom-components/CustomButton";

const PlatterItems = () => {
  const dispatch = useDispatch();
  const platterItems = useSelector((state) => state.home.platterItems);

  console.log('platterItems', platterItems)

  // Group items by category
  const groupedItems = platterItems.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr.item);
    return acc;
  }, {});

  console.log("groupedItems", groupedItems);

  // State for Dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleConfirmClick = () => {
    setOpenDialog(true);
  };

  const handleConfirmRemove = () => {
    dispatch(clearPlatter());
    setOpenDialog(false);
  };

  const handleCancelRemove = () => {
    setOpenDialog(false);
  };

  const handleRemoveItem = (item, category) => {
    const itemToRemove = { id: item?.id, category }; 
    dispatch(removeFromPlatter(itemToRemove)); 
  };

  return (
    <Box>
      {platterItems?.length >= 1 && (
        <>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "purple" }}>
            Platter Items
          </Typography>
          <Box sx={{ pb: 6 }}>
            {Object.keys(groupedItems).map((category) => (
              <Box key={category} sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                >
                  {category}
                </Typography>
                <List>
                  {groupedItems[category]?.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar
                          sx={{ width: "50px", height: "50px" }}
                          src={item.image}
                          alt={item.name}
                        />
                      </ListItemAvatar>
                      <ListItemText primary={item.name} />
                      <IconButton
                        onClick={() => handleRemoveItem(item, category)}
                      >
                        <CloseRoundedIcon sx={{ color: "purple" }} />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: {xs: "center",md:"end"},
              alignItems: {xs: "center",md:"end"},
              bgcolor: "background.paper",
              p: 2,
              zIndex: 1000,
            }}
          >
            <CustomButton
              text="Confirm Platter"
              size="small"
              variant="contained"
              sx={{ width: "250px" }}
              onClick={handleConfirmClick}
            />
          </Box>
        </>
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCancelRemove}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
            pb: 1,
          },
        }}
      >
        <DialogTitle>Confirm Platter</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to confirm these platter items?
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", gap: 2 }}
        >
          <CustomButton
            text="Confirm"
            size="small"
            variant="contained"
            onClick={handleConfirmRemove}
            color="error"
          />
          <CustomButton
            text="Cancel"
            size="small"
            variant="contained"
            sx={{ borderRadius: "50px" }}
            onClick={handleCancelRemove}
            bgColor="error"
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PlatterItems;
