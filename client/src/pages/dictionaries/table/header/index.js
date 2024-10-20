import { Box, Button } from "@components";
import { ActionGroup } from "./buttonGroup";
import { InputCaption } from "./inputCaption";

export const TableHeader = () => {
  return (
    <Box flex jc="space-between" sx={{ p: 1 }} ai>
      <Box flex gap="5px">
        <ActionGroup />
        <Button icon="filter" variant="text" />
        <Button icon="sort" variant="text" />
      </Box>
      <InputCaption />
    </Box>
  );
};
