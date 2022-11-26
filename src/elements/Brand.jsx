import React, { Component } from "react";

class Brand extends Component {
  render() {
    const { branstyle } = this.props;
    return (
      <React.Fragment>
        <ul className={`brand-list ${branstyle}`}>
          <li>
            <img src="/assets/images/brand/76-logo3.png" alt="Logo Images" />
            
          </li>
          <li>
            <img
              src="/assets/images/brand/boost-mobile_logo.webp"
              alt="Logo Images"
            />
          </li>
          <li>
            <img src="/assets/images/brand/CALottery.webp" alt="Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/redbull.png" alt="Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/monster.png" alt="Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/meg-logo.webp" alt="Logo Images" />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default Brand;
