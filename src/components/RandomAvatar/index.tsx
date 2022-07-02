import React from 'react';
import seedrandom from 'seedrandom';

import topTypeOptions from './avatar-options/topTypeOptions.json';
import accessoriesTypeOptions from './avatar-options/accessoriesTypeOptions.json';
import facialHairTypeOptions from './avatar-options/facialHairTypeOptions.json';
import facialHairColorOptions from './avatar-options/facialHairColorOptions.json';
import clotheTypeOptions from './avatar-options/clotheTypeOptions.json';
import eyeTypeOptions from './avatar-options/eyeTypeOptions.json';
import eyebrowTypeOptions from './avatar-options/eyebrowTypeOptions.json';
import mouthTypeOptions from './avatar-options/mouthTypeOptions.json';
import skinColorOptions from './avatar-options/skinColorOptions.json';
import hairColorTypes from './avatar-options/hairColorTypes.json';
import hatColorOptions from './avatar-options/hatColorOptions.json';
import clotheColorOptions from './avatar-options/clotheColorOptions.json';

export interface RandomAvatarProps {
  seed?: string;
  transparent?: boolean;
  style?: React.CSSProperties;
  alt?: string;
  size: number;
  onClick?(): any;
}

export const RandomAvatar: React.FC<RandomAvatarProps> = ({
  seed,
  transparent: isTransparent,
  size,
  style,
  alt,
  onClick,
}: RandomAvatarProps) => {
  const transparent = isTransparent ? 'Transparent' : 'Circle';

  const rng = seed ? seedrandom(seed) : seedrandom();

  const styles: React.CSSProperties = {
    height: size * 10,
    width: size * 10,
    ...style,
  };

  if (!rng) {
    return <div />;
  }

  return (
    <img
      style={styles}
      alt={alt}
      onClick={onClick}
      src={`https://avataaars.io/?avatarStyle=${transparent}&accessoriesType=${
        accessoriesTypeOptions[
          Math.floor(rng() * accessoriesTypeOptions.length)
        ]
      }&clotheColor=${
        clotheColorOptions[Math.floor(rng() * clotheColorOptions.length)]
      }&clotheType=${
        clotheTypeOptions[Math.floor(rng() * clotheTypeOptions.length)]
      }&eyeType=${
        eyeTypeOptions[Math.floor(rng() * eyeTypeOptions.length)]
      }&eyebrowType=${
        eyebrowTypeOptions[Math.floor(rng() * eyebrowTypeOptions.length)]
      }&facialHairColor=${
        facialHairColorOptions[
          Math.floor(rng() * facialHairColorOptions.length)
        ]
      }&facialHairType=${
        facialHairTypeOptions[Math.floor(rng() * facialHairTypeOptions.length)]
      }&hairColor=${
        hairColorTypes[Math.floor(rng() * hairColorTypes.length)]
      }&hatColor=${
        hatColorOptions[Math.floor(rng() * hatColorOptions.length)]
      }&mouthType=${
        mouthTypeOptions[Math.floor(rng() * mouthTypeOptions.length)]
      }&skinColor=${
        skinColorOptions[Math.floor(rng() * skinColorOptions.length)]
      }&topType=${topTypeOptions[Math.floor(rng() * topTypeOptions.length)]}`}
    />
  );
};
