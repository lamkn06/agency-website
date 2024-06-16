import { Box, Link, Typography } from '@mui/material';

import { PageWrapper } from '../shared/components/ui/PageWrapper';

export default function NotFound() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        fontFamily: 'Arial',
        textAlign: 'center',
      }}
    >
      <PageWrapper>
        <Typography variant="h1" component="div" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          We're sorry, but the page you were looking for doesn't exist.
        </Typography>
        <Typography variant="body1">
          <Link href="/">Go back to the homepage</Link>
        </Typography>
      </PageWrapper>
    </Box>
  );
}
