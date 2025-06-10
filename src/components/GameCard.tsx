import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.id}`}>
      <Card
        height="100%"
        minHeight="380px"
        display="flex"
        flexDirection="column"
      >
        <Image
          src={getCroppedImageUrl(game.background_image)}
          height="200px"
          width="100%"
          objectFit="cover"
        />
        <CardBody flex="1" display="flex" flexDirection="column" justifyContent="space-between">
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl" isTruncated>
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
