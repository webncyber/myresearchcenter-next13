"use client";
import { ContactCardStyle } from "./ContactCard.Style";
import * as React from "react";
import {
  Button,
  Box,
  Card,
  Flex,
  TextField,
  TextArea,
  Text,
} from "@radix-ui/themes";
import { useState } from "react";
import sendEmail from "../../../../lib/sendemail";
import {FormSubmitData } from "../../../../types";

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
    </ContactCardStyle>
  );
}

export default ContactCardForm;
