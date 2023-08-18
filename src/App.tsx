import { CSSProperties, useState } from 'react';
import { SocialIcon } from 'react-custom-social-icons';
import {
  Shapes,
  SocialIconSize,
  SocialNetwork,
} from 'react-custom-social-icons/dist/esm/types';
import { ColorResult, SliderPicker } from 'react-color';

const networks: SocialNetwork[] = [
  'facebook',
  'apple',
  'behance',
  'discord',
  'dribbble',
  'github',
  'facebook-pixel',
  'gmail',
  'google-calendar',
  'google-maps',
  'google-meet',
  'google-analytics',
  'google',
  'instagram',
  'linkedin',
  'messenger',
  'patreon',
  'pinterest',
  'reddit',
  'skype',
  'snapchat',
  'soundcloud',
  'spotify',
  'telegram',
  'tiktok',
  'tinder',
  'trustpilot',
  'tumblr',
  'twitch',
  'twitter',
  'vimeo',
  'whatsapp',
  'vk',
  'youtube',
  'zoom',
];

const selectStyles: CSSProperties = {
  height: 40,
  paddingInline: 5,
  borderRadius: 0,
  color: '#000',
};

function App() {
  const [currentColor, setCurrentColor] = useState<string>('#000000');
  const [isColoredIcons, setIsColoredIcons] = useState<boolean>(false);
  const [isColorlessIcons, setIsColorlessIcons] = useState<boolean>(false);
  const [currentShape, setCurrentShape] = useState<Shapes>('rounded');
  const [size, setSize] = useState<SocialIconSize>('big');

  const onColorChange = (e: ColorResult) => {
    setCurrentColor(e.hex);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingInline: 20,
        paddingBlock: 60,
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ margin: 0 }}>react-custom-social-icons</h1>
      <h2>DEMO</h2>
      <div
        style={{
          display: 'inline-flex',
          gap: 10,
          flexWrap: 'wrap',
          maxWidth: 550,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {networks.map((el: SocialNetwork, i: number) => (
          <SocialIcon
            size={size}
            simpleIcon={isColorlessIcons}
            key={i}
            network={el}
            shape={currentShape}
            color={isColoredIcons ? currentColor : undefined}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 360,
          marginTop: 50,
        }}
      >
        <SliderPicker onChange={onColorChange} color={currentColor} />
        <select
          onChange={(e) => setCurrentShape(e.target.value as Shapes)}
          style={{ ...selectStyles, marginBlock: 20 }}
        >
          <option value='rounded'>Rounded</option>
          <option value='round'>Round</option>
          <option value='square'>Square</option>
        </select>
        <select
          onChange={(e) => setSize(e.target.value as SocialIconSize)}
          style={selectStyles}
        >
          <option value='big'>Big</option>
          <option value='medium'>Medium</option>
          <option value='small'>Small</option>
        </select>
        <label style={{ height: 40, marginBlock: 10 }}>
          <input
            style={{ marginRight: 5 }}
            type='checkbox'
            onChange={() => setIsColoredIcons((state) => !state)}
          />
          Enable icon background fill from default to specified color
        </label>
        <label style={{ height: 40 }}>
          <input
            style={{ marginRight: 5 }}
            type='checkbox'
            onChange={() => setIsColorlessIcons((state) => !state)}
          />
          Disable icon colors (useful with colored fill)
        </label>
      </div>
    </div>
  );
}

export default App;
