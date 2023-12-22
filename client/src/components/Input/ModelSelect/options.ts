import type { FC } from 'react';

import { EModelEndpoint } from 'librechat-data-provider';
import type { TModelSelectProps } from '~/common';

import Anthropic from './Anthropic';
import BingAI from './BingAI';
import ChatGPT from './ChatGPT';
import Google from './Google';
import OpenAI from './OpenAI';
import Plugins from './Plugins';
import PluginsByIndex from './PluginsByIndex';

export const options: { [key: string]: FC<TModelSelectProps> } = {
  [EModelEndpoint.openchat]: OpenAI,
  [EModelEndpoint.openAI]: OpenAI,
  [EModelEndpoint.azureOpenAI]: OpenAI,
  [EModelEndpoint.bingAI]: BingAI,
  [EModelEndpoint.google]: Google,
  [EModelEndpoint.gptPlugins]: Plugins,
  [EModelEndpoint.anthropic]: Anthropic,
  [EModelEndpoint.chatGPTBrowser]: ChatGPT,
};

export const multiChatOptions = {
  ...options,
  [EModelEndpoint.gptPlugins]: PluginsByIndex,
};
