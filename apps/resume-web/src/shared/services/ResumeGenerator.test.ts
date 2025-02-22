import { createWriteStream } from 'node:fs'
import {
  describe,
  it
} from 'vitest'
import { Packer } from 'docx'
import { ResumeGenerator } from './ResumeGenerator'

describe('ResumeGenerator', async () => {
  it.only('test', async () => {
    const generator = new ResumeGenerator({
      "personal-info": {
        address: "1234 Main St",
        city: "Springfield",
        email: "a@a.com",
        name: "John Doe",
        profession: "Software Engineer",
        state: "IL"
      },
      "education": {
        degreeProgram: "BS",
        fieldOfStudy: "Computer Science",
        graduation: "2020-01-01",
        graduationMonth: "January",
        graduationYear: "2020",
        schoolLocation: "Springfield, IL",
        schoolName: "Springfield University"
      },
      experience: {
        address: "1234 Main St",
        employer: "John Doe",
        role: "Software Engineer",
        company: "ABC Inc",
        finishDate: "2021-01-01",
        position: "Software Engineer",
        startDate: "2020-01-01",
      },
      "technical-skills": {
        skillList: [
          "React",
          "Vue",
          "Angular"
        ]
      },
      "contact-info": {
        phoneNumber: "123-456-7890",
        linkedInProfile: "https://www.linkedin.com/in/johndoe",
        twitterProfile: "https://twitter.com/johndoe",
        githubProfile: "",
        portfolioLink: ""
      },
      certification: {
        certifications: [
          "Certification 1",
          "Certification 2"
        ]
      }
    })


    const stream = createWriteStream('test.docx')

    await Packer.toBuffer(generator.generate()).then((buffer) => {
      stream.write(buffer)
    })
  })
})