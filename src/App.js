import React from "react";
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import './App.css';
import Preloader from './common/preloader/preloader';
import DialogsContainer from './components/dialogs/dialogs-container';
import HeaderContainer from "./components/header/header-container";
import Login from "./components/login/login";
import Navbar from './components/navbar/navbar';
import ProfileContainer from './components/profile/profile-container';
import UsersContainer from './components/users/users-container';
import {initializeApp} from "./redux/appReducer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.innitialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:UserId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    innitialized: state.app.innitialized
})

export default connect(mapStateToProps, {initializeApp})(App);
