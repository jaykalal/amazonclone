import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-dark text-white py-5">

            <div className="container p-4">

                <section className="mb-4">
                    <p>
                        Our mission is to be Earth’s most customer-centric company. Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Fire tablets, Fire TV, Amazon Echo, and Alexa are some of the products and services pioneered by Amazon.
                    </p>
                </section>



                <section className="mt-5">

                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5>Get to Know Us</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">About Us</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Contact Us</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5>Connect with US</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Facebook</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Twitter</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Instagram</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5>Make Money with Us</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Sell on Amazon</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Amazon Global Selling</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5>Let Us Help Us</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">COVID-19 and Amazon</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Your Account</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>

            </div>

        </footer>
    );
}

export default Footer;