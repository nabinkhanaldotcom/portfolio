import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    title: 'Nepali Voice Conversion',
    description:
      'A full-stack AI application that records or uploads speech, transcribes the audio, and converts the speaker’s voice into a trained target voice. The project combines an Angular frontend with a Python and FastAPI backend and includes local and cloud transcription, RVC voice conversion, authentication, operational logging, and Azure deployment.',
    technologies: [
      'Angular',
      'TypeScript',
      'Python',
      'FastAPI',
      'Whisper',
      'OpenAI API',
      'RVC',
      'Azure',
      'JWT',
      'SQLite',
      'FFmpeg',
    ],
    projectUrl: '/voice',
    githubUrl:
      'https://github.com/nabinkhanaldotcom/nepali-voicce-assistant',
    status: 'Live',
    featured: true,
  },
];