import MenuIcon from '@mui/icons-material/Menu';
function Navbar(){

return(
    <>
    <div className="grid navigaton_bar grey">
        <div>
        <MenuIcon color="primary" fontSize='large'/>
            <div style={{borderRadius : "50%", height: "5rem", width:"5rem", border: "1px solid blue", backgroundImage: "url('/src/assets/wr1.jpg')", backgroundSize: "90%"}}></div>
                
         </div>
    </div>
    </>
)
}

export {Navbar}