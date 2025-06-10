import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
}

const useGameDetail = (id: number) => {
  const [game, setGame] = useState<GameDetail | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient.get(`/games/${id}`)
      .then((res) => {
        setGame(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return { game, isLoading, error };
};

export default useGameDetail;