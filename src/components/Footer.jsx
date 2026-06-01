import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 5vw',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      color: 'var(--soft)', fontSize: 13, flexWrap: 'wrap', gap: 12,
      position: 'relative', zIndex: 1,
    }}>
      <span>© 2025 Om Pandurang Nalage. All rights reserved.</span>
      <span>AWS Data Engineer · Pune, India</span>
    </footer>
  );
}
