export default function Home() {
  return (
    <main>
      <section>
        <div className="container-img-100">
          <img
            src="./assets/images/familia-joven-feliz-uniendo-juntos-casa.webp"
            alt="familia-joven-feliz-uniendo-juntos-casa"
          />
        </div>
      </section>
      <section>
        <div className="container-index-h2">
          <div className="container-index">
            <div className="container-index__text">
              <p>Bienvenido a Somriures Dental</p>
              <h1 className="h-ms">Tu centro de salud bucodental</h1>
              <p>
                En Somriures dental, todo nuestro equipo de profesionales
                quieren transmitir su visión de lo mejor de la odontología
                moderna, desde un punto de vista teórico-práctico,
                instalaciones, así como en el empleo de materiales.
                <br />
                <br />
                Queremos liderar la incorporación de las últimas técnicas en el
                mundo dental para ser más eficientes tanto en los procedimientos
                más sencillos como en los más complejos, así, conseguimos que tu
                experiencia dental sea lo más indolora posible, a la vez que
                satisfactoria y con el mínimo de complicaciones.
                <br />
                <br />
                ¡¡Ven a conocernos porque no te vamos a decepcionar!!
              </p>
            </div>
            <div className="container-contact">
              <div className="contact-form__title">
                <p>Reserva tu cita!</p>
              </div>
              <div className="w-50 align-items-center wc contact-form">
                <form className="" method="post">
                  <div className="field row justify-content-center">
                    <div className="col-md-12 col-lg-6 fp">
                      <input
                        className="w-100"
                        required
                        name="name"
                        type="name"
                        placeholder="Nombre"
                        autocomplete="name"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 fp">
                      <input
                        className="w-100"
                        required
                        name="phone"
                        type="tel"
                        placeholder="Teléfono"
                        autocomplete="tel"
                      />
                    </div>
                    <div className="col-12 fp">
                      <input
                        className="w-100"
                        required
                        name="email"
                        type="email"
                        placeholder="Correo electrónico"
                        autocomplete="email"
                      />
                    </div>
                    <div className="col-12 fp">
                      <textarea
                        className="w-100"
                        id="message"
                        placeholder="Escribe aquí tu consulta"
                        name="mensaje"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-100 mt-2 d-flex">
                    <input required type="checkbox" />
                    <a className="pl-1" href="./privacidad.html">
                      Acepto las condiciones de privacidad.
                    </a>
                  </div>
                  <div className="send">
                    <button id="button" type="submit" value="Enviar">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="index-h2">
            <h2 className="h-ms">Nuestras Especialidades</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container-treatments">
          <div className="container-treatments__cards">
            <div className="container-treatments__cards__card">
              <div className="container-treatments__cards__card__img">
                <a href="./pages/ortodoncia.html">
                  <img
                    src="./assets/svg/brackets-blanco.svg"
                    alt="diente-con-brackets"
                  />
                </a>
              </div>
              <div className="container-treatments__cards__card__treatments">
                <a href="./pages/ortodoncia.html">Ortodoncia</a>
              </div>
              <div className="container-treatments__cards__card__info">
                <a href="./pages/ortodoncia.html">Más información</a>
              </div>
            </div>
            <div className="container-treatments__cards__card">
              <div className="container-treatments__cards__card__img">
                <a href="./pages/cirugia.html">
                  <img
                    src="./assets/svg/extraction_4650148.svg"
                    alt="bisturi-cirugia"
                  />
                </a>
              </div>
              <div className="container-treatments__cards__card__treatments">
                <a href="./pages/cirugia.html">Cirugía</a>
              </div>
              <div className="container-treatments__cards__card__info">
                <a href="./pages/cirugia.html">Más información</a>
              </div>
            </div>
            <div className="container-treatments__cards__card">
              <div className="container-treatments__cards__card__img">
                <a href="./pages/implantes.html">
                  <img
                    src="./assets/svg/implant_1386815.svg"
                    alt="implante-dental"
                  />
                </a>
              </div>
              <div className="container-treatments__cards__card__treatments">
                <a href="./pages/implantes.html">Implantología</a>
              </div>
              <div className="container-treatments__cards__card__info">
                <a href="./pages/implantes.html">Más información</a>
              </div>
            </div>
            <div className="container-treatments__cards__card">
              <div className="container-treatments__cards__card__img">
                <a href="./pages/endodoncia.html">
                  <img
                    src="./assets/svg/root-canal_5997489.svg"
                    alt="diente-con-brackets"
                  />
                </a>
              </div>
              <div className="container-treatments__cards__card__treatments">
                <a href="./pages/endodoncia.html">Endodoncia</a>
              </div>
              <div className="container-treatments__cards__card__info">
                <a href="./pages/endodoncia.html">Más información</a>
              </div>
            </div>
            <div className="container-treatments__cards__card">
              <div className="container-treatments__cards__card__img">
                <a href="./pages/odontopediatria.html">
                  <img
                    src="./assets/svg/dentist_10503563.svg"
                    alt="diente-con-brackets"
                  />
                </a>
              </div>
              <div className="container-treatments__cards__card__treatments">
                <a href="./pages/odontopediatria.html">Odonto-pediatría</a>
              </div>
              <div className="container-treatments__cards__card__info">
                <a href="./pages/odontopediatria.html">Más información</a>
              </div>
            </div>
            <div className="container-treatments__cards__card">
              <div className="container-treatments__cards__card__img">
                <a href="./pages/protesis.html">
                  <img
                    src="./assets/svg/disinfection_7336148.svg"
                    alt="diente-con-brackets"
                  />
                </a>
              </div>
              <div className="container-treatments__cards__card__treatments">
                <a href="./pages/protesis.html">Prótesis dental</a>
              </div>
              <div className="container-treatments__cards__card__info">
                <a href="./pages/protesis.html">Más información</a>
              </div>
            </div>
          </div>
          <a
            href="./pages/tratamientos.html"
            className="container-treatments__a"
          >
            Más especialidades
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </section>
      <section className="philosophy">
        <div className="container-philosophy">
          <div className="container-philosophy__1">
            <p>¿Cual es nuestra filosofia?</p>
            <ul>
              <li>Familiaridad y confianza.</li>
              <li>Trabajo bien hecho.</li>
              <li>Dar lo mejor de nosotros.</li>
              <li>Excelencia e innovación.</li>
            </ul>
            <img
              src="./assets/images/dos-dentistas-sonrientes-mirando-camara-pie-lugar-trabajo-clinica-dental-moderna.webp"
              alt="dos-dentistas-sonrientes-mirando-camara-pie-lugar-trabajo-clinica-dental-moderna"
            />
          </div>
          <div className="container-philosophy__2">
            <div className="container-philosophy__2__text">
              <h3>¿Por qué escogernos?</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Todas las especialidades,
                  <br />
                  un único espacio
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Tratamientos multidisciplinares
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Excelencia en los materiales
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Profesionales altamente cualificados
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Estudios personalizados
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Somos los propietarios del centro,
                  <br />
                  no somos franquicia
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Filosofia SLOW
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-mutuas">
          <h2>Nuestras Mútuas</h2>
          <div className="container-mutuas__logos">
            <div>
              <img
                src="./assets/images/axa_logo_solid_rgb.svg"
                alt="axa-logo"
              />
            </div>
            <div>
              <img src="./assets/images/cigna.svg" alt="logo-cigna" />
            </div>
            <div>
              <img src="./assets/images/generali.svg" alt="logo-generali" />
            </div>
          </div>
          <a href="./pages/mutuas.html" className="container-mutuas__a">
            Ver todas las mutuas
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </section>
      <section className="information">
        <div className="container-information">
          <div className="container-information__text">
            <h2>Estamos aquí para atenderte</h2>
            <p className="container-information__text-p">
              Información de contacto
            </p>
          </div>
          <div className="container-information__logos">
            <a href="https://goo.gl/maps/PP6t3DvSMrKejNzf9">
              <div className="container-information__logos__logo">
                <div className="container-information__logos__logo__a">
                  <img
                    src="./assets/svg/location-pin_5837790.svg"
                    alt="logo-ubicacion"
                  />
                </div>
                <div className="container-information__logos__logo__text">
                  <p>C/ Antoni Gaudí 27</p>
                  <p>08850 Gavà (BCN)</p>
                </div>
              </div>
            </a>
            <a href="tel:936384298">
              <div className="container-information__logos__logo">
                <div className="container-information__logos__logo__a">
                  <img
                    src="./assets/svg/telephone-call_159052.svg"
                    alt="logo-telefono"
                  />
                </div>
                <div className="container-information__logos__logo__text">
                  <p>936 384 298</p>
                  <p>627 149 677</p>
                </div>
              </div>
            </a>
            <a href="mailto:hola@somriuresdental.com">
              <div className="container-information__logos__logo">
                <div className="container-information__logos__logo__a">
                  <img
                    src="./assets/svg/messages-silhouette_20173.svg"
                    alt="diente-con-brackets"
                  />
                </div>
                <div className="container-information__logos__logo__text">
                  <p>hola@somriuresdental.com</p>
                  <p>prueba</p>
                </div>
              </div>
            </a>
            <a href="./pages/contacto.html">
              <div className="container-information__logos__logo">
                <div className="container-information__logos__logo__a">
                  <img
                    src="./assets/svg/time_4121770.svg"
                    alt="diente-con-brackets"
                  />
                </div>
                <div className="container-information__logos__logo__text">
                  <p>10:00 a 14:00</p>
                  <p>16:00 a 20:00</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex w-100 rounded shadow">
          <iframe
            className="w-100 d-flex"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.06462512828!2d2.0010275156687576!3d41.30745770890886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49cdeb60bb881%3A0x21e8c57d5ac14c34!2sSomriuresDental!5e0!3m2!1ses!2ses!4v1611888529209!5m2!1ses!2ses"
            width="800"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
