import { useState, useEffect } from "react";
import "./Trial-Pricing.css";
import data from "../../data/modules.json";

const TrialPricing = () => {
  const [range, setRange] = useState(100);

  const handleRange = (e) => {
    let rangeInput = document.getElementById("range");
    setBubble(e, rangeInput);
  };

  function setBubble(e, rangeInput) {
    const rangeValue = e.target.value;
    const min = e.target.min;
    const max = e.target.max;
    setRange(rangeValue);

    let newVal = Number(((rangeValue - min) * 100) / (max - min));
    rangeInput.innerHTML = e.target.value;
    rangeInput.style.marginLeft = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }

  useEffect(() => {
    let rangeInput = document.getElementById("range");
    let newVal = Number(((range - 0) * 100) / (1000 - 0));
    rangeInput.style.marginLeft = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }, []);

  return (
    <section id="main">
      <div className="container-fluid">
        <div className="row mx-xs-3">
          <div className="col-md-7">
            <small className="text-secondary">
              <b>HEY, TERRY</b>
            </small>
            <h5 className="mb-0">
              Start your
              <span className="font-italic text-warning"> 30 days</span> Trial
            </h5>
            <small className="font-weight-lighter">
              Select your preferred package below
            </small>
          </div>
          <div className="col-md-5">
            <small className="text-primary">
              <b>NGN</b>
            </small>
            <h5 className="text-primary mb-0">
              <b>1,999,999</b>
            </h5>
            <span className="text-secondary">
              <b>Total</b> <small>( EXCLUDES VAT )</small>
            </span>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-md-6 d-flex align-items-end">
            <div id="pricing-plan" className="mb-2">
              <div id="preview" className="shadow-lg p-3 bg-white rounded">
                <h6 className="text-warning mb-0">Starts From</h6>
                <small className="text-secondary">
                  <b>NGN</b>
                </small>
                <h6 className="mb-0">
                  <b>5,999,999.99</b>
                </h6>
                <small className="text-secondary">per annum</small>

                <h6 className="mt-2">
                  <small>
                    <b>Premium</b>
                  </small>
                </h6>
                <h6 className="text-secondary mb-0">
                  <small>
                    <b>
                      100 Users <span className="text-warning">*</span> All
                      Modules
                    </b>
                  </small>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-xs-5">
            <div id="pricing-plan">
              <div id="selected" className="rounded py-2 px-4 mt-xs-5">
                <div
                  id="badge"
                  className="d-flex justify-content-center align-items-center"
                >
                  <span>
                    <i className="fas fa-check"></i>
                  </span>
                </div>
                <h6 className="text-primary mb-0">
                  <b>Basic</b>
                </h6>
                <small className="text-secondary">
                  <b>30 days trails</b> on our premium app features
                </small>

                <h6 className="text-secondary mb-0">
                  <small>
                    <b>INCLUDES</b>
                  </small>
                  <span className="text-primary"> - - - - - - - - - - - -</span>
                </h6>
                <div className="d-flex flex-column">
                  <span className="text-secondary">
                    <small>- 25 Users</small>
                  </span>
                  <span className="text-secondary">
                    <small>- All modules & features</small>
                  </span>
                  <span className="text-secondary">
                    <small>- Unlilmited Committees</small>
                  </span>
                  <span className="text-secondary">
                    <small>- Unlimited roles creation</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 mb-4">
          <h6 className="text-secondary mb-1">
            <small>
              <b>Add more users</b>
            </small>
          </h6>
          <small className="text-secondary">
            NGN<b>99,999</b> per user
          </small>

          <div>
            <div id="rangeMinMax">
              <div className="d-flex justify-content-between">
                <small>
                  <b>0</b>
                </small>
                <small>
                  <b>{">1000"}</b>
                </small>
              </div>
            </div>
            <h6 id="range" className="text-primary px-1 mb-0 bg-white d-inline">
              <b>{range}</b>
            </h6>

            <input
              type="range"
              className="custom-range p-0"
              min="0"
              max="1000"
              name="range"
              value={range}
              onChange={(e) => handleRange(e)}
            />
          </div>
        </div>

        <div id="modules" className="p-2">
          <small id="title" className="text-secondary">
            ALL MODULES
          </small>
          <div className="row">
            {data.map((data) => (
              <div className="col-md-4 p-1" key={data.id}>
                <span>
                  <i className={data.icon}></i>
                </span>
                <small className="ml-2 text-grey">{data.name}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="row justify-content-between p-1">
          <div>
            <button className="btn text-danger font-weight-bold" disabled>
              Go Back
            </button>
          </div>

          <div>
            <button className="btn btn-warning font-weight-bold">
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialPricing;
