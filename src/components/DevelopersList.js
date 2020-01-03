import React, { Component } from 'react';
import { connect } from 'react-redux';
// import api from '../api';
import { fetchDevelopers } from '../store/developers/actions';
import Developer from './Developer';

class DevelopersList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDevelopers);
    // api('/developers').then((data) => {
    //   this.props.developersFetched(data);
    // this.props.dispatch({
    //   type: 'DEVELOPERS_FETCHED',
    //   payload: data.rows
    // });
  }

  render() {
    const loading = !this.props.devs;
    // const developers = this.props.devs;
    // console.log('what is props.devs', this.props.devs);
    // console.log('what is props.devs.count', this.props.devs.count);
    // console.log('what is developers.rows', developers.rows);
    return (
      <div>
        <h1>Codaisseur developers</h1>
        {loading ? <p>Loading...</p> : <p>We have {this.props.devs.length} developers!</p>}
        <Developer developers={this.props.devs} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log('redux state developers?', reduxState.developers);
  return {
    devs: reduxState.developers
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);
