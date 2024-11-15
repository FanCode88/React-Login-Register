import './happyCustomers.scss';

const HappyCustomers = () => {
    return (
        <div className="happyCustomers">
            <div className="container">
                <div className="boxMain">
                    <h1>OUR HAPPY CUSTOMER</h1>
                    <div className="line"></div>
                    <div className="circle">
                        <img src="/img/man.jpg" alt="Tim Roberts" />
                    </div>
                    <h2>Tim Roberts</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Minima aliquam earum quos ut, sit nemo recusandae?
                    </p>
                    <div className="foot">@Tim Roberts</div>
                </div>
            </div>
        </div>
    );
};

export default HappyCustomers;
