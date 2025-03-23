import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const pages = [
  { name: 'Products', link: '/products' },
  { name: 'Add Product', link: '/addProduct' },
  { name: 'Edit Products', link: '/productLists' },
];

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [token, setToken] = React.useState(localStorage.getItem('token')); // Initial state from localStorage
  const [isAdmin, setIsAdmin] = React.useState(localStorage.getItem('isAdmin') === 'true'); // Check if isAdmin is 'true' in localStorage
  const [name, setName] = React.useState(localStorage.getItem('name')); // Initial state from localStorage
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');

    if (tokenFromStorage !== 'empty') {
      setToken(tokenFromStorage);
    } else {
      setToken(null);
    }

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('token');
      setToken(updatedToken);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.setItem('name', "");
    setToken(null);
    window.location.href = '/';
  };

  // Filter pages based on isAdmin status
  const visiblePages = isAdmin
    ? pages // Show all pages if the user is admin
    : pages.filter((page) => page.name === 'Products'); // Show only the Products page if not admin

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem disablePadding style={{ textAlign: 'center', paddingLeft: '70px', paddingTop: '10px', paddingBottom: '20px' }}>
          CATEGORIES
        </ListItem>
        {visiblePages.map((page) => (
          <ListItem
            key={page.name}
            disablePadding
            sx={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              mb: 1,
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
              }
            }}
          >
            <ListItemButton href={page.link}>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          pr: 5,
          pl: 5,
          opacity: 0.9,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <Toolbar disableGutters>
          <Button href="/">
            <Box
              component="img"
              sx={{
                display: 'flex',
                mr: 1,
                width: 50,
                height: 50,
              }}
              alt="Logo"
              src="/logo.png"
            />
          </Button>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PHARMACY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {visiblePages.map((page) => (
              <Button
                key={page.name}
                href={page.link}
                sx={{
                  my: 2,
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  marginRight: 2,
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    transform: 'scale(1.05)',
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {token ? (
              <Button
                sx={{
                  mr: 2, fontSize: 16, color: 'white', backgroundColor: '#0d8e9d', '&:hover': {
                    backgroundColor: '#14b5c5',
                  },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                sx={{
                  mr: 2, fontSize: 16, color: 'white', backgroundColor: '#0d8e9d', '&:hover': {
                    backgroundColor: '#14b5c5',
                  },
                }}
                href="/login"
              >
                Login
              </Button>
            )}
            <Tooltip title="User Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" sx={name ? { bgcolor: 'orange' } : {}} >{name.charAt(0).toUpperCase()}</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;

