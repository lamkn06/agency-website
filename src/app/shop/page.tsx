import { Box, Grid } from '@mui/material';

import { ItemCategory } from '../../shared/components/ui/ItemCategory';
import { SectionListCake } from '../../shared/components/ui/SectionListCake';
import { allCategoryType, CategoryType } from './constant';

export const metadata = {
  title: 'Shop',
  description: 'Shop description',
};

const Page = () => {
  return (
    <Box pt={{ sm: '75px', lg: '125px' }}>
      <SectionListCake
        title="All recipe categories"
        bgcolor={'#f8f5f0'}
        render={
          <Grid container spacing={3} columns={12}>
            {allCategoryType.map((category: CategoryType, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <ItemCategory
                  item={category}
                  style={{
                    textAlign: 'left',
                    fontWeight: 500,
                    fontSize: '20px',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        }
      />
    </Box>
  );
};

export default Page;
