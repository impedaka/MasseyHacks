# SumNOtes
![alt](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/931/178/datas/original.png)

## Problem Statement
Students struggle to focus on watching videos for school, especially those who are tactile learners or hard of hearing. Therefore, our team created the program, _SumNotes_, to help students who prefer linguistic ways of learning to read videos instead.

**Solution:** Our program converts the video into an audio file. Using an API, _SumNotes_ converts the audio file into a readable text format. This program saves time for students and helps with assignments that require watching a video before starting it.

## Inspiration
As high school students, our education experience drastically changed upon the COVID-19 pandemic. Schools lockdowned and we shifted to a virtual learning method for several months. 

Our teachers tried their best to continue making learning fun and educational. They would often send video links and students were encouraged to watch them for homework assignments. 

The inspiration behind _SumNotes_ came when we realized that we could save time and improve our understanding by reading a summary of the video, rather than watching it. Other students using our application can also complete their assignments more effectively.

## What it does
_SumNotes_ takes in a video link or a downloaded video (.mp4) and converts it into an audio file. Within minutes, our program analyzes the audio and transcripts it into a text format. 

Then, the user is able to view a summary of the video, including the dialogue from the video's presenter. The user can also search for keywords found in the transcript. As an added feature, the user can send the summary pdf to themselves via email.

## How we built it
For our tech stack, we used react.js and flask. As for APIs, we used Twillio/Sendgrid and AssemblyAI. As for design, we used chakra-UI and Figma. We also used the power of friendship and rainbows.

## Challenges we ran into
While using Sendgrid/Twilio for our app, we accidentally made our secret key public by committing our changes onto GitHub. We couldn't get the email thing to work, and we didn't know why since the code seemed correct. Later in the day, we realized that our account was suspended for making the key public and that was why we couldn't use the API. The solution was to make a new account and make a new secret key and it worked :D

We also faced problems with connecting the frontend and the backend since we didn't know how to work the other. However, this was easily fixed with the help of Google and StackOverflow!

## Accomplishments that we're proud of
Having a project for MasseyHacks lol
Building a functional application with real-world benefits

## What we learned
We learned how to use Twilio/SendGrid and AssemblyAI and work together :D

## What's next for SumNotes
We could include more file type support, transcription of handwritten notes to digital and summarizing them as well, and being able to take photos from the video to go along with the summary.
