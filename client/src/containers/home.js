import React,{useEffect}from 'react'
import Home from '../components/home';
import {connect} from "react-redux";
import {getData} from '../actions/dataAction'
const HomeContainer = (props) => {
    const {getData} = props;
    useEffect(() =>{
        getData();
    },[]);
    return (
        <div>
            <Home/>
        </div>
    )
}
const mapStateToProps = () => ({

});
const mapDispatchToProps = {
    "getData" : getData
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
