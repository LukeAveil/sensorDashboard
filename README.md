# Sensor Dashboard

A React app that pulls data from an api and renders the data to a dashboard.

### Getting Started

Make sure you have node.js installed, if not get it [here](https://nodejs.org/en/download/).

Once you have node installed, clone this repo to your machine and run ```npm install``` in your terminal to install the dependancies. From the terminal then run webpack by typing ```webpack```, open a new terminal tab or window and run ```node server.js``` to start the server.

Once the server is running you can open your browser and navigate to ```localhost:3000``` to use the app.

### My Approach

With any React app it is really important to understand the structure of your components and the parent/child relationship they have. I started with a rough sketch of how I imagined the final app should look then went about breaking it down into components. Understanding the parent/child relationship between components is important as each child inherits data from its parent component, having this figured out at the start really helped me get the basic architecture of my app finished fairly quickly.

You must only set state in one place in a React app, in my case I am setting the state in ```Main.jsx``` and this state comes in the form of the data pulled from the api. This state is then passed down as props to the child ```SensorList.jsx``` component, a ```renderSensor``` function then takes these props and uses them to create each ```Sensor.jsx``` component. The props are then passed down from each sensor to three child components that render the relevant data.

### Challenges

The challenge from the outset was that my knowledge of Node and React was limited to a few tutorials. This has been the first time I have built an application with this technology from the ground up on my own, so the learning curve was fairly steep in parts.

I shall start with the challenges I wasn't able to overcome...

As you can see ```Graph.jsx``` is just rendering a graph of some hard coded data. I am rendering the graph with sparklines, this is simply done by passing it in an array of data. This is just an example array of data because I struggled to pass down the array of specific data for each sensor from ```SensorList.jsx```. I found it challenging to tie up all the data for each sensor and pass it in as an array, although I have managed to pass in the required data for each sensor to ```LastReported.jsx``` and ```LatestValue.jsx```, but obviously I am unable to construct a graph with one piece of data.

I spent quite a while trying to find a solution, I was given a suggestion to try creating a map of the data in the initial callback from the api. Passing the sensor data down as a map would make it easier to work with in ```SensorList```, but I was not able to get this working as you can see in the ```createDataMap``` branch of this repo.

On reflection I think this problem could potentially be avoided by correctly building the server. I have realised the suggestion was to make the server specify what sensor data was served up in the GET request by defining the sensorId in the request. This is something that I am going to look into once I have brushed up on my backend JS knowledge and node.

The other challenge I faced was understanding the jsx syntax. Combining JS and HTML is quite the change and it took some getting used to. I certainly have a better understanding of it now, but initially things were not working purely because my jsx syntax was incorrect.

### What I learnt

As I have already mentioned, this was my first experience with React without the hand holding of a structured tutorial. I found having to think about how state and props work to be a much more valuable experience than just excepting what a tutorial tells you and following along. I also learnt about webpack and the build tools that are needed to get a React app up and running, the setup is still quite daunting but I have a much better understanding of how things work now. Learning to break down an app into components is also something I really got to grips with, again in a tutorial I somethings find myself taking these steps for granted.

### Going forward

I would like to continue working on this app, particularly to get the issues fixed with passing the arrays of data to the sensor components and its children. I would also like to restructure the dashboard to be more like a table rather than three identical widgets.

Sparklines works well for to easily create a chart, but I would like to use something like c3/d3 or chart.js to build the graph component and render the data. I have worked on a previous exercise and used c3 to render data, I think combining this framework with React would be fantastic for creating scalable and reusable components.

My knowledge of node needs some work and I think this is going to be priority number one having finished this exercise. I am also going to look at Redux as a means of managing application state. Currently ```Main.jsx``` is handling the api request, a React component should really only be handling the 'V' in MVC. Again my Redux knowledge is limited to a couple of tutorials at this stage, but I want to try and incorporate it into this project.
