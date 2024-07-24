import React from'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import MemoList from './memo/MemoList';
import Modify from './memo/Modify';
import Logout from './Logout';
import {setLogedinSessionID,getLoggedinSessionID} from"./session";


const Menubar = () => {

    const [isHome, setIsHome] = React.useState(true);
    const [isLogin, setIsLogin] = React.useState(false);
    const [isRegister, setIsRegister] = React.useState(false);
    const [isLogout, setIsLogout] = React.useState(false);
    const [isMemo, setIsMemo] = React.useState(false);
    const [isMemoList, setIsMemoList] = React.useState(false);
    const [isModify, setIsModify] = React.useState(false);


    const homeHandler = () => {
        setIsHome(true);
        setIsLogin(false);
        setIsRegister(false);
        setIsLogout(false);
        setIsMemo(false);
        setIsMemoList(false);
    }

    const loginHandler = () => {
        setIsHome(false);
        setIsLogin(true);
        setIsRegister(false);
        setIsLogout(false);
        setIsMemo(false);
        setIsMemoList(false);
    }

    const registerHandler = () => {
        setIsHome(false);
        setIsLogin(false);
        setIsRegister(true);
        setIsLogout(false);
        setIsMemo(false);
        setIsMemoList(false);
    }

    const logoutHandler = () => {
        setLogedinSessionID(null);
        setIsHome(false);
        setIsLogin(false);
        setIsRegister(false);
        setIsLogout(true);
        setIsMemo(false);
        setIsMemoList(false);
    }

    const memoHandler = () => {
        setIsHome(false);
        setIsLogin(false);
        setIsRegister(false);
        setIsLogout(false);
        setIsMemo(true);
        setIsMemoList(false);
    }

    const memoListHandler = () => {
        setIsHome(false);
        setIsLogin(false);
        setIsRegister(false);
        setIsLogout(false);
        setIsMemo(false);
        setIsMemoList(true);
    }

    const modifyHandler = () => {
        setIsHome(false);
        setIsLogin(false);
        setIsRegister(false);
        setIsLogout(false);
        setIsMemo(false);
        setIsMemoList(false);
        setIsModify(true);
    }

    return (
        <div id ="menubar"> 
            <div className='menu'>
                <a href="#home" onClick={homeHandler}>Home</a>
                <>
                {
                    isLogin ?
                    <>
                    <a href="#none" onClick={logoutHandler}>logout</a>
                    <a href="#none" onClick={modifyHandler}>Modify</a>
                    </>
                    :
                    <>
                    <a href="#none" onClick={loginHandler}>login</a>
                    <a href="#none" onClick={registerHandler}>register</a>
                    </>
                }
                </>
                <a href="#none" onClick={memoHandler}>Memo</a>
                <a href="#none" onClick={memoListHandler}>Memo List</a>
            </div>
            <div className='content'>
                {isHome ? <Home /> : null}
    
                {isRegister ? <Register 
                    HomeView={setIsHome} 
                    LoginView={setIsLogin} 
                    RegisterView={setIsRegister} 
                    LogoutView={setIsLogout} 
                    MemoView={setIsMemo} 
                    setIsMemoList={setIsMemoList} 
                              /> : null
                }
                {isMemo ? <Memo
                    HomeView={setIsHome} 
                    LoginView={setIsLogin} 
                    RegisterView={setIsRegister} 
                    LogoutView={setIsLogout} 
                    MemoView={setIsMemo} 
                    MemoListView={setIsMemoList} 
                         /> : null
                }
                {isMemoList ? <MemoList/> : null}
                {
                    isModify ? <Modify 
                        HomeView={setIsHome} 
                        LoginView={setIsLogin} 
                        RegisterView={setIsRegister} 
                        LogoutView={setIsLogout} 
                        MemoView={setIsMemo} 
                        setIsMemoList={setIsMemoList} 
                             /> : null
                }
                {isLogin ? <Login 
                    HomeView={setIsHome} 
                    LoginView={setIsLogin} 
                    RegisterView={setIsRegister} 
                    LogoutView={setIsLogout} 
                    MemoView={setIsMemo} 
                    setIsMemoList={setIsMemoList} 
                             /> : null
                }
                {islogout ? <Logout/> : null}
            </div>
        </div>

    )
}
