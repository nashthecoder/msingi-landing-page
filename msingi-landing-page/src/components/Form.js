import msingi from "../msingi.png";
const Form = () => {
    return (
        <section>
        <div className="container">
            <div className="row">
            <div className="col-lg-7 offset-lg-2 g-0 mx-auto">
                <div className="fill-form form-box">
                <div className="row g-0">
                    <div className="col-xl-6 col-lg-12 d-md-none d-sm-none d-xs-none d-lg-block form-box__img">
                    <img alt="" src={msingi} />
                </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 form-box__content">
                    <div id="box-title">
                        <p className="main-form-text">Fill up the form</p>
                        <p>Sign up once to learn more</p>
                    </div>
                    <form>
                        <div className="mt-3">
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                        placeholder="Your name.."
                            type="text"
                        />
                        </div>
                        <div className="mt-3">
                        <input
                            class="form-control"
                        id="email"
                            name="email"
                            placeholder="Your email.."
                            type="text"
                        />
                        </div>
                        <div className="d-grid mt-4">
                        <button class="btn btn-lg" type="submit" value="Send Now">
                            Send Now
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};
export default Form;