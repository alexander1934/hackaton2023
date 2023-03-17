import logo from '../../images/logo.png'
import Button from '../../components/Button/Button'

const MainPage = () => {
    return (
      <div>
        <header className='header'>
          <a className='logo-link' href="#">
              <img className='logo' src={logo} alt="Логотип" />
          </a>
          <p className='nickname'>Профацкий Михаил Андреевич <a className='entry-link' href="#"></a></p>
        </header>
        <main className='main'>
              <section className='list-applications'>
                <h1 className='list-applications__title'>Список заявок</h1>
                <div className='list-applications__columns'>
                <div className='table-container'>
                  {/* Саня вставит ХУЙ */}
                  <form className='form-applications' action="" method='get'>
                    <div className='filter-inputs'>
                      <input type="text" />
                      <select name="" id=""></select>
                    </div>
                    <Button />
                  </form>
                  {/* ДО СЮДА */}
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