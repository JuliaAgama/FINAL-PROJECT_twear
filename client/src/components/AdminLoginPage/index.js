import React, {useState} from 'react';

import AuthAdmin from '../../services/AuthAdmin';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import useStyles from './useStyles';
// import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
            twear
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};


export default () => {

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [state, setState] = useState({email: 'me@example.com', password: 'mypassword'});

    const handleInputEmail = event => {
        setEmail(event.target.value);
    };
    const handleInputPassword = event => {
        setPassword(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();
        const form = {
            email: email,
            password: password
        };

        (new AuthAdmin()).postAuth(form);
        // setState({email: 'me@example.com', password: 'mypassword'})
    };


    return (
    <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={7} md={4} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Link href="/admin" className={classes.logo}>
                    <img className="img-fluid" src="/img/twear_logo_grey-on-transparent-SQUARE.png" alt="NOT FOUND"/>
                </Link>
                {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <Typography component="h1" variant="h5" className={classes.header}>
                Log in to Admin
                </Typography>

                <form
                    className={classes.form}
                    noValidate
                    //onSubmit={onSubmit}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={event => handleInputEmail(event)}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={event => handleInputPassword(event)}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        onClick={onSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="/" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>

            </div>
        </Grid>

        <Grid item xs={false} sm={4} md={8} className={classes.image} />
    </Grid>
    );
}