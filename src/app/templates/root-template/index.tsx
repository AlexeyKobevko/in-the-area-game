'use client';
import React, { ReactNode, useState } from 'react';
import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Header, Navigation, SpeedDial } from '@/widgets';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  PRIMARY_MENU_LIST,
  SECONDARY_MENU_LIST,
  DRAWER_WIDTH,
  BOTTOM_NAVIGATION,
} from '@/shared/config';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

export const RootTemplate = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setOpen(!open);
    }
  };

  const buildMenu = (
    arr: [
      key: string,
      value: { title: string; icon: OverridableComponent<SvgIconTypeMap> & { muiName: string } },
    ][],
  ) => {
    return arr.map(([key, { icon: Icon, title }]) => (
      <ListItem key={key} disablePadding sx={{ display: { xs: 'flex', sm: 'block' } }}>
        <ListItemButton
          sx={[
            {
              minHeight: 48,
              px: 2.5,
            },
            open
              ? {
                  justifyContent: 'initial',
                }
              : {
                  justifyContent: 'center',
                },
          ]}
        >
          <ListItemIcon
            sx={[
              {
                minWidth: 0,
                justifyContent: 'center',
              },
              open
                ? {
                    mr: 3,
                  }
                : {
                    mr: 'auto',
                  },
            ]}
          >
            <Icon />
          </ListItemIcon>
          <ListItemText
            primary={title}
            sx={[
              open
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  },
            ]}
          />
        </ListItemButton>
      </ListItem>
    ));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex' }}>
        <Header open={open} drawerWidth={DRAWER_WIDTH} onMenuClick={handleDrawerToggle} />
        <Navigation
          open={open}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerClose}
          onTransitionEnd={handleDrawerTransitionEnd}
          drawerWidth={DRAWER_WIDTH}
        >
          <div>
            <Toolbar />
            <Divider />
            <List>{buildMenu(Object.entries(PRIMARY_MENU_LIST))}</List>
            <Divider />
            <List>{buildMenu(Object.entries(SECONDARY_MENU_LIST))}</List>
          </div>
        </Navigation>
        <main>
          <Toolbar />
          {children}
          <Toolbar />
        </main>
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue);
            setValue(newValue);
          }}
        >
          {BOTTOM_NAVIGATION.map(({ label, icon: Icon }) => (
            <BottomNavigationAction key={label} label={label} icon={<Icon />} />
          ))}
        </BottomNavigation>
      </Paper>

      <SpeedDial />
    </Container>
  );
};
