import './Achievements.scss';

const Achievements = () => {
  return (
    <div className="achievements">
      <p className='title'>Our Achievements</p>
      <div className="achievement-wrapper">
          <div className="achievement">
              <p className="count">1000 +</p>
              <p className="title">Projects Done</p>
          </div>
          <div className="achievement">
              <p className="count">20 +</p>
              <p className="title">Cities Covered</p>
          </div>
          <div className="achievement">
              <p className="count">10 +</p>
              <p className="title">Branches</p>
          </div>
      </div>
    </div>
  )
}

export default Achievements;