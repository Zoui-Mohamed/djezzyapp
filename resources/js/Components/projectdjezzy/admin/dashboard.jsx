import "./admin.css";


function Dashboards(){
    return(
     <div >
        <div className="dashboardone">
            <div className="dashonecontain">
                <div className="dashonecontaintitle">
                    <h1 className="graphtitle">Graphics</h1>
                    
                </div>
            </div>

            <div className="infocontain">
                    <h1 className="infotitle">NOMBRE DE PROJET EN ATTENTE</h1>
                    <div className="infocon">
                    <p className="total">Total : </p>
            <h1 className="number">05</h1>
            <div className="vertical-line"></div>
            <p className="discr">des employer qualifier 
                pour <br></br> la  gestion et les 
                suivies des <br></br> projet  a court 
              et long terme jhkjklfkjfdskjwxkjckj </p>
                    </div>
                    <div className="infotwo">
            <h1 className="infotitre">NOMBRE EMPLOYER : </h1>
            <p className="total">Total : </p>
            <h1 className="number">49</h1>
            <div className="vertical-line"></div>
            <p className="discr">des employer qualifier 
                pour <br></br> la  gestion et les 
                suivies des <br></br> projet  a court 
              et long terme </p>
          </div>
          <div className="infochart-one">
              <h1 className="cotitle">STATESTIQUE</h1>
            </div>
            </div>
        </div>
        <div className="dashboardtwo">
            <div className="dashonetwocontain">
            <div className="dashchart">
            <h1 className="chart-title">LES STATESTIQUE DES PROJET</h1>
          </div>
          <div className="dashcharttwo">
            <h1 className="dashcharttwotitle">state</h1>
          </div>
            </div>
        </div>
    </div>
    )
}


export default Dashboards;