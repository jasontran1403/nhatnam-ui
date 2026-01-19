import { useState } from 'react';
import '../../assets/AuthModal.css';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Login form state
  const [loginData, setLoginData] = useState({
    emailOrPhone: '',
    password: ''
  });

  // Register form state
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (result.code === 902) {
        // Success
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        alert(result.message);
        onClose();
        window.location.reload();
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: registerData.fullName,
          email: registerData.email,
          phoneNumber: registerData.phoneNumber,
          password: registerData.password,
        }),
      });

      const result = await response.json();

      if (result.code === 901) {
        // Success
        alert(result.message);
        setIsLogin(true); // Switch to login form
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`auth-modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className={`auth-modal ${isOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="auth-modal-content">
          {/* Tabs */}
          <div className="auth-tabs">
            <button
              className={`auth-tab ${isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(true);
                setError('');
              }}
            >
              Login
            </button>
            <button
              className={`auth-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(false);
                setError('');
              }}
            >
              Register
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="auth-error">
              <i className="bi bi-exclamation-circle"></i> {error}
            </div>
          )}

          {/* Login Form */}
          {isLogin ? (
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <div className="auth-form-group">
                <label>Email or Phone</label>
                <div className="input-with-icon">
                  <i className="bi bi-envelope"></i>
                  <input
                    type="text"
                    placeholder="Enter your email or phone"
                    value={loginData.emailOrPhone}
                    onChange={(e) =>
                      setLoginData({ ...loginData, emailOrPhone: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <i className="bi bi-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="auth-form-footer">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span> Logging in...
                  </>
                ) : (
                  <>
                    Login <i className="bi bi-arrow-right"></i>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Register Form */
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
              <div className="auth-form-group">
                <label>Full Name</label>
                <div className="input-with-icon">
                  <i className="bi bi-person"></i>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={registerData.fullName}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, fullName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>Email</label>
                <div className="input-with-icon">
                  <i className="bi bi-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>Phone Number</label>
                <div className="input-with-icon">
                  <i className="bi bi-telephone"></i>
                  <input
                    type="tel"
                    placeholder="+84938121001"
                    value={registerData.phoneNumber}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, phoneNumber: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <i className="bi bi-lock"></i>
                  <input
                    type="password"
                    placeholder="Create a password"
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, password: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label>Confirm Password</label>
                <div className="input-with-icon">
                  <i className="bi bi-lock-fill"></i>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={registerData.confirmPassword}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, confirmPassword: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span> Creating account...
                  </>
                ) : (
                  <>
                    Create Account <i className="bi bi-arrow-right"></i>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Login */}
          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <button className="social-btn google">
              <i className="bi bi-google"></i> Google
            </button>
            <button className="social-btn facebook">
              <i className="bi bi-facebook"></i> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}