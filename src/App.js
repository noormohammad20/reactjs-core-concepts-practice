import './App.css'
import Mobile from './Component/Mobile/Mobile'
import ToDos from './Component/ToDos/ToDos'

function App() {
  return (
    <div className="App">
      <ToDos></ToDos>
      <Mobile></Mobile>
      <Article></Article>
      <Blog heading="first-blog" author="fahim vai"></Blog>
      <Blog heading="second-blog" author="mir hossain"></Blog>
      <Blog heading="third-blog" author="jhankar mahbub"></Blog>
    </div>
  )
}
const ArticleStyle = {
  color: 'green',
  backgroundColor: 'coral',
  border: '6px solid goldenrod'
}

function Article() {
  return (
    <div className='blog'>
      <article>
        <h1 style={ArticleStyle}>First Article</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam facere harum magni mollitia dolorem incidunt vero nesciunt quia quidem veniam vel, numquam, possimus quo omnis magnam quos accusantium sapiente ad alias laboriosam eaque. Enim voluptates quae eius quod illum, dolor qui pariatur sapiente magni beatae vitae voluptas aut. Eum fugiat commodi magni ratione delectus consectetur, vel distinctio tempore. Similique, accusamus debitis ratione nobis mollitia tenetur? Accusantium temporibus maiores, facere et cupiditate provident! Placeat commodi debitis asperiores sapiente omnis aliquam qui numquam voluptatibus, repellendus iste aperiam ex illo quis porro distinctio aliquid dolorem reiciendis fugit, magni doloremque aspernatur, explicabo ducimus!
        <p style={{ color: 'black', backgroundColor: 'lightgreen' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum odit repudiandae eos ratione excepturi exercitationem id. Asperiores, quisquam! Quasi aperiam odio eum. Aspernatur magni, ullam unde consequatur nisi maxime.</p>
      </article>
    </div>
  )
}

function Blog(props) {

  return (
    <div>
      <h1>heading:{props.heading}</h1>
      <h4>author:{props.author} </h4>
    </div>
  )
}

export default App
