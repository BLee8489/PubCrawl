import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import API from "../utils/API";

const Cards = ({ item }) => {
  console.log(item.id);

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }, []);

  function handleModalSubmit(event) {
    event.preventDefault();
    console.log({
      name,
      street,
      city,
      state,
      zip,
      country,
      phone,
      url,
      overall,
    });
    // API.saveBar({
    //   name: { name },
    //   street: { street },
    //   city: { city },
    //   state: { state },
    //   zip: { zip },
    //   country: { country },
    //   phone: { phone },
    //   url: { url },
    //   overall: { overall },
    // })
    API.getBars()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const {
    id,
    name,
    street,
    city,
    state,
    zip,
    country,
    phone,
    url,
    // reviewlink,
    overall,
  } = item;

  const urlLink = "https://" + url;

  return (
    <div>
      <div className="row" id="barList">
        <div className="col s12 m6 l6">
          <div className="card grey lighten-5">
            <div className="card-content grey-text">
              <h5 className="#bar-name">{name}</h5>

              <div className="card-action"></div>
              {/* <a className="btn-floating halfway waves-effect waves-light red">
                <i className="material-icons">favorite</i>
              </a> */}

              {/* <!-- Modal Trigger --> */}
              <button data-target={id} className="btn modal-trigger">
                details
              </button>

              {/* <!-- Modal Structure --> */}
              <div id={id} className="modal">
                <div className="modal-content">
                  <h5 className="#bar-name">{name}</h5>
                  <ul>
                    <li className="#street-name">{street}</li>
                    <li className="#city-state-zip">
                      {city}, {state}, {zip}
                    </li>
                    <li className="#city-state-zip">{country}</li>
                    <li className="phone">{phone}</li>
                    <li>
                      <a className="url" href={urlLink}>
                        {url}
                      </a>
                    </li>
                    <li className="overall">Rating: {overall}</li>
                    {/* <li>
                      <a className="reviewlink" href={reviewlink}>
                        {reviewlink}
                      </a>
                    </li> */}
                  </ul>

                  {/* <a className="btn-floating halfway waves-effect waves-light red" onClick={console.log("clicked")}>
                    <i id={id} className="material-icons">
                      favorite
                    </i>
                  </a> */}
                  <button data-target={id} onClick={handleModalSubmit}>
                    Click Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
