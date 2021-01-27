<div className="col-12 container">
                
                <div className="col-4 col-md-10"></div>
            </div>
            
            <div className="col-3 row  py-1">
                {/* <div className="col-5"></div>
                <div className="col-2 theme border"><FiMoon size='20px'/></div>
                <div className="col-2 user border"><BiUserCircle size='20px'/></div>
                <div className="col-2"></div> */}
            </div>
            {/* <div className="col-9"></div>
            <div className="col-2 border" style={{height:'200px'}}>jjj</div> */}


            <div className="row ">
            {dd.map(d=>{
                return <div key={d} className='col-3 p-1' style={{wordWrap:'break-word'}}>
                    <div className='border p-1'><p style={{textAlign:'left'}}>{d}</p></div>
                </div>
            })}
            </div>

wordWrap:'break-word',