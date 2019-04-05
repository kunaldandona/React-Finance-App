import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Search from './Search'
import fetchFunction from '../fetch/fetch'

import Result from './QuoteResult';
import '../../App.css'

class Quotes extends Component {
    state = {
        result: [],
        search: '',
        fetch: false,
    };

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        });
    }

    handleClick = async (e) => {
        e.preventDefault();
        let keyword = this.state.search;
        const data = await fetchFunction(keyword)
        this.setState({result: data.data['Global Quote'], fetch: true})
    }

  render () {
      return (
        <Grid container spacing={24} justify='center'>
            <Grid item xs={10}>
                <Typography variant="title" gutterBottom>
                    Stock Search
                </Typography>
                <Search onChange={ this.handleChange } onClick={ this.handleClick }/>
                {this.state.fetch && (
                    <Result result={this.state.result}/>
                )}
            </Grid>
        </Grid>
      );
    }     
  }

export default Quotes;