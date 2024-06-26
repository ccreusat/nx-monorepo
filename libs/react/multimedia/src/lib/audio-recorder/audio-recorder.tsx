import { useState, forwardRef, useImperativeHandle } from 'react';

import { Mic } from '@ccreusat-monorepo/icons';
import clsx from 'clsx';
import { WorkspaceElement } from '@ccreusat-monorepo/client';
import { useTranslation } from 'react-i18next';

import AudioRecorderTimer from './audio-recorder-timer';
import useAudioRecorder from './use-audio-recorder';
import { FormControl, Input, Toolbar } from '@ccreusat-monorepo/ui-library';

export interface AudioRecorderProps {
  onSaveSuccess?: (resource: WorkspaceElement) => void;
  onRecordUpdated?: (recordURL?: string) => void;
  hideSaveAction?: boolean;
}

export interface AudioRecorderRef {
  save: () => Promise<WorkspaceElement | undefined>;
}

export const AudioRecorder = forwardRef(
  (
    {
      onSaveSuccess,
      onRecordUpdated,
      hideSaveAction = false,
    }: AudioRecorderProps,
    ref
  ) => {
    const {
      recordState,
      playState,
      recordtime,
      audioRef,
      audioNameRef,
      toolbarItems,
      handlePlayEnded,
      handleSave,
    } = useAudioRecorder(onSaveSuccess, onRecordUpdated, hideSaveAction);
    const { t } = useTranslation();

    // We add one methods to handle save action from parent component
    useImperativeHandle(ref, () => ({
      save: handleSave,
    }));

    const [audioTime, setAudioTime] = useState<number>(0);

    const classColor = clsx({
      'text-danger': recordState === 'RECORDING',
      'text-success': playState === 'PLAYING',
    });

    const handleTimeUpdate = (event: any) => {
      setAudioTime(event.target.currentTime);
    };

    return (
      <div className="audio-recorder m-auto d-flex flex-column">
        <FormControl
          id="recordName"
          className="mb-32"
          isRequired
          isReadOnly={recordState === 'SAVED' || recordState === 'SAVING'}
        >
          <Input
            type="text"
            size={'sm'}
            placeholder={t('bbm.audio.recorder.name')}
            ref={audioNameRef}
            defaultValue={
              t('bbm.audio.recorder.defaultName') +
              new Date().toLocaleDateString()
            }
          />
        </FormControl>
        <div className="audio-recorder-icon mx-auto">
          <Mic width={64} height={64} className={classColor} />
        </div>
        <AudioRecorderTimer
          recordState={recordState}
          playState={playState}
          recordTime={recordtime}
          audioTime={audioTime}
        ></AudioRecorderTimer>
        <audio
          ref={audioRef}
          onEnded={handlePlayEnded}
          onTimeUpdate={handleTimeUpdate}
        >
          <track default kind="captions" srcLang="fr" src=""></track>
        </audio>
        <Toolbar items={toolbarItems} />
      </div>
    );
  }
);

export default AudioRecorder;
