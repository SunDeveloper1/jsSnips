const express=require('express')
const jsdom=require('jsdom')

const { JSDOM }=jsdom
const app=express()



app.get('/',(req,res)=>{

    return res.status(200).send({
        "message":"Hello Vivek"
    })

})

app.get('/html',(req,res)=>{

    const  dom=new JSDOM(`<p id="qstar" >Vivek is the best</p>`)
    console.log(dom.window.document.getElementById('qstar'))
    return "done"
})

app.get('/qstar', (req, res) => {
    // Create a virtual DOM using jsdom
    let htmlContent=`<p id="qstar">Hello World</p>`
    const dom = new JSDOM(htmlContent);

    // Extract the element with id "qstar"
    const element = dom.window.document.getElementById('qstar');

    // Add style to the element
    element.style.display = 'none';

    // Get the updated HTML content
    const updatedHtml = dom.serialize();
    console.log(updatedHtml);

    // Send the updated HTML as the response
    res.send(updatedHtml);
});

app.listen(3000,()=>{
    return "Express Arrived at PORT 3000"
})
   