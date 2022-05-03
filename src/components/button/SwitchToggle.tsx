import React, {ChangeEventHandler, useContext, useState} from "react";
import classNames from "classnames";
import './SwitchToggle.css';
import {GalleryContext} from "../Context/GalleryContext";
import movie from "../../features/MovieIntreface";

interface Atrribute {
    rounded: boolean;
    onToggle: ChangeEventHandler<HTMLInputElement>;
    data: movie;
}

const SwitchToggle = ({rounded, onToggle, data}: Atrribute) => {
    const [isOn, setIsOn] = useState(Object(data).isFavorite);
    const ctx = useContext(GalleryContext);

    const sliderCX = classNames("slider", {
        "rounded": rounded
    })

    const checkToggleHandler = (e: any) => {
        ctx.addMovieToList(Object(data));
        setIsOn(!isOn);
        onToggle(e);
    }

    return (
        <label className={"switch"}>
            <input
                type={"checkbox"}
                checked={isOn}
                onChange={checkToggleHandler}/>
            <span className={sliderCX}/>
        </label>
    )
}

export default SwitchToggle;