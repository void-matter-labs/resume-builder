import { CacheKeys } from "../providers/globalCache";
import { Document, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";

export interface ResumeGeneratorData {
  [CacheKeys.PersonalInfo]?: {
    name: string;
    address: string;
    city: string;
    email: string;
    profession: string;
    state: string;
  },
  [CacheKeys.Education]?: {
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[],
  [CacheKeys.Experience]?: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  }[],
  [CacheKeys.TechnicalSkills]?: {
    skillList: string[];
  },
  [CacheKeys.ContactInfo]?: {
    phoneNumber: string;
    linkedInProfile: string;
    twitterProfile: string;
    githubProfile: string;
    portfolioLink: string;
  },
  [CacheKeys.Certification]?: {
    certifications: string[];
  }
}

export class ResumeGenerator {
  constructor(
    private data: ResumeGeneratorData,
  ) {
  }

  generate() {
    const educations = [this.data[CacheKeys.Education]]
    const experiences = [this.data[CacheKeys.Experience]]

  console.log({educations, experiences})
    const doc = new Document({
      sections: [
      {
        children: [
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          children: [
          new TextRun({
            text: this.data[CacheKeys.PersonalInfo]?.name,
            bold: true,
            size: 32,
            color: '000000'
          }),
          ]
        }),
        new Paragraph({
          children: [
          new TextRun(this.data[CacheKeys.PersonalInfo]?.city ?? ''),
          new TextRun(', '),
          new TextRun(this.data[CacheKeys.PersonalInfo]?.state ?? ''),
          new TextRun(' | '),
          new TextRun(this.data[CacheKeys.ContactInfo]?.phoneNumber ?? ''),
          new TextRun(' | '),
          new TextRun(this.data[CacheKeys.ContactInfo]?.linkedInProfile ?? ''),
          new TextRun(' | '),
          new TextRun(this.data[CacheKeys.PersonalInfo]?.email ?? ''),
          ],
          alignment: AlignmentType.CENTER
        }),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [
          new TextRun('Skills'),
          ]
        }),
        new Paragraph({
          children: [
          new TextRun({
            text: this.data[CacheKeys.TechnicalSkills]?.skillList.join(', '),
          }),
          ]
        }),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [
          new TextRun('Education')
          ]
        }),
        ...(educations?.map(education => new Paragraph({
          children: [
          new TextRun(`${education?.school}, ${education?.degree} (${education?.startDate} - ${education?.endDate })`)
          ]
        })) ?? []),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [
          new TextRun('Experience')
          ]
        }),
        ...(experiences?.map(experience => new Paragraph({
          children: [
          new TextRun(`${experience.company}, ${experience.position} (${experience.startDate} - ${experience.endDate})`)
          ]
        })) ?? []),
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [
          new TextRun('Certification'),
          ]
        }),
        new Paragraph({
          children: [
          new TextRun({
            text: this.data[CacheKeys.Certification]?.certifications.join(', ')
          })
          ]
        })
        ],
      },
      ]
    })

    return doc;
  }
}



