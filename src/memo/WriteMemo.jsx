import React from "react";
import { useState } from "react";
import { getMemoObjs, setMemoObjs, getloggedInUser } from "../db/DB";
import { getLoggedinSessionID} from "../session";


const Memowrite = () => {
 
  const [memo, setMemo] = useState('');

  const handleMemoChange = (event) => {
    setMemo(event.target.value);
  };

  const handleSaveMemo = () => {
    let MemoObj = getMemoObjs();
    MemoObj.push({
      memo: memo,
      date: new Date().toLocaleDateString()
    });
    setMemoObjs(getloggedInUser(), MemoObj);
  };
  

  const handleCancelMemo = () => {
    setMemo('');
  };

  return (
    
    <div>
      <h1>Write Memo</h1>
      <input type="text" className="txt_field"onChange={handleMemoChange} placeholder="Write your memo here"/>
      <button onClick={handleSaveMemo}>Save</button>
      <button onClick={handleCancelMemo}>Cancel</button>
    </div>

  );
};

export default Memowrite;