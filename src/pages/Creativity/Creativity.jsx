import './creativity.scss';

const Creativity = () => {
    return (
        <div className="creativity">
            <div className="intro">
                <h1>Creativity Unleashed</h1>
                <p>
                    At the core of everything we do lies creativity. It’s the
                    driving force that turns ideas into reality, making every
                    project unique and impactful.
                </p>
            </div>

            <div className="gallery">
                <h2>Our Creative Journey</h2>
                <div className="gallery-grid">
                    <img src="/img/image1.jpg" alt="Project 1" />
                    <img src="/img/image2.jpg" alt="Project 2" />
                    <img src="/img/image3.jpg" alt="Project 3" />
                </div>
            </div>

            <div className="process">
                <h2>Our Creative Process</h2>
                <p>Here’s how we bring ideas to life:</p>
                <ol>
                    <li>
                        <strong>Inspiration:</strong> Researching trends and
                        brainstorming unique ideas.
                    </li>
                    <li>
                        <strong>Scripting:</strong> Sketching concepts and
                        creating prototypes.
                    </li>
                    <li>
                        <strong>Execution:</strong> Perfecting the final design
                        with attention to detail.
                    </li>
                </ol>
            </div>

            <div className="cta">
                <h2>Let’s Create Together</h2>
                <p>
                    Whether you’re envisioning a bold new project or refining an
                    existing idea, we’re here to collaborate and make it happen.
                </p>
                <button className="cta-button">Get Started</button>
            </div>
        </div>
    );
};

export default Creativity;
