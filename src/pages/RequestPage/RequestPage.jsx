import logo2 from "../../images/logo2.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const RequestPage = () => {
  return (
    <div>
      <header className="header">
        <div>
          <Link className="logo-link" to={"/"}>
            <img className="logo" src={logo2} alt="Логотип" />
          </Link>
          <p className="nickname">
            Профацкий Михаил Андреевич <a className="entry-link" href="#"></a>
          </p>
        </div>
      </header>
      <main className="main">
        <section className="list-applications">
          <h1 className="list-applications__title">Заявка №18471129</h1>
          <ul className="request-buttons">
            <li className="request-buttons__item">
              <Button id="request-button--1">Назад</Button>
            </li>
            <li className="request-buttons__item">
              <Button id="request-button--2">История обработки</Button>
            </li>
          </ul>
          <section className="request-info">
            <ul className="info-list">
              <li className="info-item"><p className="request-key">№ Заявки:</p> <p className="request-value">18471129</p></li>
              <li className="info-item"><p className="request-key">Клиент:</p> <p className="request-value">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</p></li>
              <li className="info-item"><p className="request-key">ИНН:</p> <p className="request-value">615301408074</p></li>
              <li className="info-item"><p className="request-key">Статус:</p> <p className="request-value">Удалена (ошибка ввода)</p></li>
              <li className="info-item"><p className="request-key">Дата входа заявки в статус:</p> <p className="request-value">16.01.2023  16:06:16</p></li>
              <li className="info-item"><p className="request-key">Услуга:</p> <p className="request-value">ШПД</p></li>
              <li className="info-item"><p className="request-key">Доп.канал продаж</p> <p className="request-value">—</p></li>
              <li className="info-item"><p className="request-key">Дата регистрации:</p> <p className="request-value">12.04.2017  13:53:46</p></li>
              <li className="info-item"><p className="request-key">Дата регистрации под заявки: </p> <p className="request-value">12.04.2017  13:54:26</p></li>
            </ul>

          </section>
        </section>
      </main>
    </div>
  );
};

export default RequestPage;
