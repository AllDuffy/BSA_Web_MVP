import React, { Component } from 'react';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import ArticleList from './containers/ArticleListView';
import CSLGList from './containers/CSLGListView';
import axios from "axios";
import Urls from './routes';
import {connect} from 'react-redux';
import * as actions from './Store/AuthActions';

function App(props) {

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    props.setAuthenticatedIfRequired();
  }, []);

  return (
    <div className="App">
      <BaseRouter/>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null && typeof state.auth.token !== 'undefined',
    token: state.auth.token
  }
}

//This means that one or more of the redux actions in the form of dispatch(action) combinations are available as props
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthenticatedIfRequired: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.authLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);