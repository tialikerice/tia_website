import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Fish from './fish.png'
import Cat from './cat.png'
import Boom from './boom.png'
import Hello from './hello.png'
import Duck from './duck.png'

function DigitalPicture(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 900,
        height: 700,
        transform: 'translateZ(0)',
      }}
      rowHeight={450}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...DigitalPicture(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
    {
        img: Fish,
        title: 'Fish',
        
      }, 
    {
        img: Duck,
        title: 'duck',
      },
  {
    img: Cat,
    title: 'Cat',
  }
  ,   {
    img: Hello,
    title: 'Hello',
  }
  , 
  {
    img: Boom,
    title: 'Boom',
    featured: true,
  },
];
