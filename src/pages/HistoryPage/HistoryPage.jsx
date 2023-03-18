import logo from "../../images/logo.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  return (
    <div>
      <header className="header">
        <div>
          <Link className="logo-link" to={"/"}>
            <img className="logo" src={logo} alt="Логотип" />
          </Link>
          <p className="nickname">
            Профацкий Михаил Андреевич <a className="entry-link" href="#"></a>
          </p>
        </div>
      </header>
      <main className="main">
        <section className="list-applications">
          <h1 className="list-applications__title">История обработки заявки №18471129</h1>
          <div class="container table-container">
                <table class="event-data-table">
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
                    <td className="title-td">Дата окончания ДО фактическая</td>
                  </tr>
                  <tr>
                    <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr class="blue-row">
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr>
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr class="blue-row">
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr>
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr class="blue-row">
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr>
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr class="blue-row">
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr>
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                  <tr class="blue-row">
                  <td className="circle-status--green"></td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">1:40:37</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                    <td class="changeable-data">16.01.2023  16:06:16</td>
                  </tr>
                </table>
              </div>
        </section>
      </main>
    </div>
  );
};

export default HistoryPage;
