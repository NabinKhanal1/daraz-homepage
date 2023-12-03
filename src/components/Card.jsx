import React from 'react'

const Card = () => {
    return (
        <>
        
            <div className="container">
                <h4>Just For You</h4>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="/images/gb.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Gloves</h5>
                                <p >Rs.1299 <br /><del>Rs.1499</del>-13%</p>
                                

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/gl.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Eye Glass</h5>
                                <p>Rs.997 <br /><del>Rs.2400</del>-58%</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/ja.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jacket</h5>
                                <p>Rs.2300 <br /><del>Rs.3000</del>-17%</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/ju.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jug</h5>
                                <p>Rs.500 <br/><del>Rs.800</del>-13%</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/lp.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Laptop</h5>
                                <p>Rs.75000 <br /><del>Rs.9000</del>-15%</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/mb.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mobile</h5>
                                <p>Rs.25000 <br /><del>Rs.20000</del>-5%</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/sh.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Shoes</h5>
                                <p>Rs.1700 <br /><del>Rs.2200</del>-23%</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/ts.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tshirt</h5>
                                <p>Rs.700 <br /><del>Rs.1000</del>-13%</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Card