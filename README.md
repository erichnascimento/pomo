# Pomo

A web application that implements the **Pomodoro technique®**. Developed to testing *webcomponents* over the [Polymer Project](https://www.polymer-project.org).

Chrome browser with ES6 support **is required**.

Online Demo [here](https://erichnascimento.github.io/pomo)

![](https://cldup.com/sT07AF3Ut2.jpeg)

## Install
Clone this repository and run:
```sh
$ bower install
```

## Options
For customize the parameters, use query string params: `?pm=13&sb=13&lb=12&lbi=2&cp=2`
where:

 * pm: Pomodoro duration in seconds. Default 25 minutes.
 * sb: Short break duration in seconds. Default 5 minutes.
 * lb: Long break duration in seconds. Default 15 minutes.
 * lbi: Long break interval. Define how many pomodoro must be finished before take a long break. Default 4 pomodoros.
 * cp: Initial finished pomodoros indicator value. Default 0.

## License
MIT
