import { useMediaQuery, Theme } from '@mui/material';

const useBreakpoints = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));
  const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return { isExtraSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen };
};

export default useBreakpoints;
