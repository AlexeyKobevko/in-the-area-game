import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RateReviewIcon from '@mui/icons-material/RateReview';

export const SPEED_DIAL: Array<{
  name: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}> = [
  { icon: NewspaperIcon, name: 'Новость' },
  { icon: RateReviewIcon, name: 'Блог' },
];
