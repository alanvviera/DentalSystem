import './style.css'

function SignUp() {
    return (
        <div className="body bg-primary w-full">
            <div className="container">
                <form>
                    <div className="head">
                        <span>Sign up</span>
                        <p>Create a free account with your email.</p>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Sign up</button>
                </form>
                <div className="form-footer">
                    <p>Have an account? <a href="#">Log in</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;