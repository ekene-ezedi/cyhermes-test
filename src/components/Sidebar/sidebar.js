import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ match }) => {
  return (
    <section className="h-100 d-flex flex-column justify-content-around">
      <div>
        <div className="m-3">
          <h1 className="text-white text-center">Cyhermes</h1>
        </div>

        <NavLink
          className="tab nav-link"
          to={`${match.url}`}
          activeClassName="active-tab"
          exact
        >
          <div className="d-flex justify-content-between align-items-center">
            <b>Trial & Pricing</b>
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </NavLink>

        <NavLink
          className="tab nav-link"
          to={`${match.url}/payments`}
          activeClassName="active-tab"
          exact
        >
          <div className="d-flex justify-content-between align-items-center">
            <b>Payment Method</b>
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </NavLink>

        <NavLink
          className="tab nav-link"
          to={`${match.url}/getting-started`}
          activeClassName="active-tab"
          exact
        >
          <div className="d-flex justify-content-between align-items-center">
            Getting Started....
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </NavLink>
      </div>

      <div className="d-flex justify-content-end pr-3">
        <div id="quote" className="w-75 p-3 d-flex align-items-center">
          <span className="bg-dark p-3">
            <i className="fas fa-quote-left text-secondary"></i>
          </span>
          <p className="ml-3 text-secondary">
            Success is not final; Failure is not fatal; it is the courage to
            continue that counts
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
