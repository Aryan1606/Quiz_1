const express = require('express')
const Route = require('./../models/map')
const Route2 = require('./../models/map2')
// const article = require('./../models/article')
const router = express.Router()


// router.get('/', (req,res)=>{
//     res.send('hello')
// })

router.get('/', (req,res)=>{
    // res.send('Filling details')
    res.render('route/_second', {route: new Route()})
})

router.get('/_first', (req,res)=>{
    // res.send('Filling details')
    res.render('route/_first', {route: new Route()})
})

router.get('/_second', async(req,res)=>{
    // res.send('Filling details')
    const routes= await Route.find()
    res.render('route/_second', {routes, routes})
})

router.get('/test1', async(req,res)=>{
  // res.send('Filling details')
   const route = await Route.findById(req.params.id)
  // res.render(req.params.id)
   res.render('route/test1',{route: route})
})

router.get('/test2', async(req,res)=>{
  // // res.send('Filling details')
  //  const route = await Route2.findById(req.params.id)
  // // res.render(req.params.id)
  // // console.log(route.id)
   res.render('route/test2')
})

router.get('/:id', async(req,res)=>{
    const route = await Route.findById(req.params.id)
    if (route == null) res.render('/')
    if(route.person=='teacher' || route.person=='Teacher')
    res.render('route/show2', { route: route })
    else
    res.render('route/show', { route: route })
    // res.send(req.params.id)
    
})

router.get('/test/:id', async(req,res)=>{
  const route = await Route2.findById(req.params.id)
  if (route == null) res.render('/')
  res.render('route/givetest', { route: route })
  
})

router.get('/result/:id', async(req,res)=>{
  const route = await Route2.findById(req.params.id)
  const x=z;
  if (route == null) res.render('/')
  // if(route.person=='teacher' || route.person=='Teacher')
  // res.render('route/show2', { route: route })
  // else
  res.render('route/getresult', x,{ route: route })
  // res.send(req.params.id)
  
})

router.post('/l8', async (req,res)=>{
  const routes= await Route2.findOne({})  
  console.log(routes.id)
  console.log('Calculating Now')
    let a=req.body.qq1
    let b=req.body.qq2
    let c=req.body.qq3
    let d=req.body.qq4
    let e=req.body.qq5
    let z=0;
    if(routes.a1==a)
    z++;
    if(routes.a2==b)
    z++;
    if(routes.a3==c)
    z++;
    if(routes.a4==d)
    z++;
    if(routes.a5==e)
    z++;
    console.log('Calculated')
    console.log(z)
    let v=z;
    // routes.score=z;
    // res.sendStatus('200');
    res.render('route/getresult',{v})
    // res.redirect(`/route/result/${routes.id}`+z)
  }) 

router.post('/l6', async (req,res)=>{
  let x=req.body.un
  const routes= await Route.find()
  let b=5343637485685
  routes.forEach(async(route1)=>{ 
    try{
     console.log('Searching')
      if(route1.username==x){ 
        const route2 =await Route2.findOne({})
        b=route2.id
        console.log('Found Student')
      //  console.log('Found Teacher')
      //  console.log('Saving document in collection')
      // console.log('After saving')
      // b=route2._id
      console.log(b)
      // res.render('route/_second');
      b=route1.id
      res.redirect(`/route/test/${route2.id}`)
      console.log(b)
      // console.log(c)
      console.log(x)
      
    console.log('try end')
     }
   }
   catch{
    console.log('inside catch block saving questions22')
    res.redirect(`/route/_second`)
    // res.redirect(`/route/${b}`)
    console.log('executing catch last line')
   }
 })

//  try{
//   if(x){
//     console.log('In IF condition2')
//    res.redirect('/route/_second')
//   }
//  } 
//  catch{
//    console.log('Hit Again')
//  }
})

router.post('/', async (req,res)=>{
    let route =new Route({
        person : req.body.person,
      email : req.body.email,
      username : req.body.username,
      password : req.body.password
    })
    try {
        console.log('Saving now')
        route = await route.save()
        console.log('Later')
        // res.render('route/_second');
        res.redirect(`/route/${route.id}`)
      } catch (e) {
          console.log(e)
        res.render('route/_first', { route: route })
      }
    
})

router.post('/l2', async (req,res)=>{
  const routes= await Route.find()  
  let route =new Route({
      username : req.body.username,
      password : req.body.password
    })
    console.log('outside try')
     routes.forEach(route1=>{ 
       try{
        console.log('Tries')
         if(route1.username==route.username && route1.password==route.password){ 
          console.log('match')
          if(route1.person=='Student') {
            console.log('outside Student')
            res.redirect(`/route/${route1.id}`)
          }
          else if(route1.person=='Teacher') {
            console.log('outside teacher')
            res.redirect(`/route/${route1.id}`)
          }
        }
      }
      catch{
        console.log('Inside catch')
        res.render('route/_second', { route: route })
      }
    })
    try{
    if(route.username && route.password){
      console.log('In IF condition')
     res.redirect('/route/_second')
    }
  }
  catch{
    console.log('Hit Again')
  }
  }) 
  
  router.post('/l4', async (req,res)=>{
    let route =new Route2({
      un: req.body.un,
      q1: req.body.q1,
      a1: req.body.a1,
      q2: req.body.q2,
      a2: req.body.a2,
      q3: req.body.q3,
      a3: req.body.a3,
      q4: req.body.q4,
      a4: req.body.a4,
      q5: req.body.q5,
      a5: req.body.a5
    })
    const routes= await Route.find()
    let b=5343637485685
    let c=2324235
    routes.forEach(route1=>{ 
      try{
       console.log('Searching')
        if(route1.person=='teacher' || route1.person=='Teacher' && route1.username==route.un){ 
         console.log('Found Teacher')
         console.log('Saving document in collection')
         route =  route.save()
        console.log('After saving')
        // res.render('route/_second');
        b=route1.id
        c=route.id
        console.log(b)
        console.log(c)
        
      console.log('try end')
      res.redirect(`/route/${route1.id}`)  
       }
     }
     catch{
      console.log('inside catch block saving questions')
      res.redirect(`/route/_first`)
      console.log('executing catch last line')
     }
   }) 
})

router.get('/login', (req,res)=>{
    res.render('route/login')
})

router.get('/signup', (req,res)=>{
    res.render('route/signup')
})

module.exports=router;