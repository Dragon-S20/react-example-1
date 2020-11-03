import React, {useState, useEffect } from 'react'
import { Heading, Button, Input, Stack, HStack, VStack, Box } from '@chakra-ui/core'
import axios from 'axios'

function FetchTab() {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('redux')
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
    
 
      setData(result.data);
    };
 
    fetchData();
  }, [url]);
  
  return (
    <>
    <VStack spacing={30}>
    <Heading mb={50}>Fetch content with useEffect hook</Heading>
    <HStack>
    <Stack spacing={3}>
  <Input type="text" variant="flushed" placeholder="Flushed" value={query}
        onChange={event => setQuery(event.target.value)} />
  </Stack>
    <Button
      colorScheme="purple"
      color="red.400"
      onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
      }
    >
      Search
    </Button>
    </HStack>
    <Box spacing={40}>
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
</Box>
    </VStack>
    </>
  );
      }
export default FetchTab;
