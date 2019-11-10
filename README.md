<h1 align="center">Welcome to simreq 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/simreq" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/simreq.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> simulate routes of an express app with in the app .sometimes we need to execute more than one express endpoints to solve certain problems like sse or push notification  .this module lets you simulate any of the routes from anywhere in your express app 

## Install

```sh
npm install simreq
```

## Usage

```sh
var app = express();
var simreq = require(simreq)
simreq.init(app);
```

Import again on any of the router you have

```sh
var simreq = require(simreq);


Router.get("/foo",(req,res,next)=>{

    res.send("foo");

    simreq.simulator(
      req,
      next,
      {
        url: "/bar",
        query: {
          hi: "hello"
        }
      },
      data => {

        //SEND SSE OR DO ANYTHING 
        console.log("Data From /bar", data);
        //Data From /bar {test:true}
      }
    );

})


Router.get("/bar",(req,res,next)=>{

  res.json({
    test:true
  })
})

```




## PARMS  

- simreq.simulator(req,next,options,callback):
  **req**: http request from the router
  **next**: next() from the router
  **options**:{}  
  {
    url:"route",
    query:{},
    params:{},
    body:{}   


  }
  **callback**:function (data)
    
  

## Author

👤 **Arjun Biju**

- Website: https://github.com/Arrow66
- Github: [@Arrow66](https://github.com/Arrow66)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
