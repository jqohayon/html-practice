import React from 'react';
import { FaKeyboard } from 'react-icons/fa';

// Define the keyboard data structure
interface Keyboard {
  id: number;
  make: string;
  model: string;
  color: string;
  switch1: string;
  switch2: string;
  size: string;
  link: string;
  rgb: string;
}

const KEYBOARDS: Keyboard[] = [
  { id: 1, make: 'Cerakey', model: 'Nadapanda65', color: 'Green/Black/White', switch1: 'Linear', switch2: 'Celeste Blue', size: '65', link: 'https://www.cerakey.com/products/nada-65-panda-keyboard?srsltid=AfmBOorlYYZtQQaFo5_nPrSgZwU0B7QA40FvzBw3JzqMcCGCj_Lq_Ksc', rgb: 'Yes' },
  { id: 2, make: 'Cerakey', model: 'Nadapanda65', color: 'Red/White Heart', switch1: 'Linear', switch2: 'Celeste Blue', size: '65', link: '', rgb: 'Yes' },
  { id: 3, make: 'HHKB', model: 'Classic', color: 'Grey/Beige', switch1: 'Electrostatic', switch2: 'Topre', size: '60', link: '', rgb: 'No' },
  { id: 4, make: 'Leopold', model: 'FC750R', color: 'Blue', switch1: 'Linear', switch2: 'MX Red', size: '68', link: '', rgb: 'No' },
  { id: 5, make: 'Lofree', model: 'Flow84', color: 'White', switch1: 'Ghost', switch2: 'White', size: '84', link: '', rgb: 'Backlight' },
  { id: 6, make: 'Luminkey', model: 'Magger68', color: 'Orange', switch1: 'Magnetic', switch2: 'White', size: '68', link: '', rgb: 'Yes' },
  { id: 7, make: 'Melgeek', model: 'Made68', color: 'Purple', switch1: 'Linear', switch2: 'Magnetic', size: '68', link: '', rgb: 'Yes' },
  { id: 8, make: 'Melgeek', model: 'Made68 Pro', color: 'Pink', switch1: 'Linear', switch2: 'Magnetic', size: '68', link: '', rgb: 'Yes' },
  { id: 9, make: 'Vortex', model: 'Hellcat', color: 'Purple', switch1: 'Linear', switch2: 'G Pro Silver', size: '65', link: '', rgb: 'Yes' },
  { id: 10, make: 'Vortex', model: 'Pok3r 2', color: 'Black', switch1: 'Linear/Tactile', switch2: 'MX Blue', size: '60', link: '', rgb: 'Yes' },
  { id: 11, make: 'Vortex', model: 'Pok3r 3', color: 'White', switch1: 'Linear/Tactile', switch2: 'MX Red', size: '60', link: '', rgb: 'Yes' }
];

const Keyboards: React.FC = () => {
  return (
    <div className="keyboards-fullpage">
      <div className="header-area">
        <h2>Keyboards</h2>
        <FaKeyboard 
          style={{ 
            fontSize: '2rem',
            color: '#6a1b9a',
            margin: '10px 0'
          }} 
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          margin: '8px 0 20px'
        }}>Clickity Clackety</p>
      </div>

      <table className="keyboards-table">
        <thead>
          <tr>
            <th style={{ width: '8%' }}>Make</th>
            <th style={{ width: '16%' }}>Model</th>
            <th style={{ width: '16%' }}>Color</th>
            <th style={{ width: '14%' }}>Switch Type</th>
            <th style={{ width: '14%' }}>Switch Model</th>
            <th style={{ width: '8%' }}>Size</th>
            <th style={{ width: '12%' }}>Link</th>
            <th style={{ width: '8%' }}>RGB</th>
          </tr>
        </thead>
        <tbody>
          {KEYBOARDS.map((keyboard: Keyboard) => (
            <tr key={keyboard.id}>
              <td>{keyboard.make}</td>
              <td>{keyboard.model}</td>
              <td>{keyboard.color}</td>
              <td>{keyboard.switch1}</td>
              <td>{keyboard.switch2}</td>
              <td style={{ textAlign: 'center' }}>{keyboard.size}</td>
              <td style={{ textAlign: 'center' }}>
                {keyboard.link ? (
                  <a href={keyboard.link} target="_blank" rel="noopener noreferrer" className="visit-link">
                    Visit
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td style={{ textAlign: 'center' }}>{keyboard.rgb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Keyboards; 