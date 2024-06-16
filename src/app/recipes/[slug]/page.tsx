import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PinterestIcon from '@mui/icons-material/Pinterest';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ItemRecommendRecipes } from '../../../shared/components/ui/ItemCake/ItemRecommendRecipes';
import { PageWrapper } from '../../../shared/components/ui/PageWrapper';
import { SectionListCake } from '../../../shared/components/ui/SectionListCake';
import { listRecipes } from '../constant';
import { dataRecipesDetailType } from './constant';
import { ShowImage } from './ShowImage';
import { Metadata } from 'next';

export async function generateMetadata(props: Props): Promise<Metadata> {
  const {
    params: { slug },
  } = props;

  return {
    description: `Recipes ${slug} description`,
    title: `Recipes ${slug}`,
  };
}

interface Props {
  params: { slug: string };
}

const Page = (props: Props) => {
  const { params } = props;
  const slug = params.slug;

  const recipesDetail = dataRecipesDetailType.find((item) => item.slug === slug);

  if (!recipesDetail) {
    notFound();
  }

  return (
    <>
      <Box bgcolor={'white'} pt={{ xs: '75px', lg: '125px' }}>
        <PageWrapper>
          <Box
            py={'50px'}
            display={'flex'}
            gap={'40px'}
            flexDirection={{ xs: 'column-reverse', lg: 'row' }}
            justifyContent={'space-between'}
          >
            <Box
              pl={{ xs: '0px', lg: '90px' }}
              display={'flex'}
              flexDirection={'column'}
              width={'100%'}
            >
              <Box mb={'20px'} alignItems={'center'} display={'flex'} gap={'4px'}>
                <Link
                  href={'/recipes'}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={'12px'}
                    textTransform={'uppercase'}
                    letterSpacing={'1px'}
                    sx={{
                      ':hover': {
                        color: '#da1a32',
                        transition: 'all .3s ease',
                      },
                    }}
                  >
                    recipes
                  </Typography>
                </Link>
                <Box display={'flex'} alignItems={'center'}>
                  <KeyboardArrowRightIcon
                    fontSize="small"
                    sx={{
                      color: '#da1a32',
                    }}
                  />
                </Box>
                <Typography
                  fontWeight={500}
                  fontSize={'12px'}
                  textTransform={'uppercase'}
                  letterSpacing={'1px'}
                >
                  {recipesDetail.name}
                </Typography>
              </Box>
              <Box mb={'20px'}>
                <Typography variant="h1" fontSize={'46px'} fontWeight={500}>
                  {recipesDetail.name}
                </Typography>
              </Box>
              <Box mb={'20px'}>
                <Typography textTransform={'uppercase'} fontSize={'12px'}>
                  RECIPE BY{' '}
                  <span
                    style={{
                      textDecoration: 'underline',
                    }}
                  >
                    {recipesDetail.author}
                  </span>
                </Typography>
              </Box>
              <Box
                mb={'30px'}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
              >
                <Box width={'100%'} display={'flex'} flexDirection={'row'} gap={'10px'}>
                  <Box
                    position={'relative'}
                    border={'1px solid black'}
                    borderRadius={9999}
                    width={36}
                    height={36}
                  >
                    <Box
                      position={'absolute'}
                      left={'50%'}
                      top={'50%'}
                      sx={{
                        translate: '-50% -50%',
                      }}
                      display={'flex'}
                    >
                      <ThumbUpOffAltIcon />
                    </Box>
                  </Box>

                  <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
                    <Typography textTransform={'uppercase'} fontSize={'12px'} letterSpacing={'1px'}>
                      {recipesDetail.numberReviews} reviews
                    </Typography>

                    <Box display={'flex'} flexDirection={'row'} gap={'1px'}>
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
                  </Box>
                </Box>
                <Box width={'100%'} display={'flex'} flexDirection={'column'} gap="4px">
                  <Typography textTransform={'uppercase'} fontSize={'12px'} letterSpacing={'1px'}>
                    Share
                  </Typography>

                  <Box display={'flex'} flexDirection={'row'} gap={'4px'}>
                    <FacebookIcon fontSize="small" />
                    <MailOutlineIcon fontSize="small" />
                    <PinterestIcon fontSize="small" />
                    <LinkedInIcon fontSize="small" />
                  </Box>
                </Box>
              </Box>
              <Box mb={'30px'}>
                <Typography fontWeight={500} fontSize={'14px'} letterSpacing={'1px'}>
                  {recipesDetail.description}
                </Typography>
              </Box>
              <Box
                mb={'35px'}
                pb="25px"
                borderBottom={'1px solid #e4e4e4'}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
              >
                <Box display={'flex'} flexDirection={'row'} gap={'8px'} width={'100%'}>
                  <Box>
                    <AccessTimeIcon fontSize="large" />
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography fontSize={'12px'} letterSpacing={'1px'}>
                      Prep
                    </Typography>
                    <Typography fontSize={'16px'} fontWeight={600}>
                      {recipesDetail.prep}
                    </Typography>
                  </Box>
                </Box>
                <Box width={'100%'} display={'flex'} flexDirection={'column'}>
                  <Typography fontSize={'12px'} letterSpacing={'1px'}>
                    Bake
                  </Typography>
                  <Typography fontSize={'16px'} fontWeight={600}>
                    {recipesDetail.bake}
                  </Typography>
                </Box>
                <Box width={'100%'} display={'flex'} flexDirection={'column'}>
                  <Typography fontSize={'12px'} letterSpacing={'1px'}>
                    Total
                  </Typography>
                  <Typography fontSize={'16px'} fontWeight={600}>
                    {recipesDetail.total}
                  </Typography>
                </Box>
              </Box>
              <Box display={'flex'} flexDirection={'row'}>
                <Box width={'100%'} display={'flex'} flexDirection={'row'} gap={'8px'}>
                  <Box>
                    <BlurCircularIcon fontSize="large" />
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} gap={'2px'}>
                    <Typography fontSize={'12px'} letterSpacing={'1px'}>
                      Yield
                    </Typography>
                    <Typography fontSize={'16px'} fontWeight={600}>
                      12 biscuits
                    </Typography>
                  </Box>
                </Box>
                {/* <Box width={'100%'} display={'flex'} flexDirection={'row'}>
                  2
                </Box> */}
              </Box>
            </Box>

            {recipesDetail && recipesDetail.images.length > 0 && (
              <ShowImage recipesDetail={recipesDetail} />
            )}
          </Box>
        </PageWrapper>
      </Box>

      <SectionListCake
        title="Recommended Recipes"
        bgcolor={'#f8f5f0'}
        render={
          <Grid container spacing={3} columns={12}>
            {listRecipes.slice(4, 8).map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.slug}>
                <ItemRecommendRecipes item={item} />
              </Grid>
            ))}
          </Grid>
        }
      />
    </>
  );
};

export default Page;
