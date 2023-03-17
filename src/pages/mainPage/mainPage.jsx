import logo from '../../images/logo.png';
import Button from '../../components/Button/Button';
import MultiDropdown from "../../components/MultiDropdown/MultiDropdown";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
      <div>
        <header className='header'>
          <Link className='logo-link' to={'/'}>
              <img className='logo' src={logo} alt="Логотип" />
          </Link>
          <p className='nickname'>Профацкий Михаил Андреевич <a className='entry-link' href="#"></a></p>
        </header>
        <main className='main'>
              <section className='list-applications'>
                <h1 className='list-applications__title'>Список заявок</h1>
                <div className='list-applications__columns'>
                <div className='table-container'>
                    <MultiDropdown
                        options={[
                            { key: "INN", value: "ИНН" },
                            { key: "clientID", value: "№ клиента" },
                            { key: "requestID", value: "№ запроса" },
                        ]}
                    />
                </div>
                <aside className='sidebar-filter'>
                  <p>Фильтр</p>
                  <ul>
                    <li><button>5 дней без изменения</button></li>
                    <li><button>Заявки оформленные мной</button></li>
                  </ul>
                  <Button className={'clearButton'}>Очистить</Button>
                </aside>
                </div>
              </section>
        </main>
      </div>
    )
};

export default MainPage;