'use client';

import { Box } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

import { ImageCustom } from '../../custom/ImageCustom';

interface Props {
  srcImage: string;
  renderInformation: ReactNode;
  width: number;
  height: number;
  link: string;
}

export const LayoutItemCake = (props: Props) => {
  const { srcImage, renderInformation, width, height, link } = props;
  return (
    <Link
      href={link}
      style={{
        textDecoration: 'none',
        color: 'black',
      }}
    >
      <Box
        border={'1px solid #e4e4e4'}
        display={'flex'}
        flexDirection={'column'}
        sx={{
          ':hover': {
            scale: '1.1',
            transition: 'all .3s ease',
            color: '#da1a32',
          },
        }}
      >
        <Box bgcolor={'white'} height={'100%'} width={'100'}>
          <ImageCustom
            src={srcImage}
            alt={srcImage}
            width={width}
            height={height}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Box>

        <Box pb={'12px'} pt={'20px'} px={'22px'} bgcolor={'white'}>
          {renderInformation}
        </Box>
      </Box>
    </Link>
  );
};
