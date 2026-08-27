import { Box, Button } from "@mui/material";

const PageActions = ({ actions = [] }) => (
  <Box className="page-actions" sx={{ display: "flex", gap: 1, mt: 2 }}>
    {actions.map((action) => (
      <Button
        key={action.id}
        variant={action.kind || "contained"}
        disabled={action.disabled}
        onClick={action.onAction}
      >
        {action.label}
      </Button>
    ))}
  </Box>
);

export default PageActions;
