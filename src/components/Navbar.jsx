import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useState } from 'react';


function Navbar(){
    let [modal_status, setModal] = useState(true)

return(
    <>
    <div className="grid navigation_bar">
            <div className='grid' style={{gridTemplateColumns:"auto auto", alignItems:"center"}}>
                <Button onClick={()=> {setModal(!modal_status); console.log(modal_status)}}>
        <MenuIcon color="primary" sx={{fontSize: 40}}/>
        </Button>
            <div style={{borderRadius : "50%", height: "5rem", width:"5rem", border: "1px solid blue", backgroundImage: "url('/src/assets/wr1.jpg')", backgroundSize: "90%"}}/>
                </div>
                {modal_status?<></>: <div className="test_modal clicked">
            <span onClick={()=> setModal(!modal_status)}>x</span>
            <a className='block_link' href='/'>Home</a>
            <a className='block_link'>About</a>
            <a className='block_link'>Contact</a>
            <a className='block_link'>Links</a>
            </div>}
              <div>
    <h2>The Weather Report</h2>
    <h4><i>With Weather Report</i></h4>
            </div>
                
         </div>
    </>
)
}

export {Navbar}