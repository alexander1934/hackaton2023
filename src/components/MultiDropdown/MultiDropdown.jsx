import React, {useState} from "react";
import style from "./MultiDropdown.module.css";
import arrow from "../../assets/dropdownArrow.svg";

const MultiDropdown = ({options}) => {
    const [isOpen, openToggler] = useState(false);

    const [optionValue, setValue] = useState("");

    const openHandler = React.useCallback(
        () => openToggler((prevValue) => !prevValue),
        []
    );
    const filterParams = (key, value) => {
        console.log(key)
        setValue(value);
        console.log(optionValue)
        openHandler();
    }

    return (
        <div>
            <div className={style.selected_value} onClick={openHandler}>
                <div>{optionValue === "" ? "Выберите фильтр..." : optionValue}</div>
                <img src={arrow} alt=""/>
            </div>
            {isOpen && (
                <div className={style.choose_list}>
                    <ul>
                        {options.map((option) => {
                            return (
                                <li key={option.key} className={style.option}>
                                    <button onClick={() => filterParams(option.key, option.value)}>{option.value}</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
            }
        </div>
    )
        ;
};
export default MultiDropdown;
