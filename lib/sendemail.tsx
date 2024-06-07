import { FormSubmitData } from "../types";
import ReactDOMServer from 'react-dom/server';

function buildEmailBody(formData: FormSubmitData)
{
   return(
    <>
        <html>
            <head>
                <title>Email Fomr {formData.fromPage}</title>
            </head>
            <body>
                <div style={{width: "90%", backgroundColor: "#f0f8ff", padding: "15px", fontSize: "16px;", borderRadius: "8px", border: "1px solid #2a405b"}}>
                <h2 style={{padding: "0px", margin: "0px", paddingTop: "5px", fontSize: "16px;"}}>Full Name: </h2>
                <div>{formData.fullname}</div>
                <br/>
                <h2 style={{padding: "0px", margin: "0px", paddingTop: "5px", fontSize: "16px;"}}>Email Address: </h2>
                <div>{formData.email}</div>
                <br/>
                <h2 style={{padding: "0px", margin: "0px", paddingTop: "5px", fontSize: "16px;"}}>Subject: </h2>
                <div>{formData.subject}</div>
                <br/>
                <h2 style={{padding: "0px", margin: "0px", paddingTop: "5px", fontSize: "16px;"}}>Page URL: </h2>
                <div>{formData.pageURL}</div>
                <br/>
                <div style={{fontSize: "16px;"}}><strong>Description</strong></div>
                <div style={{fontSize: "14px;"}}>
                    {formData.message}
                </div>
                <br/><br/>
                </div>
               
            </body>
        </html>
    </>
   )
}

export default async function sendEmail(formData: FormSubmitData) {

      const emailBodyHtml = buildEmailBody(formData);
      const emailBody = ReactDOMServer.renderToString(emailBodyHtml);

      try {
        const res = await fetch("/api/sendemail", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            pageURL: formData.pageURL,
            fullname: formData.fullname,
            subject: formData.fromPage,
            message: emailBody,
            email: formData.email,
            emailService: formData.emailService,
          }),
        });
  
        const data = await res.json();
        if (res.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    
  
}