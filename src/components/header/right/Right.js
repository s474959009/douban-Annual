import React from 'react';
import './Right.css';
import music from './p2694025_64k.mp4';

const Right = () => (
  <div className="header-right">
    <div className="header-right-music">
      <img className="header-right-music-icon"
           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAABGdBTUEAALGPC/xhBQAAAF1JREFUSA3tlcEKACAIQzX8/1+ujrLLEMXTPDWyiU8kt2LcH/mJ/8ianQ9LmL5XwWmiJqTjSGPcEQxxbzVDANSXQtpnCA7rSAP3pPq/QQNUrneognQm1QQhrRKj+Q9prwww1XTWTQAAAABJRU5ErkJggg=="
           alt="music icon"
      />
      <span className="header-right-music-title">播放背景音乐</span>
      <audio src={music}/>
    </div>
    <aside className="header-right-catalog">
      <button>
        <div className="icon-doulist">目录</div>
      </button>
    </aside>
  </div>
);

export default Right;
