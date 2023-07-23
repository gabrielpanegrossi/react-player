import styled from "styled-components";

export const RadioHeader = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  gap: 8px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const PlaylistList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0 0;
  gap: 12px;
`;

export const PlaylistItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  h3 {
    font-size: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const MusicGenresList = styled.ul`
  display: flex;
  width: 100%;
  gap: 12px;

  > li {
    padding: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 12px;
  }
`;
