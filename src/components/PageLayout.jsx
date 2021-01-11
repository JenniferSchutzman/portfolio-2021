import React from 'react';



const PageLayout = () => {
    
  return (
    <>
    <div className={classes.intro}>
      <img src={props.data.img}/>
      <p>{props.data.p1}</p>
      <p>{props.data.p2}</p>
      <p>{props.data.p3}</p>
    </div>
    </>
  )
}

export default PageLayout;