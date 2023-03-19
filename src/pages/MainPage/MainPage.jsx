import logo2 from "../../images/logo2.svg";
import Button from "../../components/Button/Button";
import MultiDropdown from "../../components/MultiDropdown/MultiDropdown";
import Input from "../../components/Input/Input";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setData} from "../../redux/reducers/MainPageSlice";

const MainPage = () => {
    let name = useSelector(state => state.MainPage.userName)
    let requests = useSelector(state => state.MainPage.requestsData)
    let searchParam = useSelector(state=> state.MainPage.inputParams)
    let [fiveDays, setFiveDays] = useState(false);
    let [myRequests, setMyRequests] = useState(false);
    let [input, inputHandler] = useState('');
    let searchFunc = () =>{
        const fetch = () =>{
            //console.log(`http://127.0.0.1:8000/api/connection-requests/?${searchParam}=${input.split(' ').join('+')}${fiveDays ? "&5-days-no-change=true" : "&5-days-no-change=false"}${myRequests ? "&started-by-me=true" : "&started-by-me=false"}`)
            axios.get(`http://127.0.0.1:8000/api/connection-requests/?${searchParam}=${input}`)
                .then((responce)=> dispatch(setData(responce.data.results)));
        }
        fetch()
    }

    let colorHandler = (status) =>{
        if (status == "Финальные"){
            return "green"
        } else if (status == "Ликвидные") {
            return "yellow"
        } else {
            return "red"
        }
    }
    let fiveDaysHandler = () => {
        setFiveDays(prev => !prev)
    }

    let myRequestsHandler = () => {
        setMyRequests(prev => !prev)
    }

    let paginationHandler = (number=1)=>{
        const fetch = () =>{
            //console.log(`http://127.0.0.1:8000/api/connection-requests/?${searchParam}=${input.split(' ').join('+')}${fiveDays ? "&5-days-no-change=true" : "&5-days-no-change=false"}${myRequests ? "&started-by-me=true" : "&started-by-me=false"}&page=${number}`)
            axios.get(`http://127.0.0.1:8000/api/connection-requests/?${searchParam}=${input.split(' ').join('+')}${fiveDays ? "&5-days-no-change=true" : "&5-days-no-change=false"}${myRequests ? "&started-by-me=true" : "&started-by-me=false"}&page=${number}`)
                .then((responce)=> dispatch(setData(responce.data.results)));;
        }
        fetch()
    }

    let dispatch = useDispatch();

    useEffect(() => {
        let fetch = () => {
            axios.get("http://127.0.0.1:8000/api/connection-requests/")
                .then((responce)=> dispatch(setData(responce.data.results)))

        }
        fetch();
    }, [])
    return (
        <div>
            <header className="header">
                <div>
                    <Link className="logo-link" to={"/"}>
                        <img className="logo" src={logo2} alt="Логотип"/>
                    </Link>
                    <p className="nickname">{name}<a className="entry-link" href="#"></a>
                    </p>
                </div>
            </header>
            <main className="main">
                <section className="list-applications">
                    <h1 className="list-applications__title">Список заявок</h1>
                    <div className="list-applications__columns">
                        <div className="table-container">
                            <div className="filter-components">
                                <div className="filter-inputs">
                                    <button className="search-button" onClick={searchFunc}>
                                        <svg
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.72541 0C3.04826 0 0.0530376 2.99266 0.0530376 6.66667C0.0530376 10.3407 3.04826 13.3333 6.72541 13.3333C8.32445 13.3333 9.79295 12.766 10.9439 11.8242L14.9277 15.8047C14.9892 15.8687 15.0629 15.9198 15.1443 15.9549C15.2258 15.9901 15.3135 16.0087 15.4023 16.0096C15.4911 16.0105 15.5791 15.9937 15.6613 15.9602C15.7435 15.9267 15.8182 15.8771 15.8809 15.8144C15.9437 15.7517 15.9933 15.6771 16.0269 15.5949C16.0604 15.5128 16.0773 15.4248 16.0764 15.3361C16.0755 15.2474 16.0568 15.1598 16.0216 15.0784C15.9864 14.997 15.9353 14.9234 15.8712 14.862L11.8874 10.8815C12.8299 9.73159 13.3978 8.26434 13.3978 6.66667C13.3978 2.99266 10.4026 0 6.72541 0ZM6.72541 1.33333C9.68135 1.33333 12.0633 3.71325 12.0633 6.66667C12.0633 9.62008 9.68135 12 6.72541 12C3.76947 12 1.38751 9.62008 1.38751 6.66667C1.38751 3.71325 3.76947 1.33333 6.72541 1.33333Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>
                                    <Input disabled={!searchParam} value={input} id="filter-input" onChange={(e)=>{
                                        inputHandler(e.target.value)
                                    }
                                    }/>
                                    <MultiDropdown
                                        options={[
                                            {key: "inn", value: "ИНН"},
                                            {key: "title", value: "Имя клиента"},
                                            {key: "number", value: "№ заявки"},
                                        ]}
                                    />
                                </div>
                                {/*<Button id="download-button">Загрузить файл .xlsx</Button>*/}
                            </div>
                            <div className="container table-container">
                                <table className="event-data-table main-table">
                                    <tr className="column-names blue-row">
                                        <td className="title-td"></td>
                                        <td className="title-td">№ Заявки</td>
                                        <td className="title-td">КЛИЕНТ</td>
                                        <td className="title-td">ИНН</td>
                                        <td className="title-td">СТАТУС</td>
                                    </tr>
                                    {requests.map((item) => {
                                        return (
                                            <tr>
                                                <td className={`circle-status--${colorHandler(item.status.group.title)}`}><Link
                                                    to={`/request/${item.number}`}></Link></td>
                                                <td class="changeable-data"><Link
                                                    to={`/request/${item.number}`}>{item.number}</Link></td>
                                                <td class="changeable-data"><Link
                                                    to={`/request/${item.number}`}>{item.client.title}</Link></td>
                                                <td class="changeable-data"><Link
                                                    to={`/request/${item.number}`}>{item.client.INN}</Link></td>
                                                <td class="changeable-data"><Link
                                                    to={`/request/${item.number}`}>{item.status.title}</Link>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                        <aside className="sidebar-filter">
                            <p>Фильтр</p>
                            <ul>
                                <li>
                                    <button
                                        className={`filter-button ${
                                            fiveDays ? "selected-value" : ""
                                        }`}
                                        onClick={() => fiveDaysHandler()}
                                    >
                                        5 дней и более дней без изменения
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`filter-button ${
                                            myRequests ? "selected-value" : ""
                                        }`}
                                        onClick={() => myRequestsHandler()}
                                    >
                                        Заявки оформленные мной
                                    </button>
                                </li>
                            </ul>
                            <Button
                                id="clear-button"
                                onClick={() => {
                                    setMyRequests(false);
                                    setFiveDays(false);
                                }}
                            >
                                Очистить
                            </Button>
                        </aside>
                    </div>
                    <ul className="pagination-list">
                        <li className="pagination-item pagination-item--arrow-back">
                            <a href="#">
                                <svg
                                    width="10"
                                    height="16"
                                    viewBox="0 0 10 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.05732 1L2.05133 8L9.05732 15"
                                        stroke="black"
                                        stroke-width="2"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li className="pagination-item active-page--pag" onClick={paginationHandler}>
                            <p>1</p>
                        </li>
                        <li className="pagination-item">
                            <p>2</p>
                        </li>
                        <li className="pagination-item pagination-item--arrow-next">
                            <a href="#">
                                <svg
                                    width="10"
                                    height="16"
                                    viewBox="0 0 10 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.12232 14.9999L8.12842 8L1.12253 0.999896"
                                        stroke="black"
                                        stroke-width="2"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default MainPage;
