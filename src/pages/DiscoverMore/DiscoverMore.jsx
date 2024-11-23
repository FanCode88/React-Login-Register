import React from 'react';
import './discoverMore.scss';

const DiscoverMore = () => {
    return (
        <div className="discover-more">
            <header className="hero">
                <div className="hero-content">
                    <h1>Discover the Future</h1>
                    <p>
                        Step into a world where technology shapes possibilities.
                        Explore groundbreaking innovations driving the future.
                    </p>
                    <a href="#technologies" className="cta-button">
                        Explore Now
                    </a>
                </div>
            </header>

            <section id="technologies" className="technologies">
                <h2>Groundbreaking Technologies</h2>
                <div className="tech-grid">
                    <div className="card">
                        <img src="/img/d1.jpg" alt="Artificial Intelligence" />
                        <h3>Artificial Intelligence</h3>
                        <p>
                            Revolutionizing industries with smart solutions and
                            automation.
                        </p>
                    </div>
                    <div className="card">
                        <img src="/img/d2.jpg" alt="Virtual Reality" />
                        <h3>Virtual Reality</h3>
                        <p>
                            Immersive experiences transforming how we learn and
                            entertain ourselves.
                        </p>
                    </div>
                    <div className="card">
                        <img src="/img/d3.jpg" alt="Blockchain" />
                        <h3>Blockchain</h3>
                        <p>
                            Enhancing security and transparency across multiple
                            domains.
                        </p>
                    </div>
                </div>
            </section>

            {/* Future Predictions */}
            <section className="future">
                <h2>The Future Awaits</h2>
                <p>
                    Discover what's next: from the Metaverse to Quantum
                    Computing, and beyond.
                </p>
                <div className="future-cta">
                    <a href="#" className="cta-button">
                        Join the Journey
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Innovating the Future. Designed to inspire.</p>
            </footer>
        </div>
    );
};

export default DiscoverMore;
