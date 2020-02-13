import React,{useState,useEffect}from 'react'
import Home from '../components/home';
import {connect} from "react-redux";
import {getData} from '../actions/dataAction'
const HomeContainer = (props) => {
    const {getData,data} = props;
    const [indice,setIndice] = useState(0);
    useEffect(() =>{
        getData(indice);
    },[]);
    const getDays = (a) => {
        let today = new Date();
        let date = new Date(a);
        let day = today.getDate() - date.getDate();
        return (30-day);
    }
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setIndice(indice + 1);
            getData(indice);
        }
    };
    
    return (
        <div>
            <Home data={data} getDays={getDays}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    "data" : state.data,
});
const mapDispatchToProps = {
    "getData" : getData
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
