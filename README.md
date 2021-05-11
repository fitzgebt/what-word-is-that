# What Word Is That?!

What Word Is that?! is a Rails/JS SPA game similar to the classic game 'Hangman'. Users are presented a 

## Summary

  - [Installing](#installing)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)

## Installing


Clone repository to your machine.


Install Gem Bundle

    - Run bundle_install in your terminal to install the gems.
    - Enter 'rake db:seed' in your terminal to provide test data. ()

Starting the Program
    - This application will run in your browser via a Rails server, which can be activated by running 'rails s' in your console. Next, navigate to 'http://localhost:9393/' in your browser.
    - This app does not require the user to creat a user profile.
    - Any Previous games the user has played will be displaayed under 'Past Games' on the DOM. (There are some seeded games included, which can be commented out by the user befefore seeding the data.)
    - Press 'New Game' and a series of asterisks will appear. The user can input a letter to guess, and attempt to guess the word correctly in eight guesses or less.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## Authors

  - **Brendan Fitzgerald** 
    [fitzgebt](https://github.com/fitzgebt)


## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details
