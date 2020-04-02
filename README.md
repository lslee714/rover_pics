<h1>Mars Rover Pics</hi>

<h2>A small frontend written in React that interfaces with NASA's rover picture API, hosted on Google Cloud Run</h2>

<h4>Visit <a href="https://mars-rover-pics-wdsfg4orva-uc.a.run.app">HERE</a> to view the app hosted in GCP</h4>

<p>Small node server serving a react app w/ redux-observable under the hood. Inspiration was to use NASA's API somewhere for fun, to learn React (with redux) from scratch (i.e. not use create-react-app). Seems to work. A couple things that aren't appropriate in a production setting, but as a pet project, I'll worry about those later:) </p>

<h4>To Run Locally:</h4>

```
docker build -t whatever-tag-name
docker run -p 8081:8081 whatever-tag-name
```
