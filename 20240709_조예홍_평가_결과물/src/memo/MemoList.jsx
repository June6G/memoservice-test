import React from "react";



const MemoList = () => {
  return (
    <div id = "memo_list">
      <h2>Memo List</h2>
      <ul>
        <li>
          <button>Modify</button>
          <button>Delete</button>
        </li>
      </ul>
      <button>Add Memo</button>
    </div>

  );
};

export default MemoList;