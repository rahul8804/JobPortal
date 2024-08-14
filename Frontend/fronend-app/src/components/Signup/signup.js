import './signup.css';
export default function SignUp() {
    return (
        <>
            <form className="signup-form">
                <h1 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}
                >
                    Sign Up
                </h1>
                <div>
                    <label htmlFor="fullName">Full Name</label><br />
                    <input className="input-field"
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="rahul"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        className="input-field"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="rahul@gmail.com"
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <br />
                    <input
                        className="input-field"
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="phoneNumber"
                    />
                </div >

                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        className="input-field"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                    />
                </div >

                <div className="form-radio">
                    <div>
                        <input
                            type="radio"
                            id="student"
                            name="student"
                            value="student"
                            checked
                        />
                        <label htmlFor="student">Student</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="recruiter"
                            name="recruiter"
                            value="recruiter"
                            checked
                        />
                        I<label htmlFor="recruiter">Recruiter</label>
                    </div>
                </div>

                <button className="submit-btn" type="submit">Submit</button>
                <div>
                    <span> Don't have an account? </span> <a>Signup</a>
                </div>

            </form >

        </>

    );

}

