'use client';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { ImageCustom } from '../../../shared/components/custom/ImageCustom';
import { RecipesDetailType } from './constant';

interface Props {
  recipesDetail: RecipesDetailType;
}

export const ShowImage = (props: Props) => {
  const { recipesDetail } = props;

  const [mainImage, setMainImage] = useState<string>('');

  useEffect(() => {
    if (!recipesDetail) return;
    setMainImage(recipesDetail.images[0]);
  }, []);

  return (
    <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={'20px'}>
      {!!mainImage && (
        <>
          <Box height={'100%'} width={'100%'}>
            <ImageCustom
              src={mainImage || ''}
              alt={recipesDetail.name}
              width={960}
              height={636}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Box display={'flex'} flexDirection={'row'} gap={'8px'}>
            {recipesDetail.images.map((image, index) => (
              <Box
                key={index}
                height={'100%'}
                width={'100%'}
                maxWidth={'210px'}
                maxHeight={'139px'}
                onClick={() => {
                  setMainImage(image);
                }}
                sx={{
                  cursor: 'pointer',
                  ':hover': {
                    opacity: '0.7',
                    transition: 'all .3s ease',
                  },
                }}
              >
                <ImageCustom
                  src={image}
                  alt={recipesDetail.name}
                  width={139}
                  height={139}
                  style={{
                    width: '100%',
                    height: '100%',
                    outline: image === mainImage ? '1px solid #da1a32' : '',
                  }}
                />
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};
