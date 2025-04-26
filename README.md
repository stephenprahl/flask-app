# Flask Authentication System

A Flask application with a complete authentication system that includes user registration, login, profile management, and password reset functionality.

## Features

- User registration and authentication
- Login and logout functionality
- Password reset via email
- User profile management
- Protected routes with login required
- User dashboard
- SQLAlchemy database integration
- Environment variable configuration

## Technologies Used

- Flask
- Flask-SQLAlchemy (Database ORM)
- Flask-Login (User session management)
- Flask-WTF (Form handling and validation)
- Flask-Mail (Email sending)
- Werkzeug (Password hashing)
- Python-dotenv (Environment variable management)
- Bootstrap 5 (Frontend styling)
- SQLite (Development database)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd flask-app
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install the required dependencies:

```bash
pip install -r requirements.txt
```

4. Set up environment variables by creating a `.env` file in the root directory with the following content:

```
SECRET_KEY=your_super_secret_key_here
DATABASE_URI=sqlite:///site.db
MAIL_SERVER=smtp.example.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USERNAME=your_email@example.com
MAIL_PASSWORD=your_email_password
```

5. Run the application:

```bash
python main.py
```

6. Open your browser and navigate to `http://127.0.0.1:5000/`

## Project Structure

```
flask-app/
├── config.py             # Configuration settings
├── forms.py              # Form definitions
├── main.py               # Application routes and main file
├── models.py             # Database models
├── requirements.txt      # Dependencies
├── .env                  # Environment variables (create this file)
├── static/               # Static files (CSS, JS, images)
└── templates/            # HTML templates
    ├── about.html
    ├── base.html         # Base template
    ├── contact.html
    ├── dashboard.html    # User dashboard
    ├── index.html        # Homepage
    ├── login.html        # Login page
    ├── profile.html      # User profile
    ├── register.html     # Registration page
    ├── reset_request.html # Password reset request
    ├── reset_token.html  # Password reset with token
    └── services.html
```

## Usage

1. Register a new account using the registration form
2. Login with your credentials
3. Visit your dashboard and profile pages
4. Update your profile information
5. Use the password reset functionality if needed

## License

MIT License
