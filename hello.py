import sendgrid
import os
from sendgrid.helpers.mail import *

sg = sendgrid.SendGridAPIClient("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")
from_email = Email("fruitwingteardrop.2000@gmail.com")
to_email = To("qinfengyu123@gmail.com")
subject = "Sending with SendGrid is Fun"
content = Content("text/plain", "and easy to do anywhere, even with Python")
mail = Mail(from_email, to_email, subject, content)
response = sg.client.mail.send.post(request_body=mail.get())
print(response.status_code)
print(response.body)
print(response.headers)