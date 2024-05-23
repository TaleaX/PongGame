
import './main.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Hero, Signup, Userprofile, Dashboard, Settings, HistoryAll, PongGame, MemoryGame} from '../../containers'

const Main = ({ showSignup, userSignedUp, showDashboard, handleUserSignedUp, handleSignup, handleGoToDashboard, lang, setLang, sound, setSound }) => {

    const mainClassName = showSignup || userSignedUp || showDashboard ? 'transition-main' : '';

    return (
        <main className={`${mainClassName}`}>
            <Routes>
                {
                    (
                    <Route path='/'
                        element={<Hero handleSignup={handleSignup}/>}
                    >
                    </Route>
                    )
                }
                {
                    (
                    <Route path='signup'
                        element={<Signup handleUserSignedUp={handleUserSignedUp} handleGoToDashboard={handleGoToDashboard}/>}
                    >
                    </Route>
                    )
                }
                {
                    (
                        <Route path='userprofile'
                           element={ <Userprofile handleGoToDashboard={handleGoToDashboard} />}
                        >
                        </Route>
                    )
                }
                {
                   (
                    <Route path='dashboard'
                        element={<Dashboard />}>
                    </Route>)
                }
                {
                    <Route path='history'
                        element={<HistoryAll />}>

                    {/* <div className='fullHistory d-flex justify-content-cener mt-3'>
                    <HistoryAll />
                    </div> */}
                    </Route>
                }
                {
                    (
                        <Route path='settings'
                            element={<Settings lang={lang} setLang={setLang} sound={sound} setSound={setSound} />}>
                        </Route>
                    )
                }
                {
                    (
                        <Route path='dashboard/pong'
                            element={ <PongGame></PongGame> } >
                        </Route>
                    )
                }
                {
                    (
                        <Route path='dashboard/memory'
                            element={ <MemoryGame></MemoryGame> } >
                        </Route>
                    )
                }
            </Routes>
        </main>
    );
}


export default Main;