import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { getPlaylist, getUrgentMedia } from "../../services";
import { TMedia, TOutletContext } from "../../types";
import { timer } from "../../utils/timer";
import { Loading } from "../Assets";
import { PlayerController } from "../PlayerController";
import { ImageContainer, PlayerContainer } from "./styled";
import { PlayerProps } from "./types";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { PlaylistConfig } from "../../context/playlistConfig";

export const Player: React.FC<PlayerProps> = () => {
  const outletContext = useContext<TOutletContext>(PlaylistConfig);
  const navigate = useNavigate();
  const [mediaList, setMediaList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mediaPlayingNow, setMediaPlayingNow] = useState<TMedia>();
  const [shouldPlay, setShouldPlay] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [shouldPlayUrgentMedia, setShouldPlayUrgentMedia] =
    useState<boolean>(false);

  const {
    isLoading,
    isRefetching,
    data: fetchedPlaylist,
    refetch: refetchPlaylist,
  } = useQuery(
    `getPlaylist`,
    () => getPlaylist(outletContext?.currentPlaylistId || ""),
    {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      enabled: !!outletContext?.currentPlaylistId,
      onSuccess: ({ data }) => {
        setMediaList(
          data.map(
            (media, index) =>
              `${process.env.REACT_APP_BACKEND_URL}${media.media_url}`
          )
        );
        setMediaPlayingNow(data[0]);
        timer(fetchUrgentMedia, 300000);
      },
    }
  );

  const { data: urgentMedia, refetch: fetchUrgentMedia } = useQuery(
    `getUrgentMedia`,
    () => getUrgentMedia(outletContext?.currentPlaylistId || ""),
    {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      enabled: !!outletContext?.currentPlaylistId,
      refetchInterval: 30000,
    }
  );

  const triggerNextMedia = useCallback(() => {
    if (shouldPlayUrgentMedia && urgentMedia?.data.media) {
      setMediaList((prevState) => [
        `${process.env.REACT_APP_BACKEND_URL}${urgentMedia.data.media.media_url}`,
        ...prevState.filter((_, index) => index !== 0),
      ]);
      setMediaPlayingNow(urgentMedia.data.media);
      setShouldPlayUrgentMedia(false);
    } else {
      setMediaList((prevState) => prevState.filter((_, index) => index !== 0));
      setMediaPlayingNow(fetchedPlaylist?.data?.[currentIndex + 1]);
      setCurrentIndex((prevState) => prevState + 1);
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
    setShouldPlayUrgentMedia(!!urgentMedia?.data.media);
  }, [urgentMedia]);

  useEffect(() => {
    if (
      mediaPlayingNow?.media_type === "image" &&
      mediaPlayingNow?.duration_time_in_ms &&
      shouldPlay
    )
      setTimeout(triggerNextMedia, mediaPlayingNow.duration_time_in_ms);
  }, [mediaPlayingNow, shouldPlay, triggerNextMedia]);

  if (!isLoading && (!mediaList.length || !outletContext.currentPlaylistId))
    return (
      <>
        <Logo></Logo>
        <Button onClick={() => navigate("/radios")} design="primary">
          Selecionar Playlist
        </Button>
      </>
    );

  return (
    <PlayerContainer id="playerContainer">
      {isLoading || isRefetching ? (
        <Loading />
      ) : (
        <>
          <PlayerController controls={{ triggerNextMedia, changeVolume }} />
          {mediaPlayingNow?.media_type === "image" ? (
            <ImageContainer>
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}${mediaPlayingNow?.media_url}`}
                alt=""
              />
            </ImageContainer>
          ) : (
            <ReactPlayer
              height={"100%"}
              width="100%"
              controls={true}
              url={mediaList}
              playing={shouldPlay}
              volume={mediaPlayingNow?.is_muted ? 0 : 0.01}
              onReady={playMedia}
              onEnded={triggerNextMedia}
            />
          )}
        </>
      )}
    </PlayerContainer>
  );
};
