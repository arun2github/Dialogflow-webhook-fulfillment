const express = require('express');
const app = express()
const dfff = require('dialogflow-fulfillment')

const port = 4000;
    
app.get('/',(req,res) =>{
    res.send('Hello from node')
})

app.post('/', express.json(), (req,res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    })
    function onagent(agent){
        agent.add('Todays Menu is cheese pizza, cheese burger, maxican pasta , alferdo pasta')
    }
    const intentMap = new Map()
    intentMap.set('createOrder',onagent)
    agent.handleRequest(intentMap)
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})