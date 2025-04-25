# My Website

A simple, responsive website built with Flask and Bootstrap.

## Overview

This is a simple static website template built with:

- Python/Flask for server-side rendering
- Bootstrap 5 for responsive layouts and components
- Custom CSS for styling enhancements
- Vanilla JavaScript for interactivity

## Features

- Responsive design that works on desktop, tablet, and mobile
- Navigation menu with active page highlighting
- Four key pages: Home, About, Services, and Contact
- Contact form with client-side validation
- Card layouts for presenting content
- Interactive elements with hover effects
- Footer with copyright information and social media links

## Getting Started

### Prerequisites

- Python 3.11 or higher

### Installation

1. Clone this repository or download the files

2. Install dependencies:

   ```bash
   pip install -e .
   ```

### Running the Website

1. From the project root directory, run:

   ```bash
   python main.py
   ```

2. Open your browser and navigate to:

   ```
   http://127.0.0.1:5000
   ```

## Customizing the Website

### Basic Customization

1. **Site Title & Branding**: Edit the title and navbar-brand in `templates/base.html`
2. **Content**: Modify content in each page template (`index.html`, `about.html`, `services.html`, `contact.html`)
3. **Styling**: Adjust colors, spacing, and other visual elements in `static/css/style.css`
4. **Contact Information**: Update the contact information in `templates/contact.html`
5. **Images**: Add your own images to the `static/img` directory and reference them in your HTML

### Advanced Customization

1. **Adding New Pages**:
   - Create a new HTML template in the `templates` directory
   - Add a new route in `main.py`
   - Add a link to the new page in the navigation menu in `base.html`

2. **Extending Functionality**:
   - Add form handling in Flask for the contact form
   - Integrate with a database for dynamic content
   - Add user authentication if needed

## Deployment

For production deployment, consider:

- Using a production WSGI server like Gunicorn
- Setting `debug=False` in `main.py`
- Adding proper error handling
- Setting up your domain name and SSL certificate

## License

This project is open source and available under the [MIT License](LICENSE).
