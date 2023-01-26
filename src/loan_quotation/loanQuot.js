import React, {useState} from 'react';
import {footerRed} from "./loanQuot.css";
import {MdDelete, MdOutlineManageSearch} from "react-icons/md";
import {IoMdArrowDropdown} from "react-icons/io"
import {FcCurrencyExchange} from "react-icons/fc";
import {GrClose} from "react-icons/gr";
import {FiMoreHorizontal} from "react-icons/fi";
import {AiFillEye, AiFillStop, AiOutlinePoweroff, AiFillPrinter, AiOutlinePercentage, AiOutlineCheck} from "react-icons/ai";
import {FiHelpCircle, FiSettings} from "react-icons/fi";
import {GiCrossMark} from "react-icons/gi";
import {FcSearch} from "react-icons/fc";
import {BiSearchAlt} from "react-icons/bi";
import {HiDocumentText} from "react-icons/hi";
import {TbLetterA} from "react-icons/tb";
import ButtonOption from '../components/ButtonOption';
import {Card} from 'react-bootstrap';
import Box from "@mui/material/Box";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Swal from 'sweetalert2';
import Dropdown from 'react-bootstrap/Dropdown';
import { Input } from '@mantine/core';






const columns = [
    {
      field: "SeqNo",
      headerName: "Seq No",
      type: "number",
      width: 120,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "DateDue",
      headerName: "Date Due",
      type: "date",
      width: 280,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Principal",
      headerName: "Principal",
      type: "number",
      width: 280,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Interest",
      headerName: "Interest",
      type: "number",
      width: 280,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Payment",
      headerName: "Payment",
      type: "number",
      width: 280,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
  ];

  const rows = [
    
  ];

  const object = {
    theme1: {
        backgroundImage:"http://localhost:3000/assets/images/back6.jpg",
        headerColor:"rgb(66, 157, 232)",
        buttonColor:"rgb(66, 157, 232)",
        footerColor:"rgb(66, 157, 232)"
    },
    theme2: {
        backgroundImage:"http://localhost:3000/assets/images/back2_1.jpg",
        headerColor:"#e68300",
        buttonColor:"#e68300",
        footerColor:"#e68300"
    },
    theme3: {
        backgroundImage:"http://localhost:3000/assets/images/back2_2.jpg",
        headerColor:"black",
        buttonColor:"black",
        footerColor:"black"
    },
    theme4: {
        backgroundImage:"http://localhost:3000/assets/images/back3.jpg",
        headerColor:"#00b52b",
        buttonColor:"#00b52b",
        footerColor:"#00b52b"
    },
    theme5: {
        backgroundImage:"http://localhost:3000/assets/images/back_4.jpg",
        headerColor:"#0b144b",
        buttonColor:"#0b144b",
        footerColor:"#0b144b",
        accTxtColor:"white"
    },
    theme6: {
        backgroundImage:"http://localhost:3000/assets/images/back7.jpg",
        headerColor:"#5a5b5b",
        buttonColor:"#5a5b5b",
        footerColor:"#5a5b5b",
        
    },
}

function LoanQuotation({handleClose}) {
const [theme, setTheme] = useState(object.theme1)



const close = () => {
    Swal.fire({
  title: 'Are you sure you want to Exit?',
  text: "All data will be lost!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes Exit'
}).then((result) => {
  if (result.isConfirmed) {
    handleClose()
  }
})
}

const okay = () => {
   Swal.fire({
//   position: 'top-end',
  icon: 'success',
  title: 'Saved',
  showConfirmButton: false,
  timer: 1000
})
}
// alert(theme.backgroundImage)

  return (
    <div className='container' id='root' style={{backgroundImage: `url(${theme.backgroundImage})`}}>
        <div className='nav' style={{backgroundColor:theme.headerColor}}>
            <div className='navLeft'>
                <div className='navBtn'><FcCurrencyExchange  size={35}/></div>
                <div className='navTxt'>
                    <h5 className='loanText'><strong>Loan Application</strong></h5>
                </div>
            </div>
            <div className='navMiddle'></div>
            <div className='navIcon'><Dropdown>
      <Dropdown.Toggle style={{color:'white'}} variant="" id="">
        {/* <FiSettings color='white'/> */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={()=>setTheme(object.theme1)}>Aqua Blue</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>setTheme(object.theme2)}>Product Orange</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>setTheme(object.theme3)}>Bee Yellow</Dropdown.Item>
        <Dropdown.Item href="#/action-4" onClick={()=>setTheme(object.theme4)}>Leaf Green</Dropdown.Item>
        <Dropdown.Item href="#/action-5" onClick={()=>setTheme(object.theme5)}>Space Grey</Dropdown.Item>
        <Dropdown.Item href="#/action-6" onClick={()=>setTheme(object.theme6)}>Belly White</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
        </div>
        <div className='topIcns'>
            {/* <div className='topSpace'></div> */}
            <div className='btns'></div>

            <div className='quotationNo' style={{color:theme.accTxtColor}}>
                
                    <label>
                        Application No
                    </label>
                    {/* <br></br> */}
                    <input type='text' disabled style={{width:'170px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3', backgroundColor:'#f0f1f3'}}/>
                    {/* <Input.Wrapper label="Application No">
      <Input />
    </Input.Wrapper> */}
            </div>




        </div>
        <br></br>
        
        {/* <hr style={{color:'black', border:'1px solid black'}}></hr> */}
        <div style={{marginTop:'10px'}}>
            <h6 className='accDetText' style={{color:theme.accTxtColor}}>Account Details</h6>
        </div>
        <div className='acc'>
            <Card className='accDetailsCd' style={{borderRadius:'10px', padding:'13px', marginBottom:'10px', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <div className='accDetails'>
                        <div className='cusDiv' style={{marginLeft:'45px'}}>

                            <label>
                            Customer No*
                            </label>
                            {/* <br></br> */}
                            <input type='text' className='cusInput' style={{width:'150px', marginLeft:'5px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                            
                        </div>
                        <div className='curDiv'>

                                <label>
                                Currency
                                </label>
                                {/* <br></br> */}
                                <input type='text' className='curInput' disabled style={{width:'60px', marginLeft:'5px', borderRadius:'5px', border:'1.5px solid #b0b1b3', backgroundColor:'#f0f1f3'}}/>
                                
                            </div>
                        <div className='accDiv' style={{marginLeft:'210px'}}>

                            <label>
                            Account No
                            </label>
                            {/* <br></br> */}
                            <input className='accInput' type='text' disabled style={{width:'100px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3', backgroundColor:'#f0f1f3'}}/>
                            <button className='searchBtn'><BiSearchAlt color=''/></button>
                            <input className='accDis' type='text' disabled style={{width:'245px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                        
                        </div>


                    
                    
                </div>
                <br></br>
                <div className='accD'>
                    
                        
                    <div className='cusType' style={{marginLeft:'42px'}}>
                            <label>
                            Customer Type
                            </label>
                            {/* <br></br> */}
                            <input type='text' className='cusTInput' disabled style={{width:'193px', marginLeft:'5px', borderRadius:'5px', border:'1.5px solid #b0b1b3', backgroundColor:'#f0f1f3'}}/>
                    </div>
                    <div className='conc'>
                        <div>
                            <label>
                            <strong>Net Monthly income/Salary</strong>
                            </label>
                            {/* <br></br> */}
                            <input type='text' className='netInput' disabled style={{width:'100px', marginLeft:'5px', borderRadius:'5px', border:'1.5px solid #b0b1b3', backgroundColor:'#f0f1f3'}}/>
                        </div>
                        <div>
                            <label>
                            <strong>Debt Service Ratio(DSR)</strong>
                            </label>
                            {/* <br></br> */}
                            <input type='text' className='debtInput' disabled style={{width:'100px', marginLeft:'5px', borderRadius:'5px', border:'1.5px solid #b0b1b3', backgroundColor:'#f0f1f3'}}/>
                        </div>
                    </div>

                </div>
            </Card>
        </div>

        <br></br>
        <div className='inputFields'>
           
            <div className='leftField'>
                {/* <Card className='leftCard'>
                    <Card.Body> */}
                        <div className='cardFields'>
                            <Card className='dateField' style={{borderRadius:'15px', padding:'10px', marginBottom:'7px', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                                <div className='effectiveDate' style={{marginBottom:'15px'}}>
                                    <label className='effLab' style={{marginLeft:'', width:'25%', textAlign:'right'}}>
                                    Effective Date*
                                    </label>
                                    {/* <br></br> */}
                                    <input className='effInput' type='date' placeholder='choose date' style={{width:'150px', marginLeft:'10px', borderRadius:'5px', color:'black', border:'1.5px solid #b0b1b3', height:'30px'}}/>
                                </div>
                                <div className='loanProduct' style={{marginBottom:'15px'}}>
                                    <label className='loanLab' style={{marginLeft:'', width:'25%', textAlign:'right'}}>
                                    Loan Product*
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'50px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <button className='searchBtn'><BiSearchAlt color=''/></button>
                                    <input type='text' className='loanDInput' disabled style={{width:'220px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='currency' style={{marginBottom:'15px'}}>
                                    <form>
                                        <label className='curLab' style={{marginLeft:'', width:'25%', textAlign:'right'}}>
                                        Currency*
                                        </label>
                                        {/* <br></br> */}
                                        <select className='curr' style={{width:'82px', marginLeft:'10px', borderRadius:'5px', height:'30px', border:'1.5px solid #b0b1b3'}}>
                                            <option></option>
                                            <option>USD</option>
                                            <option>GHC</option>
                                        </select>
                                    </form>
                                </div>
                                <div className='facilityAmount' style={{marginBottom:'15px'}}>
                                    <label className='facLab' style={{marginLeft:'', width:'25%', textAlign:'right'}}>
                                    Facility Amount*
                                    </label>
                                    {/* <br></br> */}
                                    <input className='facAmt' type='text' style={{width:'305px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='interestRate'>
                                    <label className='intRLab' style={{width:'25%', textAlign:'right'}}>
                                    Interest Rate
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'80px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <AiOutlinePercentage/> <span>P.M</span>
                                    <input className='intRInp2' type='text' style={{width:'80px', marginLeft:'30px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <AiOutlinePercentage/> <span>P.A</span>
                                </div>
                            </Card>

                            
                           
                        </div>
                            
                            

                        
                        
                    {/* </Card.Body>
                </Card> */}
            </div>
            <div className='rightField'>
                 <Card className='intRow' style={{borderRadius:'15px', padding:'', marginBottom:'7px', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                                <div className='intType' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'30%', textAlign:'right'}}>
                                    Interest Type
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'80px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <button className='searchBtn'><BiSearchAlt color=''/></button>
                                    <input type='text' className='restInput' disabled style={{width:'250px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='prinFreq' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'30%', textAlign:'right'}}>
                                    Princ. Repay Freq.
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'80px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <button className='searchBtn'><BiSearchAlt color=''/></button>
                                    <input type='text' className='princInput' disabled style={{width:'250px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='intFreq' style={{marginBottom:'15px'}}>
                                    <label style={{marginLeft:'', width:'30%', textAlign:'right'}}>
                                    Int. Repay Freq.
                                    </label>
                                    {/* <br></br> */}
                                    <input type='text' style={{width:'80px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                    <button className='searchBtn'><BiSearchAlt color=''/></button>
                                    <input type='text' className='freqInput' disabled style={{width:'250px', marginLeft:'5px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div style={{marginBottom:'15px'}}>
                                    <label className='tenLab' style={{width:'30%', textAlign:'right'}}>
                                    Tenor (In Months)*
                                    </label>
                                    {/* <br></br> */}
                                    <input className='tenInput' type='text' style={{width:'365px', marginLeft:'10px', borderRadius:'5px', border:'1.5px solid #b0b1b3'}}/>
                                </div>
                                <div className='laslas' style={{display:'flex', gap:'15px', width:'', marginLeft:'75px'}}>
                                    <div className='lastDayRow'>
                                        <div className='lastWorkingDay' style={{marginBottom:'1px'}}>
                                            <form>
                                            <label style={{marginLeft:'', width:'', textAlign:'right'}}>
                                            Last Working Day
                                            </label>
                                            {/* <br></br> */}
                                            <select style={{width:'80px', marginLeft:'10px', borderRadius:'5px', height:'30px', border:'1.5px solid #b0b1b3'}}>
                                                <option>Yes</option>
                                                <option>No</option>

                                            </select>
                                        </form>
                                        </div>
                                        
                                    </div>
                                    <div>
                                            <label style={{marginLeft:'20px', width:'', textAlign:'right'}}>
                                            Expiry Date
                                            </label>
                                            {/* <br></br> */}
                                            <input type='text' className='expInput' disabled style={{width:'170px', marginLeft:'10px', borderRadius:'5px', backgroundColor:'#f0f1f3', border:'1.5px solid #b0b1b3'}}/>
                                    </div>

                                </div>
                            </Card>

                            










                {/* <Card className='rightCard' style={{borderRadius:'15px', padding:'7px'}}>
                    <div>
                        <div> */}
                            {/**Data Table */}
                            {/* <Box
                                sx={{
                                height: "755px",
                                width: "auto",
                                borderRadius:"5px", */}
                                {/* // marginLeft: "20px",

                                "& .super-app-theme--header": {
                                    backgroundColor: "rgb(66, 157, 232)",
                                    color: "white",
                                    fontWeight:"",
                                    fontSize:"16px"
                                    
                                },
                                }}
                            >
                                <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                components={{ Toolbar: GridToolbar }}
                                />
                            </Box> */}
                            
        {/* {/* </div> */}
                    {/* </div>
                </Card> */}
            </div> 

        </div>

                <div className='pBook'>
                    <div></div>            
                    <div style={{display:'flex'}}>
                        <div className='printP'>
                            <button className='printBtn' style={{backgroundColor:theme.buttonColor}}><strong>Apply</strong></button>
                        </div>            
                        <div className='printP'>
                            <button className='printBtn' style={{backgroundColor:theme.buttonColor}}><strong>Print</strong></button>
                            <AiFillPrinter size={20}/>
                        </div>
                    </div>            

                </div>
            


<div className='tblField'>
                <Card style={{borderRadius:'15px', padding:'7px', width:'100%'}}>
                    <div>
                        <div>
                            {/**Data Table */}
                            <Box
                                sx={{
                                height: "180px",
                                width: "auto",
                                borderRadius:"5px",
                                
                                // marginLeft: "20px",

                                "& .super-app-theme--header": {
                                    backgroundColor:theme.headerColor,
                                    color: "white",
                                    fontWeight:"",
                                    fontSize:"16px"
                                    
                                },
                                }}
                            >
                                <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                components={{ Toolbar: GridToolbar }}
                                />
                            </Box>
                            
        </div>
                    </div>
                </Card>
            </div>
            

        <hr style={{color:'black', border:'1px solid black'}}></hr>
        <div className='footer' style={{backgroundColor: theme.headerColor}}>
            <div className='txt'>
                <h6 className='footText'><strong>All Mandatory Fields' Label are in Asterisks (*)</strong></h6>
            </div>
            <div className='version'>
                <tt className='versionTxt'>version 0.05</tt>
            </div>
        </div>

                    


    </div>
  )
}

export default LoanQuotation
                                
                                
                                
                                







