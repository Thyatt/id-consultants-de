# RTO+P Rails Boilerplate
This project is a fast-start boilerplate for creating basic Ruby on Rails projects. It's designed to be highly compatible with the common development practices at [Red Tettemer O'Connell + Partners](http://rtop.com) in Philadelphia. 

## What's included
- A boilerplate Gemfile with our most commonly used gems.
- HTML5 Boilerplate (with normalize.css, modernizr, and log() js function for IE-friendly console.loggin'.) 
- SCSS-ified application.css
- A basic index action in a home controller.
- A good boilerplate .gitignore.
- AppEnv module for easier local dev/test config var access.
- App pre-configured to use the Unicorn HTTP server on Heroku with 3 workers per dyno.

## What's NOT included
- ActiveAdmin: AA's been left out to keep this Boilerplate somewhat anti-opinionated early in the build. AA can be installed easily following instructions [here](https://github.com/gregbell/active_admin#getting-started). 
- Devise: Had been part of ActiveAdmin's dependencies. Now, to use it, install the gem and follow the instructions [here](https://github.com/plataformatec/devise#getting-started).

## Getting Started
1. Rename your app. Run a full-project text search for "Boilerplate" and replace it with your app's namespace in every case except this README.
2. Create your database, run `rake db:setup`
3. Run your server: `rails s`
4. Proceed with building your app normally, without worrying about the more tedious and repetitive initial setup steps.

## Colophon
- HTML5 Boilerplate: <http://html5boilerplate.com>
- SASS: <http://sass-lang.com>
- Normalize.css: <http://necolas.github.com/normalize.css>
- Modernizr: <http://modernizr.com>
- Heroku: <http://heroku.com>
- Paperclip: <https://github.com/thoughtbot/paperclip>

## License
- This work is licensed under a [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/deed.en_US).
- "Rails" and "Ruby on Rails" are registered trademarks of David Heinemeier Hansson.
- Rails is released under the [MIT License](http://www.opensource.org/licenses/mit-license.php). Ruby is released under the [Ruby License](http://www.ruby-lang.org/en/about/license.txt).
