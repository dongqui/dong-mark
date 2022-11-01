/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import { TextInput } from 'ui';

import type { MetaInfo } from '../types';

function Popup() {
  const [res, setRes] = useState<MetaInfo>();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (typeof tabs[0].id === 'number') {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, (value: MetaInfo) => {
          setRes(value);
        });
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-green-500">hello</h1>
      <p>{res?.url}</p>
      <p>{res?.title}</p>
      <p>{res?.description}</p>
      <img src={res?.image} />

      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
    </div>
  );
}

export default Popup;
