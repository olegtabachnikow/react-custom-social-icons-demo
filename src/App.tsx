import { ChangeEvent, useState } from 'react';
import { SocialIcon } from 'react-custom-social-iconsss';
import {
  Shapes,
  SocialIconSize,
  SocialNetwork,
} from 'react-custom-social-iconsss/dist/esm/types';

const networks: SocialNetwork[] = [
  'facebook',
  'apple',
  'behance',
  'discord',
  'dribbble',
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

function App() {
  const [currentColor, setCurrentColor] = useState<string>('#000000');
  const [isColoredIcons, setIsColoredIcons] = useState<boolean>(false);
  const [isColorlessIcons, setIsColorlessIcons] = useState<boolean>(false);
  const [currentShape, setCurrentShape] = useState<Shapes>('rounded');
  const [size, setSize] = useState<SocialIconSize>('big');

  const onColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(e.target.value);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ margin: 0 }}>react-custom-social-icons</h1>
      <h2>DEMO</h2>
      <div
        style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          maxWidth: 550,
          width: '100%',
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
        <input
          type='color'
          onChange={onColorChange}
          style={{ width: '100%', height: 40 }}
        />
        <select
          onChange={(e) => setCurrentShape(e.target.value as Shapes)}
          style={{ height: 40, paddingInline: 5, marginBlock: 10 }}
        >
          <option value='rounded'>Rounded</option>
          <option value='round'>Round</option>
          <option value='square'>Square</option>
        </select>
        <select
          onChange={(e) => setSize(e.target.value as SocialIconSize)}
          style={{ height: 40, paddingInline: 5 }}
        >
          <option value='big'>Big</option>
          <option value='medium'>Medium</option>
          <option value='small'>Small</option>
        </select>
        <label style={{ height: 40, marginBlock: 10 }}>
          <input
            type='checkbox'
            onChange={() => setIsColoredIcons((state) => !state)}
          />
          Enable icon background fill from default to specified color
        </label>
        <label style={{ height: 40 }}>
          <input
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
