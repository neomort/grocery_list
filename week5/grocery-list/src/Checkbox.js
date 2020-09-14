import React from "react";

const Checkbox = (props)=>{
  return(<li style={props.complete ? {...styles.Checkbox, ...styles.complete} : styles.Checkbox
  }
  onClick={() => props.itemClick(props.id)}
  >
    {props.name}
  </li>
    );
};

const styles = {
  item: { cursor: "pointer", color: "blue"},
  complete: {
    textDecoration: "line-through",
  },

};

export default Checkbox;