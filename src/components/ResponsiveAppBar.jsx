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

const pages = ['Products'];

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem disablePadding style={{ textAlign: 'center', paddingLeft: '70px', paddingTop: '10px',paddingBottom:'20px' }}>
          CATEGORES
        </ListItem>
        {pages.map((page) => (
          <ListItem
            key={page}
            disablePadding
            sx={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Add shadow here
              borderRadius: '8px', // Optional: make the corners rounded
              mb: 1, // Optional: add margin between items
              transition: 'box-shadow 0.3s ease', // Optional: smooth transition for hover effect
              '&:hover': {
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', // Optional: add a stronger shadow on hover
              }
            }}
          >
            <ListItemButton href={`/${page.toLowerCase()}`}>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>

        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky" // Make the AppBar sticky
        sx={{
          pr: 5,
          pl: 5,
          opacity: 0.9, // Adjust the opacity here
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Optional: add a semi-transparent background color
          transition: 'opacity 0.3s ease-in-out', // Optional: smooth transition effect for opacity
        }}
      >
        <Toolbar disableGutters>
          {/* Logo for both desktop and mobile */}
          <Button
           href="/">

       
          <Box
            component="img"
            sx={{
              display: 'flex',
              mr: 1,
              width: 40,
              height: 40,
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
              display: { xs: 'none', md: 'flex' }, // Only show on desktop
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PHARMACY
          </Typography>

          {/* Drawer toggle button for mobile */}
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


          {/* Menu buttons for desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  {pages.map((page) => (
    <Button
      key={page}
      href={`/${page.toLowerCase()}`}
      sx={{
        my: 2,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle background color
        padding: '10px 20px', // Increase padding for better visibility
        fontWeight: 'bold', // Make the font bolder
        borderRadius: '8px', // Rounded corners for a modern look
        transition: 'background-color 0.3s ease, transform 0.2s ease', // Smooth hover transitions
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // Change background on hover
          transform: 'scale(1.05)', // Slight scaling on hover
        }
      }}
    >
      {page}
    </Button>
  ))}
</Box>


          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Button
              sx={{ ml: 2, color: 'white', display: 'block' }}
              href="/login"
            >
              Login
            </Button>
            <Tooltip title="User Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
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
