import { createContext } from "react";
import { Cache } from "../services/Cache.types";
import { DefaultCache } from "../services/DefaultCache";

export const enum CacheKeys {
  PersonalInfo = 'personal-info',
  Experience = 'experience',
  Education = 'education',
  TechnicalSkills = 'technical-skills',
  Projects = 'projects',
  ContactInfo = 'contact-info',
  Certification = 'certification',
}

export const CacheContext = createContext<Cache<CacheKeys>>(new DefaultCache<CacheKeys>());


