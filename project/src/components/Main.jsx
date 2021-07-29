import React from "react";

const MainComponent = () => {
  return (
    <>
      <header className="header">
        <div className="header-case">
          <div className="header-wrapper">
              <a className="header-logo" href="index.html">
                <picture>
                  <img src="./image/logo-liga.svg" alt="Логотип ЛигаБанк"/>
                </picture>
              </a>
          </div>
          <nav className="header-nav">
            <ul className="header__nav-list">
              <li className="header__nav-item"><a href="#">Услуги</a></li>
              <li className="header__nav-item"><a href="#">Рассчитать кредит</a></li>
              <li className="header__nav-item"><a href="#">Конвертер валют</a></li>
              <li className="header__nav-item"><a href="#">Контакты</a></li>
              <li className="header__nav-item"><a href="#">Задать вопрос</a></li>
            </ul>
          </nav>
            <div className="header__login">
                <a href="#" className="header__login-link">Войти в Интернет-банк</a>
            </div>
        </div>
      </header>
      <main className="page__main">
        <h1 className="visually-hidden">Лига Банк</h1>
          <section className="banner">
            <h2 className="visually-hidden">Баннер Лига Банк</h2>
            <div className="banner__description">
              <h2 className="banner__header">Лига Банк</h2>
              <p className="banner__text">Кредиты на любой случай</p>
              <a className="banner__button">Рассчитать кредит</a>
            </div>
              <div className="banner__image-card">
                <picture>
                    {/*<!-- image -->*/}
                </picture>
              </div>
              </section>
              <section className="converter">
                <h2 className="converter__header">Конвертер валют</h2>
                <form className="converter__form">
                  <h2 className="converter__header">Конвертер валют</h2>
                  <div className="converter__wrapper">
                    <label for="i-have" className="converter__name-input" title="i-have">У меня есть</label>
                    <input className="converter__value" type="text" id="i-have"/>
                    <select className="converter__list">
                      <option className="converter__item">RUB</option>
                      <option className="converter__item">USD</option>
                      <option className="converter__item">EUR</option>
                      <option className="converter__item">GBR</option>
                      <option className="converter__item">CNY</option>
                    </select>
                  </div>
                  <div className="converter__wrapper">
                    <label for="i-want-to-buy" className="converter__name-input" title="i-want-to-buy">Хочу
                        приобрести</label>
                      <input className="converter__value" type="text" id="i-want-to-buy"/>
                      <select className="converter__list">
                        <option className="converter__item">USD</option>
                        <option className="converter__item">RUB</option>
                        <option className="converter__item">EUR</option>
                        <option className="converter__item">GBR</option>
                        <option className="converter__item">CNY</option>
                      </select>
                  </div>
                  <div className="converter__submit-wrapper">
                      <input className="converter__date" type="date"/>
                      <button className="converter__button"/>
                  </div>
                  </form>
              </section>
              <section className="history">
                  <h2 className="visually-hidden">История</h2>
                  <div className="history__wrapper">
                        <h2 className="history__header">История конвертация</h2>
                        <div className="history__converter">
                            <div className="history__converter-wrapper">
                                <p className="history__converter-date">25.11.2020</p>
                                <div className="history__converter-wrapper">
                                    <span className="history__converter-price-before">1000 RUB</span>
                                    <span className="history__converter-price-after">13,1234 USD</span>
                              </div>
                          </div>
                      </div>
                      <button className="history__button-delete">Очистить историю</button>
                  </div>
              </section>
              <footer className="page-footer">
                  <section className="footer-description">
                      <h2 className="visually-hidden">Контакты Банка</h2>
                      <div className="footer-description__wrapper">
                          <div className="adress">
                              {/*<!-- SVG -->*/}
                              <p className="adress__text">150015, г. Москва, ул. Московская, д. 32
                                  Генеральная лицензия Банка России №1050
                                  Ⓒ Лига Банк, 2019</p>
                          </div>
                          <div className="services">
                              <ul className="services__list">
                                  <li className="services__item">Услуги</li>
                                  <li className="services__item">Рассчитать кредит</li>
                                  <li className="services__item">Контакты</li>
                                  <li className="services__item">Задать вопрос</li>
                              </ul>
                          </div>
                          <div className="mobile">
                              <span className="mobile__code">*0904</span>
                              <p className="mobile-description">Бесплатно для абонентов МТС, Билайн, Мегафон,
                                  Теле2</p>
                          </div>
                          <div className="contacts">
                              <a className="contacts__mobile" href="tel:88001112233">8 800 111 22 33</a>
                              <p className="contacts__description"></p>
                          </div>
                          <div className="social">
                          </div>
                      </div>
                  </section>
              </footer>
          </main>
    </>
  );
}

  export default MainComponent;