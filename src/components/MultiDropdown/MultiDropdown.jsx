import React, {useState} from "react";
import style from "./MultiDropdown.module.css";
import arrow from "../../assets/dropdownArrow.svg";
import {useDispatch} from "react-redux";
import {setSearchFilter} from "../../redux/reducers/MainPageSlice";

const MultiDropdown = ({options}) => {
    const [isOpen, openToggler] = useState(false);

    const [optionValue, setValue] = useState("");

    const openHandler = React.useCallback(
        () => openToggler((prevValue) => !prevValue),
        []
    );

    let dispatch = useDispatch();
    const filterParams = (key, value) => {
        setValue(value);
        dispatch(setSearchFilter(key));
        openHandler();
    }

    return (
        <div>
            <div className={style.selected_value} onClick={openHandler}>
                <div>{optionValue === "" ? "Искать по..." : optionValue}</div>
                <img src={arrow} alt=""/>
            </div>
            {isOpen && (
                <div className={style.choose_list}>
                    <ul>
                        {options.map((option) => {
                            return (
                                <li key={option.key} className={style.option}>
                                    <button
                                        onClick={() => filterParams(option.key, option.value)}>{option.value}</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
            }
        </div>
    );
};
export default MultiDropdown;
