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
import { QuizContext } from '../Helpers/Contex'



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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (

        <Paper sx={{ width: '100%', marginTop: 5, marginBottom: 7 ,backgroundColor: "#e5ecee"}}>
            <TableContainer sx={{ maxHeight: 400 }}>
                <button onClick={handleOpen} style={{ height: 50, }}>Öğrenci ekle</button>
                <Table style={{ backgroundColor : "#f1f1f1" , }} stickyHeader aria-label="sticky table">

                    <TableHead >
                        <TableRow  >
                            <TableCell align="center" colSpan={1} style={{backgroundColor : "#e5ecee" }}>
                                {lesson}
                            </TableCell>
                            <TableCell align="center" colSpan={3} style={{backgroundColor : "#e5ecee" }}>
                                SINAV DETAY
                            </TableCell>
                        </TableRow>

                        <TableRow  >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth,backgroundColor : "#a4b9c4"  }}
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
                                                            : value : <button style={{ backgroundColor: student.exams[lesson][column.id] !== 0 ? "green" : "#d4c37c" }}> {column.label}</button>}
                                                            <label> {student.exams[lesson][column.id] }</label>


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

        </Paper>





    );
}
