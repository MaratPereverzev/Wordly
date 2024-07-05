import { useState } from "react";
import { Popover } from "@mui/material";
import { Box } from "@components";

const Default = (props) => {
  const { button, children, closeOnClick, ...other } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;

  return button ? (
    <Box flex grow>
      {<button.type {...button.props} onClick={handleClick} />}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        {...other}
      >
        <Box flex column>
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <child.type
                key={index}
                {...child.props}
                onClick={() => {
                  child.props?.onClick();
                  handleClose();
                }}
              />
            ))
          ) : (
            <children.type {...children.props}>
              {children.props?.children.map((child, index) => (
                <child.type
                  key={index}
                  {...child.props}
                  onClick={() => {
                    child.props?.onClick();
                    if (closeOnClick) handleClose();
                  }}
                />
              ))}
            </children.type>
          )}
        </Box>
      </Popover>
    </Box>
  ) : null;
};

export { Default as Popover };
