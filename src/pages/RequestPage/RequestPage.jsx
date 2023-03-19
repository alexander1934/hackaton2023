import logo2 from "../../images/logo2.svg";
import Button from "../../components/Button/Button";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const RequestPage = () => {
    let name = useSelector(state => state.MainPage.userName)
    const {id} = useParams();
    return (
        <div>
            <header className="header">
                <div>
                    <Link className="logo-link" to={"/"}>
                        <img className="logo" src={logo2} alt="Логотип"/>
                    </Link>
                    <p className="nickname">
                        {name}
                        <a className="entry-link" href="#"></a>
                    </p>
                </div>
            </header>
            <main className="main">
                <section className="list-applications">
                    <h1 className="list-applications__title">Заявка №{id}</h1>
                    <ul className="request-buttons">
                        <li className="request-buttons__item">
                            <Link to={"/"}><Button id="request-button--1">Назад</Button></Link>
                        </li>
                        <li className="request-buttons__item">
                            <Link to={`/request/${id}/history`}><Button id="request-button--2">История
                                обработки</Button></Link>
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
                            <li className="info-item"><p className="request-key">Дата регистрации под заявки:</p> <p className="request-value">12.04.2017  13:54:26</p></li>
                            <li className="info-item"><p className="request-key">Рег. наряда на ТВП:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Оператор завершивший заявку:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Дата отклонения под заявки:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Тип проверки ТВП:</p> <p className="request-value">Авто</p></li>
                            <li className="info-item"><p className="request-key">Наличие ТВП</p> <p className="request-value">Нет</p></li>
                            <li className="info-item"><p className="request-key">Завершение проверки ТВП</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Длит. проверки ТВП</p> <p className="request-value">1:40:37</p></li>
                            <li className="info-item"><p className="request-key">Согласованная дата подкл.:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Инсталятор:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Агент-инсталлятор:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Комментарий ТВП ШПД:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Оператор заводивший заявку:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">ID Договор КУРС:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Примечание:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Контактный телефон:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Контактное лицо:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Стоимость ТП (ШПД):</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Стоимость ТП (IPTV):</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">ФИО сотрудника, создавшего договор:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Тарифный план IPTV:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Номер карты доступа:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Номер карты доступа IPTV:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Тарифный план:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">№ клиентский СУС:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Дата отправки на АПТВ:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Дата окончания АПТВ планируемая:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Дата окончания АПТВ фактическая:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Длительность этапа АПТВ:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Дата отправки на ДО:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Дата окончания ДО планируемая:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Дата окончания ДО фактическая:</p> <p className="request-value">###</p></li>
                            <li className="info-item"><p className="request-key">Длительность этапа ДО:</p> <p className="request-value">###</p></li>
                        </ul>

                    </section>
                </section>
            </main>
        </div>
    );
};

export default RequestPage;
