import logo from "../../images/logo.png";
import Button from "../../components/Button/Button";
import MultiDropdown from "../../components/MultiDropdown/MultiDropdown";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

const MainPage = () => {
  let [fiveDays, setFiveDays] = useState(false);
  let [myRequests, setMyRequests] = useState(false);

  let fiveDaysHandler = () => {
      setFiveDays(prev => !prev)
  }

  let myRequestsHandler = () => {
      setMyRequests(prev => !prev)
  }

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
          <h1 className="list-applications__title">Список заявок</h1>
          <div className="list-applications__columns">
            <div className="table-container">
              <div className="filter-components">
                <div className="filter-inputs">
                  <button className="search-button">
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
                  <Input id="filter-input" />
                  <MultiDropdown
                    options={[
                      { key: "INN", value: "ИНН" },
                      { key: "clientID", value: "№ клиента" },
                      { key: "requestID", value: "№ запроса" },
                    ]}
                  />
                </div>
                <Button id="download-button">Загрузить файл .xlsx</Button>
              </div>
              <div class="container table-container">
                <table class="event-data-table">
                  <tr class="column-names blue-row">
                    <td className="title-td"></td>
                    <td className="title-td">№ Заявки</td>
                    <td className="title-td">КЛИЕНТ</td>
                    <td className="title-td">ИНН</td>
                    <td className="title-td">СТАТУС</td>
                  </tr>
                  <tr>
                    <td className="circle-status--green"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr class="blue-row">
                    <td className="circle-status--green"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr>
                    <td className="circle-status--green"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr class="blue-row">
                    <td className="circle-status--green"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr>
                    <td className="circle-status--red"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr class="blue-row">
                    <td className="circle-status--green"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr>
                    <td className="circle-status--yellow"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr class="blue-row">
                    <td className="circle-status--green"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr>
                    <td className="circle-status--green"></td>
                    <td class="changeable-data">18471129</td>
                    <td class="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
                    <td class="changeable-data">615301408074</td>
                    <td class="changeable-data">Удалена (ошибка ввода)</td>
                  </tr>
                  <tr class="blue-row">
                    <td className="circle-status--green"></td>
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
                    <li><button className={`filter-button ${fiveDays ? "selected-value" : ""}`} onClick={()=> fiveDaysHandler()}>5 дней без изменения</button></li>
                    <li><button className={`filter-button ${myRequests ? "selected-value" : ""}`} onClick={()=> myRequestsHandler()}>Заявки оформленные мной</button></li>
                  </ul>
                  <Button id='clear-button' onClick={()=> {setMyRequests(false); setFiveDays(false)} }>Очистить</Button>
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
            <li className="pagination-item active-page--pag">
              <a href="#">1</a>
            </li>
            <li className="pagination-item">
              <a href="#">2</a>
            </li>
            <li className="pagination-item">
              <a href="#">3</a>
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
}

export default MainPage;
// import logo from '../../images/logo.png';
// import Button from '../../components/Button/Button';
// import MultiDropdown from "../../components/MultiDropdown/MultiDropdown";
// import {Link} from "react-router-dom";
// import {useState} from "react";

// const MainPage = () => {
//     let [fiveDays, setFiveDays] = useState(false);
//     let [myRequests, setMyRequests] = useState(false);

//     let fiveDaysHandler = () => {
//         setFiveDays(prev => !prev)
//     }

//     let myRequestsHandler = () => {
//         setMyRequests(prev => !prev)
//     }

//     return (
//       <div>
//         <header className='header'>
//           <div>
//           <Link className='logo-link' to={'/'}>
//               <img className='logo' src={logo} alt="Логотип" />
//           </Link>
//           <p className='nickname'>Профацкий Михаил Андреевич <Link className='entry-link' to={'/'}></Link></p>
//           </div>
//         </header>
//         <main className='main'>
//               <section className='list-applications'>
//                 <h1 className='list-applications__title'>Список заявок</h1>
//                 <div className='list-applications__columns'>
//                 <div className='table-container'>
//                   <div className='filter-inputs'>
//                   <MultiDropdown
//                         options={[
//                             { key: "INN", value: "ИНН" },
//                             { key: "clientID", value: "№ клиента" },
//                             { key: "requestID", value: "№ запроса" },
//                         ]}
//                     />
//                     <Button id='download-button'>Загрузить файл .xlsx</Button>
//                   </div>
//                   <div className="container table-container">
//                     <table className="event-data-table">
//                         <tr className="column-names blue-row">
//                             <td className='title-td'></td>
//                             <td className='title-td'>№ Заявки</td>
//                             <td className='title-td'>КЛИЕНТ</td>
//                             <td className='title-td'>ИНН</td>
//                             <td className='title-td'>СТАТУС</td>
//                         </tr>
//                         <tr>
//                             <td className='circle-status--green'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>


//                         </tr>
//                         <tr className="blue-row">
//                             <td className='circle-status--green'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                         <tr>
//                             <td className='circle-status--green'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                         <tr className="blue-row">
//                             <td className='circle-status--green'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                         <tr>
//                             <td className='circle-status--red'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                         <tr className="blue-row">
//                             <td className='circle-status--green'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                         <tr>
//                             <td className='circle-status--yellow'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                         <tr className="blue-row">
//                             <td className='circle-status--green'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                         <tr>
//                             <td className='circle-status--green'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                         <tr className="blue-row">
//                             <td className='circle-status--green'></td>
//                             <td className="changeable-data">18471129</td>
//                             <td className="changeable-data">ЛИТВИНОВА НИНА ТИМОФЕЕВНА</td>
//                             <td className="changeable-data">615301408074</td>
//                             <td className="changeable-data">Удалена (ошибка ввода)</td>

//                         </tr>
//                     </table>
//                 </div>
//                 </div>
//                 <aside className='sidebar-filter'>
//                   <p>Фильтр</p>
//                   <ul>
//                     <li><button className={`filter-button ${fiveDays ? "selected-value" : ""}`} onClick={()=> fiveDaysHandler()}>5 дней без изменения</button></li>
//                     <li><button className={`filter-button ${myRequests ? "selected-value" : ""}`} onClick={()=> myRequestsHandler()}>Заявки оформленные мной</button></li>
//                   </ul>
//                   <Button id='clear-button' onClick={()=> {setMyRequests(false); setFiveDays(false)} }>Очистить</Button>
//                 </aside>
//                 </div>
//               </section>
//         </main>
//       </div>
//     )
// };

// export default MainPage;
