import {NavLink, Outlet} from "react-router-dom";
import './Navigation.css'

export const Navigation = () => {
    return (
      <>
        <div className='navContainer'>
            <NavLink to='/caesar'>Линейные комбинации Цезаря</NavLink>
            <NavLink to='/tarabarskaya'>Тарабарская грамота</NavLink>
            <NavLink to='/prison'>Тюремная азбука</NavLink>
            <NavLink to='/pair'>Парный шифр</NavLink>
            <NavLink to='/viginer'>Шифр Вижинера</NavLink>
            <NavLink to='/viginer30'>Шифр Вижинера 30ru</NavLink>
            <NavLink to='/routeTransportation'>Маршрутная транспортизация</NavLink>
            <NavLink to='/columnTransportation'>Постолбцовая транспортизация</NavLink>
        </div>
        <Outlet />
      </>
    );
};