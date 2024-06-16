import { Box, Grid } from '@mui/material';

import { ItemReviewsRecipes } from '../../shared/components/ui/ItemCake/ItemReviewsRecipes';
import { SectionListCake } from '../../shared/components/ui/SectionListCake';
import { listRecipes } from './constant';

export const metadata = {
  title: 'Recipes',
  description: 'Recipes Description',
};

const Page = () => {
  return (
    <Box pt={{ xs: '75px', lg: '125px' }}>
      <SectionListCake
        title="Biscuits & Shortcakes"
        bgcolor={'#f8f5f0'}
        render={
          <Grid container spacing={{ xs: 1, md: 2, lg: 3 }} columns={12}>
            {listRecipes.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ItemReviewsRecipes item={item} />
              </Grid>
            ))}
          </Grid>
        }
      />
    </Box>
  );
};

export default Page;
