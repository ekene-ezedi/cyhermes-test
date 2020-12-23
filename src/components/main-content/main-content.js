import { Switch, Route } from "react-router-dom";
import TrialPricing from "../T&P/Trial-Pricing";
import paymentimage from "../../images/undraw_online_payments_luau.png";
import gsimage from "../../images/undraw_Setup_wizard_re_nday.png";
const MainContent = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.path}/getting-started`}
        render={() => <img src={gsimage} alt="img" className="img-fluid" />}
      />

      <Route
        path={`${match.path}/payments`}
        render={() => (
          <img src={paymentimage} alt="img" className="img-fluid" />
        )}
      />

      <Route path={`${match.path}`} component={TrialPricing} />
    </Switch>
  );
};

export default MainContent;
