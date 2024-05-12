import { type CoreConcept } from '../../data.ts';
import './CoreConcept.css';

export default function CoreConcept({title, image, description}: CoreConcept) {
  return (
    <li>
      <img src={image} alt="이미지" />
      <h3>{title}</h3>
      <h3>{description}</h3>
    </li>
  )
}
