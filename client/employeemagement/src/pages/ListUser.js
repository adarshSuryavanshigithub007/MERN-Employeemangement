import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import swal from 'sweetalert';
import { Avatar, Badge, Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Menu, MenuItem, Paper, Select, TextField, Tooltip, selectClasses } from '@mui/material';
import ReactPaginate from 'react-paginate';
const ListUser = () => {
  const [userlist, updateUserList] = useState([])
  const [keyword, setKeyword] = useState('')
  console.log(keyword)
  const PER_PAGE = 5
  const [currentPage, setCurrentPage] = useState(0)
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(userlist.length / PER_PAGE)
  console.log(offset)
  console.log(pageCount)
  const getalluser = () => {
    axios.get("http://localhost:8000/userlist").then((response) => {
      console.log(response.data)
      updateUserList(response.data.reverse())
    }).catch((err) => {
      console.log(`${err.message}`)
      alert(`${err.message}`)
    });

  }

  useEffect(() => {
    getalluser()
  }, [1])


  const deleteuser = (id, name) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          const url = "http://localhost:8000/userlist/" + id;
          const postdata = { method: "delete" }
          fetch(url, postdata)
            .then(response => response.json())
            .then(Serverres => {
              // alert(name)
              getalluser()
            })
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }

  const search = () => {

    axios.get("http://localhost:8000/userlist/" + keyword).then((response) => {
      console.log(response.data)
      updateUserList(response.data)

    }).catch((err) => {
      console.log(`${err.message}`)
      alert(`${err.message}`)
    });
  }
  const reset = () => {
    axios.get("http://localhost:8000/userlist").then((response) => {
      console.log(response.data)
      updateUserList(response.data.reverse())
    }).catch((err) => {
      console.log(`${err.message}`)
      alert(`${err.message}`)
    });
  }

  return (
    <Grid container sx={{ justifyContent: 'center', marginTop: 0 }} >
      <Grid item xs={12} md={3} >
        <Grid sx={{ textAlign: 'left', color: 'green', fontSize: 18 }}>
          <h3 >List Of AllUser</h3>
        </Grid>
      </Grid>

      <Grid item xs={12} md={4} marginTop={2} >

        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
          <Paper>
            <TextField

              onChange={obj => setKeyword(obj.target.value)}
              placeholder='Serch Name.......'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'action.active', marginRight: "20px" }} />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />

          </Paper>
          <Button color='secondary' variant='contained' sx={{ marginLeft: '10px' }} onClick={search}>Search</Button>
          <Button color='info' variant='contained' sx={{ marginLeft: '10px' }} onClick={reset}>Reset</Button>
        </Box>

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
                <TableCell sx={{ textAlign: 'center', fontSize: 15, color: "white" }} colSpan={3}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                userlist.slice(offset, offset + PER_PAGE).map((userinfo, index) => {
                                  // Define the string
             

                // Encode the String
                var encodedStringBtoA = btoa(userinfo._id);

              console.log(encodedStringBtoA);
                  return (
                    <TableRow key={index}>
                      <TableCell sx={{ textAlign: 'center', fontSize: 15, lineHeight: 0 }}>{offset+index + 1}</TableCell>
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
                      <TableCell>
                        <DeleteIcon color='error' onClick={() => deleteuser(userinfo._id, userinfo.name)} />
                      </TableCell>
                      <TableCell>
                        <Link to={`edit/${userinfo._id}`}><CreateIcon color='success' /></Link>
                      </TableCell>
                      <TableCell>
                      <Link to={`ViewDetails/${userinfo._id}`}> <VisibilityIcon color='primary' /></Link> 
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