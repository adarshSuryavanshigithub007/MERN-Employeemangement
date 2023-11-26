import React, { useEffect, useState } from 'react'
import { getDeleteUser, getUsers, searchUser } from '../service/api'
import { Box, Button, Fab, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import ReactPaginate from "react-paginate";
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
const AllUser = () => {
    const userHeader = ["s.no", "name", "userName", "email", "mobile", "action"]
    const [alluser, setAllUser] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 5
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(alluser.length / PER_PAGE);
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
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                getDeleteUser(id)
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    getAllUsers()
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <>
            <Grid container marginTop={3}>
                <Grid item xs={12} md={12}>
                    <TableContainer sx={{ display: 'flex', justifyContent: 'center', }}>
                        <Table aria-label="customized table" sx={{ width: '100%', maxWidth: 880, }}>
                            <TableHead sx={{ backgroundColor: '#2962ff' }}>
                                <TableRow >
                                    {
                                        userHeader.map((eachHeader, index) => (
                                            (eachHeader === "action") ? (<>
                                            {localStorage.getItem("adminId")?(  <TableCell colSpan={2} sx={{ color: '#fff', fontSize: '15px', textAlign: 'center', padding: '0px' }}>
                                            {eachHeader}
                                        </TableCell>):null}
                                        </>) : (<> 
                                        <TableCell sx={{ color: '#fff', fontSize: '15px', textAlign: 'center', padding: '10px' }}>
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
                                                        {localStorage.getItem("adminId")?( <Tooltip title='Edit' placement='left-start' arrow>
                                                            <Link to={`edituser/${eachRecord._id}`} style={{ textDecoration: 'none', }}> <EditIcon color='primary' /></Link>
                                                        </Tooltip>):null}
                                                    </TableCell>
                                                    <TableCell key={index} sx={{ fontSize: '15px', textAlign: 'center', padding: '10px', cursor: 'pointer' }}>
                                                        {localStorage.getItem("adminId")?( <Tooltip title='Delete' placement='right-end' arrow>
                                                            <DeleteRoundedIcon color='error' onClick={() => handleDelete(eachRecord._id)} />
                                                        </Tooltip>):null}
                                                    </TableCell>
                                                </TableRow>
                                            </>
                                        )
                                    })
                                }
                                <TableRow>
                                    <TableCell align="center" colSpan={7}>
                                        { localStorage.getItem("adminId") ? (<><Box display="flex" justifyContent="flex-end">
                                            <Link to="/addnewuser" style={{ textDecoration: 'none', }}>  <Button variant='contained' color='success' size='medium' endIcon={<AddIcon />}>ADD New User</Button> </Link>
                                        </Box></>):""}
                                        
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