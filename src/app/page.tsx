// app/profile/page.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


type Data = {
  profile: {
    username: string;
    name: string;
    bio: string;
    avatar_url: string;
  };
  social_links: Array<{
    platform: string;
    url: string;
    icon_url: string;
  }>;
  links: Array<{
    title: string;
    url: string;
    thumbnail_url: string;
  }>;
  appearance: {
    background_color: string;
    button_color: string;
    font_color: string;
    font_style: string;
    button_shape: string;
  };
  analytics: {
    clicks: number;
    impressions: number;
  };
};

const ProfilePage = async () => {
  const filePath = path.join(process.cwd(), 'src/app/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data: Data = JSON.parse(jsonData);

  const { profile, social_links, links, appearance } = data;

  return (
    <div className="flex flex-col items-center min-h-screen" style={{ backgroundColor: appearance.background_color, color: appearance.font_color, fontFamily: appearance.font_style }}>
      {/* Profile Header */}
      <section className="flex flex-col items-center text-center py-8">
        <img src={profile.avatar_url} alt={`${profile.name}'s avatar`} className="w-24 h-24 rounded-full mb-4" />
        <h1 className="text-2xl font-semibold">{profile.name}</h1>
        <p className="text-sm mt-2">{profile.bio}</p>
      </section>

      {/* Social Links */}
      <section className="flex gap-4 mt-4 mb-8">
        {social_links.map((link) => (
          <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon_url} alt={`${link.platform} icon`} className="w-8 h-8" />
          </a>
        ))}
      </section>

      <section className="flex gap-4 mt-4 mb-8">
        {social_links.map((link) => {
          const iconName = link.platform.toLowerCase() as IconName;
          const iconDefinition = findIconDefinition({ prefix: 'fab' as IconPrefix, iconName });
          
          return (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
              {iconDefinition ? (
                <FontAwesomeIcon icon={iconDefinition} className="w-8 h-8" />
              ) : (
                <img src={link.icon_url} alt={`${link.platform} icon`} className="w-8 h-8" />
              )}
            </a>
          );
        })}
      </section>

      {/* Linktree-style Links */}
      <section className="w-full max-w-md flex flex-col gap-4 px-4">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-4 rounded-lg shadow-md transition-transform hover:scale-105`}
            style={{
              backgroundColor: appearance.button_color,
              color: appearance.background_color,
              borderRadius: appearance.button_shape === 'rounded' ? '0.75rem' : '0px',
            }}
          >
            <img src={link.thumbnail_url} alt={`${link.title} thumbnail`} className="w-12 h-12 mr-4 rounded-md" />
            <span className="font-medium text-lg">{link.title}</span>
          </a>
        ))}
      </section>

      {/* Linktree-style Links */}
      <section className="w-full max-w-md flex flex-col gap-4 px-4">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-4 rounded-lg shadow-md transition-transform hover:scale-105`}
            style={{
              backgroundColor: appearance.button_color,
              color: appearance.background_color,
              borderRadius: appearance.button_shape === 'rounded' ? '0.75rem' : '0px',
            }}
          >
            <img src={link.thumbnail_url} alt={`${link.title} thumbnail`} className="w-12 h-12 mr-4 rounded-md" />
            <span className="font-medium text-lg">{link.title}</span>
          </a>
        ))}
      </section>

      {/* Footer or Analytics */}
      <footer className="mt-8 text-center text-xs text-gray-500">
        <p>Clicks: {data.analytics.clicks} | Impressions: {data.analytics.impressions}</p>
      </footer>
    </div>
  );
};

export default ProfilePage;
