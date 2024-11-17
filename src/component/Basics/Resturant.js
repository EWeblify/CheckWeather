import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

// Get list of all categories
const uniqueList = [
    ...new Set(Menu.map((curElm) => {
        return curElm.category
    })
),
"All",
]

const Resturant = () => {
    // To get data from menuapi
    const [menuData , setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)

    // To filter cateogries
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu)
            return
        }
        const updatedList = Menu.filter((curElm) => {
            return curElm.category === category
        })
        setMenuData(updatedList)
    }

    return (
    <>
    {/* To enter the navbar */}
    < Navbar filterItem = {filterItem} menuList = {uniqueList}/>

    {/* To enter the menucards */}
    < MenuCard menuData = {menuData} />
    </>
  )
}

export default Resturant