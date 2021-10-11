---
title: Contact Us
draft: false
menu: 
  main:
    weight: 100
type: contact
form:
  title: Send us a Message
  id: js-contactForm
  inputs:
  - id: contact-name
    col: col-md-6
    name: name
    type: text
    placeholder: Name
    minlength: 2
    required: true
    invalidFeedback: Please enter name
  - id: contact-email
    col: col-md-6
    name: email
    type: email
    placeholder: Email Address
    required: true
    invalidFeedback: Please enter email address
  - id: contact-phone
    col: col-md-6
    name: phone
    type: tel
    placeholder: Phone Number
    minlength: 8
    required: true
    invalidFeedback: Please enter phone number
  - id: contact-subject
    col: col-md-6
    name: subject
    type: text
    placeholder: Subject
    minlength: 2
    required: true
    invalidFeedback: Please enter message subject
  - id: contact-message
    col: col-12
    name: message
    type: textarea
    placeholder: Message
    minlength: 6
    rows: 6
    required: true
    invalidFeedback: Please enter message.
---