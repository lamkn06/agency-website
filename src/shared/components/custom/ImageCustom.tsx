'use client';

import Image from 'next/image';

interface Props {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  onClick?: () => void;
  unoptimized?: boolean;
  isAvatar?: boolean;
  fill?: boolean;
  style?: any;
}

export const ImageCustom = (props: Props) => {
  const { height, width, alt = '', onClick, unoptimized = false, fill, src, style } = props;

  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      unoptimized={unoptimized}
      quality={100}
      priority
      onClick={onClick}
      fill={fill}
      style={style}
    />
  );
};
