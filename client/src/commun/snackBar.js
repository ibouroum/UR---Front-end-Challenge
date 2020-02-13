import React, {useEffect} from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyFlash(props) {
    const {msg, variant} = props;
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        if(msg && variant)
                enqueueSnackbar(msg, { variant: variant });
    }, [])
    return(<></>);
}

export default function Snackbar(props){
    const {msg, variant} = props;
    return(
        <SnackbarProvider
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            style={{marginTop: '49px'}}
            autoHideDuration={4000}
            maxSnack={5}
        >
            <MyFlash msg={msg} variant={variant}/>
        </SnackbarProvider>
    );
};