import './Project.scss';
import HomeImage from 'assets/images/home-design-image.jpg';

const Project = () => {
  return (
    <div className="project">
        <img src={HomeImage} alt="home" />
        <p className="title">Double Story Design </p>
        <p className="plan">25'* 45 North facing house Plan</p>
        <p className="location">Location: Indore</p>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet cupiditate architecto, fuga officia doloremque quibusdam quo amet adipisci quia iste delectus distinctio similique culpa, quos qui fugiat consectetur, maxime veniam.</p>
    </div>
  )
}

export default Project;