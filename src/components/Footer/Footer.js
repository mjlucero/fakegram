import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    root: {
        width: "100%"
    }
});

const Footer = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if (newValue === "upload"){

        }else{
            props.history.push(`/${newValue}`);
        }
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction value="feed" icon={<HomeIcon/>}/>
            <BottomNavigationAction value="search" icon={<SearchIcon/>}/>
            <BottomNavigationAction value="upload" icon={<AddPhotoAlternateIcon/>}/>
            <BottomNavigationAction value="favorite" icon={<FavoriteIcon/>}/>
            <BottomNavigationAction value="profile" icon={<PersonIcon/>}/>
        </BottomNavigation>
    );
};

Footer.propTypes = {
    history: PropTypes.object
};

export default withRouter(Footer);