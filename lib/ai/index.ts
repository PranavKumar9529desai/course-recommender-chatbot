import { openai } from '@ai-sdk/openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

const gemini = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    //@ts-expect-error - This is a valid model
    model:
      apiIdentifier === 'gemini'
        ? gemini.getGenerativeModel({ model: 'gemini-pro' })
        : openai(apiIdentifier),
    middleware: customMiddleware,
  });
};

export const imageGenerationModel = openai.image('dall-e-3');

export const courseRecommendationModel = () => {
  return customModel('learners-amigo');
};
