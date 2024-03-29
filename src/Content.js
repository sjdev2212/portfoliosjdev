import Carousel from '@itseasy21/react-elastic-carousel'
import './Content.css'
import task1 from './images/task-1.png'
import task2 from './images/task-2.png'
import task3 from './images/home-light.png'
import task4 from './images/add-bill.png'
import task5 from './images/add-task.png'
import task6 from './images/calendar.png'
import loginLight from './images/login-light.png'
import loginDark from './images/login-dark.png'
import socorrosFirstHome from './images/first-home.png'
import socorrosSecondHome from './images/second-home.png'
import socorrosContact from './images/contacto.png'
import socorrosFooter from './images/footer.png'
import socorrosInst from './images/institucional.png'
import socorrosInst2 from './images/institucional-2.png'
import socorrosUrgencias  from './images/urgencias.png'
import socorrosPagos  from './images/pagos.png'

export const Content = () => {



  return (
    <main className="content">
<h1>Latest Projects</h1>
  
  <section className="task-manager">
    <div className="carousel-task" >
    <Carousel itemsToShow={1}>
    <img className="task-img" src={task1} alt="first pic task" />
    <img className="task-img" src={task2} alt="second pic task" />
    <img className="task-img" src={loginLight} alt="login light" />
    <img className="task-img" src={loginDark} alt="login dark" />
    <img className="task-img" src={task3} alt="home light" />
    <img className="task-img" src={task4} alt="add bill" />
    <img className='task-img' src={task5} alt="add task" />
    <img className='task-img' src={task6} alt="calendar" />
</Carousel>
<div className="pills">
<p className="pill">
React
</p>

<p className="pill">
HTML
</p>
<p className="pill">
CSS
</p>

<p className="pill">
Axios
</p>
<p className="pill">
Node.js

</p>
<p className="pill">
Express
</p>
<p className="pill">
MongoDB
</p>
<p className="pill">
Jest
</p>
</div>
    </div>
    <div className="task-content">
    <h2>Task Manager</h2>

    <p>Introducing my comprehensive task manager application, 
        designed to keep you organized effortlessly. 
        This versatile tool empowers users to efficiently manage tasks, 
        bills, and appointments, all within a single platform. 
        With a sleek dark mode for enhanced visual comfort and a seamless toggle between Spanish and English languages, 
        the app is tailored to suit diverse user preferences. 
        Rigorously tested with Jest, it's not just a task manager; 
        it's your reliable digital assistant for staying on top of life's demands.</p>

        <div className="task-btns">
    <a href='https://shimmering-buttercream-92b1e0.netlify.app/'  target="_blank" rel="noreferrer" className="btn"  >See Live</a>
    <a href='https://github.com/sjdev2212/taskmng.git' target="_blank" rel="noreferrer"  className="btn"  >Source</a>
    </div>
    
      
       </div>
      

       </section>

  
  
 
    <section className="socorros-cont">
    <section className="socorros-content">
    <h2 >Socorros Mutuos</h2>
    <p>
    This React application has been exclusively designed for the 
    Socorros Mutuos Association in Argentina. 
    Serving as a comprehensive static service page, 
    it offers affiliates a centralized platform to access a wealth 
    of information and stay updated on all the latest news and developments pertaining to the Socorros 
    Mutuos Association. Whether you are a member or supporter, 
    this platform is your gateway to a treasure trove of resources and 
    insights about the association.

    </p>
    <div className="task-btns">
    <a href='https://socorros-mutuos.web.app/'  target="_blank" rel="noreferrer" className="btn"  >See Live</a>
    <a href='https://github.com/sjdev2212/socorros-mutuos.git' target="_blank" rel="noreferrer"  className="btn"  >Source</a>
    </div>
    </section>


    <div className="carousel-socorros" >
    <Carousel itemsToShow={1}>
    <img className="socorros-img" src={socorrosFirstHome} alt="home1" />
    <img className="socorros-img" src={socorrosSecondHome} alt="homne2" />
    <img className="socorros-img" src={socorrosContact} alt="contacto" />
    <img className="socorros-img" src={socorrosFooter} alt="footer" />
    <img className="socorros-img" src={socorrosInst} alt="institucional" />
    <img className="socorros-img" src={socorrosInst2} alt="institucional2" />
    <img className="socorros-img" src={socorrosUrgencias} alt="urgencias" />
    <img className="socorros-img" src={socorrosPagos} alt="pagos" />

</Carousel>
<div className="pills-socorros">
<p className="pill">
React
</p>

<p className="pill">
HTML
</p>
<p className="pill">
CSS
</p>
<p className="pill">
  Firebase
</p>

</div>
    </div>
 

            
    </section>


 

</main>
  )
}
