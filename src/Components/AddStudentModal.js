import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { Dialog, ListItemSecondaryAction } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function AddStudentModal({ handleClose, open, lesson ,studentList,setStudentList}) {

    const [checked, setChecked] = React.useState([]);
   

    function setLesson() {
        setStudentList((prev) => prev.map((item) => {
            console.log('itemlar',item);
            checked?.map((no) => {
                if (item?.personel?.no === no) {
                    item = { ...item, exams: { ...item?.exams,[lesson]: { vize: "", final: "" ,satus:""} } }
                }
            })
            return item;

        }));
        handleClose();

        setChecked([]);
    };

    console.log('list',studentList)
    console.log('checked',checked)


    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        console.log(checked, "NUMARALAR")
    };



    return (
        <div>
            <Dialog
                open={open}
                scroll="paper"
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"

            >
                <DialogTitle id="scroll-dialog-title">Öğrenci Ekle</DialogTitle>
                <DialogContent style={{ width: 400 }} dividers>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {studentList.map((value) => {
                            const labelId = value.personel.no;

                         
                           
                            
                            return (
                                value.personel.name!=="admin"&&
                                <ListItem
                                    key={value.personel.no}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleToggle(value.personel.no)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value.personel.no) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={value.personel.name} />
                                    </ListItemButton>
                                </ListItem>

                            );
                        })}
                    </List>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Vazgeç</Button>
                    <Button onClick={()=>setLesson(checked,lesson)
                      }>Kaydet</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}
