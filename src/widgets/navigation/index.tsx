import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import MuiSwipeableDrawer, {
  SwipeableDrawerProps as MuiSwipeableDrawerProps,
} from '@mui/material/SwipeableDrawer';

export interface MobileNavigationProps
  extends Readonly<{
    children: ReactNode;
  }> {
  drawerWidth: number;
  onOpen: () => void;
  onClose: () => void;
  onTransitionEnd: () => void;
  open: boolean;
}

interface SwipeableDrawerProps extends MuiSwipeableDrawerProps {
  drawerWidth: number;
}

const SwipeableDrawer = styled(MuiSwipeableDrawer, {
  shouldForwardProp: prop => prop !== 'drawerWidth',
})<SwipeableDrawerProps>(({ theme, drawerWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  display: 'flex',
  '& .MuiDrawer-paper': {
    left: 'unset',
  },
  [theme.breakpoints.up('sm')]: {
    // display: 'none',
  },
}));

export const Navigation = ({
  children,
  drawerWidth,
  open,
  onOpen,
  onClose,
  onTransitionEnd,
}: MobileNavigationProps) => {
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      drawerWidth={drawerWidth}
      variant="temporary"
      open={open}
      onTransitionEnd={onTransitionEnd}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      onOpen={onOpen}
    >
      {children}
    </SwipeableDrawer>
  );
};
