import './Servic.css';
import Servicitem from './Servicitem';  

function Servic() {
 

     let servic =[
      {
        icon : 'bi bi-briefcase',
        title : 'web1',
        dis : ' adipisci eaque autem fugiat! Quia, provident vitae! Magnihjhjfhjhjghj',


      },

         {
        icon : 'bi bi-briefcase',
        title : 'web1',
        dis : ' adipisci eaque autem fugiat! Quia, provident vitae! Magni',


      },

      {
        icon : 'bi bi-briefcase',
        title : 'web1',
        dis : ' adipisci eaque autem fugiat! Quia, provident vitae! Magni',


      },
     ];




    return(
        <section id="services">
          <div className="container">
            <div className="section-info">
              <h2 className="section-title">SERVICES</h2>
              <p className="section-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="row">
              
              <Servicitem {...servic[0]}/>
              <Servicitem {...servic[1]}/>
              <Servicitem {...servic[2]}/>
          

            </div>
          </div>
        </section>
    
       

    )
    
}

export default Servic
