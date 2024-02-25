import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import TimelineIcon from '@mui/icons-material/Timeline';
import SellIcon from '@mui/icons-material/Sell';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLoginStore } from "@/app/store/zustand";
export default function LayoutDrawer() {
  const{toggleLogin}=  useLoginStore()

  const handleLogout = () => {
    toggleLogin()
  } 
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
            <ListItemIcon><TimelineIcon /></ListItemIcon>
            <ListItemText primary={'Overview'} />
          </ListItemButton>
        </Link>
      </ListItem>
  <ListItem disablePadding key={'trading'}>
        <Link href={'/trading'} passHref legacyBehavior>
          <ListItemButton component="a">
            <ListItemIcon><SellIcon /></ListItemIcon>
            <ListItemText primary={'Buy and sell'} />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem disablePadding key={'Logout'}>
          <ListItemButton component="a" onClick={handleLogout}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary={'Logout'} />
          </ListItemButton>
      </ListItem>
  </List>
</Drawer>
</Box>
    )
}