import { Paper } from '@mui/material';
import React from 'react';

type Props = {
  children: any,
  sx?: React.CSSProperties;
};

const MPaper = (props: Props) => {
  return (
    <Paper
      elevation={0}
      sx={{
        ...props.sx,
        padding: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        overflowY: "auto"
      }}>
      {props.children}
    </Paper>
  );
};

export default MPaper;