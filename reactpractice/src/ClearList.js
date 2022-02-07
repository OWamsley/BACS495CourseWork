import React from 'react';

function ClearList(props) {
  return <div>
      <button className="clearList" onClick={props.onClick}>
            Clear List
        </button>
  </div>;
}

export default ClearList;
