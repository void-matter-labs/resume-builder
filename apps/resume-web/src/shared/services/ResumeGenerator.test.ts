import { createWriteStream } from 'node:fs'
import {
  describe,
  it
} from 'vitest'
import { Packer } from 'docx'
import { ResumeGenerator } from './ResumeGenerator'

describe('ResumeGenerator', async () => {
  it.skip('test', async ()=>{
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
      projects: [],
      "technical-skills": []
    })

    const stream = createWriteStream('test.docx')

    await Packer.toBuffer(generator.generate()).then((buffer)=>{
      stream.write(buffer)
    })
  })
})
