import { Button, Box } from "@components";
import { dispatchEvent } from "@utils";

const Default = () => {
  return (
    <Box flex jc="flex-end" gap>
      <Button
        color="success"
        caption="Create"
        sxText={{ px: 1 }}
        onClick={() => {
          dispatchEvent("dialogTrigger", { opened: false });
          dispatchEvent("onCreateDicitonary");
        }}
      />
      <Button
        variant="text"
        caption="Cancel"
        sxText={{ px: 1 }}
        onClick={() => {
          dispatchEvent("dialogTrigger", { opened: false });
        }}
      />
    </Box>
  );
};

export { Default as Action };
