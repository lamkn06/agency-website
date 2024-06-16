import StarIcon from '@mui/icons-material/Star';
import { Box, Typography } from '@mui/material';

import { RecipesType } from '../../../../app/recipes/constant';
import { LayoutItemCake } from './LayoutItemCake';

interface Props {
  item: RecipesType;
}

export const ItemReviewsRecipes = (props: Props) => {
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
            variant="h4"
            fontSize={'18px'}
            mb={'8px'}
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {item.name}
          </Typography>

          <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={'row'}
            gap={'16px'}
            height={'100%'}
          >
            <Box display={'flex'} flexDirection={'row'}>
              {[1, 2, 3, 4, 5].map((item: number) => (
                <Box display={'flex'} alignItems={'center'} key={item}>
                  <StarIcon
                    sx={{
                      fill: '#da1a32',
                      height: '18px',
                      width: '18px',
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box height={'100%'} display={'flex'} alignItems={'center'}>
              <Typography color={'black'}>{item.numberReviews} reviews</Typography>
            </Box>
          </Box>
        </Box>
      }
    />
  );
};
