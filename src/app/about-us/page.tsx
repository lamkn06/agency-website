import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import bestTeams from '../../../public/assets/best-teams.jpg';

export default function Page() {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} md={5}>
          <Image src={bestTeams} alt="Best Teams" />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700}>
            We build, We revive
          </Typography>
          <Typography>
            Your business needs to be in safe hands at all times. We ensure you never run out of
            customers and not run at loss. We are trusted by over 500+ companies to deliver quality
            marketing campaigns using Digital marketing & Offline marketing channels.
          </Typography>
          <Button variant="contained" color="primary" sx={{ width: '200px', fontSize: '16px' }}>
            CONTACT US
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
