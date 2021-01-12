import React from 'react';



const PageLayout = (props) => {
    
  return (
    <>
    {/* <div className={classes.intro}> */}
      <div>
        <p>page layout</p>
      <img src={props.data.img} alt={props.data.img}/>
      <p>{props.data.p1}</p>
      <p>{props.data.p2}</p>
      <p>{props.data.p3}</p>
    </div>
    </>
  )
}

export default PageLayout;