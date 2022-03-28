import React from "react";

import Navbar from "./components/navbar/index";
import Footer from "./components/footer";

const MyLayout = ({children}) => {
return(<>
<Navbar/>
{children}
<Footer/>
</>)
}
export default MyLayout