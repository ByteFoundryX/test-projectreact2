

function Blogitem(props) {
    return(
        <div class="col-4">
        <div class="blog-box">
          <div class="blog-img">
            <img src={props.imges} class="img-fluid" />
          </div>
          <div class="blog-content">
            <h3 class="blog-title">{props.title}</h3>
            <p class="blog-desc">
                {props.dis}
            </p>
          </div>
          <div class="blog-footer">
            <div class="post-author">
              <p class="author">Milad Bahrami</p>
            </div>
            <div class="post-date">
              <span class="bi bi-clock"></span> 10 min
            </div>
          </div>
        </div>
      </div>

    )
    
}


export default Blogitem