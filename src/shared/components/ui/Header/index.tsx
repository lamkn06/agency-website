import { AppBar } from '@mui/material';

import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'white',
      }}
    >
      <NavbarDesktop />
      <NavbarMobile />
    </AppBar>
  );
};

export default Header;
