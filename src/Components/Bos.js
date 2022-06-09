import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddStudentModal from './AddStudentModal';
import { QuizContext } from '../Helpers/Contex';
import Button from '@mui/material/Button';
import ListNotes from './ListNotes';
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import ArticleIcon from '@mui/icons-material/Article';




const columns = [
    { id: 'name', label: 'İsim', minWidth: 100 },
    // { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'vize',
        label: 'Vize',
        minWidth: 110,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'final',
        label: 'Final',
        minWidth: 160,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'no',
        label: 'Okul NO',
        minWidth: 190,
        align: 'right',
        format: (value) => value,
    },
];



export default function Bos({ lesson, }) {
    const { studentList, setStudentList } = React.useContext(QuizContext)

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false);
    const [notes, setNotes] = React.useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [acik, setAcik] = React.useState(false);
    const openNote = () => setAcik(true);
    const closeNote = () => setAcik(false);



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };



    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const showNotes = (list) => {
        setNotes(list);
        openNote()
    };

    return (

        <Paper sx={{ width: '100%', marginTop: 5, marginBottom: 7, backgroundColor: "#eef0f2" }}>
            <Fab onClick={handleOpen} size="small" color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <TableContainer sx={{ maxHeight: 400 }}>
                {/* <Button size ="medium"variant="outlined" onClick={handleOpen} >Öğrenci ekle</Button> */}

                <Table style={{ backgroundColor: "#fafaff", }} stickyHeader aria-label="sticky table">

                    <TableHead >
                        <TableRow  >
                            <TableCell align="center" colSpan={1} style={{ backgroundColor: "#eef0f2" }}>
                                {lesson}
                            </TableCell>
                            <TableCell align="center" colSpan={3} style={{ backgroundColor: "#eef0f2" }}>
                                SINAV DETAY
                            </TableCell>
                        </TableRow>

                        <TableRow  >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth, backgroundColor: "#a9def9" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentList
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((student) => {
                                if (Object.keys(student.exams).includes(lesson))
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={student.code}>
                                            {columns.map((column) => {
                                                const value = student.personel[column.id]; //öğrenci numarasını value dedim
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id !== "vize" && column.id !== "final" ? column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value : <Button variant="outlined" disabled={student.exams[lesson][column.id] === ""} onClick={() => { showNotes(column.id === "vize" ? student.exams[lesson]["vizeHistory"] : student.exams[lesson]["finalHistory"]) }} > {column.label}</Button>}

                                                        <label style={{ marginLeft: 15 }}> {student.exams[lesson][column.id] !== "" && student.exams[lesson][column.id]}</label>
                                                       
                                                        {/* {student.exams[lesson][column.id] !== "" && <Badge color="info" badgeContent={student.exams[lesson][column.id]}>
                                                            <ArticleIcon /> */}

                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={studentList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            <AddStudentModal handleClose={handleClose} handleOpen={handleOpen} open={open} lesson={lesson} studentList={studentList} setStudentList={setStudentList} />
            <ListNotes closeNote={closeNote} acik={acik} notes={notes} />

        </Paper>





    );
}
