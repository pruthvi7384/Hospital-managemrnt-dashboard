import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React from 'react'
import PageviewIcon from '@mui/icons-material/Pageview';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Apporitments() {
    const columns = [
        { id: 'Sr', label: 'Sr', minWidth: 50 },
        { id: 'Id', label: 'Id', minWidth: 100 },
        { id: 'Name', label: 'Name', minWidth: 170 },
        { id: 'Date', label: 'Date', minWidth: 100 },
        { id: 'Time', label: 'Time', minWidth: 100 },
        { id: 'Status', label: 'Current Status', minWidth: 100 },
        { id: 'action', label: 'Action', minWidth: 170 },
      ];
      const rows = [
        {
            Sr:'1',
            Id:'API-123',
            Name:'John Dew',
            Date:'20-2-2020',
            Time:'11:00:00 PM',
            Status:'Approved',
            
            action:<ul style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <li style={{margin:'0px 5px'}}>
                            <Link to="#"> <IconButton>
                                <PageviewIcon/>
                            </IconButton> </Link>
                        </li>
                        <li style={{margin:'0px 5px'}}>
                            <Link to="#"> <IconButton>
                                <DeleteIcon/>
                            </IconButton> </Link>
                        </li>
                    </ul>
        },
        {
            Sr:'2',
            Id:'API-123',
            Name:'John Dew',
            Date:'20-2-2020',
            Time:'11:00:00 PM',
            Status:'Approved',
            
            action:<ul style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <li style={{margin:'0px 5px'}}>
                            <Link to="#"> <IconButton>
                                <PageviewIcon/>
                            </IconButton> </Link>
                        </li>
                        <li style={{margin:'0px 5px'}}>
                            <Link to="#"> <IconButton>
                                <DeleteIcon/>
                            </IconButton> </Link>
                        </li>
                    </ul>
        },
        {
            Sr:'3',
            Id:'API-123',
            Name:'John Dew',
            Date:'20-2-2020',
            Time:'11:00:00 PM',
            Status:'Approved',
            
            action:<ul style={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <li style={{margin:'0px 5px'}}>
                            <Link to="#"> <IconButton>
                                <PageviewIcon/>
                            </IconButton> </Link>
                        </li>
                        <li style={{margin:'0px 5px'}}>
                            <Link to="#"> <IconButton>
                                <DeleteIcon/>
                            </IconButton> </Link>
                        </li>
                    </ul>
        },
      ];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="dashboard-body">
            <div className="heading-row">
                <h2>Apporitments</h2>
                <IconButton>
                    <AddCircleIcon/>
                </IconButton>
            </div>
            <div className="table">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                            ))}
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
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
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    )
}

export default Apporitments
