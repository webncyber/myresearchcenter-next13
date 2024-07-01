"use client";
import { EmailSignUpCardStyle } from "./EmailSignUpCard.Style";
import * as React from "react";
import { Button, Box, Card, Flex, TextField, Grid, Text} from "@radix-ui/themes";
import { useState } from "react";
import sendEmail from "../../../../lib/sendemail"
import {ContactCard, FormSubmitData } from "../../../../types";

export function EmailSignUpCardForm() {
  const [inputEmail, setEmail] = useState("");
  const [inputEmailService, setEmailService] = useState("gmail");
 const[submitMessage, setSubmitMessage] = useState('');

  const submitForm = async (e: any) => {
    e.preventDefault();
    
    const formData: FormSubmitData = {
      pageURL: window?.location?.href,
      fromPage: "Email SignUp Request",
      email: inputEmail,
      emailService: inputEmailService
    }
    const submitted = sendEmail(formData);
    if(!submitted)
      {
        setSubmitMessage('Unable to submit form, please try again latter....')

      }else{
        var allInputs = document.getElementById("contactForm")?.querySelectorAll('input');
        var areaText = document.getElementById("contactForm")?.querySelectorAll('textarea');

        if(allInputs){
          allInputs.forEach(singleInput => singleInput.value = '');

        }

        if(areaText){
          areaText.forEach(singleInput => singleInput.value = '');
        }
        setSubmitMessage('Thank you')
      }
  };

  return (
    <EmailSignUpCardStyle>
      <form id="contactForm" onSubmit={submitForm}>
      <TextField.Root
              onChange={(e) =>  setEmail(e.target.value)}
              variant="surface"
              required={true}
              type="email"
              placeholder="Email"
            >
                 <Button variant="solid">
              SignUp
            </Button>
            </TextField.Root>
            <Text color="red">{submitMessage}</Text>
      </form>
    </EmailSignUpCardStyle>
  );
}

export default EmailSignUpCardForm