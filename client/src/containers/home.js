import React,{useEffect}from 'react'
import Home from '../components/home';
import {connect} from "react-redux";

const HomeContainer = () => {
    useEffect(() =>{
        
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

};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
