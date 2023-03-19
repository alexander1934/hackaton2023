import logo2 from "../../images/logo2.svg";
import Button from "../../components/Button/Button";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import {setData} from "../../redux/reducers/MainPageSlice";
import {useEffect, useState} from "react";

const HistoryPage = () => {
  let [history, setHistory] = useState([])

  let getHistory = () =>{
    const fetch = () =>{
      axios.get(`http://127.0.0.1:8000/api/connection-requests/history/?number=${id}`)
          .then((responce)=> {
            setHistory(responce.data);
            console.log(history)
          });
    }
    fetch()
  }

  let name = useSelector(state => state.MainPage.userName)
  const {id} = useParams();

  useEffect(()=>{
    getHistory();
  }, [])
  return (
    <div>
      <header className="header">
        <div>
          <Link className="logo-link" to={"/"}>
            <img className="logo" src={logo2} alt="Логотип" />
          </Link>
          <p className="nickname">{name}<a className="entry-link" href="#"></a>
          </p>
        </div>
      </header>
      <main className="main">
        <section className="list-applications">
          <h1 className="list-applications__title">История обработки заявки №{id}</h1>
          <Link id="request-button--1" to={`/request/${id}`}>Назад</Link>
          <div class="container table-container">
                <table class="event-data-table history-table">
                  <tr class="column-names blue-row">
                    <td className="title-td"></td>
                    <td className="title-td">СТАТУС</td>
                    <td className="title-td">Дата входа заявки в статус</td>
                    <td className="title-td">Рег. наряда на ТВП</td>
                    <td className="title-td">Завершение проверки ТВП</td>
                    <td className="title-td">Длит. проверки ТВП</td>
                    <td className="title-td">Дата отправки на АПТВ</td>
                    <td className="title-td">Дата окончания АПТВ планируемая</td>
                    <td className="title-td">Дата окончания АПТВ фактическая</td>
                    <td className="title-td">Длительность этапа АПТВ</td>
                    <td className="title-td">Дата отправки на ДО</td>
                    <td className="title-td">Дата окончания ДО планируемая</td>
                    <td className="title-td">Дата окончания ДО фактическая</td>
                  </tr>
                  {history.map((item)=>{
                    return (
                        <tr key={item.id}>
                        <td className="circle-status--green"></td>
                    <td class="changeable-data">{item.status.title ? item.status.title : "-"}</td>
                    <td class="changeable-data">{item.date_entered_status ? item.date_entered_status : "-"}</td>
                    <td class="changeable-data">{item.reg_date_brigade_for_TVP ? item.reg_date_brigade_for_TVP : "-"}</td>
                    <td class="changeable-data">{item.completion_TVP_date ? item.completion_TVP_date : "-"}</td>
                    <td class="changeable-data">{item.TVP_check_duration ? item.TVP_check_duration : "-"}</td>
                    <td class="changeable-data">{item.sending_date_APTV ? item.sending_date_APTV : "-"}</td>
                    <td class="changeable-data">{item.finishing_date_APTV_planned ? item.finishing_date_APTV_planned : "-"}</td>
                    <td class="changeable-data">{item.finishing_date_APTV_actual ? item.finishing_date_APTV_actual : "-"}</td>
                    <td class="changeable-data">{item.APTV_duration ? item.APTV_duration : "-"}</td>
                    <td class="changeable-data">{item.sending_date_DO ? item.sending_date_DO : "-"}</td>
                    <td class="changeable-data">{item.finishing_date_DO_planned ? item.finishing_date_DO_planned : "-"}</td>
                    <td class="changeable-data">{item.finishing_date_DO_actual ? item.finishing_date_DO_actual : "-"}</td>
                  </tr>
                    )
                  })}
                </table>
              </div>
        </section>
      </main>
    </div>
  );
};

export default HistoryPage;
