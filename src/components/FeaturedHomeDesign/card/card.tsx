import './card.scss';

const card = (props: any) => {
  const { id, title, image, openModal } = props;
  return (
    <div className="featured-home-design-card" onClick={() => openModal(id) }>
      <img src={image} alt={title} />
      <p className="title">{title}</p>
    </div>
  )
}

export default card