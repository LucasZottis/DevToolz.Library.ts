import { IFactory } from '../../../interfaces/IFactory';
import { ITextConverter } from './ITextFormatConverter.converter';

export interface ITextFormatConverterFactory extends IFactory<ITextConverter> { }