let logedinSessionID = '';

export const setLogedinSessionID = (id = '') => {
    console.log('setLogedinSessionID()');

    logedinSessionID = id;

}

export const getLoggedinSessionID = () => {
    console.log('getLogedinSessionID()');
    
    return logedinSessionID;

}