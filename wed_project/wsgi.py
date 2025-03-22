"""
WSGI config for wed_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application

# Set the Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wed_project.settings')

# Get the WSGI application
application = get_wsgi_application()

# Expose the application for Vercel
app = application
