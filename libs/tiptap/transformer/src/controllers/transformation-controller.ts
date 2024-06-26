import { Response } from 'express';
import { TransformationFormat } from '../models/format.js';
import {
  AuthenticatedRequest,
  ContentTransformerRequest,
  ContentTransformerResponse,
} from '../models/transformation-request.js';
import TableOrTemplate from '../models/TableOrTemplate.js';
import TableOrTemplateCell from '../models/TableOrTemplateCell.js';

import { generateText } from '@tiptap/core';
import { generateHTML, generateJSON } from '@tiptap/html';

import { Paragraph } from '@ccreusat-monorepo/tiptap-extension-paragraph';
import { CustomHighlight } from '@ccreusat-monorepo/tiptap-extension-highlight';
import { Alert } from '@ccreusat-monorepo/tiptap-extension-alert';
import { Attachment } from '@ccreusat-monorepo/tiptap-extension-attachment';
import { Audio } from '@ccreusat-monorepo/tiptap-extension-audio';
import { FontSize } from '@ccreusat-monorepo/tiptap-extension-font-size';
import { LineHeight } from '@ccreusat-monorepo/tiptap-extension-line-height';
import { Hyperlink } from '@ccreusat-monorepo/tiptap-extension-hyperlink';
import { Iframe } from '@ccreusat-monorepo/tiptap-extension-iframe';
import { CustomImage } from '@ccreusat-monorepo/tiptap-extension-image';
import { Linker } from '@ccreusat-monorepo/tiptap-extension-linker';
import { MathJax } from '@ccreusat-monorepo/tiptap-extension-mathjax';
import { Video } from '@ccreusat-monorepo/tiptap-extension-video';
import { Color } from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import {
  cleanHtmlCounter,
  cleanHtmlTimer,
  cleanJsonCounter,
  cleanJsonTimer,
  h2jCounter,
  h2jTimer,
  h2plainTextCounter,
  h2plainTextTimer,
  j2hCounter,
  j2hTimer,
  j2plainTextCounter,
  j2plainTextTimer,
  updateCounterAndTimer,
} from './metrics-controller.js';
import CustomHeading from '@ccreusat-monorepo/tiptap-extension-heading';

const EXTENSIONS = [
  StarterKit.configure({ paragraph: false }),
  Paragraph,
  CustomHighlight.configure({
    multicolor: true,
  }),
  Underline,
  TextStyle,
  Color,
  Subscript,
  Superscript,
  TableOrTemplate,
  TableRow,
  TableHeader,
  TableOrTemplateCell,
  TextAlign.configure({
    types: ['heading', 'paragraph', 'custom-image', 'video'],
  }),
  CustomHeading.configure({
    levels: [1, 2],
  }),
  Typography,
  FontSize,
  LineHeight,
  Iframe,
  Hyperlink,
  FontFamily,
  MathJax,
  Alert,
  Video,
  Audio,
  Linker,
  CustomImage,
  Attachment,
];

export function transformController(
  req: AuthenticatedRequest,
  res: Response,
  serviceVersion: number
): Promise<void> {
  const data: ContentTransformerRequest = req.body as ContentTransformerRequest;
  let generatedHtmlContent;
  let generatedJsonContent;
  let plainTextContent;
  let cleanHtml;
  let cleanJson;
  if (!data.htmlContent && !data.jsonContent) {
    res.send('No specified content to transform.');
    return Promise.resolve();
  } else {
    if (data.requestedFormats.includes(TransformationFormat.HTML)) {
      // Transforming content to HTML
      if (data.jsonContent != null) {
        const start = Date.now();
        generatedHtmlContent = generateHTML(data.jsonContent, EXTENSIONS);
        updateCounterAndTimer(start, j2hCounter, j2hTimer);
      }
      // Cleaning HTML content
      if (data.htmlContent != null) {
        const start = Date.now();
        cleanHtml = generateHTML(
          generateJSON(data.htmlContent, EXTENSIONS),
          EXTENSIONS
        );
        updateCounterAndTimer(start, cleanHtmlCounter, cleanHtmlTimer);
      }
    }
    if (data.requestedFormats.includes(TransformationFormat.JSON)) {
      // Transforming content to JSON
      if (data.htmlContent != null) {
        const start = Date.now();
        generatedJsonContent = generateJSON(data.htmlContent, EXTENSIONS);
        updateCounterAndTimer(start, h2jCounter, h2jTimer);
      }
      // Cleaning JSON content
      if (data.jsonContent != null) {
        const start = Date.now();
        cleanJson = generateJSON(
          generateHTML(data.jsonContent, EXTENSIONS),
          EXTENSIONS
        );
        updateCounterAndTimer(start, cleanJsonCounter, cleanJsonTimer);
      }
    }
    // Transforming content to PLAIN TEXT
    if (data.requestedFormats.includes(TransformationFormat.PLAINTEXT)) {
      if (data.jsonContent != null) {
        const start = Date.now();
        plainTextContent = generateText(data.jsonContent, EXTENSIONS);
        updateCounterAndTimer(start, j2plainTextCounter, j2plainTextTimer);
      } else if (data.htmlContent != null) {
        const start = Date.now();
        if (generatedJsonContent != null) {
          plainTextContent = generateText(generatedJsonContent, EXTENSIONS);
        } else {
          plainTextContent = generateText(
            generateJSON(data.htmlContent, EXTENSIONS),
            EXTENSIONS
          );
        }
        updateCounterAndTimer(start, h2plainTextCounter, h2plainTextTimer);
      }
    }
    const response: ContentTransformerResponse = {
      contentVersion: serviceVersion,
      htmlContent: generatedHtmlContent,
      jsonContent: generatedJsonContent,
      plainTextContent: plainTextContent,
      cleanHtml: cleanHtml,
      cleanJson: cleanJson,
    } as ContentTransformerResponse;
    res.json(response);
    return Promise.resolve();
  }
}
