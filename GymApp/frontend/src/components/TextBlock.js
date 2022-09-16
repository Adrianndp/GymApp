import React, {useState} from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';


export const TextBlock = () => {
    return (
        <div>
            <Typography>
                <Stack direction="row" spacing={2}>
                    <h1>Title</h1>
                    <p>content that is not important . s vj svlkjds vlhs vjsk jksd vs vkj </p>
                </Stack>
            </Typography>
        </div>
    );  
}
