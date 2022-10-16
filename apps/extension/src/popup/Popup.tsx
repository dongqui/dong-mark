import { useEffect, useState } from 'react';

import { Input } from 'ui';

function Popup() {
  const [res, setRes] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (typeof tabs[0].id === 'number') {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, (value: string) => {
          setRes(value);
        });
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-green-500">hello</h1>
      <p>{res}</p>
      <Input />
      hi
    </div>
  );
}

export default Popup;
