import './CoreConcept.css'


//  /* {} its when you need a dynimic value */

// export default function CoreConerpt(props){
//   return(
//     <li>
//       <img src={props.image} alt="..." />
//       <h3>{props.title}</h3>
//       <p>{props.descrption}</p>
//     </li>
//   );
// }

// or use this :
export default function CoreConcept({image,title,description}){
    return(
      <li>
        <img src={image} alt="..." />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }