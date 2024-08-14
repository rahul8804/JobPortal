import "./login.css";
export default function Login() {
    return (
        <>
            <form className="login-form">
                <h1
                    style={{ fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}
                >
                    Login
                </h1>
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
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        className="input-field"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                    />
                </div>
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
                <button className="submit-btn" type="submit">
                    Submit
                </button>
                <div>
                    <span> Don't have an account? </span> <a>Signup</a>
                </div>
            </form>
        </>
    );
}
