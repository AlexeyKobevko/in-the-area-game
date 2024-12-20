import React, { useState } from 'react';
import MuiSpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Backdrop from '@mui/material/Backdrop';
import { SPEED_DIAL } from '@/shared/config';

export const SpeedDial = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop open={open} />
      <MuiSpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 66, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {SPEED_DIAL.map(({ name, icon: Icon }) => (
          <SpeedDialAction
            key={name}
            icon={<Icon />}
            tooltipTitle={name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </MuiSpeedDial>
    </>
  );
};
