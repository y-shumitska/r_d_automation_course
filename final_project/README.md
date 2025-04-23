## Project description

This project has UI and API tests for the website:

```sh
https://new.fophelp.pro/
```

## Used technologies

1. For the UI and API tests the Playwright Test framework is used.
2. The tests are run in Docker.
3. For reports the built-in Playwright Reporter is used. The reports can be seen in the browser.

## How to run the tests and check the report

From the project's folder run:

```sh
docker build -t final_project .
```

and then run

```sh
docker run --rm -p 8080:8080 final_project
```

To check out the report from the browser, visit:

```sh
localhost:8080
```

Sometimes there is the 500th error due to the /refresh endpoint, so try running tests several times.
