import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Picture from "../Picture/Picture";
import Music from "../Music/Music";
import City from "../City/City";

export default function MyApp():JSX.Element{

    return(
        <Routes>
            <Route path="/" element = {<Layout />} >
                <Route path="music" element ={<Music />} />
                <Route path="picture" element ={<Picture />} />
                <Route path="city" element ={<City />} />
                
            </Route>
        </Routes>
    )
}