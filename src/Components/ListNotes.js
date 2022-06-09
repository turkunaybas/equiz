import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { QuizContext } from '../Helpers/Contex'
import { Dialog, ListItemSecondaryAction } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function ListNotes({ closeNote,acik,notes}) {

const { studentList, setStudentList } = React.useContext(QuizContext)
const notess=[{sira:1,status:true},{sira:2,status:false}]
    return (
        <div>
            <Dialog
                open={acik}
                scroll="paper"
                onClose={closeNote}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"

            >
                <DialogTitle id="scroll-dialog-title">Soru Cevapları</DialogTitle>
                <DialogContent style={{ width: 400 }} dividers>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {notes?.map((note) => {
                            const labelId = note.sira;

                            return (
                                <ListItem
                                    key={note.sira}
                                    disablePadding
                                >
                                 
                                        <ListItemText id={labelId} primary={note.sira+1} />
                                        <ListItemText id={labelId} primary= { note.status === true? "Doğru":"Yanlış"} />
                                    
                                </ListItem>

                            );
                        })}
                    </List>

                </DialogContent>
                <DialogActions>
                    <Button onClick={closeNote}>Kapat</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}
