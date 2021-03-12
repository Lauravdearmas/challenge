const express = require("express")
// const morgan = require("morgan")
const cors = require("cors")

const app = express()
app.use(express.json())

app.use(cors())



const jobs = require("./jobs")



app.get("/api/jobs", (req, res) => {
    res.json(jobs)
})


app.get("/api/jobs/detail/:description", (req, resp) =>{
    const { description } = req.params
    const descrip = jobs.filter(item => item.description.includes(description))
     if (descrip) {
         resp.json(descrip)
        } else {
            resp.status(404).end()
        }
    })

    app.get("/api/jobs/tecnology/:stack", (req, resp) =>{ 
        const  { stack }  = req.params
        const tecnology = jobs.filter(item => item.stack.includes(stack));
        
         if (tecnology) {
             resp.json(tecnology)
            } else {
                resp.status(404).end()
            }
        })


app.get("/api/jobs/working/:type", (req, resp) =>{ 
    const  { type }  = req.params
    const workingDay = jobs.filter(item => item.type.includes(type));
    
        if (workingDay) {
            resp.json(workingDay)
        } else {
            resp.status(404).end()
        }
    })
    


 
    



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on http://localhost: ${PORT}`)
})