import { Box } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Box height={"100%"} display="flex" flexDirection="column">
        <Outlet />
      </Box>
    </>
  ),
});
