import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

export default function LayoutDrawer() {
    return (
<Box sx={{ display: 'flex' }}>
<Drawer
  sx={{
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
  }}
  variant="permanent"
  anchor="left"
>
  <List>
  <ListItem disablePadding key={'overview'}>
        <Link href={'/overview'} passHref legacyBehavior>
          <ListItemButton component="a">
            <ListItemIcon>{}</ListItemIcon>
            <ListItemText primary={'Overview'} />
          </ListItemButton>
        </Link>
      </ListItem>
  <ListItem disablePadding key={'trading'}>
        <Link href={'/trading'} passHref legacyBehavior>
          <ListItemButton component="a">
            <ListItemIcon>{}</ListItemIcon>
            <ListItemText primary={'Buy and sell'} />
          </ListItemButton>
        </Link>
      </ListItem>
  </List>
</Drawer>
</Box>
    )
}