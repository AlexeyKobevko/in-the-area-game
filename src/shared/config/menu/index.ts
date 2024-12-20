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
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

type MenuCollectionItem = {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
};

type MenuCollection = Record<string, MenuCollectionItem>;

export const PRIMARY_MENU_LIST: MenuCollection = {
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
export const SECONDARY_MENU_LIST: MenuCollection = {
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
