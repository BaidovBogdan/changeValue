import React, { useState, useEffect } from 'react';
import GetChangeValue from './assets/getChangeValue';
import {Routes , Route , Link} from "react-router-dom"

function App() {
   
    return (
        <>
            <main>
                <Link to="/changeValue"><button>нажми на кнопку чтобы приступить</button></Link>
                <Link to="/"><button>нажми на кнопку чтобы выйти</button></Link>
            </main>
            <Routes>
                <Route path='/'></Route>
                <Route path='/changeValue' element={<GetChangeValue/>}></Route>
            </Routes>
        </>

    );
}

export default App;
