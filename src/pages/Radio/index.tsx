import React, { useContext } from "react";
import { useQuery } from "react-query";
import {
  MusicGenresList,
  PlaylistItem,
  PlaylistList,
  RadioHeader,
} from "./style";
import { Button, Loading } from "../../components";
import { useOutletContext, useParams } from "react-router-dom";
import { getRadioDetails } from "../../services";
import { TOutletContext } from "../../types";
import { PlaylistConfig } from "../../context/playlistConfig";

export const Radio: React.FC = () => {
  const outletContext = useContext<TOutletContext>(PlaylistConfig);
  const { radioId } = useParams();

  const {
    data: radioData,
    isLoading,
    isError,
  } = useQuery("getRadioDetail", () => getRadioDetails(radioId || ""));

  const handlePlayClick = (playlistId: string) => {
    outletContext.setCurrentPlaylistId?.(playlistId);
  };

  if (!radioId || isError) return <>error, please try again later</>;

  if (isLoading) return <Loading />;

  return (
    <>
      <RadioHeader>
        <img src={radioData?.data.image} alt="" />
        <h2>{radioData?.data.name}</h2>
      </RadioHeader>
      {radioData?.data.playlists.map((playlist) => (
        <PlaylistList key={playlist.url}>
          <PlaylistItem>
            <div>
              <h3>{playlist.nome}</h3>
              <p>{playlist.descricao}</p>
              <MusicGenresList>
                {playlist.music_styles?.map((style) => (
                  <li key={style}>{style}</li>
                ))}
              </MusicGenresList>
            </div>
            <Button
              onClick={() => handlePlayClick(playlist.url.split("/")[5])}
              design="primary"
            >
              Tocar
            </Button>
          </PlaylistItem>
        </PlaylistList>
      ))}
    </>
  );
};
