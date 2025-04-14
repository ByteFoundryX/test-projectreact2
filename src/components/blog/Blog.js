import './Blog.css';
import Images1 from '../../assets/images/post-1.jpg';
import Images2 from '../../assets/images/post-2.jpg';
import Images3 from '../../assets/images/post-3.jpg';
import Blogitem from './Blogitem';

function Blog() {
     
    
     let Blog = [
        {
            imges : Images1 ,
            title : 'web1' ,
            dis :  'hikgmkmgfkggfgmfkgmfgk'
        },


        {
            imges : Images2 ,
            title : 'web1' ,
            dis :  'hikgmkmgfkggfgmfkgmfg'
        },


        {
            imges : Images3 ,
            title : 'web1' ,
            dis :  'hikgmkmgfkggfgmfkg'
        }
     ]


    return(
        <section id="blog">
      <div class="container">
        <div class="section-info">
          <h2 class="section-title">BLOG</h2>
          <p class="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="row">
          <Blogitem {...Blog[0]} />
          <Blogitem {...Blog[1]}/>
          <Blogitem {...Blog[2]}/>
 
        </div>
      </div>
    </section>
    )
    
}



export default Blog


