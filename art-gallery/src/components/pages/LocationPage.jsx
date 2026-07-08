import IconWithLabel from '../common/IconWithLabel.jsx';

const LocationPage = () => {
    return (
        <main className="main-content">
            <h1>Location</h1>

            <section>
                <h2>Gallery</h2>

                <IconWithLabel id="address" classes="fa-solid fa-location-dot">
                    <address>
                        <div>3230 Washington Avenue</div>
                        <div>Saint Louis, MO 63103</div>
                    </address>
                </IconWithLabel>

                <iframe
                    title="Map to Midtown Art Gallery"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.4868974267765!2d-90.22799731712087!3d38.63768348546273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a73036068f%3A0x239134931737e684!2s3230%20Washington%20Ave%2C%20St.%20Louis%2C%20MO%2063103!5e0!3m2!1sen!2sus!4v1760081246872!5m2!1sen!2sus"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <section>
                <h2>Contact</h2>

                <div id="contact-icons">
                    <IconWithLabel id="phone" classes="fa-solid fa-square-phone">
                        <a className="contact-link" href="tel:+13145551234">
                            314-555-1234
                        </a>
                    </IconWithLabel>
                    <IconWithLabel id="email" classes="fa-solid fa-square-envelope">
                        <a className="contact-link" href="mailto:info@magstl.com">
                            info@magstl.com
                        </a>
                    </IconWithLabel>
                    <IconWithLabel id="facebook" classes="fa-brands fa-square-facebook">
                        <a
                            className="contact-link"
                            href="https://facebook.com/midtownartgallery-stl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            midtownartgallery-stl
                        </a>
                    </IconWithLabel>
                    <IconWithLabel id="instagram" classes="fa-brands fa-square-instagram">
                        <a
                            className="contact-link"
                            href="https://instagram.com/magstl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            magstl
                        </a>
                    </IconWithLabel>
                    <IconWithLabel id="bluesky" classes="fa-brands fa-square-bluesky">
                        <a
                            className="contact-link"
                            href="https://bsky.app/profile/midtownartgallery"
                            target="_blank"
                            rel="noreferrer"
                        >
                            midtownartgallery
                        </a>
                    </IconWithLabel>
                    <IconWithLabel id="twitter-x" classes="fa-brands fa-square-x-twitter">
                        <a
                            className="contact-link"
                            href="https://x.com/magstl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            magstl
                        </a>
                    </IconWithLabel>
                </div>
            </section>
        </main>
    );
};

export default LocationPage;
