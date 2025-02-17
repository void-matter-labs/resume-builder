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
      "education": [],
      experience: [],
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
      }
    })


    const stream = createWriteStream('test.docx')

    await Packer.toBuffer(generator.generate()).then((buffer) => {
      stream.write(buffer)
    })
  })
})
