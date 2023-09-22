import Link from "next/link";
import './style.css';

export default function Login() {
  return (
    <div>
      <section>
        <div className='top-wave'></div>
        <div className='bottom-wave'></div>
      </section>
      <div className="body">
        <div className="container">
          <form>
            <div className="head">
              <span>Log In</span>
              <p>With an existing account</p>
            </div>
            <div className="inputs">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <a href="#">
                Forgot your password?
              </a>
            </div>
            <button>Log In</button>
          </form>
          <div className="form-footer">
            <p>
              Don't have an account yet?
              <Link href="/signup">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
