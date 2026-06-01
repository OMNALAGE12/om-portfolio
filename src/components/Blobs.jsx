import React from 'react';

const blobStyle = (extra) => ({
  position: 'fixed',
  borderRadius: '50%',
  filter: 'blur(100px)',
  pointerEvents: 'none',
  zIndex: 0,
  animation: 'drift 18s ease-in-out infinite alternate',
  ...extra,
});

export default function Blobs() {
  return (
    <>
      <div style={blobStyle({ width:700, height:700, top:-200, left:-200, background:'rgba(124,109,255,0.16)', animationDuration:'18s' })} />
      <div style={blobStyle({ width:500, height:500, top:'40%', right:-180, background:'rgba(0,212,255,0.13)', animationDuration:'14s', animationDirection:'alternate-reverse' })} />
      <div style={blobStyle({ width:400, height:400, bottom:-100, left:'30%', background:'rgba(139,252,62,0.10)', animationDuration:'20s' })} />
    </>
  );
}
