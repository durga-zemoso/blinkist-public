import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const BlinkistTabs: React.FC<{ tabdetails: string[]; onTabChange: any }> = (
  props
) => {
  const [value, setValue] = React.useState('Currently Reading');

  const handleChange = (event: React.SyntheticEvent, bookStatus: string) => {
    setValue(bookStatus);
    console.log(bookStatus);
    props.onTabChange(bookStatus);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#22C870'
          }
        }}
      >
        {props.tabdetails.map((name) => (
          <Tab label={name} value={name} />
        ))}
      </Tabs>
    </Box>
  );
};
export default BlinkistTabs;
