import React from "react";

export const SystemIcon: React.FC<{ size?: number }> = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="14" rx="2" fill="#E5E7EB" stroke="#64748B" />
    <rect x="8" y="20" width="8" height="2" rx="1" fill="#64748B" />
    <circle cx="12" cy="12" r="3" fill="#64748B" />
  </svg>
); 