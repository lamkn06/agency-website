import { Box, Typography } from '@mui/material';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import Link from 'next/link';

import { CategoryType } from '../../../../app/shop/constant';
import { ImageCustom } from '../../custom/ImageCustom';

interface Props {
  item: CategoryType;
  style: DefaultComponentProps<any>;
}

export const ItemCategory = (props: Props) => {
  const { item, style } = props;
  return (
    <Link
      href={'/recipes'}
      style={{
        color: 'black',
        textDecoration: 'none',
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        sx={{
          ':hover': {
            scale: '1.1',
            color: '#da1a32',
            transition: 'all 0.3s ease',
          },
        }}
      >
        <Box height={'100%'} width={'100%'}>
          <ImageCustom
            alt={item.name}
            src={item.srcImage}
            height={636}
            width={960}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
        <Typography {...style}>{item.name}</Typography>
      </Box>
    </Link>
  );
};
