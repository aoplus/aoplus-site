
'use client';

import { useState, useEffect } from 'react';

type Geolocation = {
  countryCode: string | null;
  loading: boolean;
};

const ALLOWED_COUNTRIES = ['US', 'GB', 'AE', 'IN'];

export function useGeolocation(): Geolocation {
  const [location, setLocation] = useState<Geolocation>({
    countryCode: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch('https://ipapi.co/country_code');
        if (!response.ok) {
          throw new Error('Failed to fetch location');
        }
        const countryCode = await response.text();
        setLocation({
          countryCode: ALLOWED_COUNTRIES.includes(countryCode) ? countryCode : 'IN',
          loading: false,
        });
      } catch (error) {
        console.error('Geolocation fetch error:', error);
        // Default to India on error
        setLocation({ countryCode: 'IN', loading: false });
      }
    }

    fetchLocation();
  }, []);

  return location;
}
