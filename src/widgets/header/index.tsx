import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { AccountMenu } from '@/pages/home/ui/account-menu';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'drawerWidth',
})<AppBarProps>(({ theme, drawerWidth }) => ({
  // [theme.breakpoints.up('md')]: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // variants: [
  //   {
  //     props: ({ open }) => open,
  //     style: {
  //       marginLeft: drawerWidth,
  //       width: `calc(100% - ${drawerWidth}px)`,
  //       transition: theme.transitions.create(['width', 'margin'], {
  //         easing: theme.transitions.easing.sharp,
  //         duration: theme.transitions.duration.enteringScreen,
  //       }),
  //     },
  //   },
  // ],
}));

interface IconButtonProps extends MuiIconButtonProps {
  open?: boolean;
}

const IconButton = styled(MuiIconButton, {
  shouldForwardProp: prop => prop !== 'open',
})<IconButtonProps>(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    marginRight: 5,
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        // display: 'none',
      },
    },
  ],
}));

export interface MobileHeaderProps {
  drawerWidth: number;
  onMenuClick: () => void;
  open: boolean;
}

export const MobileHeader = ({ drawerWidth, onMenuClick, open }: MobileHeaderProps) => {
  return (
    <AppBar drawerWidth={drawerWidth} open={open} position="fixed">
      <Toolbar>
        <IconButton open={open} color="inherit" edge="start" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          На районе
        </Typography>
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
};
