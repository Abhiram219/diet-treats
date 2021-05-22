import React from 'react';
import {ReactComponent as RightArrow} from '../../assets/icons/right-arrow.svg'

function PlanCard(props) {

  const {data, key} = props;

  return (
        
    <div className="planCard__plan">

      <div className="planCard__title"> {data.name} </div>
      <div className="planCard__price"> {data.price} </div>

      <hr />

      <div className="planCard__features">
          {data.features.map( (item,index) => 
            <div className="planCard__feature" key={index}> 
              <RightArrow />
              <span> {item} </span> 
            </div>
          )} 
      </div>

      <button className="planCard__book"> Select </button>
    
    </div>

  );
}
  
  export default PlanCard;