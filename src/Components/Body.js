import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Quotes from './parts/Quotes'
import Forex from './parts/Forex'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Body extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}  centered>
            <Tab label="Quotes" />
            <Tab label="FX (Foreign Exchange)" />
            <Tab label="Trends" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Quotes /></TabContainer>}
        {value === 1 && <TabContainer><Forex /></TabContainer>}
        {value === 2 && <TabContainer>FX (Foreign Exchange)</TabContainer>}
      </div>
    );
  }
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);