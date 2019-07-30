import React , {useState} from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
//import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
//import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1),
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        chip: {
            margin: theme.spacing(1),
            cursor: 'pointer'
        },
        icon: {
            margin: theme.spacing(-1,1),
            cursor: 'pointer'
            // fontSize: 32,
        },
        delIcon: {
            margin: theme.spacing(1.5),
            cursor: 'pointer'
            // fontSize: 32,
        },
        shuffleIcon: {
            margin: theme.spacing(1.5),
            cursor: 'pointer'
            // fontSize: 32,
        },
        button1: {
            margin: theme.spacing(1,-1),
        },
        button2: {
            margin: theme.spacing(1,0),
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        formControl: {
            margin: theme.spacing(1),
        },
        sidebarAboutBox: {
            padding: theme.spacing(0.6),
            backgroundColor: theme.palette.grey[200],
            fontSize: '11px',
            border: '1px dotted #000',
            cursor: 'pointer'
        }
    }),
);


function Choice({childChoiceData}) {
    const classes = useStyles();
    const [choices, setChoices] = useState(
        [
        {
            id: 1,
            name: 'Choice 1',
            pinned: 'fa fa fa-random',
            is_pinned: false,
            is_checked: false
        },
        {
            id: 2,
            name: 'Choice 2',
            pinned: 'fa fa fa-random',
            is_pinned: false,
            is_checked: false,
        },
        {
            id: 3,
            name: 'Choice 3',
            pinned: 'fa fa fa-random',
            is_pinned: false,
            is_checked: false
        }
    ]);

    const [question, setQuestion] = useState('');
    const [questionMode, setQuestionMode] = useState(0);

    React.useEffect(() => {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
        //console.log(choices)
    }, [choices]);

    const addChoices = () => {
        let myObj = {};
        myObj.id = (choices.length)+1;
        myObj.name = `Choice ${myObj.id}`;
        myObj.pinned = 'fa fa fa-random';

        setChoices([...choices, myObj]);
        //console.log(choices)
    }

    const deleteChoice = (id) => {
        setChoices(choices.filter(choice => choice.id !== id));
    }

    const togglePin = (id) => {
        const newChoices = choices.map(choice => {
            if(choice.id === id)
                (choice.pinned === 'fa fa-map-pin') ? choice.pinned = 'fa fa-random' : choice.pinned = 'fa fa-map-pin'

            if(choice.id === id)
                choice.is_pinned = !choice.is_pinned;

            return choice;
        });
        setChoices(newChoices)
    }

    const generateResponse = flag => {
        setQuestionMode(flag);
    }

    const handleChange = id => event => {
        const newChoices = choices.map(choice => {
            if(choice.id === id)
                choice.is_checked = !choice.is_checked;

            return choice;
        });
        setChoices(newChoices)
    };

    const changeChoiceName = id => event => {
        const newChoices = choices.map(choice => {
            if(choice.id === id)
                choice.name = event.target.value;

            return choice;
        });
        setChoices(newChoices)
    };

    const submitChoices = () => {
        childChoiceData(choices)     
    }
    
 
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h6">
                    Choice Interaction
                    <Chip label="Question" color={(questionMode === 0) ? 'secondary' : 'default'} onClick={() => setQuestionMode(0)} className={classes.chip} />
                    <Chip label="Response" color={(questionMode === 1) ? 'secondary' : 'default'} onClick={() => setQuestionMode(1)} className={classes.chip} />
                    <DeleteIcon color="primary" className={classes.icon} />
                </Typography>
                {(questionMode === 0) ? (
                    <React.Fragment>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                            <Typography component="p">
                                Question:
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-multiline-static"
                                    label="define prompt"
                                    multiline
                                    rows="4"
                                    value={question}
                                    className={classes.textField}
                                    margin="normal"
                                    onChange={(event) => setQuestion(event.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            {choices.map((choice, index) =>
                                <Grid key={index} item xs={12}>
                                    { 
                                    (index === 0) &&
                                        <FormHelperText>Choices</FormHelperText>
                                    }
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        {/* <FormLabel component="legend">Choices:</FormLabel> */}
                                        <FormGroup>
                                            <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="" />
                                        </FormGroup>
                                    </FormControl>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        {/* <FormLabel component="legend">Choice1:</FormLabel> */}
                                        <FormGroup>
                                            <Input
                                                className={classes.input}
                                                name={choice.name}
                                                inputProps={{
                                                    'aria-label': choice.name,
                                                }}
                                                value={choice.name}
                                                onChange={changeChoiceName(choice.id)}
                                            />
                                        </FormGroup>
                                    </FormControl>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <Icon className={clsx(classes.delIcon, choice.pinned)} onClick={() => togglePin(choice.id)} />
                                    </FormControl>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <DeleteIcon color="secondary" className={classes.delIcon} onClick={() =>deleteChoice(choice.id)} />
                                    </FormControl>
                                </Grid>
                            )}
                            
                            <Grid item xs={12}>
                                <Paper elevation={0} className={classes.sidebarAboutBox} onClick={addChoices}>
                                    <Typography >
                                    <Icon color="primary" className={clsx(classes.icon, 'fa fa fa-plus-square')} />&nbsp; Add Choice
                                    </Typography> 
                                </Paper>
                                <Paper align="right">
                                    <FormControl component="fieldset" className={classes.formControl}>
                                    {
                                        (questionMode===0) &&
                                            <Button variant="contained" color="primary" className={classes.button1}  onClick={() => generateResponse(1)}>
                                            Next
                                        </Button>
                                    }
                                    </FormControl>
                                </Paper>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                ) : (
                     <React.Fragment>
                         <Grid container spacing={1}>
                            <Grid item xs={12}>
                                {choices.map((choice, index) =>
                                    <Grid key={index} item xs={12}>
                                        { 
                                        (index === 0) &&
                                            <FormHelperText>Choices</FormHelperText>
                                        }
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            {/* <FormLabel component="legend">Choices:</FormLabel> */}
                                            <FormGroup>
                                                <FormControlLabel control={
                                                    <Checkbox checked={choice.is_checked} 
                                                        onChange={handleChange(choice.id)} 
                                                        value={choice.id} />
                                                } label="" />
                                            </FormGroup>
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            {/* <FormLabel component="legend">Choice1:</FormLabel> */}
                                            <FormGroup>
                                                <Input
                                                    className={classes.input}
                                                    inputProps={{
                                                        'aria-label': choice.name,
                                                    }}
                                                    value={choice.name}
                                                    onChange={changeChoiceName(choice.id)}
                                                />
                                            </FormGroup>
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <Icon className={clsx(classes.delIcon, choice.pinned)} onClick={() => togglePin(choice.id)} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <DeleteIcon color="secondary" className={classes.delIcon} onClick={() =>deleteChoice(choice.id)} />
                                        </FormControl>
                                    </Grid>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <Button variant="contained" color="secondary" 
                                        className={classes.button2} onClick={() => submitChoices()}>
                                        Submit
                            </Button>
                                </FormControl>
                            </Grid>
                         </Grid>
                     </React.Fragment>   
                )}
            </Paper>
        </div>
    );
}

export default Choice
