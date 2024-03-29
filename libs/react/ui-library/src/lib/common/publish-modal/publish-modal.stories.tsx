import type { Meta, StoryObj } from '@storybook/react';
import { PublishModal } from './publish-modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { HttpResponse, http } from 'msw';

const meta: Meta<typeof PublishModal> = {
  component: PublishModal,
  title: 'Modal/Publish',
  args: {
    isOpen: true,
    resourceId: 'cbae308c-a0fd-4074-8907-42c73eee144e',
    onSuccess: () => console.log('onSuccess'),
    onCancel: () => console.log('onCancel'),
  },
};
export default meta;
type Story = StoryObj<typeof PublishModal>;

export const Primary: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: {
        explorer: http.get(
          '/explorer/resources/cbae308c-a0fd-4074-8907-42c73eee144e?application=blog',
          () => {
            return HttpResponse.json({
              results: {
                thumbnail:
                  '/workspace/document/1de12099-fc33-4540-a1ca-bdc1c33ea90b',
                usersForFolderIds: [],
                creatorId: 'abc',
                creatorName: 'username',
                description: '',
                contentHtml: '',
                version: 1711377261215,
                createdAt: 1711377261210,
                application: 'blog',
                public: false,
                updaterId: 'abc',
                assetId: 'cbae308c-a0fd-4074-8907-42c73eee144e',
                rights: ['creator:abc'],
                updaterName: 'username',
                name: 'resource',
                subresources: [],
                folderIds: [],
                updatedAt: 1711377261210,
                resourceType: 'blog',
                trashed: false,
                id: '7525',
              },
            });
          }
        ),
      },
    },
  },
};
