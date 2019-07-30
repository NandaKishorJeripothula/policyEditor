import React , {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Chip from '@material-ui/core/Chip';
// import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 120,
    },
    textFieldfullwidth: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 255,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    marks: {
        margin: '5% 0% -3% 2%'
    },
    fs12:{
        fontSize:'12px'
    }

  }));

  interface MarksProps{
    selectedInteraction:SelectedInteraction
    childMarksData:any
  }

  interface SelectedInteraction {
      id:number;
      name:string

  }

function Marks(props:MarksProps) {
    const classes = useStyles();
    const[marksData, setMarksData] = useState({
        right_answer: 0,
        wrong_answer: 0,
        no_answer: 0,
        topic: 1,
        allowed_choices_min: 0,
        allowed_choices_max: 0
    });

    const getMarksData =   (event:any) => {
        const {name, value} = event.target
        setMarksData({...marksData, [name]: value});
        // console.log(marksData)
        // setMarksData(prevMarksData => ({...prevMarksData, [name]: value}));
        // childMarksData(marksData);
    }

    useEffect(() => {
        props.childMarksData(marksData);
    }, [props.childMarksData, marksData]);

    return (
        <div>
            <Grid container spacing={1} style={{paddingLeft:'0px'}}>
                <Grid item xs={12}>
                <Typography component="p" className={classes.marks}>
                    Marks
                </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                <TextField
                    id="standard-name"
                    name="right_answer"
                    label="right answer"
                    type="number"
                    value={marksData.right_answer}
                    className={classes.textFieldfullwidth}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    onChange={(event) => getMarksData(event)}
                />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="standard-name"
                        label="wrong answer"
                        name="wrong_answer"
                        type="number"
                        value={marksData.wrong_answer}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        onChange={(event) => getMarksData(event)}
                    />
                    <TextField
                        id="standard-name"
                        label="no answer"
                        name="no_answer"
                        type="number"
                        value={marksData.no_answer}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        onChange={(event) => getMarksData(event)}
                    />
                </Grid>
            </Grid>
            {(props.selectedInteraction.id && props.selectedInteraction.id ===1) &&
                <React.Fragment>
                    <Grid container spacing={1} style={{paddingLeft:'0px'}}>
                        <Grid item xs={12}>
                        <Typography component="p" className={classes.marks}>
                            Interaction Properties<br/>
                            <span className={classes.fs12}>allowed choices</span>
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-name"
                            label="min"
                            type="number"
                            name="allowed_choices_min"
                            value={marksData.allowed_choices_min}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            onChange={(event) => getMarksData(event)}
                        />
                        <TextField
                            id="standard-name"
                            label="max"
                            type="number"
                            name="allowed_choices_max"
                            value={marksData.allowed_choices_max}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            onChange={(event) => getMarksData(event)}
                        />
                    </Grid>
                </React.Fragment>
            }
            <Grid item xs={12}>
            <TextField
                id="standard-select-currency"
                select
                label="Select topic"
                name="topic"
                value={marksData.topic}
                className={classes.textField}
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
                // helperText="Please select your currency"
                margin="normal"
                onChange={(event) => getMarksData(event)}
            >
                {/* {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))} */}
                <MenuItem key={1} value={1}>
                    introduction
                </MenuItem>
                <MenuItem key={2} value={2}>
                    sample js
                </MenuItem>
                <MenuItem key={3} value={3}>
                    nest js
                </MenuItem>
            </TextField>
            </Grid>
        </div>
    )
}

export default Marks