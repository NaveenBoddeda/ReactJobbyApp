import './index.css'

const SkillCard = props => {
  const {skillDetails} = props
  const {imageUrl, name} = skillDetails
  return (
    <li className="each-skill-container">
      <img src={imageUrl} alt={name} className="company-logo" />
      <p>{name}</p>
    </li>
  )
}
export default SkillCard
