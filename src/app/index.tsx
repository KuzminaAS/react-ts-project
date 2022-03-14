import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./main/index";
import Basket from "./basket/index";
import Article from "./article/index";

import useSelector from "../utils/use-selector";

function App() {
  const select = useSelector(state => ({
    name: state.modals.name,
  }));

  return (
      <>
      <Routes>
          <Route path={''} element={<Main />} />
           <Route path={"articles/:id"} element={<Article />} />
      </Routes>
      {select.name === 'basket' && <Basket />}
      </>
    )
}
export default React.memo(App);