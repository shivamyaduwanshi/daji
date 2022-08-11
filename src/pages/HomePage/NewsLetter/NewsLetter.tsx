import './NewsLetter.scss';

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <p className="title">Subscribe to our news letter</p>
      <form className="form">
         <input name="email" placeholder="Enter your email addresss"/>
         <button>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter;