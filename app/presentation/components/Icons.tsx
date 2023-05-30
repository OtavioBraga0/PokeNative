// @ts-nocheck
import React from 'react';

// TYPE
import Bug from '../assets/types/Bug.svg';
import Dark from '../assets/types/Dark.svg';
import Dragon from '../assets/types/Dragon.svg';
import Electric from '../assets/types/Electric.svg';
import Fairy from '../assets/types/Fairy.svg';
import Fighting from '../assets/types/Fighting.svg';
import Fire from '../assets/types/Fire.svg';
import Flying from '../assets/types/Flying.svg';
import Ghost from '../assets/types/Ghost.svg';
import Grass from '../assets/types/Grass.svg';
import Ground from '../assets/types/Ground.svg';
import Ice from '../assets/types/Ice.svg';
import Normal from '../assets/types/Normal.svg';
import Poison from '../assets/types/Poison.svg';
import Psychic from '../assets/types/Psychic.svg';
import Rock from '../assets/types/Rock.svg';
import Steel from '../assets/types/Steel.svg';
import Water from '../assets/types/Water.svg';

// GENERATION
import Gen1 from '../assets/generation/1.svg';
import Gen2 from '../assets/generation/2.svg';
import Gen3 from '../assets/generation/3.svg';
import Gen4 from '../assets/generation/4.svg';
import Gen5 from '../assets/generation/5.svg';
import Gen6 from '../assets/generation/6.svg';
import Gen7 from '../assets/generation/7.svg';
import Gen8 from '../assets/generation/8.svg';

// HEIGHT
import Short from '../assets/height/short.svg';
import Medium from '../assets/height/medium.svg';
import Tall from '../assets/height/tall.svg';

// WEIGHT
import Heavy from '../assets/weight/heavy.svg';
import Light from '../assets/weight/light.svg';
import NormalW from '../assets/weight/normal.svg';

type IconProps = {
  name: string;
  color: string;
  size: numbers;
};

export const TypeIcon: React.FC<IconProps> = ({name, color, size}) => {
  const importedIcons = {
    bug: <Bug fill={color} width={size} height={size} />,
    dark: <Dark fill={color} width={size} height={size} />,
    dragon: <Dragon fill={color} width={size} height={size} />,
    electric: <Electric fill={color} width={size} height={size} />,
    fairy: <Fairy fill={color} width={size} height={size} />,
    fighting: <Fighting fill={color} width={size} height={size} />,
    fire: <Fire fill={color} width={size} height={size} />,
    flying: <Flying fill={color} width={size} height={size} />,
    ghost: <Ghost fill={color} width={size} height={size} />,
    grass: <Grass fill={color} width={size} height={size} />,
    ground: <Ground fill={color} width={size} height={size} />,
    ice: <Ice fill={color} width={size} height={size} />,
    normal: <Normal fill={color} width={size} height={size} />,
    poison: <Poison fill={color} width={size} height={size} />,
    psychic: <Psychic fill={color} width={size} height={size} />,
    rock: <Rock fill={color} width={size} height={size} />,
    steel: <Steel fill={color} width={size} height={size} />,
    water: <Water fill={color} width={size} height={size} />,
  };
  return importedIcons[name];
};

export const HeightIcon: React.FC<IconProps> = ({name, size, color}) => {
  const importedIcons = {
    medium: <Medium fill={color} width={size} height={size} />,
    tall: <Tall fill={color} width={size} height={size} />,
    short: <Short fill={color} width={size} height={size} />,
  };

  return importedIcons[name];
};

export const WeightIcon: React.FC<IconProps> = ({name, size, color}) => {
  const importedIcons = {
    heavy: <Heavy fill={color} width={size} height={size} />,
    light: <Light fill={color} width={size} height={size} />,
    normal: <NormalW fill={color} width={size} height={size} />,
  };

  return importedIcons[name];
};

type GenerationIconProps = {
  generation: string;
  width: number;
  height: number;
};

export const GenerationIcon: React.FC<GenerationIconProps> = ({
  generation,
  width,
  height,
}) => {
  const importedIcons = {
    1: <Gen1 height={height} width={width} />,
    2: <Gen2 height={height} width={width} />,
    3: <Gen3 height={height} width={width} />,
    4: <Gen4 height={height} width={width} />,
    5: <Gen5 height={height} width={width} />,
    6: <Gen6 height={height} width={width} />,
    7: <Gen7 height={height} width={width} />,
    8: <Gen8 height={height} width={width} />,
  };
  return importedIcons[generation];
};
