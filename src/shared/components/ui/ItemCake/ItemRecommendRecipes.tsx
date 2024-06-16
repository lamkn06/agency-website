'use client';

import { Box, Typography } from '@mui/material';

import { RecipesType } from '../../../../app/recipes/constant';
import { LayoutItemCake } from './LayoutItemCake';

interface Props {
  item: RecipesType;
}

export const ItemRecommendRecipes = (props: Props) => {
  const { item } = props;
  return (
    <LayoutItemCake
      height={218}
      width={322}
      srcImage={item.srcImage}
      link={`/recipes/${item.slug}`}
      renderInformation={
        <Box display={'flex'} flexDirection={'column'}>
          <Typography
            fontSize={'12px'}
            textAlign={'center'}
            textTransform={'uppercase'}
            letterSpacing={'1px'}
            marginBottom={'10px'}
            sx={{
              '&::after': {
                content: '""',
                background: '#da1a32',
                width: '8px',
                height: '1px',
                position: 'relative',
                display: 'inline-block',
                top: '-4px',
                marginLeft: '3px',
              },
              '&::before': {
                content: '""',
                background: '#da1a32',
                width: '8px',
                height: '1px',
                position: 'relative',
                display: 'inline-block',
                top: '-4px',
                marginRight: '3px',
              },
            }}
          >
            Biscuits & shortcake
          </Typography>
          <Typography
            textAlign={'center'}
            variant="h4"
            fontSize={'16px'}
            fontWeight={500}
            color={'black'}
            mb={'8px'}
            height={'40px'}
          >
            {item.name}
          </Typography>
        </Box>
      }
    />
  );
};
