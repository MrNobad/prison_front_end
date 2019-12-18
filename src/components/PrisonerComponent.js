import React, {Fragment} from 'react';
import FeedPrisoner from './FeedPrisoner';
import MovePrisoner from './MovePrisoner';

const PrisonerComponent = (props)=>{

  if(props.cell.length === 0){
    return (<p>Loading...</p>)
  }

  const prisoners = props.cell.prisoners.map(prisoner => prisoner)

  return(
    <Fragment>
    {prisoners.map((prisoner, index)=> {
      return (
        <h3 key={index} className = 'prisonerBox'>
          Prisoner Name: {prisoner.name}
          <br/>
          Gang: {prisoner.gang}
          <br/>
          Morale: {prisoner.morale}
          <br/><br/>
          <FeedPrisoner prisoner = {prisoner} handleFeedPrisoner={props.handleFeedPrisoner}/>
          <br/>
          <MovePrisoner prisons = {props.prisons} onHandleMovePrisoner={props.onHandleMovePrisoner} />
          <br/>
          <button type="submit" value={prisoner.id} onClick={props.onPrisonerDelete}> Delete {prisoner.name}</button>
         </h3>
      )
    })}
    </Fragment>

  )
}

export default PrisonerComponent;
