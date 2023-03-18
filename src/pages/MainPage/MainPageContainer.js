import {connect} from "react-redux";
import React, {useEffect} from "react";
import Axios from "axios";
import MainPage from "./MainPage";

const MainPageContainer = () => {
    useEffect(() => {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
            (response) => {
                this.props.getProfile(response.data);
            }
        );
    }, [])

    return <MainPage/>
}

const mapStateToProps = (state) => {
    return {
        MainPage: state.MainPage,
    };
};

export default connect(mapStateToProps, {getProfile})(MainPageContainer);