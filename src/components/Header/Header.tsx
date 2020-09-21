import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './Header.module.css'


const Header: React.FC<{children?:string}> = ({children}): React.ReactElement =>{
    return (
    <AppBar position="relative" className={styles.appBar}>
        <Toolbar className = {styles.toolbar}>
            <Typography variant="h6" noWrap >
                {children}
            </Typography>
        </Toolbar>
    </AppBar>
    );

}

export default Header;