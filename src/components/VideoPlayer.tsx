import React, {useEffect, useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { View, Alert} from 'react-native';
import { useAppDispatch } from '../common/hooks/useStore';
import { setLoading } from '../store/common/commonSlice';

interface VideoPlayerProps {
  id: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({id}) => {
  const dispatch = useAppDispatch();
  const [playing, setPlaying] = useState(false);

  const onStateChange = React.useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Do u want onether one?');
    }
  }, []);

  return (
      <YoutubePlayer
        height={250}
        play={playing}
        videoId={id}
        onChangeState={onStateChange}
        onReady={()=>dispatch(setLoading(false))}
      />
  );
};

export default VideoPlayer;
