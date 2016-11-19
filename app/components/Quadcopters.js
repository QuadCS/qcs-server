import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/DJI_Phantom_4_in_Flight_March_2016.jpg',
    title: 'Phantom 4',
    author: 'jill111',
  },
  {
    img: 'http://aeroquad.com/attachment.php?attachmentid=7091&d=1375885270',
    title: 'Cyclone 3',
    author: 'pashminu',
  },
  {
    img: 'http://skyviewproductions.com/i/quad_copter_IMG_8576.jpg',
    title: 'Flight Star 2000',
    author: 'Danson67',
  },
  {
    img: 'http://i.ebayimg.com/00/s/NTc3WDgzMQ==/z/xZgAAOSwT6pVuen2/$_32.JPG?set_id=880000500F',
    title: 'CopterQuad-2',
    author: 'fancycrave1',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Quadcopters = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Fleet</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Quadcopters;
