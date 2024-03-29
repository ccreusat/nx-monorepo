import { useRef } from 'react';

import AudioRecorder, {
  AudioRecorderRef,
} from '../../audio-recorder/audio-recorder';
import { useMediaLibraryContext } from '../media-library.context';

export const Audio = () => {
  const { setResult, setPreSuccess } = useMediaLibraryContext();
  const ref = useRef<AudioRecorderRef>(null);

  const handleOnUpdateRecord = (recordURL?: string) => {
    if (recordURL) {
      setResult(recordURL);
      setPreSuccess(() => ref.current!.save);
    } else {
      setResult();
    }
  };

  return (
    <AudioRecorder
      ref={ref}
      onRecordUpdated={handleOnUpdateRecord}
      hideSaveAction={true}
    ></AudioRecorder>
  );
};
