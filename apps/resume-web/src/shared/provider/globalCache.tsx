import { createContext } from "react";
import { Cache } from "../services/Cache.types";
import { DefaultCache } from "../services/DefaultCache";

export const enum CacheKeys {
  PersonalInfo = 'personal-info',
  Experience = 'experience',
  Education = 'education',
  Skills = 'skills',
  Projects = 'projects',
}

export const CacheContext = createContext<Cache<CacheKeys>>(new DefaultCache<CacheKeys>());


