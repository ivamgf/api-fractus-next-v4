import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips() {
  return (
    <Stack direction="row" spacing={1} style={{marginTop: '1em'}}>
        <Chip label="Link Disponível!" color="primary" />
    </Stack>
  );
}
