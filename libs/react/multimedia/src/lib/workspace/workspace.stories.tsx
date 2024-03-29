import type { Meta, StoryObj } from '@storybook/react';
import { Workspace } from './workspace';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { http, HttpResponse } from 'msw';
import { WorkspaceElement } from '@ccreusat-monorepo/client';

const meta: Meta<typeof Workspace> = {
  component: Workspace,
  title: 'Multimedia/Workspace',
  args: {
    roles: ['audio', 'csv', 'doc'],
    onSelect: () => console.log('onSelect'),
    multiple: false,
    className: '',
  },
};
export default meta;
type Story = StoryObj<typeof Workspace>;

export const Base: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'The Workspace component allows the user to choose one or more files among all the online files he has access to in the system.',
      },
    },
    msw: {
      handlers: {
        workspace: http.get(
          '/workspace/documents?filter=owner&parentId=&includeall=true&_=1711536606638',
          ({ request }) => {
            const url = new URL(request.url);

            console.log({ url });

            return HttpResponse.json([
              {
                _id: '7f156d32-5942-42a6-a253-99eb98e133a5',
                eParent: null,
                name: 'FB_IMG_1549111835543.jpg',
                metadata: {
                  name: 'file',
                  filename: 'FB_IMG_1549111835543.jpg',
                  'content-type': 'image/jpeg',
                  'content-transfer-encoding': '7bit',
                  charset: 'UTF-8',
                  size: 546106,
                },
                file: 'b86d6b4e-0806-4590-b2fb-c92988170950',
                application: 'media-library',
                shared: [],
                inheritedShares: [],
                isShared: false,
                ancestors: [],
                created: '2023-11-17 11:49.19.699',
                modified: '2023-11-17 11:49.19.699',
                owner: '6534fb80-d250-42b8-954e-6902014c2c19',
                ownerName: 'CREUSAT Clément',
                eType: 'file',
                thumbnails: {
                  '150x150': '6312b135-a1ba-4824-b520-593c5e1ed443',
                  '120x120': '04401977-306d-419b-a18b-5877b91ab2d2',
                },
              },
              {
                _id: '03e21242-bb23-44fe-9d0c-6c54dd4fb256',
                eParent: null,
                name: 'WhatsApp Image 2023-07-19 at 08.12.29.jpeg',
                metadata: {
                  name: 'file',
                  filename: 'WhatsApp Image 2023-07-19 at 08.12.29.jpeg',
                  'content-type': 'image/jpeg',
                  'content-transfer-encoding': '7bit',
                  charset: 'UTF-8',
                  size: 12655,
                },
                file: '1f02598f-fb09-49df-9a6a-f97061a5acd9',
                application: 'media-library',
                shared: [],
                inheritedShares: [],
                isShared: false,
                ancestors: [],
                created: '2023-11-17 11:49.29.316',
                modified: '2023-11-17 11:49.29.316',
                owner: '6534fb80-d250-42b8-954e-6902014c2c19',
                ownerName: 'CREUSAT Clément',
                eType: 'file',
                thumbnails: {
                  '150x150': 'b0953d7c-45d2-4058-a1d6-81ac5a85fe2e',
                  '120x120': '4c07f136-c3b6-44e8-9230-2ff435011121',
                },
              },
            ]);
          }
        ),
      },
    },
  },
  render: (args: any) => {
    return <Workspace {...args}></Workspace>;
  },
};
