import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { deepOrange } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Container from '@mui/material/Container';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface DrawerProps extends MuiDrawerProps {
  level: number;
}

const Drawer = styled(MuiDrawer)<DrawerProps>(({ theme, level }) => ({
  zIndex: theme.zIndex.drawer + 1 + level,
}));

export const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggleSettings = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <React.Fragment>
      <Box sx={{ marginLeft: 'auto' }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Box>
      <Drawer
        variant="temporary"
        open={open}
        anchor="right"
        sx={{
          width: '100vw',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100vw',
          },
        }}
        level={1}
      >
        <Container maxWidth="md">
          <DrawerHeader>
            <IconButton onClick={handleClick} size="small">
              <ArrowBackIcon />
            </IconButton>
          </DrawerHeader>
          <Box sx={{ px: 3, display: 'flex', mx: 'auto' }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: '100%',
                    bgcolor: deepOrange[500],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EditIcon sx={{ width: 16, height: 16 }} />
                </Box>
              }
            >
              <Avatar
                alt="Mravis Howard"
                src="/static/images/avatar/2.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Badge>
          </Box>

          <List>
            <ListItem>
              <ListItemButton onClick={handleToggleSettings}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Настройки" />
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Обратная связь" />
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Container>
      </Drawer>
      <Drawer
        variant="temporary"
        open={openSettings}
        anchor="right"
        sx={{
          width: '100vw',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100vw',
          },
        }}
        level={2}
      >
        <Container maxWidth="md">
          <DrawerHeader>
            <IconButton onClick={handleToggleSettings} size="small">
              <ArrowBackIcon />
            </IconButton>
          </DrawerHeader>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
            <Typography variant="h6" noWrap component="div" sx={{ marginBottom: 2 }}>
              Тема
            </Typography>
            <ToggleButtonGroup color="primary" value={'system'} exclusive onChange={() => false}>
              <ToggleButton value="system">Системная</ToggleButton>
              <ToggleButton value="dark">Темная</ToggleButton>
              <ToggleButton value="light">Светлая</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Container>
      </Drawer>
    </React.Fragment>
  );
};
