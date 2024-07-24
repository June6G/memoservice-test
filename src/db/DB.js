export const USER_DB_IN_LOCAL_STORAGE = 'memoServiceUserDB';
export const MEMO_DB_IN_LOCAL_STORAGE = 'memoServiceMemoDB';

//member
export const getMemoServiceUserDB = () => {
    console.log('getMemoServiceUserDB()');

    return localStorage.getItem(USER_DB_IN_LOCAL_STORAGE);

}

export const setMemoServiceUserDB = (userDBJsObj) => {
    console.log('setMemoServiceUserDB()');

    localStorage.setItem(USER_DB_IN_LOCAL_STORAGE, JSON.stringify(userDBJsObj));

}

export const getUserObj = (uId) => {
    console.log('getUserObj()');

    let userDBInStorage = getMemoServiceUserDB();      
    let userDBJsObj = JSON.parse(userDBInStorage);        

    return userDBJsObj[uId];

}

export const getMemoServiceMemoDB = () =>{
    console.log('getMemoServiceMemoDB()');
    
    return localStorage.getItem(MEMO_DB_IN_LOCAL_STORAGE);

}

export const setMemoServiceMemoDB = (memoDBJsObj) => {
    console.log('setMemoServiceMemoDB()');

    localStorage.setItem(MEMO_DB_IN_LOCAL_STORAGE, JSON.stringify(memoDBJsObj));
}

export const getMemoObjs = (uId) => {
    console.log('getMemoObjs()');

    let memoDBInStorage = getMemoServiceMemoDB();   
    let memoJsObj = JSON.parse(memoDBInStorage);    
    let MemoObjs = memoJsObj[uId];               

    return MemoObjs;

}

