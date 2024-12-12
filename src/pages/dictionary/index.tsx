import { styled } from "@mui/material";
import { useParams } from "react-router-dom";

import { useGetDictionaryById } from "@/entities/Dictionary/hooks";
import { CreateWordDialog } from "@/features/Word/ui/createWord";
import { Box, Button, Text } from "@/shared/ui";
import { dispatchEvent } from "@/shared/utils";

/*
{data?.words?.rows.length > 0 && (
        <Box sx={{ p: 2 }}>
          <BasicTable
            bodyRows={data.words.rows}
            headRows={headRows}
            alignHeadCell="center"
            alignBodyCell="center"
          />
        </Box>
      )}
        */
const Dictionary = () => {
  const { id } = useParams();
  const { data } = useGetDictionaryById(id!);

  const headRows = ["id", "caption", "description", "actions"];

  return (
    <Box sx={{ p: 1, overflowY: "scroll" }}>
      <Box
        sx={{
          borderRadius: 1,
          width: "100%",
          height: "350px",
          background: data?.media
            ? `url(http://localhost:8080/api/media?id=${data?.media})`
            : "#f9f6fe",
          backgroundSize: "cover",
        }}
      />
      <StyledContainer>
        <Box flex column grow>
          <StyledCaption caption={data?.caption} />
          <Text caption={data?.description} />
        </Box>
        <Box flex gap>
          <StyledActionButton
            icon="add"
            caption="Add Translation"
            onClick={() => {
              dispatchEvent("onOpenDialog", {
                dialogContent: <CreateWordDialog />,
              });
            }}
          />
          <StyledActionButton
            icon="more"
            sx={{
              backgroundColor: "#D8E4FF",
              color: "#1565C0",
              "&:hover": {
                color: "#D8E4FF",
              },
            }}
          />
        </Box>
      </StyledContainer>
      <>Words</>
    </Box>
  );
};

const StyledActionButton = styled(Button)(() => ({
  height: "27px",
  paddingX: "16px",
  "& p": { fontSize: "16px" },
  "& span": {
    fontSize: "16px",
  },
}));

const StyledCaption = styled(Text)(() => ({
  fontSize: "60px",
  fontWeight: 700,
}));

const StyledContainer = styled(Box)(() => ({
  padding: "16px",
  display: "flex",
  alignItems: "center",
  justifyCOntent: "space-between",
}));

export default Dictionary;