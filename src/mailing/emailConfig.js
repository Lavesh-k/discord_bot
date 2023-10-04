import  nodemailer  from 'nodemailer'
import studentSchema from "../modal/Students.js";

 const getstudentDetails = async () =>{
    let data = await studentSchema.find({inCommunity : false} , {name : 0 , batch: 0, verified: 0 , inCommunity: 0})
    let studentEmaiList = []
    data.forEach((e)=>{
        studentEmaiList.push(e.email)
    })
    return studentEmaiList
}
const emailConfig = async ()=>{
    try {
        let studentEmaiList = await getstudentDetails()
        if(studentEmaiList.length){
            const transporter = nodemailer.createTransport({
                service: 'Gmail', 
                auth: {
                    user: 'laveshkhairajani01@gmail.com',
                    pass: 'rtijsgcajktcbxva'
                }
            });
            const mailOptions = {
                from: 'laveshkhairajani01@gmail.com',
                to:await getstudentDetails(),
                subject: 'Please Join Community',
                text: 'This is a test email sent using Nodemailer.'
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error occurred:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        }
        else{
            console.log("no user found")
        }
    } catch (error) {
        console.log(error)
    }
}

export default emailConfig
