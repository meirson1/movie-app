import React, {FC, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import './NavigationWrapper.css'

const Nav = {
    Home: {
        path: '/'
    },
    Favorite: {
        path: '/FavoritePage'
    },
};

const NavigationBar: FC = props => {


    const [isEnabled, setIsEnabled] = useState(
        {
            btnFavotrite: true,
            btnHome: false,

        }
    )

    return (
        <div className="navHeader">
            <div className="NavigationWarrper">
                <ul className="nav">
                    {Object.entries(Nav).map((btn) => (
                        <li >
                            <Link to={btn[1].path}>
                                {btn[0]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default NavigationBar;