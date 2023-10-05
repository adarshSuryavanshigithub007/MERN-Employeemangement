import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar, Badge, Grid, IconButton, Menu, MenuItem, Paper, Tooltip, selectClasses } from '@mui/material';
import ReactPaginate from 'react-paginate';
const ListUser = () => {
  const [userlist, updateUserList] = useState([])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const PER_PAGE = 10
  const ITEM_HEIGHT = 18;
  const [currentPage, setCurrentPage] = useState(0)
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(userlist.length / PER_PAGE)
  const getalluser = () => {
    axios.get("http://localhost:8000/userlist").then((response) => {
     
        console.log(response.data)
        updateUserList(response.data)
    
    }).catch((err) => {
      console.log(err)
    });

  }

  useEffect(() => {
    getalluser()
  }, [1])

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container sx={{ justifyContent: 'center', marginTop: 0 }} >
      <Grid item xs={12} md={12} >
        <Grid sx={{ textAlign: 'left', color: 'green', fontSize: 18 }}>
          <h3 >List Of AllUser</h3>
        </Grid>
      </Grid>
      <Grid item xs={12} md={11}>
        <TableContainer component={Paper}>
          <Table sx={{ Width: "100% " }} aria-label="simple table">
            <TableHead style={{ background: "	#0080ff" }}>
              <TableRow >
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white", lineHeight: 0 }}>S.no</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Profile</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Name</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>FullName</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Email</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Mobile</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Gender</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Department</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>DOB</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>State</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>District</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Address</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Status</TableCell>
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                userlist.slice(offset, offset + PER_PAGE).map((userinfo, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, lineHeight: 0 }}>{index + 1}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}><Avatar alt="Remy Sharp" src={userinfo.photo} sx={{ width: 36, height: 36 }} /></TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.name}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.fullname}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.email}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.mobile}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.gender}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.department}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.dof}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.state}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.district}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>{userinfo.address}</TableCell>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, }}>
                        <Badge color={userinfo.status === "active" ? "success" : "error"} overlap="circular" variant="dot" >
                          {userinfo.status}
                        </Badge>
                      </TableCell>
                      <TableCell> <div>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? 'long-menu' : undefined}
                          aria-expanded={open ? 'true' : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose} >
                          <MenuItem>
                            <Tooltip title="Delete">
                              <DeleteIcon color='error' />
                            </Tooltip>
                          </MenuItem>
                          <MenuItem>
                            <Tooltip title="Eddit">
                              <CreateIcon color='success' />
                            </Tooltip>
                          </MenuItem>
                          <MenuItem>
                            <Tooltip title="View"> <VisibilityIcon color='primary' /></Tooltip>
                          </MenuItem>
                        </Menu>
                      </div>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination-container"
          activeClassName="active-page"
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />


      </Grid>
    </Grid>
  )
}

export default ListUser