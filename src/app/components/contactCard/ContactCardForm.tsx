"use client";
import { ContactCardStyle } from "./ContactCard.Style";
import * as React from "react";
import {
  Button,
  Box,
  Card,
  Grid,
  Flex,
  TextField,
  TextArea,
  Text,
  Inset
} from "@radix-ui/themes";
import { useState } from "react";
import sendEmail from "../../../../lib/sendemail";
import { ContactCard, FormSubmitData } from "../../../../types";

export function ContactCardForm() {
  const [inputFullname, setFullname] = useState("");
  const [inputSubject, setSubject] = useState("");
  const [inputMessage, setMessage] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputEmailService, setEmailService] = useState("gmail");
  const [submitMessage, setSubmitMessage] = useState("");

  const submitForm = async (e: any) => {
    e.preventDefault();

    const formData: FormSubmitData = {
      pageURL: window?.location?.href,
      fromPage: "Site Contact Request",
      fullname: inputFullname,
      email: inputEmail,
      subject: inputSubject,
      message: inputMessage,
      emailService: inputEmailService,
    };
    const submitted = sendEmail(formData);
    if (!submitted) {
      setSubmitMessage("Unable to submit form, please try again latter....");
    } else {
      var allInputs = document
        .getElementById("contactForm")
        ?.querySelectorAll("input");
      var areaText = document
        .getElementById("contactForm")
        ?.querySelectorAll("textarea");

      if (allInputs) {
        allInputs.forEach((singleInput) => (singleInput.value = ""));
      }

      if (areaText) {
        areaText.forEach((singleInput) => (singleInput.value = ""));
      }
      setSubmitMessage("Form submitted successfully");
    }
  };

  return (
    <ContactCardStyle>
      <h3>
        <Text>Contact Us</Text>
      </h3>
      <form id="contactForm" onSubmit={submitForm}>
        <Box maxWidth="50%">
          <Card>
            <Flex direction="column" gap="3">
              <TextField.Root
                onChange={(e) => setFullname(e.target.value)}
                variant="surface"
                required={true}
                placeholder="Full Name"
              />
              <TextField.Root
                onChange={(e) => setEmail(e.target.value)}
                variant="surface"
                required={true}
                type="email"
                placeholder="Email"
              />
              <TextField.Root
                onChange={(e) => setSubject(e.target.value)}
                variant="surface"
                required={true}
                placeholder="Subject"
              />
              <TextArea
                onChange={(e) => setMessage(e.target.value)}
                variant="surface"
                required={true}
                placeholder="Description"
              />
              <Button variant="solid">Submit</Button>
              <Text color="red">{submitMessage}</Text>
            </Flex>
          </Card>
        </Box>
      </form>

      <Flex gap="3">
        <Box width="33%">
        <Card style={{height:"100%"}}>
     content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a
        </Card>
        </Box>
        <Box width="33%">
          <Card>
          <Inset clip="padding-box" side="top" pb="current">
      <img
        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        alt="Bold typography"
        style={{
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: 140,
          backgroundColor: 'var(--gray-5)',
        }}
      />
    </Inset>
           Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishin
          </Card>
        </Box>
        <Box width="33%">
         <Card>
             Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum
         </Card>
        </Box>
      </Flex>
    </ContactCardStyle>
  );
}

export default ContactCardForm;
