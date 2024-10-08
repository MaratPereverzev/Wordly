import { Box, Button, Text } from "@components";
import { Checkbox, styled } from "@mui/material";
import { changeChecked } from "@store/dictionaries";
import { areEqual } from "@utils";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const styledItemImageContainer = {
  p: 1,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
};

export const ItemBox = memo((props) => {
  const { sx, data, ...other } = props;

  const dictionaries = useSelector((store) => store.dictionaries);
  const dispatch = useDispatch();

  return (
    <StyledItemContainer flex jc sx={sx} {...other}>
      <Box flex column grow sx={{ p: 1 }}>
        <Box
          flex
          column
          grow
          sx={{
            background: data?.medium?.id
              ? `url(http://localhost:8080/api/media?id=${data?.medium.id})`
              : "#f9f6fe",
            ...styledItemImageContainer,
          }}
        >
          <Box flex gap="5px" jc="flex-end"></Box>
        </Box>
        <Box flex sx={{ p: 1 }} center>
          {dictionaries.isSelectMode && (
            <Checkbox
              checked={
                !!dictionaries.selectedItems.find(
                  (dictionary) => dictionary.id === data.id
                )
              }
              onChange={(e) => {
                dispatch(changeChecked(data));
              }}
            />
          )}
          <Box flex column grow>
            <StyledCaptionText caption={data?.caption} />
            <StyledDescriptionText caption={data?.description} />
          </Box>
          <Box flex gap="5px">
            <StyledActionButton caption="view" sxText={{ fontSize: "12px" }} />
          </Box>
        </Box>
      </Box>
    </StyledItemContainer>
  );
}, areEqual);

const StyledItemContainer = styled(Box)(({ theme }) => ({
  aspectRatio: "16/10",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
}));
/*
const StyledDeleteButton = styled(ButtonIcon)(() => ({
  "&:hover": { color: "#E41F1F" },
  transition: "color 200ms ease-in-out",
}));
*/

const StyledActionButton = styled(Button)(() => ({
  backgroundColor: "black",
  borderRadius: "20px",
  justifyContent: "center",
  width: "50px",
  "&:hover": {
    backgroundColor: "#333333",
  },
}));

const StyledDescriptionText = styled(Text)(() => ({
  fontSize: "12px",
  color: "grey",
  grow: 1,
}));

const StyledCaptionText = styled(Text)(() => ({ fontSize: "20px" }));
