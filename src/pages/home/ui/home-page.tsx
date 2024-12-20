'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SportsIcon from '@mui/icons-material/Sports';
import StoreIcon from '@mui/icons-material/Store';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GavelIcon from '@mui/icons-material/Gavel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material';
import { DesktopHeader, DesktopNavigation, MobileHeader, MobileNavigation } from '@/widgets';

const primaryMenuList = {
  news: {
    title: 'Новости',
    icon: NewspaperIcon,
  },
  blogs: {
    title: 'Блоги',
    icon: RateReviewIcon,
  },
  competitions: {
    title: 'Состязания',
    icon: SportsIcon,
  },
  market: {
    title: 'Универмаг',
    icon: StoreIcon,
  },
  promocode: {
    title: 'Промокод',
    icon: QrCode2Icon,
  },
  rating: {
    title: 'Рейтинг',
    icon: TrendingUpIcon,
  },
};
const secondaryMenuList = {
  rules: {
    title: 'Правила',
    icon: GavelIcon,
  },
  invitePlayer: {
    title: 'Пригласить игрока',
    icon: PersonAddIcon,
  },
  contactUs: {
    title: 'Связаться с нами',
    icon: ContactSupportIcon,
  },
};

const drawerWidth = 240;

export const HomePage = () => {
  // const [open, setOpen] = useState(false);
  // const [isClosing, setIsClosing] = useState(false);

  // const handleDrawerClose = () => {
  //   setIsClosing(true);
  //   setOpen(false);
  // };

  // const handleDrawerTransitionEnd = () => {
  //   setIsClosing(false);
  // };

  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setOpen(!open);
  //   }
  // };

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const buildMenu = (
  //   arr: [
  //     key: string,
  //     value: { title: string; icon: OverridableComponent<SvgIconTypeMap> & { muiName: string } },
  //   ][],
  // ) => {
  //   return arr.map(([key, { icon: Icon, title }]) => (
  //     <ListItem key={key} disablePadding sx={{ display: { xs: 'flex', sm: 'block' } }}>
  //       <ListItemButton
  //         sx={[
  //           {
  //             minHeight: 48,
  //             px: 2.5,
  //           },
  //           open
  //             ? {
  //                 justifyContent: 'initial',
  //               }
  //             : {
  //                 justifyContent: 'center',
  //               },
  //         ]}
  //       >
  //         <ListItemIcon
  //           sx={[
  //             {
  //               minWidth: 0,
  //               justifyContent: 'center',
  //             },
  //             open
  //               ? {
  //                   mr: 3,
  //                 }
  //               : {
  //                   mr: 'auto',
  //                 },
  //           ]}
  //         >
  //           <Icon />
  //         </ListItemIcon>
  //         <ListItemText
  //           primary={title}
  //           sx={[
  //             open
  //               ? {
  //                   opacity: 1,
  //                 }
  //               : {
  //                   opacity: 0,
  //                 },
  //           ]}
  //         />
  //       </ListItemButton>
  //     </ListItem>
  //   ));
  // };

  // const primaryMenuContent = buildMenu(Object.entries(primaryMenuList));
  // const secondaryMenuContent = buildMenu(Object.entries(secondaryMenuList));

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
      <Typography sx={{ marginBottom: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo
        vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque
        non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio
        morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est
        ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa
        tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
        sapien faucibus et molestie ac.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt.
        Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
        mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate
        odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
        Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus
        vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
      </Typography>
    </Box>
  );
};
