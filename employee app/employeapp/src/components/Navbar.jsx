import { AppBar, Button, Toolbar, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}> {/* Centering the Toolbar content */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EMPLOYEE APP
          </Typography>
          <Link to="/A" style={{ textDecoration: 'none' }}>
            <IconButton color="inherit">
              <AddIcon />
            </IconButton>
            <Button color="inherit">Add</Button>
          </Link>
          <Link to="/V" style={{ textDecoration: 'none' }}>
            <IconButton color="inherit">
              <VisibilityIcon />
            </IconButton>
            <Button color="inherit">View</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <br /><br /><br />
    </div>
  );
};

export default Navbar;