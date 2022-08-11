import './card.scss';

const card = (props: any) => {
  const { title, image } = props;
  return (
    <div className="featured-home-design-card">
      <img src={image} alt={title} />
      <p className="title">{title}</p>
    </div>
  )
}

export default card