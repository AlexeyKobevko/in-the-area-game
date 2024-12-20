import HomeIcon from '@mui/icons-material/Home';
import ArchiveIcon from '@mui/icons-material/Archive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

export const BOTTOM_NAVIGATION: Array<{
  label: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}> = [
  { label: 'Домой', icon: HomeIcon },
  { label: 'Favorites', icon: FavoriteIcon },
  { label: 'Archive', icon: ArchiveIcon },
];
