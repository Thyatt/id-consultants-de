source 'https://rubygems.org'
ruby '2.1.5'

gem 'rails', '~>4.0'            # Ruby on Rails framework
gem 'pg'                        # PostgreSQL
gem 'lograge'                   # Makes our prod logs much easier to grok
gem 'puma'                      # A nice HTTP Server
gem 'foreman'                   # Use unicorn locally
gem 'paperclip'                 # For attaching files 
gem 'protected_attributes'      # For protecting model from mass assignment attacks with attr_accessible

# OPTIONAL GEMS - Pick your features

# Dev Environment
# gem 'vagrant'               # VM generation / management
# gem "ffi", "~> 1.3"         # Required for vagrant - wacky dependency thing

# File handling:
# gem 'aws-sdk'             # For storing uploaded files on S3

# User handling:
# gem 'devise'              # For creating and managing users

# Social Services: 
# gem 'omniauth-facebook'   # For gaining Facebook authentication
# gem 'koala'               # For interacting with the Facebook Graph
# gem 'twitter'             # For interfacing with Twitter
# gem 'ie_iframe_cookies'   # For IE iFrame cookie compatibility, mainly with FB apps

# Email:
# gem 'mail'                # Action Mailer for sending emails
# gem 'roadie'              # Easy HTML email conversion

# Assets:
gem 'jquery-rails'
gem 'sass-rails'
gem 'uglifier'

group :production do
  gem 'rails_12factor'
  gem 'rails_stdout_logging'
  gem 'dalli'     
  gem 'memcachier'
  gem 'rails_serve_static_assets'
end

group :development do
  gem 'progress_bar'      # For better terminal outputs
  gem 'better_errors'     # For displaying better error pages
  gem 'binding_of_caller' # For providing an active console on error pages
end
