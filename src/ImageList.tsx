import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import KiwiImage from './kiwi.png'
import Dount from './donut.png'
import Sweet from './sweetfood.png'
import Dafu from './dafu.png'
import Flower from './flower.png'

function Srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
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
      rowHeight={300}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...Srcset(item.img, 250, 200, rows, cols)}
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
        img: Flower,
        title: 'Flower',
      },
  {
    img: Dount,
    title: 'Dount',
  },

  {
    img: Dafu,
    title: 'Sweet',
  }
  ,
  {
    img: KiwiImage,
    title: 'Kiwi',
    
  },  
  {
    img: Sweet,
    title: 'Sweet',
    featured: true,
  },
];
