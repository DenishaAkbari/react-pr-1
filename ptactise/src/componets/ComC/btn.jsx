import './btn.css'
// import './componets/ComB/nav.css'
const Btn = () => {
    
    return(
        <div className="btn" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
            <div className="search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="register">
                    <span>Register</span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
        </div>
    )
}

export default Btn