import React, { useEffect, useState } from 'react'
import { getUsers } from '../service/api'
import { Box, Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import ReactPaginate from "react-paginate";
import AddIcon from '@mui/icons-material/Add';
const AllUser = () => {
    const userHeader = ["s.no", "name", "userName", "email", "mobile", "action"]
    const [alluser, setAllUser] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 4
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(alluser.length / PER_PAGE);
    console.log(pageCount, alluser.length)
    const getAllUsers = async () => {
        try {
            let response = await getUsers()
            setAllUser(response.data)
        } catch (error) {
            console.log(`${error.message}`)
        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    return (
        <>


            <Grid container marginTop={3}>



                <Grid item xs={12} md={12}>

                    <TableContainer sx={{ display: 'flex', justifyContent: 'center',  }}>

                        <Table aria-label="customized table" sx={{ width: '100%', maxWidth: 880,}}>
                            <TableHead sx={{ backgroundColor: '#2962ff' }}>
                                <TableRow >
                                    {
                                        userHeader.map((eachHeader, index) => (
                                            (eachHeader === "action") ? (<><TableCell colSpan={2} sx={{ color: '#fff', fontSize: '15px', textAlign: 'center', padding: '0px' }}>
                                                {eachHeader}
                                            </TableCell></>) : (<> <TableCell sx={{ color: '#fff', fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                                                {eachHeader}
                                            </TableCell></>)
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    alluser.slice(offset, offset + PER_PAGE).map((eachRecord, index) => {
                                        return (
                                            <>
                                                <TableRow key={index}>
                                                    <TableCell key={index} sx={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                                                        {(currentPage * PER_PAGE) + index + 1}
                                                    </TableCell>
                                                    <TableCell key={index} sx={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                                                        {eachRecord.name}
                                                    </TableCell>
                                                    <TableCell key={index} sx={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                                                        {eachRecord.username}
                                                    </TableCell>
                                                    <TableCell key={index} sx={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                                                        {eachRecord.email}
                                                    </TableCell>
                                                    <TableCell key={index} sx={{ fontSize: '15px', textAlign: 'center', padding: '10px' }}>
                                                        {eachRecord.mobile}
                                                    </TableCell>
                                                    <TableCell key={index} sx={{ fontSize: '15px', textAlign: 'center', padding: '0px' }}>
                                                        <Tooltip title='Edit' placement='left-start' arrow>
                                                            <IconButton>
                                                                <EditIcon color='primary' />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell key={index} sx={{ fontSize: '15px', textAlign: 'center', padding: '10px', cursor: 'pointer' }}>
                                                        <Tooltip title='Delete' placement='right-end' arrow>
                                                            <IconButton>
                                                                <DeleteRoundedIcon color='error' />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            </>
                                        )
                                    })
                                }
                                <TableRow>
                                    <TableCell align="center" colSpan={7}>
                                        <Box display="flex" justifyContent="flex-end">
                                            <Button variant='contained' color='success' size='medium' endIcon={<AddIcon/>}>ADD New User</Button>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>

                        </Table>

                    </TableContainer>

                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination  justify-content-center"}
                        pageClassName={"page-item "}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active primary"}
                    />
                </Grid>

            </Grid>
        </>
    )
}

export default AllUser