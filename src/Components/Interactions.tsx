import React , {useState} from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
//import Link from '@material-ui/core/Link';
//import ProTip from './ProTip';
//import Header from './Components/Common/Header';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import Divider from '@material-ui/core/Divider';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Choice from './child-interctions/Choice';
import Order from './child-interctions/Order';
import Match from './child-interctions/Match';
import CustomSlider from './child-interctions/CustomSlider';
import Extended from './child-interctions/Extended';
import FileUpload from './child-interctions/FileUpload';
import Marks from './child-interctions/Marks';

//import GridListTileBar from '@material-ui/core/GridListTileBar';

//Components import

// function MadeWithLove() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Built with love by the '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Material-UI
//         </Link>
//             {' team.'}
//         </Typography>
//     );
// }

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            // width: 100,
            //height: 10,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(1),
        },
        mybox: {
            border: '1px solid #000',
            padding: '2% !important',
            textAlign: 'center',
            cursor: 'all-scroll !important'
        },
        sidebarAboutBox: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.grey[200],
            fontSize: '11px',
            border: '1px dotted #000',
        },
        para: {
            marginLeft:'0.4%'
        }

    }),

);

function Interactions() {
    const classes = useStyles();
    const [interactions] = useState(
        [
        {
            id: 1,
            name: 'Choice'
        },
        {
            id: 2,
            name: 'Order'
        },
        {
            id: 3,
            name: 'Match'
        },
        {
            id: 4,
            name: 'Slider'
        },
        {
            id: 5,
            name: 'Extended'
        },
        {
            id: 6,
            name: 'File Upload'
        }
    ]);
    const [selectedInteraction, setSelectedInteraction] = useState<any>({});
    const [draggedInteraction, setDraggedInteraction] = useState<any>({});
    const [isDroppedInteraction, setIsDroppedInteraction] = useState<any>(0);
    const [parentMarksData, setParentMarksData] = useState<any>(null);
    //const [choiceData, setChoiceData] = useState([]);

    const onDrag = (event:any, interaction:any) => {
        event.preventDefault();
        setDraggedInteraction(interaction)
    }

    const onDragOver = (event:any) => {
        event.preventDefault();
    }

    const onDrop = (event:any) => {
        setSelectedInteraction(draggedInteraction);
        //setInteractions(interactions.filter(task => task.id !== draggedInteraction.id));
        setDraggedInteraction({});
        setIsDroppedInteraction(1);
    }

    const childMarksData = (marks:any) => {
       // console.log(marks)
        setParentMarksData(marks); 
    }

    const childChoiceData = (choices:any) => {
        //setChoiceData(choices);
        let finalData:any = {};
        finalData.interaction = selectedInteraction; 
        finalData.marks = parentMarksData;
        finalData.choices = choices;
        console.log(JSON.stringify(finalData))
    }

    return (
        <Container maxWidth="lg">
        <React.Fragment>
            <Typography variant="h6" component="h1" gutterBottom>
                <p className={classes.para}>Interactions</p>
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <GridList style={{ height: 'auto' }} className={classes.gridList} cols={4}>
                        {interactions.map((interaction, index) =>
                            <GridListTile key={interaction.id} className={classes.mybox} 
                                style={{ height: '40px', margin: '2%' }}
                                draggable onDrag={(event) => onDrag(event, interaction)}>
                                <span>{interaction.name}</span>
                            </GridListTile>
                        )}
                    </GridList>
                    <Grid item >
                       
                        <Marks selectedInteraction={selectedInteraction}  childMarksData={childMarksData} />
                    </Grid>
                </Grid>
                <Grid item xs={8} onDrop={event => onDrop(event)} onDragOver={(event => onDragOver(event))}>
                    {
                    (isDroppedInteraction === 0) &&
                    <Paper elevation={0} className={classes.sidebarAboutBox}>
                        NOTE
                        <Typography>
                            drag required question type from left panel to here.
                        </Typography>
                    </Paper>
                    }
                    
                    {
                    // choice interaction..
                    (selectedInteraction.id === 1) &&
                        <Choice childChoiceData={childChoiceData} />
                    }
                    
                    {
                    // Order interaction..
                    (selectedInteraction.id === 2) &&
                        <Order />
                    }

                    {
                    // Match interaction..
                    (selectedInteraction.id === 3) &&
                        <Match />
                    }

                    {
                    // Slider interaction..
                    (selectedInteraction.id === 4) &&
                        <CustomSlider />
                    }

                    {
                    // Extended interaction..
                    (selectedInteraction.id === 5) &&
                        <Extended />
                    }

                    {
                    // File upload interaction..
                    (selectedInteraction.id === 6) &&
                        <FileUpload />
                    }
                </Grid>
            </Grid>
        </React.Fragment>
        </Container>
    )
}

export default Interactions
