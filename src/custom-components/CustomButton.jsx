import PropTypes from "prop-types";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import theme from "../theme";

const CustomButton = ({ text, loading, onClick, variant, bgColor, sx }) => {

  const StyledButton = styled(LoadingButton)(() => ({
    borderRadius: "50px",
    textTransform: "none",
    color: theme.palette.common.white,
    backgroundColor: bgColor ?? theme.palette.primary.main,
    border: "none",
    padding: "6px 16px",
    fontSize: "0.875rem",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: bgColor ?? theme.palette.secondary.dark,
      color: theme.palette.common.white,
      borderColor: theme.palette.primary.main,
    },
  }));

  return (
    <StyledButton
      sx={sx}
      color={bgColor}
      variant={variant}
      loading={loading}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

// Add prop validation
CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

// Default props
CustomButton.defaultProps = {
  loading: false,
  onClick: () => {},
};

export default CustomButton;
