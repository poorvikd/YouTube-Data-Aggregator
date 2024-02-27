// Desc: This file contains the EnhancedTable component which is used to display the table of videos. It takes the rows as props and renders the table using the Table component from the Material-UI library.

import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";





const headCells = [
    { id: "video", numeric: false, disablePadding: false, label: "Video" },
    { id: "views", numeric: true, disablePadding: false, label: "Views" },
    { id: "likes", numeric: true, disablePadding: false, label: "Likes" },
    { id: "comments", numeric: true, disablePadding: false, label: "Comments" },
];

function EnhancedTableHead(props) {
    // const {
    //     order,
    //     orderBy,
    //     onRequestSort,
    // } = props;
    // const createSortHandler = (property) => (event) => {
    //     onRequestSort(event, property);
    // };

    return (
        <TableHead sx={{ background: "#c20101" }}>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="center"
                        padding="normal"
                    >
                        <TableSortLabel sx={{ color: "#ffffff", style: "bold" }}>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function EnhancedTable(props) {

    const rows = props.rows;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    const visibleRows = React.useMemo(
        () =>
            rows.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [rows, page, rowsPerPage]
    );

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="medium"
                    >
                        <EnhancedTableHead />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        <TableCell component="th" id={labelId} scope="row" sx={{ color: "#c20101" }} >
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="center" sx={{ textAlign: "center", color: "#c20101" }}>{row.viewCount}</TableCell>
                                        <TableCell align="center" sx={{ textAlign: "center", color: "#c20101" }}>{row.likeCount}</TableCell>
                                        <TableCell align="center" sx={{ textAlign: "center", color: "#c20101" }}>{row.commentCount}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={props.rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{ color: "#c20101" }}
                />
            </Paper>
        </Box>
    );
}
