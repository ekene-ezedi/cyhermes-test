import MainContent from "../main-content/main-content";
const { default: Sidebar } = require("../Sidebar/sidebar");

const Home = ({ match }) => {
  return (
    <section className="h-100">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-md-4 h-100 bg-dark">
            <Sidebar match={match} />
          </div>

          <div className="col-md-8 h-100">
            <MainContent match={match} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
