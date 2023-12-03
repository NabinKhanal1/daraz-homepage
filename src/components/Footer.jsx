import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-info-subtle">
        <footer className="py-5">
          <div className="row ">
            <div className="col-6 col-md-2 mb-1">
              <h5 className='text-warning'>Customer care</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help Center</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">How to Buy</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Returns and Refunds</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>

              </ul>
            </div>
            <div className="col-6 col-md-2 mb-1">
              <h5 className='text-warning'>Earn With Daraz</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Daraz University</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sell on Daraz</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Code of Conduct</a></li>


              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className='text-warning'>Daraz</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Daraz</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Daraz Blog</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms and Conditions</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Digitial Payments</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Daraz Customor University</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Daraz Affiliate Program</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Review and Win</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Meet the Winners</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className='text-warning'>Daraz International</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Nepal</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Bangladesh</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Srilanka</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Mayanmar</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pakistan</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className='text-warning'>Payment Method</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Cash on Delivery</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">e-Sewa</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Connect IPS</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">IME Pay</a></li>

              </ul>
            </div>


          </div>

          <div className="d-flex   justify-content   bg-primary-subtle">
            <p>&copy; 2023 Company, Inc. All rights reserved.</p>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 className='text-success'> Thank you visit our webside agian.</h5>
                <p>we are always there for your service.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">

                  <button className="btn btn-primary" type="button">HAPPY SHOPPING</button>
                </div>
              </form>
            </div>

          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer