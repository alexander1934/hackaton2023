import logo from '../../images/logo.png';
import Button from '../../components/Button/Button';
import MultiDropdown from "../../components/MultiDropdown/MultiDropdown";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
      <div>
        <header className='header'>
          <div>
          <Link className='logo-link' to={'/'}>
              <img className='logo' src={logo} alt="Логотип" />
          </Link>
          <p className='nickname'>Профацкий Михаил Андреевич <a className='entry-link' href="#"></a></p>
          </div>
        </header>
        <main className='main'>
              <section className='list-applications'>
                <h1 className='list-applications__title'>Список заявок</h1>
                <div className='list-applications__columns'>
                <div className='table-container'>
                  <div className='filter-inputs'>
                  <MultiDropdown
                        options={[
                            { key: "INN", value: "ИНН" },
                            { key: "clientID", value: "№ клиента" },
                            { key: "requestID", value: "№ запроса" },
                        ]}
                    />
                    <Button id='download-button'>Загрузить файл .xlsx</Button>
                  </div>
                  <div class="container table-container">
                    <table class="event-data-table">
                        <tr class="column-names blue-row">
                            <td className='title-td'></td>
                            <td className='title-td'>№ Заявки</td>
                            <td className='title-td'>КЛИЕНТ</td>
                            <td className='title-td'>ИНН</td>
                            <td className='title-td'>СТАТУС</td>
                        </tr>
                        <tr>
                            <td className='circle-status--green'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>


                        </tr>
                        <tr class="blue-row">
                            <td className='circle-status--green'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                        <tr>
                            <td className='circle-status--green'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                        <tr class="blue-row">
                            <td className='circle-status--green'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                        <tr>
                            <td className='circle-status--red'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                        <tr class="blue-row">
                            <td className='circle-status--green'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                        <tr>
                            <td className='circle-status--yellow'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                        <tr class="blue-row">
                            <td className='circle-status--green'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                        <tr>
                            <td className='circle-status--green'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                        <tr class="blue-row">
                            <td className='circle-status--green'></td>
                            <td class="changeable-data">18471129</td>
                            <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                            <td class="changeable-data">615301408074</td>
                            <td class="changeable-data">Удалена (ошибка ввода)</td>

                        </tr>
                    </table>
                </div>
                </div>
                <aside className='sidebar-filter'>
                  <p>Фильтр</p>
                  <ul>
                    <li><button className='filter-button'>5 дней без изменения</button></li>
                    <li><button className='filter-button'>Заявки оформленные мной</button></li>
                  </ul>
                  <Button id='clear-button'>Очистить</Button>
                </aside>
                </div>
              </section>
        </main>
      </div>
    )
};

export default MainPage;