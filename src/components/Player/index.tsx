import React, { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { getPlaylist, getUrgentMedia } from "../../api";
import { TMedia, TPlaylist } from "../../types";
import { timer } from "../../utils/timer";
import { Loading } from "../Assets";
import { PlayerController } from "../PlayerController";
import { ImageContainer, PlayerContainer } from "./styled";
import { PlayerProps } from "./types";

export const Player: React.FC<PlayerProps> = () => {
  const [mediaList, setMediaList] = useState<TPlaylist>([]);
  const [mediaPlayingNow, setMediaPlayingNow] = useState<TMedia>();
  const [shouldPlay, setShouldPlay] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [shouldPlayUrgentMedia, setShouldPlayUrgentMedia] =
    useState<boolean>(false);

  const {
    isLoading,
    isRefetching,
    refetch: refetchPlaylist,
  } = useQuery(`getPlaylist`, getPlaylist, {
    refetchOnWindowFocus: false,
    cacheTime: 0,
    onSuccess: (data) => {
      setMediaList(data.filter((value, index) => index !== 0));
      setMediaPlayingNow(data[0]);
      timer(fetchUrgentMedia, 300000);
    },
  });

  const { data: urgentMedia, refetch: fetchUrgentMedia } = useQuery(
    `getUrgentMedia`,
    getUrgentMedia,
    {
      refetchOnWindowFocus: false,
      cacheTime: 0,
    }
  );

  const triggerNextMedia = useCallback(() => {
    if (shouldPlayUrgentMedia && urgentMedia) {
      setMediaPlayingNow(urgentMedia);
      setShouldPlayUrgentMedia(false);
    } else {
      setMediaPlayingNow(mediaList[0]);
      setMediaList((prevState) => prevState.filter((_, index) => index !== 0));
    }

    if (mediaList?.length === 0) refetchPlaylist();
  }, [mediaList, refetchPlaylist, shouldPlayUrgentMedia, urgentMedia]);

  const changeVolume = (operation: "minus" | "plus") => {
    const operations = {
      plus: () =>
        setVolume((prevVolume = 0) => {
          if (prevVolume + 0.1 < 1) return prevVolume + 0.1;

          return prevVolume;
        }),
      minus: () =>
        setVolume((prevVolume = 0) => {
          if (prevVolume - 0.1 > 0) return prevVolume - 0.1;

          return prevVolume;
        }),
    };

    return operations[operation]();
  };

  const playMedia = useCallback(() => {
    setShouldPlay(true);
  }, []);

  useEffect(() => {
    setShouldPlayUrgentMedia(!!urgentMedia);
  }, [urgentMedia]);

  useEffect(() => {
    if (
      mediaPlayingNow?.type === "image" &&
      mediaPlayingNow?.durationTimeInMs &&
      shouldPlay
    )
      setTimeout(triggerNextMedia, mediaPlayingNow.durationTimeInMs);
  }, [mediaPlayingNow, shouldPlay, triggerNextMedia]);

  return (
    <PlayerContainer id="playerContainer">
      {isLoading || isRefetching ? (
        <Loading />
      ) : (
        <>
          <PlayerController controls={{ triggerNextMedia, changeVolume }} />
          <ImageContainer>
            <img src={mediaPlayingNow?.imageUrl} alt="" />
          </ImageContainer>
          <ReactPlayer
            height={mediaPlayingNow?.type === "image" ? "54px" : "100%"}
            width="100%"
            controls={mediaPlayingNow?.type === "image" ? false : true}
            url={mediaPlayingNow?.url}
            playing={shouldPlay}
            volume={volume}
            onReady={playMedia}
            onEnded={triggerNextMedia}
          />
        </>
      )}
    </PlayerContainer>
  );
};
