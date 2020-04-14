import React from 'react';
import renderer from 'react-test-renderer';
import AlbumImage from '../index';

it('renders AlbumImage', () => {
  const props = {
    label:
      'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/59/7e/51/597e5166-d6c8-ac39-8217-74d6cd9baaa6/19UMGIM94144.rgb.jpg/170x170bb.png',
    attributes: {
      height: '170',
    },
  };
  const tree = renderer.create(<AlbumImage {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
