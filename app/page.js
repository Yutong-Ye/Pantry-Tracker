import { Box, Stack, Typography } from "@mui/material";

const items = ['tomato', 'potato', 'onion', 'garlic', 'ginger', 'apple', 'egg', 'banana'];

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display={"flex"}
      justifyContent={"center"}
      fexDirection={'column'}
      alignItems={"center"}
      
    >
    <Box 
      width="800px" 
      height ="100px" 
      bgcolor={'#ADD8E6'} 
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      border={'1px solid #333'}>

      <Typography variant={'h2'} color={'#333'} TextAlign={'center'}>
        Pantry Items
      </Typography>
    </Box>
      <Stack
        width="800px"
        height="300px"
        spacing={2}
        overflow={"auto"}
      >
        {items.map((item) => (
          <Box
            key={item}
            width="100%"
            height="300px"
            display="flex"
            justifyContent="center"
            flexDirection={'column'}
            alignItems="center"
            bgcolor="#f0f0f0"
          >
            <Typography
              variant="h3"
              color="#333"
              textAlign="center"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
