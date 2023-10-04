import { useMediaQuery, Theme } from '@mui/material';

const useBreakpoints = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return { isSmallScreen, isMediumScreen, isLargeScreen };
};

export default useBreakpoints;
